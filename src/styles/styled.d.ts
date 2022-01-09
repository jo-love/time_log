import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      logo: string;
      primary: string;
      secondary: string;
      pastelBlue: string;
      line: string;
      white: string;
    };
    size: {
      mobile: string;
      laptop: string;
      desktop: string;
    };
    positions: {
      flexCenterXY: string;
      flexCenterX: string;
      flexCenterY: string;
      flexColumnY: string;
      spaceBetween: string;
      spaceAround: string;
    };
  }
}
