function Checkbox({
  label,
  name,
  register,
  validation,
  error,
}) {
  return (
    <div className="checkbox-container">

      <label className="checkbox">

        <input
          type="checkbox"
          {...register(name, validation)}
        />

        {label}

      </label>

      {error && <p className="error">{error.message}</p>}

    </div>
  );
}

export default Checkbox;