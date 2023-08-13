import './style.css';

export const Transations = () => {
  return (
    <section className="transations">
      <div className="container">
        <div className="transation-table">
          <h3 className="title-transations">Histórico de transações</h3>
          <table className="table">
            <thead className='pp'>
              <tr>
                <th>Nome</th>
                <th>Data</th>
                <th>Categoria</th>
                <th>Valor</th>
                <th>Tipo</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Venda de celular antigo</td>
                <td>01/08/2023</td>
                <td>Renda extra</td>
                <td>R$ 1.853,12</td>
                <td>+</td>
              </tr>
              <tr>
                <td>Venda de celular antigo</td>
                <td>01/08/2023</td>
                <td>Renda extra</td>
                <td>R$ 1.853,12</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
