const TextInput = ({ label, type, value, onChange, required }) => {
  return (
    <div className="flex flex-col ">
      <label className="block mb-2 text-gray-700" htmlFor={label}>
        {label}
      </label>
      <input
        className="border border-gray-300 p-2 rounded text-gray-700"
        type={type}
        id={label}
        name={label}
        value={value}
        onChange={onChange}
        required={required}
      />
    </div>
  );
};

export default TextInput;
