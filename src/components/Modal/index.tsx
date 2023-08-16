import { ITransaction } from '../../types';
import { Form } from '../Form';
import './style.css';

interface IModal {
  mostrarModal: boolean;
  callBack: ( transacaoInformacao : ITransaction) => void;
  fecharModal: (mostrarModal: boolean) => void
  
}

export const Modal = ({mostrarModal, callBack, fecharModal}: IModal) => {


  return (
    <div className={`modal ${mostrarModal && 'open'}`}>
      <div className="content-modal">
        <Form callBack={callBack} fecharModal={(mostrarModal: boolean) => fecharModal(mostrarModal)} />
      </div>
    </div>
  );
};
