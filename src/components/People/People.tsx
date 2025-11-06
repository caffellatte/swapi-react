import { columns } from './columns';
import { DataTable } from './DataTable';
import { usePeople } from '@/hooks';
import { useState } from 'react';
import { Pagination } from '@/components/common';
import { usePagination, useTable } from '@/hooks';

export default function People() {
  const [search, setSearch] = useState('');

  const [pagination, setPagination] = usePagination({
    pageIndex: 1,
    pageSize: 10
  });

  const { people, isLoading, isError, error, data, isFetching } = usePeople({
    search,
    page: pagination.pageIndex
  });

  const table = useTable({ data: people, columns });

  const totalPages = data?.totalPages ?? 1;
  const hasNextPage = data?.hasNextPage ?? false;
  const hasPreviousPage = data?.hasPreviousPage ?? false;

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} table={table} />
      <Pagination
        pagination={pagination}
        setPagination={setPagination}
        totalPages={totalPages}
        hasNextPage={hasNextPage}
        hasPreviousPage={hasPreviousPage}
      />
    </div>
  );
}
