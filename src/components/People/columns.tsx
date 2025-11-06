import { type TPeople } from '@/types';
import { type ColumnDef } from '@tanstack/react-table';
import { useAtom } from 'jotai';
import { peopleId } from '@/atoms';

import { Button } from '@/components/ui';

const columns: ColumnDef<TPeople>[] = [
  {
    accessorKey: 'name',
    header: 'Name'
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const [, setPeopleId] = useAtom(peopleId);
      const url = row.original.url;
      const id = url.split('/').at(-2);

      if (id) {
        return (
          <Button disabled={!id} onClick={() => setPeopleId(Number(id))}>
            Details
          </Button>
        );
      }
    }
  }
];

export { columns };
