import React, { useRef, useEffect, FunctionComponent } from 'react';
import {
  View,
  StyleSheet,
  Animated,
  ViewStyle,
  TouchableWithoutFeedback,
  PanResponder,
  PanResponderInstance,
  PanResponderGestureState,
  useWindowDimensions,
} from 'react-native';

import { ToastOptions } from '../../hooks/useToast/types';
import AppText from '../AppText';
import { ToastColors, ToastIcons, ToastType } from './types';

export interface ToastProps extends ToastOptions {
  id: string;
  onDestroy(): void;
  message: string | JSX.Element;
  open: boolean;
  onHide(): void;
}

const Toast: FunctionComponent<ToastProps> = ({
  id,
  onDestroy,
  customIcon,
  type = ToastType.DEFAULT,
  message,
  duration = 3000,
  style,
  textType,
  textStyle,
  animationDuration = 250,
  animationType = 'slide-in',
  placement,
  swipeEnabled,
  onPress,
  open,
}) => {
  const containerRef = useRef<View>(null);
  const animation = useRef(new Animated.Value(0)).current;
  const panResponderRef = useRef<PanResponderInstance>();
  const panResponderAnimRef = useRef<Animated.ValueXY>();
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout>>();
  const dims = useWindowDimensions();

  const { backgroundColor, textColor, borderColor } = ToastColors[type];
  const icon = customIcon || ToastIcons[type];

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      useNativeDriver: true,
      duration: animationDuration,
    }).start();

    if (duration !== 0) {
      closeTimeoutRef.current = setTimeout(() => {
        handleClose();
      }, duration);
    }

    return () => {
      closeTimeoutRef.current && clearTimeout(closeTimeoutRef.current);
    };
  }, [duration]);

  // Handles hide & hideAll
  useEffect(() => {
    if (!open) {
      // Unregister close timeout
      closeTimeoutRef.current && clearTimeout(closeTimeoutRef.current);

      // Close animation them remove from stack.
      handleClose();
    }
  }, [open]);

  const handleClose = () => {
    Animated.timing(animation, {
      toValue: 0,
      useNativeDriver: true,
      duration: animationDuration,
    }).start(() => onDestroy());
  };

  const panReleaseToLeft = (gestureState: PanResponderGestureState) => {
    Animated.timing(getPanResponderAnim(), {
      toValue: { x: (-dims.width / 10) * 9, y: gestureState.dy },
      useNativeDriver: true,
      duration: 250,
    }).start(() => onDestroy());
  };

  const panReleaseToRight = (gestureState: PanResponderGestureState) => {
    Animated.timing(getPanResponderAnim(), {
      toValue: { x: (dims.width / 10) * 9, y: gestureState.dy },
      useNativeDriver: true,
      duration: 250,
    }).start(() => onDestroy());
  };

  const getPanResponder = () => {
    if (panResponderRef.current) {
      return panResponderRef.current;
    }
    panResponderRef.current = PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) => {
        // return true if user is swiping, return false if it's a single click
        return !(gestureState.dx === 0 && gestureState.dy === 0);
      },
      onPanResponderMove: (_, gestureState) => {
        getPanResponderAnim()?.setValue({
          x: gestureState.dx,
          y: gestureState.dy,
        });
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dx > 50) {
          panReleaseToRight(gestureState);
        } else if (gestureState.dx < -50) {
          panReleaseToLeft(gestureState);
        } else {
          Animated.spring(getPanResponderAnim(), {
            toValue: { x: 0, y: 0 },
            useNativeDriver: true,
          }).start();
        }
      },
    });
    return panResponderRef.current;
  };

  const getPanResponderAnim = () => {
    if (panResponderAnimRef.current) {
      return panResponderAnimRef.current;
    }
    panResponderAnimRef.current = new Animated.ValueXY({ x: 0, y: 0 });
    return panResponderAnimRef.current;
  };

  const animationStyle: Animated.WithAnimatedObject<ViewStyle> = {
    opacity: animation,
    transform: [
      {
        translateY: animation.interpolate({
          inputRange: [0, 1],
          outputRange: placement === 'bottom' ? [20, 0] : [-20, 0], // 0 : 150, 0.5 : 75, 1 : 0
        }),
      },
    ],
  };

  if (swipeEnabled) {
    animationStyle.transform?.push(
      getPanResponderAnim().getTranslateTransform()[0],
    );
  }

  if (animationType === 'zoom-in') {
    animationStyle.transform?.push({
      scale: animation.interpolate({
        inputRange: [0, 1],
        outputRange: [0.7, 1],
      }),
    });
  }

  return (
    <Animated.View
      ref={containerRef}
      {...(swipeEnabled ? getPanResponder().panHandlers : null)}
      style={[styles.container, animationStyle]}
    >
      <TouchableWithoutFeedback
        disabled={!onPress}
        onPress={() => onPress && onPress(id)}
      >
        <View
          style={[
            styles.toastContainer,
            { maxWidth: (dims.width / 10) * 9, backgroundColor, borderColor },
            !!borderColor && styles.toastContainerBorder,
            style,
          ]}
        >
          {icon && <View style={[styles.iconContainer]}>{icon}</View>}
          {React.isValidElement(message) ? (
            message
          ) : (
            <AppText type={textType} style={[{ color: textColor }, textStyle]}>
              {message}
            </AppText>
          )}
        </View>
      </TouchableWithoutFeedback>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },
  toastContainer: {
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 5,
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
  },
  toastContainerBorder: {
    borderWidth: 1.5,
  },
  iconContainer: {
    marginRight: 5,
  },
});

export default Toast;
