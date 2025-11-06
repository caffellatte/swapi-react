import { type TPeople } from '@/types';
import { type ColumnDef } from '@tanstack/react-table';
import { useAtom } from 'jotai';
import { peopleId, peopleDialogOpen } from '@/atoms';

import { Button } from '@/components/ui';

const columns: ColumnDef<TPeople>[] = [
  {
    accessorKey: 'name',
    header: 'Name'
  },
  {
    accessorKey: 'height',
    header: 'Height'
  },
  {
    accessorKey: 'mass',
    header: 'Mass'
  },
  {
    accessorKey: 'hair_color',
    header: 'Hair Color'
  },
  {
    accessorKey: 'skin_color',
    header: 'Skin Color'
  },
  {
    accessorKey: 'eye_color',
    header: 'Eye Color'
  },
  {
    accessorKey: 'birth_year',
    header: 'Birth Year'
  },
  {
    accessorKey: 'gender',
    header: 'Gender'
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

export { columns };
