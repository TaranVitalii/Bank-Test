import React from 'react';
import styled from 'styled-components/native';

import {CardInputProps} from 'interfaces';

import CustomInput from './CustomInput';

const CardInput = ({
  inputsRef,
  firstNumberPart,
  firstOnChangeHandler,
  onKeyFirstInputPressHandler,
  secondNumberPart,
  secondOnChangeHandler,
  onKeySecondInputPressHandler,
  thirtyNumberPart,
  thirtyOnChangeHandler,
  onKeyThirtyInputPressHandler,
  fourthNumberPart,
  fourthOnChangeHandler,
  onKeyFourthInputPressHandler,
}: CardInputProps) => (
  <Container>
    <CustomInput
      innerRef={inputsRef.first}
      value={firstNumberPart}
      onChange={firstOnChangeHandler}
      onKeyPress={onKeyFirstInputPressHandler}
    />
    <CustomInput
      innerRef={inputsRef.second}
      value={secondNumberPart}
      onChange={secondOnChangeHandler}
      onKeyPress={onKeySecondInputPressHandler}
    />
    <CustomInput
      innerRef={inputsRef.thirty}
      value={thirtyNumberPart}
      onChange={thirtyOnChangeHandler}
      onKeyPress={onKeyThirtyInputPressHandler}
    />
    <CustomInput
      innerRef={inputsRef.fourth}
      value={fourthNumberPart}
      onChange={fourthOnChangeHandler}
      onKeyPress={onKeyFourthInputPressHandler}
      returnKeyType="done"
    />
  </Container>
);

const Container = styled.View`
  padding-horizontal: 30px;
  padding-top: 20px;
  background-color: white;
  flex-direction: row;
  justify-content: space-between;
`;

export default CardInput;
