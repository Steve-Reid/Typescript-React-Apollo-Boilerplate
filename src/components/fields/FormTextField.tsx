import * as React from 'react';
import { FieldAttributes, useField } from 'formik';
import { TextField } from '@material-ui/core';

interface TextFieldProps {}

export const FormTextField: React.FC<FieldAttributes<{}>> = ({
  type,
  placeholder,
  ...props
}) => {
  const [field, meta] = useField<{}>(props);
  const errorText = meta.error && meta.touched ? meta.error : '';

  return (
    <TextField
      type={type}
      placeholder={placeholder}
      {...field}
      helperText={errorText}
      error={!!errorText}
    />
  );
};
