import React, { useState } from 'react';

import { asyncStoragePersister, queryClient as client } from '.';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';

interface Props {
  children: React.ReactNode;
}

export function ReactQueryProvider({ children }: Props) {
  const [queryClient] = useState(client);

  return (
    <PersistQueryClientProvider
      client={queryClient}
      persistOptions={{ persister: asyncStoragePersister }}
    >
      {children}
    </PersistQueryClientProvider>
  );
}
