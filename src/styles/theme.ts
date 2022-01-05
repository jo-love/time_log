import { DefaultTheme } from 'styled-components';

export const theme: DefaultTheme = {
  colors: {
    logo: '#D77FA1',
    primary: '#12D1C6',
    secondary: '#7DD3CE',
    line: '#49B4AD',
    text: '#FEFBF3',
  },
  size: {
    mobile: '(max-width: 768px)',
    laptop: '(max-width: 1460px)',
    desktop: '(max-width: 1700px)',
  },
  positions: {
    flexCenterXY:
      'display: flex; justify-content: center; align-items: center;',
    flexCenterX: 'display: flex; justify-content: center;',
    flexCenterY: 'display: flex; align-items: center;',
    flexColumnY: 'display: flex; flex-direction: column; align-items: center;',
    spaceBetween: 'display: flex; justify-content: space-between;',
  },
};
