import React from 'react';
import styled from 'styled-components/native';

import {TransferValueProps} from 'interfaces';
import {bankMoneyFormatter} from '../helpers';

const TransferValue = ({cash, currency}: TransferValueProps) => {
  const {totalCash, trifle} = bankMoneyFormatter(cash);

  return (
    <Container>
      <Cash>
        {totalCash}
        <Trifle>{`.${trifle} ${currency}`}</Trifle>
      </Cash>
    </Container>
  );
};

TransferValue.defaultProps = {
  currency: 'грн',
};

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  margin-horizontal: 40px;
  padding-vertical: 15px;
`;

const Cash = styled.Text`
  font-size: 36px;
  color: white;
`;

const Trifle = styled.Text`
  font-size: 30px;
  color: white;
`;

export default TransferValue;
