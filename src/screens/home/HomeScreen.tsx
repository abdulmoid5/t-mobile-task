import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React, {useEffect, useRef, useState} from 'react';
import {Dimensions, StatusBar, View} from 'react-native';
import {useTheme} from '~/hooks/useTheme';
import {AppNavigatorStackParamsList} from '~/navigation/appNavigator/types';
import {SemiCircle} from './components/SemiCircle';

import {Circle} from './components/Circle';
import {StartButton} from './components/StartButton';

type HomeScreenProps = NativeStackScreenProps<
  AppNavigatorStackParamsList,
  'HOME_ROUTE'
>;

const SCREEN_WIDTH = Dimensions.get('window').width;

const Size = {
  circle: SCREEN_WIDTH * 0.5,
  semiCircle: SCREEN_WIDTH * 0.3,
};

export const HomeScreen: React.FC<HomeScreenProps> = props => {
  const {navigation} = props;
  const [percentage, setPercentage] = useState({left: 0, right: 0});
  const [buttonText, setButtonText] = useState('Start');

  const timer = useRef(null);
  const theme = useTheme();

  useEffect(() => {
    if (percentage.left > 99 || percentage.right > 99) {
      clearInterval(timer.current);
      timer.current = null;
      setButtonText('Start Again');
    }
  }, [percentage]);

  return (
    <View
      style={{
        flex: 1,
        paddingHorizontal: theme.spacing.s,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#0e1b1c',
      }}>
      <StatusBar barStyle="light-content" />
      <Circle
        size={Size.circle}
        percentageLeft={percentage.left}
        percentageRight={percentage.right}
      />
      <View
        style={{
          flexDirection: 'row',
        }}>
        <SemiCircle
          vairant="left"
          size={Size.semiCircle}
          percentage={percentage.left}
          color="#204924"
        />
        <SemiCircle
          vairant="right"
          size={Size.semiCircle}
          percentage={percentage.right}
          color="#631b1d"
        />
      </View>

      <StartButton
        onPress={() => {
          if (timer.current) {
            clearInterval(timer.current);
            timer.current = null;
            setButtonText('Resume');
            return;
          }
          setButtonText('Stop');
          if (buttonText === 'Start Again') setPercentage({left: 0, right: 0});
          timer.current = setInterval(() => {
            setPercentage(pre => ({
              left: pre.left + 1,
              right: pre.right + 1,
            }));
          }, 300);
        }}
        text={buttonText}
      />
    </View>
  );
};
