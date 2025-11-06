import {
  DialogContent,
  DialogTitle,
  DialogHeader,
  DialogDescription,
  DefaultDialogClose
} from '@/components/ui';
import { peopleId, peopleDialogOpen } from '@/atoms';
import { useAtom } from 'jotai';
import { usePeopleId } from '@/hooks';
import { PeopleForm } from '@/components/forms';

export function PeopleDialog() {
  const [id, setPeopleId] = useAtom(peopleId);
  const [, setPeopleDialogOpen] = useAtom(peopleDialogOpen);

  // TODO: handler loading & error state
  const {
    peopleId: details,
    isLoading,
    // isError,
    // error,
    data,
    // isFetching,
    isSuccess
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
        <DialogTitle>{details?.name}</DialogTitle>
        <DialogDescription>
          Details about people with id: {id}
        </DialogDescription>
      </DialogHeader>

      {data && id && (
        <PeopleForm
          id={id}
          data={data}
          isLoading={isLoading}
          isSuccess={isSuccess}
        />
      )}

      <DefaultDialogClose
        onClick={() => {
          setPeopleDialogOpen(false);
          setPeopleId(null);
        }}
      />
    </DialogContent>
  );
}
