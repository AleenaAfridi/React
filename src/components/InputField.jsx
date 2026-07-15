function InputField({
  label,
  type,
  placeholder,
  name,
  register,
  validation,
  error
}) {
  return (
    <div className="input-group">
      <label>
        {label} <span>*</span>
      </label>

      <input
        type={type}
        placeholder={placeholder}
        {...register(name, validation)}
      />

      {error && <p className="error">{error.message}</p>}
    </div>
  );
}

export default InputField;