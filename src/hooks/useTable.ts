import {
  type ColumnDef,
  getCoreRowModel,
  useReactTable
} from '@tanstack/react-table';

interface Props<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

export function useTable<TData, TValue>({
  data,
  columns
}: Props<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    manualPagination: true
  });

  return table;
}
