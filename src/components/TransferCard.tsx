import React from 'react';
import styled from 'styled-components/native';

import locale from '../locale';

import {TransferCardProps} from 'interfaces';

const TransferCard = ({
  title,
  firstNumberPart,
  secondNumberPart,
  thirtyNumberPart,
  fourthNumberPart,
}: TransferCardProps) => (
  <Container>
    <Title>{title}</Title>
    <CardNumberWrapper>
      <PartOfCardNumber>{firstNumberPart}</PartOfCardNumber>
      <PartOfCardNumber>{secondNumberPart}</PartOfCardNumber>
      <PartOfCardNumber>{thirtyNumberPart}</PartOfCardNumber>
      <PartOfCardNumber>{fourthNumberPart}</PartOfCardNumber>
    </CardNumberWrapper>
  </Container>
);

TransferCard.defaultProps = {
  title: locale.anotherBankCard,
  firstNumberPart: '',
  secondNumberPart: '',
  thirtyNumberPart: '',
  fourthNumberPart: '',
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-top: 22;
  margin-horizontal: 40px;
`;

const Title = styled.Text`
  font-size: 20;
`;

const CardNumberWrapper = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 25;
`;

const PartOfCardNumber = styled.Text`
  font-size: 20;
  color: #939393;
`;

export default TransferCard;
