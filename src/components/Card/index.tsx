import './style.css';

interface IDash {
  tipo: string;
  svg: string;
  cardValue: string;
  color?: string;
}

export const Card = ({ tipo, svg, cardValue, color }: IDash) => {
  const split = cardValue.split(',');

  return (
    <div className="card">
      <div className="card-inf">
        <h3 className="card-title">{tipo}</h3>
        <figure className="svg" style={{ background: color }}>
          <img src={svg} alt="Imagem de Tranding" />
        </figure>
      </div>

      <p className="card-value">
        {split[0]},<span className="value-cents">{split[1]}</span>
      </p>
    </div>
  );
};
