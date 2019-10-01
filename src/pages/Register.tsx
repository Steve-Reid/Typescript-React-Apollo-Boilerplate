import * as React from 'react';
import { Formik, Field } from 'formik';
import { InputField } from '../components/fields/InputField';
import { useRegisterMutation } from '../generated/graphql';

interface RegisterProps {}

export const Register: React.FC<RegisterProps> = () => {
  const [register] = useRegisterMutation();

  return (
    <div>
      <div>
        <h1>Register Form</h1>
      </div>
      <Formik
        onSubmit={async ({ email, password }) => {
          console.log('Form submitted!');

          const response = await register({
            variables: {
              email,
              password
            }
          });

          console.log('TCL: response: ', response);
        }}
        initialValues={{
          email: '',
          password: ''
        }}
      >
        {({ handleSubmit }) => (
          <form className="form" onSubmit={handleSubmit}>
            {/* <Field
              name="firstName"
              placeholder="First Name"
              component={InputField}
            />
            <Field
              name="lastName"
              placeholder="Last Name"
              component={InputField}
            /> */}
            <Field name="email" placeholder="Email" component={InputField} />
            <Field
              name="password"
              placeholder="Password"
              component={InputField}
              type="password"
            />
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
};
