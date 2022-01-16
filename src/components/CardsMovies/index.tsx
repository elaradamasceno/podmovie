
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
      {console.log(title)}
      <S.Container>
        <S.HeaderCard url={imageUrl}/>

        {/* <S.TitleCard>
          <span>{title}</span>
        </S.TitleCard> */}

      </S.Container>
    </>
  )
}