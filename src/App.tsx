import { useAtom } from 'jotai';
import { Header } from './components/common';
import { PeoplePage } from '@/components/pages';
import { Dialog, Toaster } from '@/components/ui';
import { PeopleDialog } from '@/components/dialogs';
import { peopleDialogOpen } from '@/atoms';

function App() {
  const [isPeopleDialogOpen] = useAtom(peopleDialogOpen);

  return (
    <>
      <Header />
      <PeoplePage />
      <Dialog open={isPeopleDialogOpen}>
        <PeopleDialog />
      </Dialog>
      <Toaster />
    </>
  );
}

export default App;
