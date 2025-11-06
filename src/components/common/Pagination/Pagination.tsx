import { type PaginationState } from '@tanstack/react-table';
import type { Dispatch, SetStateAction } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight
} from 'lucide-react';
import { Button } from '@/components/ui';

interface Props {
  pagination: PaginationState;
  setPagination: Dispatch<SetStateAction<PaginationState>>;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export function Pagination({
  pagination: { pageIndex },
  setPagination,
  totalPages,
  hasNextPage,
  hasPreviousPage
}: Props) {
  return (
    <div className="flex items-center justify-between px-2">
      <div className="flex items-center space-x-6 lg:space-x-8">
        <div className="flex w-[100px] items-center justify-center text-sm font-medium">
          Page {pageIndex} of {totalPages}
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            size="icon"
            className="hidden size-8 lg:flex"
            onClick={() =>
              setPagination((prevState) => {
                return { pageIndex: 1, pageSize: prevState.pageSize };
              })
            }
            disabled={!hasPreviousPage}
          >
            <span className="sr-only">Go to first page</span>
            <ChevronsLeft />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="size-8"
            onClick={() =>
              setPagination((prevState) => {
                return {
                  pageIndex: prevState.pageIndex - 1,
                  pageSize: prevState.pageSize
                };
              })
            }
            disabled={!hasPreviousPage}
          >
            <span className="sr-only">Go to previous page</span>
            <ChevronLeft />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="size-8"
            onClick={() =>
              setPagination((prevState) => {
                return {
                  pageIndex: prevState.pageIndex + 1,
                  pageSize: prevState.pageSize
                };
              })
            }
            disabled={!hasNextPage}
          >
            <span className="sr-only">Go to next page</span>
            <ChevronRight />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="hidden size-8 lg:flex"
            onClick={() =>
              setPagination((prevState) => {
                return { pageIndex: totalPages, pageSize: prevState.pageSize };
              })
            }
            disabled={!hasNextPage}
          >
            <span className="sr-only">Go to last page</span>
            <ChevronsRight />
          </Button>
        </div>
      </div>
    </div>
  );
}
