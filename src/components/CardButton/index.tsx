import './style.css';
import '../../assets/plus-sm.svg'
interface ICardButton {
  callback: () => void;
}

export const CardButton = ({ callback }: ICardButton) => {
  return (
    <button className="btn" onClick={callback}>
      <figure className="img-plus">
        <img
          className="plus-sm"
          src="src/assets/plus-sm.svg"
          alt="Imagem de finanças"
        />
      </figure>
      <h2 className="title-transacao">TRANSAÇÃO</h2>
    </button>
  );
};
