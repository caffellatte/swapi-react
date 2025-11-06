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
import { usePeopleId } from '@/hooks';

export default function PeopleDialog() {
  const [id, setPeopleId] = useAtom(peopleId);
  const [, setPeopleDialogOpen] = useAtom(peopleDialogOpen);

  // TODO: handler loading & error state
  const {
    peopleId: details,
    isLoading,
    isError,
    error,
    data,
    isFetching
  } = usePeopleId({
    id: id,
    enabled: !!id
  });

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

      <div>{details?.name}</div>

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
