import { useAtom } from 'jotai';
import { PeoplePage } from '@/components/pages';
import { Dialog } from '@/components/ui';
import { PeopleDialog } from '@/components/dialogs';
import { peopleDialogOpen } from '@/atoms';

function App() {
  const [isPeopleDialogOpen] = useAtom(peopleDialogOpen);

  return (
    <>
      <PeoplePage />
      <Dialog open={isPeopleDialogOpen}>
        <PeopleDialog />
      </Dialog>
    </>
  );
}

export default App;
