import People from '@/components/People';
import { Dialog } from '@/components/ui';
import { PeopleDialog } from '@/components/dialogs';
import { peopleDialogOpen } from '@/atoms';
import { useAtom } from 'jotai';

function App() {
  const [isPeopleDialogOpen] = useAtom(peopleDialogOpen);

  return (
    <>
      <People />
      <Dialog open={isPeopleDialogOpen}>
        <PeopleDialog />
      </Dialog>
    </>
  );
}

export default App;
