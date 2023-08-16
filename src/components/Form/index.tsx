import { ITransaction } from '../../types';
import { ButtonForm } from '../ButtonsForm';
import { Input } from '../Input';

import './style.css';

interface IForm {
  callBack: (transacaoInformacao: ITransaction) => void;
  fecharModal: (mostratModal: boolean) => void;
}

export const Form = ({ callBack, fecharModal }: IForm) => {
  const transacaoInformacao = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const inputValue = {
      nome: (e.currentTarget.elements.namedItem('name') as HTMLInputElement)
        .value,
      data: (e.currentTarget.elements.namedItem('data') as HTMLInputElement)
        .value,
      categoria: (
        e.currentTarget.elements.namedItem('categoria') as HTMLInputElement
      ).value,
      valor: (e.currentTarget.elements.namedItem('valor') as HTMLInputElement)
        .value,
      tipo: (e.currentTarget.elements.namedItem('tipo') as HTMLInputElement)
        .value
    };

    callBack(inputValue);
    e.currentTarget.reset();
  };

  return (
    <form className="form" onSubmit={transacaoInformacao}>
      <h2 className="title-form">Nova transação</h2>

      <div className="content-form">
        <Input
          id="name"
          text="Nome"
          type="text"
          name="name"
          placeholder="Digite o nome da sua transação"
        />

        <Input
          id="data"
          text="Data"
          type="date"
          name="data"
          placeholder="Digite o nome da sua transação"
        />

        <Input
          id="categoria"
          text="Categoria"
          type="text"
          name="categoria"
          placeholder="Digite a categoria da transação"
        />

        <Input
          id="valor"
          text="valor"
          type="number"
          name="valor"
          placeholder="Digite o valor da sua transação"
        />

        <div className="input">
          <label htmlFor="tipo">Tipo</label>

          <div className="input-radio">
            <input type="radio" id="entrada" name="tipo" value="+" required />
            <label htmlFor="entrada">
              <img src="src/assets/trending-up.svg" alt="Imagem tranding up" />
              Entrada
            </label>

            <input type="radio" id="saida" name="tipo" value="-" required />
            <label htmlFor="saida">
              <img
                src="src/assets/trending-down.svg"
                alt="Imagem tranding down"
              />
              Saída
            </label>
          </div>
        </div>
      </div>

      <div className="btns">
        <ButtonForm
          className="btn-modal cancelar"
          imgSrc="src/assets/x.svg"
          text="Cancelar"
          calllack={() => fecharModal(false)}
        />
        <ButtonForm
          className="btn-modal adicionar"
          imgSrc="src/assets/check.svg"
          text="Adicionar"
          type="submit"
        />
      </div>
    </form>
  );
};
