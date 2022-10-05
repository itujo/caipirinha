import type { GetServerSideProps } from 'next';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useMeQuery } from '../generated/graphql';

export default function Index() {
  const { data } = useMeQuery();
  const { signOut } = useContext(AuthContext);
  return (
    <div>
      <button type='button' onClick={signOut}>
        sair
      </button>
      <h1 className='text-3xl font-bold underline'>hello world</h1>
      {data && data.me?.username}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { qid } = ctx.req.cookies;

  if (!qid) {
    return {
      redirect: {
        destination: '/user/login',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
