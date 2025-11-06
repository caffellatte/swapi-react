import {
  Button,
  DialogContent,
  DialogTitle,
  DialogHeader,
  DialogDescription,
  DialogFooter
} from '@/components/ui';
import { peopleId, peopleDialogOpen } from '@/atoms';
import { useAtom } from 'jotai';

export default function PeopleDialog() {
  const [id, setPeopleId] = useAtom(peopleId);
  const [, setPeopleDialogOpen] = useAtom(peopleDialogOpen);

  return (
    <DialogContent
      showCloseButton={false}
      onInteractOutside={() => {
        setPeopleDialogOpen(false);
        setPeopleId(null);
      }}
    >
      <DialogHeader>
        <DialogTitle>Details</DialogTitle>
        <DialogDescription>
          Details about people with id: {id}
        </DialogDescription>
      </DialogHeader>

      <DialogFooter>
        <Button
          onClick={() => {
            console.log('DialogClose');
            setPeopleDialogOpen(false);
            setPeopleId(null);
          }}
        >
          Close
        </Button>
      </DialogFooter>
    </DialogContent>
  );
}
