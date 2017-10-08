import styled from 'styled-components';

const HeaderBackground = styled.div`
  background-image: url('https://assets.nflxext.com/ffe/siteui/vlv3/1efbfcb4-c920-4c86-b3bf-043d734bce1b/a01d4198-a5d8-41a7-9ad4-cd32c64142cf/BY-en-20171002-popsignuptwoweeks-perspective_alpha_website_medium.jpg');
  color: #fff;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 10;
    background: rgba(0,0,0,.6);
  }
`;

const HeaderContainer = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  overflow: hidden;
  z-index: 20;
`;

export {
    HeaderBackground,
    HeaderContainer
};