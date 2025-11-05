import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister';

const asyncStoragePersister = createAsyncStoragePersister({
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  storage: AsyncStorage
});

export { asyncStoragePersister };
