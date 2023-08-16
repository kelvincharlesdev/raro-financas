import { ITransaction } from '../../types';
import { Trows } from '../Trows';
import './style.css';

interface ITable {
  transactions: ITransaction[];
}

export const Table = ( {transactions}:ITable) => {
  return (
    <table className="table">
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
          {transactions.map(transaction => (
            <Trows key={Math.random()}
              nome={transaction.nome} 
              data={transaction.data}
              categoria={transaction.categoria}
              tipo={transaction.tipo}
              valor={Number(transaction.valor).toLocaleString("pt-BR", {style: "currency", currency : "BRL"})}
              />
          ))}
      </tbody>
    </table>
  );
};
