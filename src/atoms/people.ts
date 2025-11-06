import { atom } from 'jotai';

export const peopleId = atom<number | null>(null);
export const peopleDialogOpen = atom<boolean>(false);
