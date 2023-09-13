import React from 'react';
import {TheoNavigationContainer} from '~/navigation/theoNavigationContainer';
import {AppNavigator} from '~/navigation/appNavigator';
import Toast from 'react-native-toast-message';
import {ToastConfig} from '~/utils/toastConfig';

export const App: React.FC = () => {
  return (
    <TheoNavigationContainer>
      <AppNavigator />
      <Toast config={ToastConfig} />
    </TheoNavigationContainer>
  );
};
