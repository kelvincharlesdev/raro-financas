import { CardButton } from '../CardButton';
import { Card } from '../Card';
import './style.css';


export const Dash = () => {
  return (
    <section className="dash">
        <div className="container">
          <Card tipo="Entradas" svg="trending-up.svg" color='var(--background-svg-up)' cardValue="1853,12" />
          <Card tipo="Saida" svg="trending-down.svg" color='var(--background-svg-down)' cardValue="1853,12" />
          <Card tipo="Entradas" svg="dolar.svg" cardValue="1853,12" />
          <CardButton/>
        </div>
    </section>
  );
};
