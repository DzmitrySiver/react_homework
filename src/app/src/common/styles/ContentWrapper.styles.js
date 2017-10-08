import styled from 'styled-components';

const SiteWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  min-height: 100%;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export {
    SiteWrapper,
    ContentWrapper
};
