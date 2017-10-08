import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Tile = styled(Link)`
  text-decoration: none;
  color: #494949;
  width: 23%;
  min-width: 200px;
  margin: 20px 10px;
`;

const TileImage = styled.div`
  width: 100%;
  height: 285px;
  background-image: url(${(props) => props.url});
  background-size: cover;
`;

const TileTitle = styled.span`
  padding: 3px 0;
  text-transform: uppercase;
`;

const TileMovieYear = styled.span`
  border: 1px solid #494949;
  font-size: 0.8rem;
  padding: 3px 6px;
`;

const TileMovieDescription = styled.div`
  padding: 10px 0;
`;

const TileMovieInfo = styled.p`
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  padding-bottom: 5px;
  align-items: flex-start;
`;

const TileMovieGroup = styled.p`
  font-size: 0.7rem;
`;

export {
    Tile,
    TileImage,
    TileTitle,
    TileMovieYear,
    TileMovieDescription,
    TileMovieInfo,
    TileMovieGroup
};