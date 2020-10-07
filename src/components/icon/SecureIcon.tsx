import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

import {IconProps} from '../../interfaces';

const SecureIcon = ({
  width,
  height,
  color,
  offsetTop,
  offsetLeft,
  offsetRight,
  offsetBottom,
}: IconProps) => (
  <Svg
    width={width}
    height={height}
    style={{
      marginTop: offsetTop,
      marginLeft: offsetLeft,
      marginRight: offsetRight,
      marginBottom: offsetBottom,
    }}
    viewBox="0 0 64 64"
    aria-labelledby="title"
    aria-describedby="desc">
    <Path
      data-name="layer2"
      d="M56 12A33 33 0 0132 2 33 33 0 018 12S5.9 48 32 62c26.1-14 24-50 24-50z"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
    <Path
      data-name="layer1"
      d="M45 24L31 38l-7-7"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
    />
  </Svg>
);

SecureIcon.defaultProps = {
  color: '#D3716D',
  width: 100,
  height: 180,
  offsetTop: 0,
  offsetLeft: 0,
  offsetRight: 0,
  offsetBottom: 0,
};

export default SecureIcon;
