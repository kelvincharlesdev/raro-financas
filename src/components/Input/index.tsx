import "./style.css"

interface IInput{
    text: string;
    type: string;
    name: string;
    placeholder: string;
    value?: string;

}

export const Input = ({text, type, name, placeholder, value}: IInput) =>{
    return (
        <div className="input">
        <label htmlFor={name}>{text}</label>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          id={name}
          value={value}
        />
      </div>
    )
}