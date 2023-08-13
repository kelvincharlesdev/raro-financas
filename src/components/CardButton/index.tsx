import './style.css';

export const CardButton = () => {
  return (
    <button className="btn">
      <figure className="img-plus">
        <img
          className="plus-sm"
          src="src/assets/plus-sm.svg"
          alt="Imagem de finanças"
        />
      </figure>
      TRANSAÇÃO
    </button>
  );
};
