import { ButtonForm } from '../ButtonsForm';
import { Input } from '../Input';

import './style.css';

export const Form = () => {
  return (
    <form className="form">
      <h2 className="title-form">Nova transação</h2>

      <div className="content-form">
        <Input
          text="Nome"
          type="text"
          name="name"
          placeholder="Digite o nome da sua transação"
        />

        <Input
          text="Data"
          type="date"
          name="data"
          placeholder="Digite o nome da sua transação"
        />

        <Input
          text="Categoria"
          type="text"
          name="categoria"
          placeholder="Digite a categoria da transação"
        />

        <Input
          text="Valor"
          type="number"
          name="valor"
          placeholder="Digite o valor da sua transação"
        />

        <div className="input">
          <label htmlFor="tipo">Tipo</label>

          <div className="input-radio">
            <input
              type="radio"
              id="entrada"
              name="tipo"
              value="entrada"
              required
            />
            <label htmlFor="entrada">
              <img src="src/assets/trending-up.svg" alt="Imagem tranding up" />
              Entrada
            </label>

            <input type="radio" id="saida" name="tipo" value="saida" required />
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
