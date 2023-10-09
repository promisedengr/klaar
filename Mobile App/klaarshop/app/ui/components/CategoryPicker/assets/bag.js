import Svg, {
  Path
} from 'react-native-svg';
import React from 'react';

const BagIcon = (props) => {
    return (
      <Svg width={props.w} height={props.h} viewBox="0 0 24 24" fill="none">
        <Path d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z" stroke="#091B4D" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M3 6H21" stroke="#091B4D" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10" stroke="#091B4D" strokeWidth="2" stroke-linecap="round" stroke-linejoin="round"/>
      </Svg>
    );
}

export default BagIcon;