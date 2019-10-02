import * as React from 'react';
import { useUsersQuery } from '../generated/graphql';

interface HomePageProps {}

export const HomePage: React.FC<HomePageProps> = () => {
  const {} = useUsersQuery({ fetchPolicy: 'network-only' });
  return (
    <div>
      <h3>Home Page</h3>
    </div>
  );
};
