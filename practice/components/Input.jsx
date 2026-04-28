function Input({ label, type, placeholder, onChange, name }) {
  return (
    <div className="flex flex-col">
      <label>{label}</label>

      <input
        type={type}
        placeholder={placeholder}
        className="border border-gray-400 mb-4"
        onChange={onChange}
        name={name}
      />
    </div>
  );
}
export default Input;
