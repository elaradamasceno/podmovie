
import { Header } from '../../components/Header';
import { Recommendations } from '../../components/Recommendations';

import * as S from './styles';

export const Home = () => {
  return (
    <S.Container>
      <Header />

      <S.Content>
        <Recommendations />
      </S.Content>
    </S.Container>
  )
}