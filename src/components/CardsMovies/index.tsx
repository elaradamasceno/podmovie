
import * as S from './styles';

type CardMoviesProps = {
  title: string;
  imageUrl: string;
  onClick: () => void
}

export const CardMovies = ({title, imageUrl, onClick}: CardMoviesProps) => {
  return (
    <S.Container onClick={onClick}>
      <S.HeaderCard url={imageUrl}/>

      {/* <S.TitleCard>
        <span>{title}</span>
      </S.TitleCard> */}
    </S.Container>
  )
}