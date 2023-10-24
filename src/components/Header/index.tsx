import './style.css';

export const Header = () => {
  return (
    <header>
      <div className="container">
        <figure className="logo">
          <img src="credit-card.svg" alt="Imagem de finanças" />
          <figcaption className="logo-title">Raro Finanças</figcaption>
        </figure>

        <div className="user">
          <div className="user-inf">
            <p className="user-name">Kelvin Charles</p>
            <p className="user-email">kelvin@raroacademy.com</p>
          </div>
          <img
            className="user-img"
            src="foto-perfil.png"
            alt="Imagem do  usuário"
          />
        </div>
      </div>
    </header>
  );
};
