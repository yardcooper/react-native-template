import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { FunctionComponent } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { AppStackParamList } from '../AppNavigator';
import { ToastType } from '../components/AppToast/types';
import useToast from '../hooks/useToast';

type Navigation = StackNavigationProp<AppStackParamList, 'SampleOne'>;

const SampleScreenOne: FunctionComponent = () => {
  const navigation = useNavigation<Navigation>();
  const toast = useToast();

  const showToast = () => {
    toast.show('Here is an example toast', { type: ToastType.DEFAULT });
  };

  return (
    <View style={styles.container}>
      <Text>Sample Screen 1</Text>
      <Pressable onPress={() => navigation.navigate('SampleTwo')}>
        <Text>go to 2</Text>
      </Pressable>

      <Pressable onPress={showToast}>
        <Text>Test Toast</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});

export default SampleScreenOne;
