function SelectField({
  label,
  name,
  options,
  register,
  validation,
  error,
}) {
  return (
    <div className="input-group">

      <label>
        {label} <span>*</span>
      </label>

      <select
        {...register(name, validation)}
      >
        <option value="">Select Course</option>

        {options.map((option) => (
          <option
            key={option}
            value={option}
          >
            {option}
          </option>
        ))}

      </select>

      {error && <p className="error">{error.message}</p>}

    </div>
  );
}

export default SelectField;