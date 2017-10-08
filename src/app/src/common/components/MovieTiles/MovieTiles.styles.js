import styled from 'styled-components';

const Tiles = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 1020px;
    margin: 0 auto;
    
    &:after {
        content: "";
        flex: auto;
    }
`;


export default Tiles;