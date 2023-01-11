import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { AppStackParamList } from '../AppNavigator';
import { ToastType } from '../components/AppToast/types';
import useToast from '../hooks/useToast';
import AppText from '../components/AppText';

type Navigation = StackNavigationProp<AppStackParamList, 'SampleOne'>;

const SampleScreenOne: FunctionComponent = () => {
  const navigation = useNavigation<Navigation>();
  const toast = useToast();

  const showToast = () => {
    toast.show('Here is an example toast', { type: ToastType.DEFAULT });
  };

  return (
    <View style={styles.container}>
      <AppText>
        <FormattedMessage
          defaultMessage="Sample Screen 1"
          description="SampleScreenOne - screen title"
        />
      </AppText>
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
