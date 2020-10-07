import React from 'react';
import styled from 'styled-components/native';

import Success from './icon/Success';
import locale from '../locale';

const SuccessField = () => (
  <Container>
    <Success />
    <Message>{locale.success}</Message>
  </Container>
);

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Message = styled.Text`
  font-size: 25px;
  color: #2b5ec9;
`;

export default SuccessField;
