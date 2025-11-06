import { useState, type Dispatch, type SetStateAction } from 'react';
import { type PaginationState } from '@tanstack/react-table';

export function usePagination({
  pageIndex,
  pageSize
}: PaginationState): [
  PaginationState,
  Dispatch<SetStateAction<PaginationState>>
] {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: pageIndex,
    pageSize: pageSize
  });

  return [pagination, setPagination];
}
