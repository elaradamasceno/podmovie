import { useEffect, useMemo, useState } from 'react';
import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

import { format } from 'date-fns'

import { useTrending, ResultType } from '../../hooks/useTrending';
import { getVideoById } from '../../services/movie-api';

import { CardMovies } from '../CardsMovies';
import { Modal } from '../Modal';
import { Skeleton } from '../Skeleton';

import * as S from './styles';

type DataVideoType = {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  official: boolean;
  published_at: string;
  site: string;
  size: number
  type: string;
}

export const Recommendations = () => {
  const { resultsTrending } = useTrending();

  const [showMovies, setShowMovies] = useState<boolean>(false);
  const [currentData, setCurrentData] = useState<ResultType>();

  const [showModal, setShowModal] = useState<boolean>(false);
  const [typeModal, setTypeModal] = useState<string>('cardMovie');

  const [dataVideo, setDataVideo] = useState<DataVideoType>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [publishDate, setPublishDate] = useState<string>();

  useEffect(() => {
    const fetchGetVideoById = async () => {
      const response = await getVideoById(currentData?.id as number);

      setDataVideo(response.status === 200 ? response.data?.results[0] : {});
      setPublishDate(response.status === 200 && response.data?.results[0].published_at ? response.data?.results[0].published_at : '');
      
      setIsLoading(false);
    };

    fetchGetVideoById();
  }, [currentData?.title]);

  const amountMovies = useMemo(() => {
    return showMovies ? 16 : 4;
  }, [showMovies]);

  const handleShowMovies = () => {
    setShowMovies(!showMovies);
  }

  const handleShowModalCardMovie = (index: number) => {
    setCurrentData(resultsTrending[index] as ResultType);
    setTypeModal('cardMovie');
    setShowModal(true);
  }

  const handleSelectPeriod = () => {
    console.log('pq?')
    setTypeModal('selectedPeriod');
    setShowModal(true);
  }

  const renderModalCardMovie = () => {
    return (
      <S.ModalContent>
        <h2>{currentData?.title} </h2>

        {isLoading ? (
          <Skeleton height="80px" width="100%"/>
        ) : (
          <S.ModalInfo>
            <p>{currentData?.overview}</p>

            <div>
              <p>{dataVideo?.name}</p>
              
              { publishDate && 
                <p> Data de publicação: {format(new Date(publishDate), 'dd/MM/yyyy')}</p>
              }
            </div>

            <iframe 
              width="700" 
              height="315" 
              src={`https://www.youtube.com/embed/${dataVideo?.key}`}
              title="YouTube video player" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            />
          </S.ModalInfo>
        )}
      </S.ModalContent>  
    )
  }

  const renderModalSelectPeriod = () => {
    return (
      <div>

        AAA
      </div>
    )
  }

  return (
    <>
      <Modal 
        open={showModal}
        closed={() => { setShowModal(false)}}
        children={typeModal === 'cardMovie' ? renderModalCardMovie() : renderModalSelectPeriod()}
      />    

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
              <button type="button" onClick={handleSelectPeriod}> 
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
                    imageUrl={`https://image.tmdb.org/t/p/w500/${result.poster_path}`}
                    onClick={() => { handleShowModalCardMovie(index) }}
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
    </>
  )
}