import React from 'react';
import Svg, { Path } from 'react-native-svg';

export function XClose(): JSX.Element {
  return (
    <Svg width={23} height={23} fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m20.806.712-9.444 9.443L1.92.712.362 2.266l9.446 9.448-9.446 9.444 1.557 1.554 9.443-9.444 9.444 9.444 1.556-1.554-9.445-9.444 9.445-9.448L20.806.712Z"
        fill="#000"
      />
    </Svg>
  );
}
