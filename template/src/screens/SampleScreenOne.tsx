import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { FunctionComponent } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { AppStackParamList } from '../AppNavigator';
import { useToast } from '../components/AppToast';
import { ToastType } from '../components/AppToast/variables';

type Navigation = StackNavigationProp<AppStackParamList, 'SampleOne'>;

const SampleScreenOne: FunctionComponent = () => {
  const navigation = useNavigation<Navigation>();
  const toast = useToast();

  return (
    <View style={styles.container}>
      <Text>Sample Screen 1</Text>
      <Pressable onPress={() => navigation.navigate('SampleTwo')}>
        <Text>go to 2</Text>
      </Pressable>

      <Pressable
        onPress={() => toast.show('TEST', { type: ToastType.DEFAULT })}
      >
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
