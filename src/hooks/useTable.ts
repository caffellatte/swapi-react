import type { Dispatch, SetStateAction } from 'react';

import {
  type ColumnDef,
  type PaginationState,
  getCoreRowModel,
  useReactTable
} from '@tanstack/react-table';

interface Props<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  pagination: PaginationState;
  totalPages: number;
  setPagination: Dispatch<SetStateAction<PaginationState>>;
}

export function useTable<TData, TValue>({
  data,
  columns,
  pagination,
  totalPages,
  setPagination
}: Props<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true,
    pageCount: totalPages ?? -1, // -1 tells the table we don’t know yet
    state: { pagination },
    onPaginationChange: setPagination
  });

  return table;
}
