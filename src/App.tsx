import { useAtom } from 'jotai';
import { People } from '@/components/pages';
import { Dialog } from '@/components/ui';
import { PeopleDialog } from '@/components/dialogs';
import { peopleDialogOpen } from '@/atoms';

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
