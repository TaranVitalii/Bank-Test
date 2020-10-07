import React from 'react';
import styled from 'styled-components/native';

import SecureIcon from './icon/SecureIcon';
import locale from '../locale';

const SecureField = () => (
  <Container>
    <SecureIcon />
    <Message>{locale.secureMessage}</Message>
    <Message>{locale.secureMessageSecond}</Message>
  </Container>
);

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Message = styled.Text`
  font-size: 12px;
`;

export default SecureField;
