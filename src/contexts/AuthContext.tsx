import { useRouter } from 'next/router';
import { createContext, useEffect, useMemo, useState } from 'react';
import {
  useLoginMutation,
  useLogoutMutation,
  useMeQuery,
} from '../generated/graphql';

type SignInData = {
  usernameOrEmail: string;
  password: string;
  remember: boolean;
};

type User = {
  __typename?: 'User';
  id: number;
  username: string;
};

type AuthContextType = {
  isAuthenticated: boolean;
  userData: User | null;
  // eslint-disable-next-line no-unused-vars
  signIn: (data: SignInData) => Promise<User | Error>;
  signOut: () => void;
};

const AuthContext = createContext({} as AuthContextType);

function AuthProvider({ children }: any) {
  const { data, loading } = useMeQuery();
  const [login] = useLoginMutation();
  const [logout] = useLogoutMutation();

  const router = useRouter();

  const [userData, setUserData] = useState<User | null>(null);

  const isAuthenticated = !!userData;

  useEffect(() => {
    if (data && data.me) {
      setUserData(data.me);
    } else if (!loading) {
      router.push('/user/login');
    }
  }, []);

  async function signIn({ usernameOrEmail, password, remember }: SignInData) {
    const response = await login({
      variables: { usernameOrEmail, password, remember },
    });

    if (response.data?.login?.username) {
      return response.data.login;
    }
    return new Error('username/email or password wrong');
  }

  async function signOut() {
    await logout();
    setUserData(null);
    router.push('/user/login');
  }

  const props = useMemo(
    () => ({
      userData,
      isAuthenticated,
      signIn,
      signOut,
    }),
    [userData, isAuthenticated]
  );

  return <AuthContext.Provider value={props}>{children}</AuthContext.Provider>;
}

export { AuthContext, AuthProvider };
