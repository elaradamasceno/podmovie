import { ReactNode, useEffect, useState } from 'react';

import * as S from './styles';

type ModalProps = {
  open: boolean;
  closed: () => void;
  children: ReactNode
}

export const Modal = ({ open, closed, children }: ModalProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);


  useEffect(() => {
    setIsOpen(open)
  }, [open]);


  return (
    <>
      {isOpen && (
        <S.Container>
          <div>  
            <a href="#fechar" title="Fechar" className="fechar" onClick={closed}>x</a>

            {children}
          </div>
        </S.Container>
      )}
    </>
  )
}