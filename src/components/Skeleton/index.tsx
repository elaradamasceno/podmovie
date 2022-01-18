import * as S from './styles';

type SkeletonProps = {
  height: string;
  width: string
}

export const Skeleton = ({height, width}: SkeletonProps) => {
  return (
    <>
      <S.Content height={height} width={width}></S.Content>
    </>
  )
}