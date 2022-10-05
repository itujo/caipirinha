import cn from 'clsx';
import type { Dispatch, SetStateAction } from 'react';

const MAX_ITEMS = 5;
const MAX_LEFT = (MAX_ITEMS - 1) / 2;

interface PaginationProps {
  limit: number;
  total: number;
  offset: number;
  setOffset: Dispatch<SetStateAction<number>>;
  setLimit: Dispatch<SetStateAction<number>>;
  className: string | string[];
}

function Pagination({
  limit,
  total,
  offset,
  setOffset,
  setLimit,
  className,
}: PaginationProps) {
  const current = offset ? offset / limit + 1 : 1;
  const pages = Math.ceil(total / limit);
  // const current = pages;
  const maxFirst = Math.max(pages - (MAX_ITEMS - 1), 1);
  const first = Math.min(Math.max(current - MAX_LEFT, 1), maxFirst);

  function onPageChange(page: number) {
    setOffset((page - 1) * limit);
  }

  return (
    <div className={cn('flex', className)}>
      <ul className={cn('hidden list-none md:flex ')}>
        <li>
          <button
            type='button'
            onClick={() => onPageChange(current - 1)}
            disabled={current === 1}
            className={cn(
              'ml-0 rounded-l-lg border border-gray-300 py-2  px-3 leading-tight text-gray-500  hover:bg-gray-100 hover:text-gray-700',
              current === 1 && 'cursor-not-allowed text-gray-100'
            )}
          >
            Anterior
          </button>
        </li>
        <li key={1}>
          <button
            type='button'
            onClick={() => setOffset(0)}
            className={cn(
              current === 1
                ? 'border border-gray-300 bg-green-50 py-2 px-3 text-green-600 hover:bg-green-100'
                : 'border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700'
            )}
          >
            {1}
          </button>
        </li>

        <li>
          <button
            type='button'
            onClick={() => onPageChange(current - 1)}
            disabled={current === 1}
            className={cn(
              'ml-0  border border-gray-300 py-2  px-3 leading-tight text-gray-500  hover:bg-gray-100 hover:text-gray-700',
              current <= 4 && 'hidden'
            )}
          >
            ...
          </button>
        </li>
        {Array.from({ length: Math.min(MAX_ITEMS, pages) })
          .map((_, index) => index + first)
          .map((page) =>
            page !== 1 && page !== pages ? (
              <li key={page}>
                <button
                  type='button'
                  onClick={() => onPageChange(page)}
                  className={cn(
                    current === page
                      ? 'border border-gray-300 bg-green-50 py-2 px-3 text-green-600 hover:bg-green-100'
                      : 'border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                  )}
                >
                  {page}
                </button>
              </li>
            ) : null
          )}

        <li>
          <button
            type='button'
            onClick={() => onPageChange(current + 1)}
            disabled={current === pages}
            className={cn(
              'ml-0  border border-gray-300 py-2  px-3 leading-tight text-gray-500  hover:bg-gray-100 hover:text-gray-700',
              current >= pages - 4 && 'hidden'
            )}
          >
            ...
          </button>
        </li>

        <li key={pages}>
          <button
            type='button'
            onClick={() => onPageChange(pages)}
            className={cn(
              current === pages
                ? 'border border-gray-300 bg-green-50 py-2 px-3 text-green-600 hover:bg-green-100'
                : 'border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700'
            )}
          >
            {pages}
          </button>
        </li>

        <li>
          <button
            type='button'
            onClick={() => onPageChange(current + 1)}
            disabled={current === pages}
            className={cn(
              'rounded-r-lg border border-gray-300 bg-white py-2 px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 ',
              current === pages && 'cursor-not-allowed text-gray-100'
            )}
          >
            Próxima
          </button>
        </li>
      </ul>
      <div className='items-center justify-center'>
        &nbsp;
        <span>
          Mostrando{' '}
          <select
            name=''
            id=''
            onChange={(e) => setLimit(parseInt(e.target.value, 10))}
            value={`${limit}`}
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={30}>30</option>
          </select>
          itens de {total}
        </span>
      </div>
    </div>
  );
}

export { Pagination };
