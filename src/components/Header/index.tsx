import { useEffect, useMemo, useState } from 'react';
import { isMobile } from 'react-device-detect';

import { getMovies, popularMovies } from '../../services/movie-api';

import ImageHeader from '../../assets/images/header.svg';

import * as S from './styles';

export const Header = () => {
  const [dataPopularMovies, setDataPopularMovies] = useState();
  const [imageHeader, setImageHeader] = useState<string>();

  useEffect(() => {
    const fetchPopularMovies = async () => {
      const response = await popularMovies();

      setImageHeader(response.status === 200 ? response.data.results[0].poster_path : '')
      // setDataPopularMovies(response.status === 200 ? response.data : []);
      // {`https://image.tmdb.org/t/p/w500/${imageHeader}`}
    }

    // fetchPopularMovies();
  }, []);

  const handleScrollSections = (section: string) => {
    const element = document.getElementById(section) as HTMLElement;
    element.scrollIntoView({ behavior: "smooth" });
  }

  const renderMenuMobile = () => {
    return (
      <div>
        Mobile
      </div>
    )
  }

  const renderMenuDesktop = () => {
    return (
      <S.Menu>
        <S.MenuButtons onClick={() => handleScrollSections('section-recommendations') }>
          <span>Recomendados</span>
        </S.MenuButtons>

        <S.MenuButtons>
          <span>Avaliações</span>
        </S.MenuButtons>

        <S.MenuButtons>
          <span>Pesquisar filmes</span>
        </S.MenuButtons>

        <S.MenuButtons>
          <span>Login</span>
        </S.MenuButtons>
      </S.Menu>
    )
  }

  return (
    <S.Container url={ImageHeader} isMobile={isMobile}>
      { isMobile ? renderMenuMobile() : renderMenuDesktop() }
    </S.Container>
  )
}