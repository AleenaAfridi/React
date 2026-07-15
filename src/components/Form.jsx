import { useForm } from "react-hook-form";
import InputField from "./InputField";
import RadioGroup from "./RadioGroup";
import SelectField from "./SelectField";
import Checkbox from "./Checkbox";

function Form() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const password = watch("password");

  function onSubmit(data) {
    console.log(data);
    alert("Registration Successful!");
    reset();
  }

  return (
    <div className="form-card">
      <h1>Registration Form</h1>
      <p className="subtitle">
        Fill in the details below to create your account.
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="row">

          <InputField
            label="First Name"
            type="text"
            placeholder="Enter first name"
            name="firstName"
            register={register}
            validation={{
              required: "First name is required",
            }}
            error={errors.firstName}
          />

          <InputField
            label="Last Name"
            type="text"
            placeholder="Enter last name"
            name="lastName"
            register={register}
            validation={{
              required: "Last name is required",
            }}
            error={errors.lastName}
          />

        </div>

        <div className="row">

          <InputField
            label="Email"
            type="email"
            placeholder="Enter your email"
            name="email"
            register={register}
            validation={{
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Please enter a valid email",
              },
            }}
            error={errors.email}
          />

          <InputField
            label="Password"
            type="password"
            placeholder="Enter password"
            name="password"
            register={register}
            validation={{
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Minimum 8 characters",
              },
            }}
            error={errors.password}
          />

        </div>

        <div className="row">

          <InputField
            label="Confirm Password"
            type="password"
            placeholder="Confirm password"
            name="confirmPassword"
            register={register}
            validation={{
              required: "Confirm your password",
              validate: (value) =>
                value === password || "Passwords do not match",
            }}
            error={errors.confirmPassword}
          />

          <RadioGroup
            label="Gender"
            name="gender"
            register={register}
            validation={{
              required: "Please select gender",
            }}
            options={[
              "Male",
              "Female",
            ]}
            error={errors.gender}
          />

        </div>

        <SelectField
          label="Course"
          name="course"
          register={register}
          validation={{
            required: "Select your course",
          }}
          options={[
            "React",
            "Node.js",
            "JavaScript",
            "Python",
            "Java",
          ]}
          error={errors.course}
        />

        <Checkbox
          label="I agree to the Terms & Conditions"
          name="terms"
          register={register}
          validation={{
            required: "You must accept the terms",
          }}
          error={errors.terms}
        />

        <button type="submit" className="submit-btn">
          Register
        </button>

      </form>
    </div>
  );
}

export default Form;