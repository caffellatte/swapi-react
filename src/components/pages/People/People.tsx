import { type ChangeEvent, useState, useEffect } from 'react';
import { columns } from './columns';
import { DataTable } from './DataTable';
import { Pagination } from '@/components/common';
import { useDebounce, usePagination, usePeople, useTable } from '@/hooks';
import { Input } from '@/components/ui';
import { useAtom } from 'jotai';
import { peopleId } from '@/atoms';

export default function People() {
  const [id] = useAtom(peopleId);
  const [search, setSearch] = useState('');

  const debouncedSearchTerm = useDebounce(search, 300);

  const [pagination, setPagination] = usePagination({
    pageIndex: 0,
    pageSize: 10
  });

  // TODO: handler loading & error state
  const { people, isLoading, isError, error, data, isFetching } = usePeople({
    search: String(debouncedSearchTerm),
    page: pagination.pageIndex
  });

  const table = useTable({
    data: people,
    columns,
    pagination,
    setPagination,
    totalPages: data?.totalPages ?? 1
  });

  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
    setPagination((prevState) => {
      return { pageIndex: 0, pageSize: prevState.pageSize };
    });
  };

  useEffect(() => {
    console.log('id:', id);
  }, [id]);

  return (
    <div className="container mx-auto py-10">
      <Input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={handleSearchInputChange}
      />
      <DataTable columns={columns} table={table} />
      <Pagination table={table} />
    </div>
  );
}
