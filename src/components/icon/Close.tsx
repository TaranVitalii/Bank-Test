import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

import {IconProps} from '../../interfaces';

const Close = ({
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
    viewBox="0 0 100.353 100.353"
    style={{
      marginTop: offsetTop,
      marginLeft: offsetLeft,
      marginRight: offsetRight,
      marginBottom: offsetBottom,
    }}>
    <Path
      d="M99.574 97.399L52.061 49.884 99.345 2.6A1.456 1.456 0 0097.286.54L50.002 47.824 2.721.54A1.456 1.456 0 10.662 2.6l47.281 47.284L.428 97.399a1.456 1.456 0 102.06 2.06l47.515-47.515 47.513 47.515a1.453 1.453 0 002.06 0 1.458 1.458 0 00-.002-2.06z"
      fill={color}
    />
  </Svg>
);

Close.defaultProps = {
  color: '#fff',
  width: 20,
  height: 20,
  offsetTop: 0,
  offsetLeft: 0,
  offsetRight: 0,
  offsetBottom: 0,
};

export default Close;
