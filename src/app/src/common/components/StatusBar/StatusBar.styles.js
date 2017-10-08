import styled from 'styled-components';

const StatusBar = styled.div`
    height: 50px;
    color: #494949;
    background-color: #f5f5f5;
    font-weight: 600;
`;

const StatusBarWrapper = styled.div`
    max-width: 1000px;
    height: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export {
    StatusBar,
    StatusBarWrapper
};