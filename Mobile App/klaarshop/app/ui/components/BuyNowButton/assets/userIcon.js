import Svg, {
  Path
} from 'react-native-svg';
import React from 'react';

const UserIcon = (props) => {
    return (
      <Svg width={props.w} height={props.h} viewBox="0 0 12 12" fill="none">
        <Path d="M10 10.5V9.5C10 8.96957 9.78929 8.46086 9.41421 8.08579C9.03914 7.71071 8.53043 7.5 8 7.5H4C3.46957 7.5 2.96086 7.71071 2.58579 8.08579C2.21071 8.46086 2 8.96957 2 9.5V10.5" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
        <Path d="M6 5.5C7.10457 5.5 8 4.60457 8 3.5C8 2.39543 7.10457 1.5 6 1.5C4.89543 1.5 4 2.39543 4 3.5C4 4.60457 4.89543 5.5 6 5.5Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"/>
      </Svg>
    );
}

export default UserIcon;