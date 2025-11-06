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
import { Spinner } from '@/components/ui';

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

      {!isLoading && data && id ? (
        <PeopleForm
          id={id}
          data={data}
          isLoading={isLoading}
          isSuccess={isSuccess}
        />
      ) : (
        <div className="flex items-center justify-center p-16">
          <Spinner className="size-6" />
        </div>
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
