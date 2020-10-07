import * as R from 'ramda';
import React from 'react';
import {NativeSyntheticEvent, TextInputChangeEventData} from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

import {CustomInputProps} from 'interfaces';

const CustomInput = ({
  colors,
  selectedColors,
  innerRef,
  value,
  onChange,
  onKeyPress,
  width,
  underlineWidth,
}: CustomInputProps) => {
  /**
   * On Change wrapper
   */
  const onChangeWrapper = (
    e: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => {
    const textValue: string = e.nativeEvent.text;
    const formattedValue = R.match(/[0-9]/g, textValue).join('');

    onChange(formattedValue);
  };

  return (
    <Wrapper>
      <Input
        ref={innerRef}
        width={width}
        value={value}
        maxLength={4}
        textContentType="creditCardNumber"
        autoCompleteType="cc-number"
        multiline={false}
        color={R.isEmpty(value) ? '#939393' : '#89B2F6'}
        onChange={onChangeWrapper}
        onKeyPress={onKeyPress}
      />
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={R.isEmpty(value) ? colors : selectedColors}
        style={{width: underlineWidth, height: 1, borderRadius: 2}}
      />
    </Wrapper>
  );
};

CustomInput.defaultProps = {
  colors: ['#EFEFEF', '#D0D0D0', '#EFEFEF'],
  selectedColors: ['#89B2F6', '#477BD9', '#89B2F6'],
  returnKeyType: 'next',
  width: 50,
  underlineWidth: 70,
};

const Input = styled.TextInput<{
  color: string;
  width: number;
}>`
  text-align: center;
  width: ${({width}) => width}px;
  font-size: 20px;
  color: ${({color}) => color};
  padding-bottom: 5px;
`;

const Wrapper = styled.View`
  width: 70px;
  align-items: center;
`;

export default CustomInput;
