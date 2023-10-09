import Svg, {
   Path
} from 'react-native-svg';
import React from 'react';
import { colors } from '~/ui/theme/default/colors';

const Like = (props) => {
   return (
      <Svg width={20} height={18} viewBox="0 0 14 12" fill="none">
         <Path d="M12.9205 1.06089C12.5784 0.724555 12.1722 0.457752 11.7252 0.275722C11.2782 0.0936915 10.799 0 10.3151 0C9.83123 0 9.35208 0.0936915 8.90504 0.275722C8.45801 0.457752 8.05185 0.724555 7.70976 1.06089L6.99982 1.75857L6.28988 1.06089C5.5989 0.381838 4.66172 0.000351975 3.68453 0.000351982C2.70733 0.000351989 1.77016 0.381838 1.07917 1.06089C0.38819 1.73994 7.28068e-09 2.66092 0 3.62124C-7.28068e-09 4.58157 0.38819 5.50255 1.07917 6.1816L1.78911 6.87928L6.99982 12L12.2105 6.87928L12.9205 6.1816C13.2627 5.84543 13.5342 5.44628 13.7194 5.00697C13.9047 4.56765 14 4.09678 14 3.62124C14 3.14571 13.9047 2.67484 13.7194 2.23552C13.5342 1.79621 13.2627 1.39706 12.9205 1.06089Z" fill={colors.mainBlue} />
      </Svg>
   );
}

export default Like;