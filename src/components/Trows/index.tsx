import './style.css';

import { ITransaction } from '../../types';

export const Trows = ({ nome, data, categoria, valor, tipo }: ITransaction) => {
  const typeClass = tipo === '+' ? 'green-text' : 'red-text';
  return (
    <tr>
      <td>{nome}</td>
      <td>{new Date(data).toLocaleDateString('pt-br')}</td>
      <td>{categoria}</td>
      <td>{valor}</td>
      <td className={` ${typeClass}`}>{tipo}</td>
    </tr>
  );
};
