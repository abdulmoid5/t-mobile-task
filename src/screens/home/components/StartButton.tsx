import React, {FC} from 'react';
import {Pressable, View} from 'react-native';
import {Text} from '~/components/atom/Text';
import {useTheme} from '~/hooks/useTheme';

type StartButtonProps = {
  onPress?: () => void;
  text?: string;
};

export const StartButton: FC<StartButtonProps> = props => {
  const {onPress = undefined, text = ''} = props;
  const theme = useTheme();

  return (
    <View
      style={{
        position: 'absolute',
        bottom: theme.spacing.xxxl,

        width: '80%',
      }}>
      <Pressable
        onPress={onPress}
        style={{
          borderRadius: theme.spacing.m,
          borderColor: theme.colors.white,
          borderWidth: 1,
          paddingHorizontal: theme.spacing.m,
          paddingVertical: theme.spacing.xxs,
          alignItems: 'center',
          justifyContent: 'center',
          minHeight:45,
        }}>
        <Text variant="body1" color="white">
          {text}
        </Text>
      </Pressable>
    </View>
  );
};
