import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';

import {IconProps} from '../../interfaces';

const Notifications = ({
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
    viewBox="0 0 16 20">
    <G fill="none" fillRule="evenodd">
      <Path d="M-4-2h24v24H-4z" />
      <Path
        d="M15.29 15.29L14 14V9c0-3.07-1.64-5.64-4.5-6.32V2C9.5 1.17 8.83.5 8 .5S6.5 1.17 6.5 2v.68C3.63 3.36 2 5.92 2 9v5L.71 15.29c-.63.63-.19 1.71.7 1.71h13.17c.9 0 1.34-1.08.71-1.71zM12 15H4V9c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6zm-4 5c1.1 0 2-.9 2-2H6a2 2 0 002 2z"
        fill={color}
      />
    </G>
  </Svg>
);

Notifications.defaultProps = {
  color: '#fff',
  width: 25,
  height: 20,
  offsetTop: 0,
  offsetLeft: 0,
  offsetRight: 0,
  offsetBottom: 0,
};

export default Notifications;
