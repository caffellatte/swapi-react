import { useMemo } from 'react';
import { useQuery, type UseQueryResult } from '@tanstack/react-query';

import { type TPeople } from '@/types';

interface PeopleIdResponse extends TPeople {}

interface UsePeopleIdParams {
  id: number | null;
  enabled?: boolean;
}

const fetchPeopleId = async ({
  queryKey,
  signal
}: {
  queryKey: [string, { id: number | null }];
  signal?: AbortSignal;
}): Promise<PeopleIdResponse> => {
  const [, { id }] = queryKey;

  // TODO: move URL to .env
  const url = new URL(`https://swapi.dev/api/people/${id}`);

  const response = await fetch(url.toString(), { signal });
  if (!response.ok) {
    throw new Error(
      `Failed to fetch people by id (status ${String(response.status)})`
    );
  }

  const data = (await response.json()) as PeopleIdResponse;

  return data;
};

export const usePeopleId = ({
  id,
  enabled = false
}: UsePeopleIdParams): UseQueryResult<PeopleIdResponse> & {
  peopleId: TPeople | null;
} => {
  const query = useQuery({
    queryKey: ['people-id', { id }],
    queryFn: fetchPeopleId,
    enabled: enabled && Number.isFinite(id),
    staleTime: Infinity,
    select: (data): PeopleIdResponse => {
      return {
        ...data
      };
    }
  });

  const peopleId = useMemo(() => query.data ?? null, [query.data?.url]);

  return {
    // eslint-disable-next-line @tanstack/query/no-rest-destructuring
    ...query,
    peopleId
  };
};
