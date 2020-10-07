import React from 'react';
import styled from 'styled-components/native';

import {VerifyFieldProps} from 'interfaces';

import locale from '../locale/';
import CustomInput from '../components/CustomInput';
import Button from '../components/Button';
import useVerification from '../hooks/useVerification';

const VerifyField = ({onPress}: VerifyFieldProps) => {
  const {
    verificationRefs,
    disabled,
    firstNumber,
    secondNumber,
    thirtyNumber,
    fourthNumber,
    firstOnChangeHandler,
    secondOnChangeHandler,
    thirtyOnChangeHandler,
    fourthOnChangeHandler,
    onKeyFirstInputPressHandler,
    onKeySecondInputPressHandler,
    onKeyThirtyInputPressHandler,
    onKeyFourthInputPressHandler,
  } = useVerification();

  return (
    <>
      <Container>
        <Message>{locale.verifyMessage.toUpperCase()}</Message>
        <InputWrapper>
          <CustomInput
            innerRef={verificationRefs.first}
            value={firstNumber}
            onChange={firstOnChangeHandler}
            onKeyPress={onKeyFirstInputPressHandler}
          />
          <CustomInput
            innerRef={verificationRefs.second}
            value={secondNumber}
            onChange={secondOnChangeHandler}
            onKeyPress={onKeySecondInputPressHandler}
          />
          <CustomInput
            innerRef={verificationRefs.thirty}
            value={thirtyNumber}
            onChange={thirtyOnChangeHandler}
            onKeyPress={onKeyThirtyInputPressHandler}
          />
          <CustomInput
            innerRef={verificationRefs.fourth}
            value={fourthNumber}
            onChange={fourthOnChangeHandler}
            onKeyPress={onKeyFourthInputPressHandler}
          />
        </InputWrapper>
      </Container>
      <Button
        label={locale.sendMoney.toUpperCase()}
        disabled={disabled}
        onPress={onPress}
      />
    </>
  );
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  margin-horizontal: 40px;
  padding-vertical: 15px;
`;

const Message = styled.Text`
  font-size: 14px;
  color: #939393;
`;

const InputWrapper = styled.View`
  flex: 1;
  padding-top: 20px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export default VerifyField;
