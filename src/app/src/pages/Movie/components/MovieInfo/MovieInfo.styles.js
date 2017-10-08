import styled from 'styled-components';

const MoviePreview = styled.div`
  display: flex;
  margin: 30px 0;
  color: #eeeeee;
`;

const MoviePoster = styled.div`
    width: 300px;
    height: 420px;
    flex-grow: 0;
    flex-shrink: 0;
    background-image: url(http://netflixroulette.net/api/posters/880640.jpg);
    background-size: cover;
    margin-right: 40px;
`;

const MovieSummary = styled.div`
    margin: 40px;
`;

const MovieLabel = styled.div`
  display: flex;
  align-items: center;
`;

const MovieTitle = styled.span`
  font-size: 2rem;
  color: #f55263;
  font-weight: 600;
`;

const MovieRating = styled.p`
  color: #b5e684;
  line-height: 40px;
  height: 40px;
  width: 40px;
  font-size: 1.1rem;
  margin: 0 20px;
  text-align: center;
  border: 1px solid #b5e684;
  border-radius: 25px;
`;

const MovieDescription = styled.p`
  margin: 10px 0 20px;
`;

const MovieNote = styled.span`
  font-weight: 600;
  display: inline-block;
  margin: 0 30px 20px 0;
`;

const MovieCast = styled.p`
  font-size: 0.8rem;
  margin: 10px 0;
`;

export {
    MoviePreview,
    MoviePoster,
    MovieSummary,
    MovieLabel,
    MovieTitle,
    MovieRating,
    MovieDescription,
    MovieNote,
    MovieCast
};
