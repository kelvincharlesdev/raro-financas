import './style.css';

interface IInput {
  text: string;
  type: string;
  name: string;
  placeholder: string;
  value?: string;
  id: string;
}

export const Input = ({ text, type, name, placeholder, value, id }: IInput) => {
  return (
    <div className="input">
      <label htmlFor={name}>{text}</label>
      <input
        id={id}
        type={type}
        name={name}
        step={'any'}
        placeholder={placeholder}
        value={value}
        required
      />
    </div>
  );
};
