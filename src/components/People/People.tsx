import { columns } from './columns';
import { DataTable } from './DataTable';
import { usePeople } from '@/hooks';
import { useState } from 'react';
import { Pagination } from '@/components/common';
import { usePagination } from '@/hooks/usePagination';

export default function People() {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);

  const [pagination, setPagination] = usePagination({
    pageIndex: 1,
    pageSize: 10
  });

  const { people, isLoading, isError, error, data, isFetching } = usePeople({
    search,
    page: pagination.pageIndex
  });

  const totalPages = data?.totalPages ?? 1;
  const hasNextPage = data?.hasNextPage ?? false;
  const hasPreviousPage = data?.hasPreviousPage ?? false;

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={people} />
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
