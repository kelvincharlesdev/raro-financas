import { ITransaction } from '../../types';
import { Table } from '../Table';
import './style.css';

interface ITransactions {
  transactions: ITransaction[];
}

export const Transations = ({transactions}: ITransactions) => {
  return (
    <section className="transations">
      <div className="container">
        <h3 className="title-transations">Histórico de transações</h3>
        <div className="transation-table">
          <Table transactions={transactions} />
        </div>
      </div>
    </section>
  );
};
