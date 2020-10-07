import React from 'react';
import styled from 'styled-components/native';

import {bankMoneyFormatter} from '../helpers';

interface DataCardProps {
  bankName: string;
  endData: string;
  money: number;
  cardNumber: string;
}

const BankCard = ({bankName, endData, money, cardNumber}: DataCardProps) => {
  const {totalCash, trifle} = bankMoneyFormatter(money);

  return (
    <Container>
      <Content>
        <TopContainer>
          <StartData>
            <BankData>{bankName}</BankData>
          </StartData>
          <EndData>
            <EndDate>{endData}</EndDate>
          </EndData>
        </TopContainer>
        <MiddleContainer>
          <Cash>
            <Currency>₴</Currency>
            {totalCash}
            <Trifle>.{trifle}</Trifle>
          </Cash>
        </MiddleContainer>
        <BottomContainer>
          <CardNumber>{cardNumber}</CardNumber>
        </BottomContainer>
      </Content>
    </Container>
  );
};

BankCard.defaultProps = {
  bankName: '',
  endData: '',
  money: 0,
  cardNumber: 'XXXX  XXXX  XXXX  XXXX',
};

const Container = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Content = styled.View`
  padding-top: 20px;
  padding-bottom: 40px;
`;

const TopContainer = styled.View`
  flex-direction: row;
`;

const MiddleContainer = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
`;

const BottomContainer = styled.View`
  align-items: center;
`;

const CardNumber = styled.Text`
  font-size: 24px;
  color: white;
`;

const Currency = styled.Text`
  font-size: 28px;
  color: white;
`;

const Cash = styled.Text`
  font-size: 70px;
  color: white;
`;

const Trifle = styled.Text`
  font-size: 28px;
  color: white;
`;

const BankData = styled.Text`
  font-size: 18px;
  color: white;
`;

const StartData = styled.View`
  flex: 1;
  align-items: flex-start;
`;

const EndData = styled.View`
  align-items: flex-end;
`;

const EndDate = styled.Text`
  font-size: 18px;
  color: white;
`;

export default BankCard;
