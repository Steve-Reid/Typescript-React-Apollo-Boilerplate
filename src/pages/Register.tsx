import * as React from 'react';
import { Formik, Field } from 'formik';
import { InputField } from '../components/fields/InputField';
import { useRegisterMutation } from '../generated/graphql';
import { RouteComponentProps } from 'react-router-dom';
import { validationSchema } from '../utils/validationSchema';
import Error from '../utils/Error';

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
        {({
          errors,
          touched,
          handleSubmit,
          isSubmitting,
          handleChange,
          handleBlur
        }) => (
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
            <Field
              name="email"
              id="email"
              placeholder="Email"
              onChange={handleChange}
              onBlur={handleBlur}
              component={InputField}
              type="email"
              className={touched.email && errors.email ? 'has-error' : null}
            />
            <Error touched={touched.email} message={errors.email} />
            <Field
              name="password"
              id="password"
              placeholder="Password"
              onChange={handleChange}
              onBlur={handleBlur}
              component={InputField}
              type="password"
              className={
                touched.password && errors.password ? 'has-error' : null
              }
            />
            <Error touched={touched.password} message={errors.password} />
            <div className="input-row">
              <button type="submit" disabled={isSubmitting}>
                Register
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};
