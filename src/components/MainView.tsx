import styled from 'styled-components/native';

const MainView = styled.View<{
  bgColor?: string;
}>`
  flex: 1;
  background-color: ${(props) => (props.bgColor ? props.bgColor : 'white')};
`;
// fix color
export default MainView;
