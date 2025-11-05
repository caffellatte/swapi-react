import { columns } from './columns';
import { DataTable } from './DataTable';
import { usePeople } from '@/hooks';
import { useState } from 'react';

export default function People() {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  const { people, isLoading, isError, error, data, isFetching } = usePeople({
    search,
    page
  });

  const totalPages = data?.totalPages ?? 1;

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={people} />
    </div>
  );
}
