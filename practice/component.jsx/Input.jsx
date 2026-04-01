function Input({ label, type, placeholder }) {
  return (
    <div className="flex flex-col">
      <label>{label}</label>

      <input
        type="search"
        placeholder={placeholder}
        className="border border-gray-400 mb-4"
      />
    </div>
  );
}
export default Input;
