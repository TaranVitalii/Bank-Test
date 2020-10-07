import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

import {IconProps} from '../../interfaces';

const Next = ({
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
    viewBox="0 0 24 24">
    <Path
      fill={color}
      stroke="#000"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M8.5 3l9 9-9 9"
    />
  </Svg>
);

Next.defaultProps = {
  color: '#fff',
  width: 25,
  height: 20,
  offsetTop: 0,
  offsetLeft: 0,
  offsetRight: 0,
  offsetBottom: 0,
};

export default Next;
