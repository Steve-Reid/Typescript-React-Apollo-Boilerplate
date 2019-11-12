import * as React from 'react';
import { Formik, Form } from 'formik';
import { RouteComponentProps } from 'react-router-dom';
import { validationSchema } from '../utils/validationSchema';
import { useLoginMutation, MeDocument, MeQuery } from '../generated/graphql';
import { setAccessToken } from '../accessToken';
import { FormTextField } from '../components/fields/FormTextField';

interface LoginProps {}

export const Login: React.FC<LoginProps & RouteComponentProps> = ({
  history
}) => {
  const [login] = useLoginMutation();
  return (
    <div>
      <div>
        <h1>Login Form</h1>
      </div>
      <Formik
        initialValues={{
          email: '',
          password: ''
        }}
        validationSchema={validationSchema}
        onSubmit={async ({ email, password }, { setSubmitting, resetForm }) => {
          setSubmitting(true);

          const response = await login({
            variables: {
              email,
              password
            },
            update: (store, { data }) => {
              if (!data) {
                return null;
              }
              store.writeQuery<MeQuery>({
                query: MeDocument,
                data: {
                  me: data.login.user
                }
                // MeQuery user must match login user
              });
            }
          });

          console.log('TCL: response: ', response);

          if (response && response.data) {
            setAccessToken(response.data.login.accessToken);
          }
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
