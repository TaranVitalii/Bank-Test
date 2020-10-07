import * as R from 'ramda';
import React, {useRef, MutableRefObject} from 'react';
import {TouchableWithoutFeedback, TextInput} from 'react-native';
import styled from 'styled-components/native';
import LinearGradient from 'react-native-linear-gradient';

import {MoneyInputProps} from 'interfaces';
import {bankMoneyFormatter} from '../helpers';

const MoneyInput = ({value, onChange}: MoneyInputProps) => {
  const inputRef: MutableRefObject<TextInput | null> = useRef<TextInput>(null);
  const {totalCash, trifle} = bankMoneyFormatter(value);

  /**
   * On press handler
   */
  const onPressHandler = () => {
    if (!R.isNil(inputRef.current)) {
      inputRef.current.focus();
    }
  };

  return (
    <TouchableWithoutFeedback onPress={onPressHandler}>
      <Wrapper>
        <CustomWrapper>
          <CustomInput
            ref={inputRef}
            value={`${totalCash}.${trifle}`}
            keyboardType="number-pad"
            color={R.isEmpty(value) ? '#939393' : '#89B2F6'}
            onChange={onChange}
          />
          {!!value && <Currency>грн</Currency>}
        </CustomWrapper>
        <LinearGradient
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
          colors={['#EFEFEF', '#D0D0D0', '#EFEFEF']}
          style={{width: '100%', height: 1, borderRadius: 2}}
        />
      </Wrapper>
    </TouchableWithoutFeedback>
  );
};

const CustomInput = styled.TextInput<{color: string}>`
  font-size: 20px;
  color: ${({color}) => color};
  padding-bottom: 8px;
`;

const CustomWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Currency = styled.Text`
  font-size: 20px;
  color: #89b2f6;
  padding-left: 6px;
`;

const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-top: 25px;
  padding-horizontal: 60px;
`;

export default MoneyInput;
