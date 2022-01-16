
import * as S from './styles';

type CardMoviesProps = {
  title: string;
  overview: string;
  imageUrl: string;
  releaseDate: string;
  voteAverage: number;
}

export const CardMovies = ({title, overview, imageUrl, releaseDate, voteAverage}: CardMoviesProps) => {

  return (
    <>    
      <S.Container>
        <S.HeaderCard url={imageUrl}/>
      </S.Container>
    </>
  )
}