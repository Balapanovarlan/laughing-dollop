// components/Pagination.tsx
import { PaginationProps } from '@/app/types/types';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useRouter } from 'next/router';


export default function Pagination({ currentPage, totalPages }: PaginationProps) {
  const router = useRouter();

  const createPageLink = (page: number) => {
    const query = { ...router.query, page: String(page) };
    return {
      pathname: router.pathname,
      query,
    };
  };

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex items-center justify-center gap-4 mt-6 text-lg">
      <Link
        href={createPageLink(currentPage - 1)}
        className={`text-gray-500 ${
          currentPage === 1 ? 'pointer-events-none opacity-30' : ''
        }`}
      >
        <ArrowLeft/>
      </Link>

      {pages.map((page) => (
        <Link
          key={page}
          href={createPageLink(page)}
          className={`w-8 h-8 flex items-center justify-center rounded-full transition ${
            page === currentPage
              ? 'bg-main-green/10 '
              : 'hover:bg-gray-200'
          }`}
        >
          {page}
        </Link>
      ))}

      <Link
        href={createPageLink(currentPage + 1)}
        className={`text-gray-500 ${
          currentPage === totalPages ? 'pointer-events-none opacity-30' : ''
        }`}
      >
        <ArrowRight/>
      </Link>
    </div>
  );
}
