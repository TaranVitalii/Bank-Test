import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import styled from 'styled-components/native';

import locale from '../locale';
import Next from './icon/Next';

interface ButtonProps {
  labelSize: number;
  label: string;
  borderColor: string;
  onPress: any;
  disabled: boolean;
  loading?: boolean;
  marginHorizontal: number;
}

const Button = ({
  labelSize,
  label,
  borderColor,
  onPress,
  disabled,
  loading,
  marginHorizontal,
}: ButtonProps) => (
  <Wrapper
    onPress={() => {
      if (disabled || loading) {
        return;
      }
      onPress();
    }}
    marginHorizontal={marginHorizontal}
    borderColor={disabled ? '#939393' : borderColor}
    disabled={disabled}>
    {!loading && (
      <>
        <Label labelSize={labelSize}>{label.toUpperCase()}</Label>
        <View
          style={{
            position: 'absolute',
            alignItems: 'flex-end',
            right: '10%',
          }}>
          <Next />
        </View>
      </>
    )}
    {loading && <ActivityIndicator size="small" color="#fff" />}
  </Wrapper>
);

Button.defaultProps = {
  onPress: () => ({}),
  labelSize: 20,
  label: locale.onward,
  borderColor: '#80ABF5',
  disabled: false,
  loading: false,
  marginHorizontal: 20,
};

const Wrapper = styled.TouchableOpacity<{
  borderColor: string;
  disabled: boolean;
  marginHorizontal: number;
}>`
  align-items: center;
  flex-direction: row;
  justify-content: center;
  margin-top: 28px;
  margin-horizontal: ${({marginHorizontal}) =>
    marginHorizontal ? `${marginHorizontal}px` : 0};
  border-width: 2px;
  border-color: ${(props) => props.borderColor};
  border-radius: 20px;
  ${(props) => props.disabled && 'opacity: 0.7'};
`;

const Label = styled.Text<{labelSize: number}>`
  font-size: ${(props) => props.labelSize};
  padding-vertical: 10px;
  text-align: center;
  color: black;
`;

export default Button;
