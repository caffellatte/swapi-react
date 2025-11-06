import { useState } from 'react';
import { type PaginationState } from '@tanstack/react-table';

interface Props extends PaginationState {}

export function usePagination({ pageIndex = 1, pageSize = 10 }: Props) {
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: pageIndex,
    pageSize: pageSize
  });

  return { pagination, setPagination };
}
