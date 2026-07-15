function RadioGroup({
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

      <div className="radio-group">

        {options.map((option) => (
          <label key={option}>
            <input
              type="radio"
              value={option}
              {...register(name, validation)}
            />

            {option}

          </label>
        ))}

      </div>

      {error && <p className="error">{error.message}</p>}

    </div>
  );
}

export default RadioGroup;