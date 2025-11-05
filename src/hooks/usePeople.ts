// usePeople.ts
import { useMemo } from 'react';
import { useQuery, type UseQueryResult } from '@tanstack/react-query';

import { type IPerson } from '@/types';

interface PeopleResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: IPerson[];
}

interface UsePeopleParams {
  search?: string;
  page?: number;
}

const fetchPeople = async ({
  queryKey,
  signal
}: {
  queryKey: [string, { search: string; page: number }];
  signal?: AbortSignal;
}): Promise<PeopleResponse> => {
  const [, { search, page }] = queryKey;

  const url = new URL('https://swapi.py4e.com/api/people/');
  if (search) url.searchParams.set('search', search);
  if (page > 1) url.searchParams.set('page', String(page));

  const response = await fetch(url.toString(), { signal });
  if (!response.ok) {
    throw new Error(
      `Failed to fetch people (status ${String(response.status)})`
    );
  }

  const data = (await response.json()) as PeopleResponse;

  return data;
};

export const usePeople = ({
  search = '',
  page = 1
}: UsePeopleParams = {}): UseQueryResult<
  PeopleResponse & {
    totalPages: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  }
> & {
  people: IPerson[];
} => {
  const query = useQuery({
    queryKey: ['people', { search: search.trim(), page }],
    queryFn: fetchPeople,
    select: (
      data
    ): PeopleResponse & {
      totalPages: number;
      hasNextPage: boolean;
      hasPreviousPage: boolean;
    } => {
      const totalPages = Math.max(1, Math.ceil(data.count / 10));
      return {
        ...data,
        totalPages,
        hasNextPage: Boolean(data.next),
        hasPreviousPage: Boolean(data.previous)
      };
    }
  });

  const people = useMemo(
    () => query.data?.results ?? [],
    [query.data?.results]
  );

  return {
    // eslint-disable-next-line @tanstack/query/no-rest-destructuring
    ...query,
    people
  };
};
