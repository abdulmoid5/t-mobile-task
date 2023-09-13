import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {Text} from '~/components/atom/Text';
import {useTheme} from '~/hooks/useTheme';
import {AppNavigatorStackParamsList} from '~/navigation/appNavigator/types';
import i18n from '~/translations/i18n';

type OnboardScreenProps = NativeStackScreenProps<
  AppNavigatorStackParamsList,
  'ONBOARD_ROUTE'
>;

export const OnboardScreen: React.FC<OnboardScreenProps> = (
  props,
): JSX.Element => {
  const {navigation} = props;
  const theme = useTheme();

  useEffect(() => {
    setTimeout(() => {
      navigation.replace('HOME_ROUTE');
    }, 1500);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme.colors.white,
        paddingHorizontal: theme.spacing.s,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text
        variant="headline1"
        marginVertical="m"
        color="primary"
        textAlign="center">
        {i18n.t('theo_app')}
      </Text>
      <ActivityIndicator size="large" color={theme.colors.primary1} />
    </View>
  );
};
