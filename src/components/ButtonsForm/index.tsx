import "./style.css"

interface IButtonForm {
    imgSrc: string;
    text: string;
    className: string; 
    type?: "button" | "submit";
  }
  
  export const ButtonForm = ({ className, imgSrc, text, type }: IButtonForm) => {
    return (
      <button className={className} type={type}>
        <img src={imgSrc} alt={text}/>
        {text}
      </button>
    );
  };