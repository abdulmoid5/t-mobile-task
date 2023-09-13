import React from 'react';
import {ColorValue, Dimensions, View} from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';

type SemiCircleProps = {
  vairant?: 'left' | 'right';
  size?: number;
  color?: ColorValue;
  percentage: number;
};

const SCREEN_WIDTH = Dimensions.get('window').width;

export const SemiCircle: React.FC<SemiCircleProps> = ({
  percentage,
  vairant = 'right',
  size = SCREEN_WIDTH * 0.3,
  color = '#631b1d',
}) => {
  if (vairant === 'left') {
    return (
      <View
        style={{
          position: 'absolute',
          left: -8,
        }}>
        <View
          style={{
            transform: [{rotate: '360deg'}, {scale: -1}],
          }}>
          <CircularProgress
            value={percentageCalculator(percentage)}
            radius={size}
            duration={300}
            progressValueColor="transparent"
            inActiveStrokeWidth={0}
            activeStrokeColor={color as string}
            maxValue={100}
          />
        </View>
      </View>
    );
  }

  return (
    <View
      style={{
        transform: [{rotate: '180deg'}, {scaleX: -1}],
        right: -8,
      }}>
      <CircularProgress
        value={percentageCalculator(percentage)}
        radius={size}
        duration={300}
        progressValueColor="transparent"
        inActiveStrokeWidth={0}
        activeStrokeColor={color as string}
        maxValue={100}
      />
    </View>
  );
};

const percentageCalculator = (percentage: number) => {
  return Math.floor(percentage / 2);
};
