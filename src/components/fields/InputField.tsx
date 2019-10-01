import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { FieldProps } from 'formik';

type InputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export const InputField = ({
  field,
  form: _,
  ...props
}: FieldProps & InputProps) => {
  return (
    <div className="input-row">
      <label htmlFor={field.name}>{props.placeholder}</label>
      <input {...field} {...props} />
    </div>
  );
};
