import { CardButton } from '../CardButton';
import { Card } from '../Card';
import './style.css';

interface IDash {
  callback: () => void;
  entradas?: string;
  saidas?: string;
  saldo?: string;
}

export const Dash = ({ callback, entradas, saidas, saldo }: IDash) => {
  return (
    <section className="dash">
      <div className="container">
        <Card
          tipo="Entradas"
          svg="trending-up.svg"
          color="var(--background-svg-up)"
          cardValue={
            Number(entradas).toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }) ?? '0'
          }
        />
        <Card
          tipo="Saida"
          svg="trending-down.svg"
          color="var(--background-svg-down)"
          cardValue={ Number(saidas).toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }) ?? '0'}
        />
        <Card tipo="Saldo" svg="dolar.svg" cardValue={ Number(saldo).toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            }) ?? '0'} />
        <CardButton callback={callback} />
      </div>
    </section>
  );
};
