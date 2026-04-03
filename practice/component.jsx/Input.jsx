function Input({ label, type, placeholder, onChange, name, value }) {
  return (
    <div className="flex flex-col">
      <label>{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="border border-gray-400 mb-4"
        onChange={onChange}
        name={name}
        value={value}
      />
    </div>
  );
}
export default Input;
