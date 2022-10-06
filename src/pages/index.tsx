import type { GetServerSideProps } from 'next';

export default function Index() {
  return <div>Correios</div>;
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
