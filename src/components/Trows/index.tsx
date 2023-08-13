interface ITrows {
  nome: string;
  data: string;
  categoria: string;
  valor: string;
  tipo: string;
}

export const Trows = ({ nome, data, categoria, valor, tipo }: ITrows) => {
  return (
    <tr>
      <td>{nome}</td>
      <td>{data}</td>
      <td>{categoria}</td>
      <td>{valor}</td>
      <td>{tipo}</td>
    </tr>
  );
};
