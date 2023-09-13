import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {useTheme} from '~/hooks/useTheme';
import {OnboardScreen} from '~/screens/onboard/OnboardScreen';
import {HeaderNavBack} from '../headerNavBackButton';
import {HOME_ROUTE, ONBOARD_ROUTE} from '../routes';
import type {AppNavigatorStackParamsList} from './types';
import {HomeScreen} from '~/screens/home/HomeScreen';

type AppNavigatorStackParamsListTodo = AppNavigatorStackParamsList & any;
const AppNavigatorStack =
  createStackNavigator<AppNavigatorStackParamsListTodo>();

export const AppNavigator: React.FC = () => {
  const theme = useTheme();

  return (
    <AppNavigatorStack.Navigator>
      <AppNavigatorStack.Group
        screenOptions={({navigation}) => ({
          gestureEnabled: false,
          headerShown: true,
          header: () => (
            <HeaderNavBack
              backgroundColor={theme.colors.white}
              {...(navigation.canGoBack() && {
                onBackClick: () => navigation.goBack(),
              })}
            />
          ),
        })}>
        <AppNavigatorStack.Screen
          name={ONBOARD_ROUTE}
          component={OnboardScreen}
          options={{
            header: () => null,
          }}
        />
        <AppNavigatorStack.Screen
          name={HOME_ROUTE}
          component={HomeScreen}
          options={{
            header: () => null,
          }}
        />
      </AppNavigatorStack.Group>
    </AppNavigatorStack.Navigator>
  );
};
