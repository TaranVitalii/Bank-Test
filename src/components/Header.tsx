import React from 'react';
import styled from 'styled-components/native';

import {HeaderProps} from 'interfaces';

import locale from '../locale';
import CloseIcon from './icon/Close';
import BackArrowIcon from './icon/BackArrow';
import NotificationsIcon from './icon/Notifications';
import getHeaderHeight from '../helpers/getHeaderHeight';

const height = getHeaderHeight();

const Header = ({title, isBack, onPress}: HeaderProps) => (
  <Container>
    <Content height={height}>
      <ContentWrapper>
        {isBack ? (
          <LeftContent onPress={onPress}>
            <BackArrowIcon />
            <BackText>{locale.back}</BackText>
          </LeftContent>
        ) : (
          <LeftContent onPress={onPress}>
            <CloseIcon />
            <BackText>{locale.close}</BackText>
          </LeftContent>
        )}
        <CenterContent>
          <Title>{title}</Title>
        </CenterContent>
        <RightContent>
          <NotificationsIcon offsetRight={10} />
        </RightContent>
      </ContentWrapper>
    </Content>
  </Container>
);

Header.defaultProps = {
  title: '',
  isBack: true,
  onPress: () => ({}),
};

const LeftContent = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 25%;
`;

const RightContent = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  width: 25%;
`;

const ContentWrapper = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`;

const CenterContent = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const BackText = styled.Text`
  color: white;
  font-size: 18px;
  padding-left: 5px;
`;

const Content = styled.View<{height: number}>`
  justify-content: flex-end;
  height: ${(props) => props.height};
`;

const Container = styled.View`
  width: 100%;
  padding-bottom: 20px;
`;

const Title = styled.Text`
  color: white;
  font-size: 18px;
  text-align: center;
`;

export default Header;
