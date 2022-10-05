import { ApolloClient, InMemoryCache } from '@apollo/client';
import type { NextPageContext } from 'next';

export const createClient = (ctx?: NextPageContext) =>
  new ApolloClient({
    uri: process.env.NEXT_PUBLIC_API_URL as string,
    credentials: 'include',
    headers: {
      cookie:
        (typeof window === 'undefined'
          ? ctx?.req?.headers.cookie
          : undefined) || '',
    },
    cache: new InMemoryCache({
      typePolicies: {
        Query: {
          fields: {
            movements: {
              keyArgs: [],
              // @ts-ignore
              merge(existing: any, incoming: any, { args: { skip } }) {
                const merged = existing ? existing.slice(0) : [];
                // eslint-disable-next-line no-plusplus
                for (let i = 0; i < incoming.length; ++i) {
                  merged[skip + i] = incoming[i];
                }
                return merged;
              },
            },
          },
        },
      },
    }),
  });
