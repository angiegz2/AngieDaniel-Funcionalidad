import React, { useEffect } from 'react';
import { useLazyQuery } from '@apollo/client';
import { GET_USER_BY_ID } from '@/src/utils/gql/queries/users';

export async function getServerSideProps(context: { params: { id: string } }) {
  const id = context.params.id;
  return {
    props: { id },
  };
}

const Index = ({ id }: { id: string }) => {
  const [getUser] = useLazyQuery(GET_USER_BY_ID, {
    fetchPolicy: 'network-only',
    onCompleted(data) {
      console.log('user', data);
    },
  });

  useEffect(() => {
    getUser({ variables: { userId: id } });
  }, [id]);

  return <div>Hola Mundo Dinamica:{id}</div>;
};

export default Index;
