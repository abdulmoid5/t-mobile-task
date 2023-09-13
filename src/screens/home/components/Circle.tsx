import React, {FC} from 'react';
import {Dimensions, View, StyleSheet} from 'react-native';
import {Text} from '~/components/atom/Text';

type CircleProps = {
  size?: number;
  percentageRight: number;
  percentageLeft: number;
};

const SCREEN_WIDTH = Dimensions.get('window').width;
export const Circle: FC<CircleProps> = props => {
  const {size = SCREEN_WIDTH * 0.5, percentageLeft, percentageRight} = props;

  return (
    <View
      style={{
        borderColor: '#123637',
        borderWidth: 3,
        height: size,
        width: size,
        borderRadius: size,
        position: 'absolute',
      }}>
      <View
        style={{
          position: 'absolute',
          top: 16,
          left: '50%',
          right: 0,
          bottom: 16,
          backgroundColor: '#123637',
          width: 3,
          borderRadius: 12,
          shadowColor: '#fff',
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
          zIndex: 99999,
        }}
      />

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          left: 20,
          top: '40%',
          position: 'absolute',
        }}>
        <Text
          variant="headline3"
          color="white"
          textAlign="center"
          marginBottom="s">
          {`${percentageLeft || 0}%`}
        </Text>
        <Text variant="body2" color="white" textAlign="right">
          L
        </Text>
      </View>

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          right: 20,
          top: '40%',
          position: 'absolute',
        }}>
        <Text
          variant="headline3"
          color="white"
          textAlign="center"
          marginBottom="s">
          {`${percentageRight || 0}%`}
        </Text>
        <Text variant="body2" color="white" textAlign="right">
          R
        </Text>
      </View>
    </View>
  );
};
