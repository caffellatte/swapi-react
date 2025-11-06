import { type TPeople } from '@/types';
import { type ColumnDef } from '@tanstack/react-table';

import { Button } from '@/components/ui';

const columns: ColumnDef<TPeople>[] = [
  {
    accessorKey: 'name',
    header: 'Name'
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const people = row.original;

      return <Button>{people.url}</Button>;
    }
  }
];

export { columns };
