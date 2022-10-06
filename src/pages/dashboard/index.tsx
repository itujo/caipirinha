import type { GetServerSideProps } from 'next';

export default function Index() {
  return (
    <div>
      <h1>hello world!</h1>
      <span>glad to see you here at the dashboard page</span>
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
