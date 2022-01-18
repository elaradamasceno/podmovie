const theme  = {
  colors: {
    primaryDark: '#930000ed',
    primary: '#a90e0ec2',
    primaryLight: '#ff4545',

    secondary: '#1B5676',

    white: '#FFFFFF',
    black: '#000000e0',
    blackOpacity: '#181515cc',

    grayDark: '#707070',
    gray: '#c7c7c7',
    grayLight: '#ECECEC',
  },

  typograph: {
    title: '40px',
    
  },

  pxToRem(value: number){
    const transformsPxToRem = value / 16;
    return `${transformsPxToRem}rem`;
  },

  paddingPage(){
    return '16px 80px';
  }
}

export default theme