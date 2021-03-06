import { Action, QueryResponse } from '../../client/client.types';

export type QueryApi<T> = {
  loading: boolean;
  query: () => Promise<QueryResponse<T>>;
} & QueryResponse<T>;

export type QueryProps<T, R> = {
  initFetch?: boolean;
  action: Action<R>;
  children: (props: QueryApi<T>) => any;
};
