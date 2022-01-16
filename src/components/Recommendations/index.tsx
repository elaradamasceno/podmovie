import { useEffect, useMemo, useState } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

import { useTrending } from '../../hooks/useTrending';
import { CardMovies } from '../CardsMovies';

import * as S from './styles';

export const Recommendations = () => {
  const { resultsTrending } = useTrending();
  const [showMovies, setShowMovies] = useState<boolean>(false);

  const amountMovies = useMemo(() => {
    return showMovies ? 16 : 4;
  }, [showMovies])

  const handleShowMovies = () => {
    setShowMovies(!showMovies);
  }

  return (
    <S.Container>
      <S.Info>
        <h2 id="section-recommendations">Recomendações</h2>

        <S.ContentInfo>
          <div>
            <span>Veja os itens de tendências diárias ou semanais. A lista de tendências diárias rastreia os itens durante o período de um dia. A lista semanal rastreia os itens durante um período de 7 dias.</span>
          </div>
        </S.ContentInfo>

        <S.SelectPeriod>
          <span>
            Escolha o período de suas tendências {` `}
            <button type="button"> 
              aqui! 
            </button> 
          </span>
        </S.SelectPeriod>
      </S.Info>

      <S.Cards>
        {resultsTrending.map((result, index) => {
          return (
            <>
              {index < amountMovies && (
                <CardMovies 
                  key={index} 
                  title={result.title}
                  overview={result.overview}
                  imageUrl={`https://image.tmdb.org/t/p/w500/${result.poster_path}`}
                  releaseDate={result.release_date}
                  voteAverage={result.vote_average}
                />
              )}
            </>
          )
        })}
      </S.Cards>

      <S.MoreMovies 
        onClick={handleShowMovies}
      > 
        { !showMovies ? <div> Ver mais <IoIosArrowDown /> </div> : <div> Ver menos <IoIosArrowUp /> </div>}
      </S.MoreMovies>
    </S.Container>
  )
}