import { useEffect, useMemo, useState } from 'react';

import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

import { trendingMovies } from '../../services/movie-api';
import { CardMovies } from '../CardsMovies';

import * as S from './styles';

type ResultType = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: string[];
  id: number;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export const Recommendations = () => {
  const [resultsTrending, setResultsTrending] = useState<ResultType[]>([]);
  const [showMovies, setShowMovies] = useState<boolean>(false);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      const response = await trendingMovies();
      setResultsTrending(response.status === 200 ? response.data.results : []);
    }

    fetchTrendingMovies();
  }, []);

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