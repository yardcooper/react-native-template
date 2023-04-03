import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, TextProps } from 'react-native';

export type AppTextType = 'BodyLarge' | 'BodyMedium' | 'BodySmall';

interface Props extends TextProps {
  type?: AppTextType;
}

const AppText: FunctionComponent<Props> = ({
  type,
  style,
  children,
  ...props
}) => {
  const textStyle = type ? textStyles[type] : textStyles.BodyMedium;

  return (
    <Text style={[textStyles.defaultStyle, textStyle, style]} {...props}>
      {children}
    </Text>
  );
};

export default AppText;

export const textStyles = StyleSheet.create({
  BodyLarge: {
    fontSize: 19,
    lineHeight: 28,
    letterSpacing: 0.38, // 2%
  },
  BodyMedium: {
    fontSize: 17,
    lineHeight: 24,
    letterSpacing: 0.34, // 2%
  },
  BodySmall: {
    fontSize: 14,
    lineHeight: 20,
    letterSpacing: 0.28, // 2% 
  },
  defaultStyle: {
    color: 'black',
  },
});
