import { type TPeople } from '@/types';
import { type ColumnDef } from '@tanstack/react-table';

const columns: ColumnDef<TPeople>[] = [
  {
    accessorKey: 'name',
    header: 'Name'
  }
];

export { columns };
