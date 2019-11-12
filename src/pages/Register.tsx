import * as React from 'react';
import { Formik, Form } from 'formik';
import { useRegisterMutation } from '../generated/graphql';
import { RouteComponentProps } from 'react-router-dom';
import { validationSchema } from '../utils/validationSchema';
import { FormTextField } from '../components/fields/FormTextField';

interface RegisterProps {}

export const Register: React.FC<RegisterProps & RouteComponentProps> = ({
  history
}) => {
  const [register] = useRegisterMutation();

  return (
    <div>
      <div>
        <h1>Register Form</h1>
      </div>
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        validationSchema={validationSchema}
        onSubmit={async ({ email, password }, { setSubmitting, resetForm }) => {
          setSubmitting(true);

          const response = await register({
            variables: {
              email,
              password
            }
          });

          console.log('TCL: response: ', response);
          resetForm();
          setSubmitting(false);
          history.push('/');
        }}
      >
        {({ handleSubmit, isSubmitting }) => (
          <Form className="form" onSubmit={handleSubmit}>
            <div className="input-row">
              <FormTextField placeholder="Email" name="email" type="text" />
            </div>
            <div className="input-row">
              <FormTextField
                placeholder="Password"
                name="password"
                type="password"
              />
            </div>
            <div className="input-row">
              <button type="submit" disabled={isSubmitting}>
                Login
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};
