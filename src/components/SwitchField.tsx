import React from 'react';
import {Switch} from 'react-native';
import styled from 'styled-components/native';

import {SwitchFieldProps} from 'interfaces';
import locale from '../locale';

const SwitchField = ({onValueChange, value}: SwitchFieldProps) => (
  <Container>
    <TaxInfo>{locale.doPayCommission}</TaxInfo>
    <Switch
      trackColor={{false: '#767577', true: '#396DD1'}}
      thumbColor="#f4f3f4"
      value={value}
      onValueChange={onValueChange}
    />
  </Container>
);

const Container = styled.View`
  flex: 1;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  padding-top: 16px;
  padding-horizontal: 20px;
`;

const TaxInfo = styled.Text`
  font-size: 14px;
`;

export default SwitchField;
