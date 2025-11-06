import { type ChangeEvent } from 'react';
import { DataTable, Pagination } from '@/components/common';
import { useDebounce, usePagination, usePeople, useTable } from '@/hooks';
import { Button, Input, Spinner } from '@/components/ui';

import { type TPeople } from '@/types';
import { type ColumnDef, type Row } from '@tanstack/react-table';
import { useAtom } from 'jotai';
import { peopleId, peopleDialogOpen, peopleSearch } from '@/atoms';
import { useQueryClient } from '@tanstack/react-query';

export function PeoplePage() {
  const queryClient = useQueryClient();

  const [peopleSearchTerm, setPeopleSearchTerm] = useAtom(peopleSearch);

  const debouncedSearchTerm = useDebounce(peopleSearchTerm, 300);

  const [pagination, setPagination] = usePagination({
    pageIndex: 0,
    pageSize: 10
  });

  // TODO: handler loading & error state
  const { people, isLoading, isError, error, isFetching, data } = usePeople({
    search: String(debouncedSearchTerm),
    page: pagination.pageIndex
  });

  const createCellRenderer =
    (key: keyof TPeople) =>
    ({ row }: { row: Row<TPeople> }) =>
      getCellValue(row, key);

  const columns: ColumnDef<TPeople>[] = [
    {
      accessorKey: 'name',
      header: 'Name'
    },
    {
      accessorKey: 'height',
      header: 'Height',
      cell: createCellRenderer('height')
    },
    {
      accessorKey: 'mass',
      header: 'Mass',
      cell: createCellRenderer('mass')
    },
    {
      accessorKey: 'hair_color',
      header: 'Hair Color',
      cell: createCellRenderer('hair_color')
    },
    {
      accessorKey: 'skin_color',
      header: 'Skin Color',
      cell: createCellRenderer('skin_color')
    },
    {
      accessorKey: 'eye_color',
      header: 'Eye Color',
      cell: createCellRenderer('eye_color')
    },
    {
      accessorKey: 'birth_year',
      header: 'Birth Year',
      cell: createCellRenderer('birth_year')
    },
    {
      accessorKey: 'gender',
      header: 'Gender',
      cell: createCellRenderer('gender')
    },
    {
      id: 'actions',
      cell: ({ row }) => {
        const [, setPeopleId] = useAtom(peopleId);
        const [, setPeopleDialogOpen] = useAtom(peopleDialogOpen);
        const url = row.original.url;
        const id = url.split('/').at(-2);

        if (id) {
          return (
            <Button
              onClick={() => {
                setPeopleId(Number(id));
                setPeopleDialogOpen(true);
              }}
            >
              Details
            </Button>
          );
        }
      }
    }
  ];

  const table = useTable({
    data: people,
    columns,
    pagination,
    setPagination,
    totalPages: data?.totalPages ?? 1
  });

  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPeopleSearchTerm(event.target.value);
    setPagination((prevState) => {
      return { pageIndex: 0, pageSize: prevState.pageSize };
    });
  };

  function getCellValue<K extends keyof TPeople>(
    row: Row<TPeople>,
    key: K
  ): TPeople[K] {
    const originalValue = row.original[key];

    if (!peopleSearchTerm) {
      return originalValue;
    }

    const url = row.original.url;
    const id = url.split('/').at(-2);

    const data = queryClient.getQueryData<TPeople>([
      'people-id',
      { id: Number(id) }
    ]);

    return data?.[key] ?? originalValue;
  }

  return (
    <div className="container mx-auto py-10">
      <div className="flex flex-col gap-5">
        <Input
          type="text"
          placeholder="Search..."
          value={peopleSearchTerm}
          onChange={handleSearchInputChange}
        />
        {!isLoading ? (
          <>
            <DataTable columns={columns} table={table} />
            <Pagination table={table} />
          </>
        ) : (
          <div className="flex items-center justify-center p-16">
            <Spinner className="size-6" />
          </div>
        )}
      </div>
    </div>
  );
}
