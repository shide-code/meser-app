import {
  QueryClient,
  DefaultOptions,
  UseQueryOptions,
  UseMutationOptions,
  MutationCache,
} from "@tanstack/react-query";
import { AxiosError } from "axios";

const queryConfig: DefaultOptions = {
  queries: {
    staleTime: 1000 * 60,
    retry: 0,
    refetchOnWindowFocus: false,
  },
};

const mutationCache: MutationCache = new MutationCache();

export const queryClient = new QueryClient({
  defaultOptions: queryConfig,
  mutationCache,
});

export type ExtractFnReturnType<
  FnType extends (...args: unknown[]) => unknown,
> = Awaited<ReturnType<FnType>>;

export type QueryConfig<QueryFnType extends (...args: unknown[]) => unknown> =
  Omit<
    UseQueryOptions<ExtractFnReturnType<QueryFnType>>,
    "queryKey" | "queryFn"
  >;

export type MutationConfig<
  MutationFnType extends (...args: unknown[]) => unknown,
> = UseMutationOptions<
  ExtractFnReturnType<MutationFnType>,
  AxiosError,
  Parameters<MutationFnType>[0]
>;
