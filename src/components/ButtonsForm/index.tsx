import "./style.css"

interface IButtonForm {
    imgSrc: string;
    text: string;
    className: string; 
    type?: "button" | "submit";
    
    calllack?: () => void;
  }
  
  export const ButtonForm = ({ className, imgSrc, text, type, calllack }: IButtonForm) => {
    return (
      <button className={className} type={type} onClick={calllack}>
        <img src={imgSrc} alt={text}/>
        {text}
      </button>
    );
  };