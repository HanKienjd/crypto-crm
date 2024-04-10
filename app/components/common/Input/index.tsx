
type Props = {
  type: "text" | string;
  required?: boolean;
  placeholder?: string;
}

const Input = ({ type, required, placeholder }: Props) => {
  return (
    <input type={type} required={required} className='w-full rounded-lg border border-gray-300 border-spacing-1 focus:ring-blue-500 focus:border-blue-500 p-1.5' placeholder={placeholder} />
  )
}

export default Input;