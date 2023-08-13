import { Trows } from '../Trows';
import './style.css';

export const Table = () => {
  return (
    <table className="table">
      <caption className="title-transations">Histórico de transações</caption>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Data</th>
          <th>Categoria</th>
          <th>Valor</th>
          <th className="tipo">Tipo</th>
        </tr>
      </thead>

      <tbody>
        <Trows
          nome="Valor de celular antigo"
          data="01/08/2023"
          categoria="Renda extra"
          valor="1853,12"
          tipo="+"
        />
        <Trows
          nome="La ele"
          data="01/08/2023"
          categoria="Renda extra"
          valor="1853,12"
          tipo="-"
        />
        <Trows
          nome="La ele 1000x"
          data="01/08/2023"
          categoria="Renda extra"
          valor="1853,12"
          tipo="+"
        />
      </tbody>
    </table>
  );
};
