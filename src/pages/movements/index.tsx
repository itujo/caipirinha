/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-underscore-dangle */
import cn from 'clsx';
import { format, parseISO } from 'date-fns';
import type { GetServerSideProps } from 'next';
import { useEffect, useState } from 'react';
import { Pagination } from '../../components/Pagination';
import {
  InputMaybe,
  MovementWhereInput,
  SortOrder,
  useMovementsQuery,
} from '../../generated/graphql';
import { convertToBrl } from '../../utils/convertToBrl';

export default function MovementsIndex() {
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const [label, setLabel] = useState('');

  const { data, loading, refetch } = useMovementsQuery({
    variables: {
      take: limit,
      skip: offset,
    },
  });

  const reft = async () => {
    const where: InputMaybe<MovementWhereInput> =
      startDate.length > 0 && endDate.length > 0
        ? {
            postingDate: {
              gte: `${startDate} 00:00:00`,
              lte: `${endDate} 00:00:00`,
            },
          }
        : {};

    const labelWhere: InputMaybe<MovementWhereInput> =
      label.length > 0
        ? {
            label: {
              equals: label,
            },
          }
        : {};

    await refetch({
      skip: offset,
      take: limit,
      where: { ...where, ...labelWhere },
      orderBy: [
        {
          postingDate: 'asc' as InputMaybe<SortOrder>,
          // id: 'asc',
        },
        {
          id: 'asc' as InputMaybe<SortOrder>,
        },
      ],
    });
  };

  useEffect(() => {
    reft();
  }, [limit, offset]);

  if (loading) return <div>loading</div>;

  if (!loading && !data) return <div>error</div>;

  if (!loading && data) {
    const totalItems = data?.aggregateMovement?._count?.id ?? 0;

    return (
      <div>
        <div className='grid md:flex md:flex-1 md:gap-6'>
          <div className='mb-4'>
            <label
              htmlFor='labels'
              className='mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'
            >
              etiqueta
            </label>
            <input
              className='block w-full rounded-lg border border-gray-300 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500'
              type='text'
              // step={1}
              value={label}
              onChange={(e) => setLabel(e.target.value)}
            />
          </div>

          <div className='mb-4'>
            <label
              htmlFor='labels'
              className='mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'
            >
              data inicial
            </label>
            <input
              className='block w-full rounded-lg border border-gray-300 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500'
              type='date'
              name='date'
              id='date'
              // step={1}
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>

          <div className='mb-4'>
            <label
              htmlFor='labels'
              className='mb-2 text-sm font-medium text-gray-900 dark:text-gray-400'
            >
              data final
            </label>
            <input
              className='block w-full  rounded-lg border border-gray-300 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500'
              type='date'
              name='date'
              id='date'
              // step={1}
              value={endDate}
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
          <div className='mt-6'>
            <button
              type='button'
              className='mr-2 inline-flex h-12 items-center rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300'
              onClick={reft}
            >
              <svg
                role='status'
                className={`inline h-4 w-4 animate-spin text-white ${
                  !loading ? 'hidden' : ''
                }`}
                viewBox='0 0 100 101'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                  fill='#E5E7EB'
                />
                <path
                  d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                  fill='currentColor'
                />
              </svg>
              &nbsp;consultar
            </button>
          </div>
        </div>

        {!loading && data && (
          <div>
            <div className='relative overflow-x-auto shadow-md sm:rounded-lg'>
              <table className='w-full text-left text-sm text-gray-500'>
                <thead className='bg-gray-50 text-xs uppercase text-gray-700'>
                  <tr>
                    <th scope='col' className='py-3 px-6'>
                      id
                    </th>
                    <th scope='col' className='py-3 px-6'>
                      etiqueta
                    </th>
                    <th scope='col' className='py-3 px-6'>
                      custo do servico
                    </th>
                    <th scope='col' className='py-3 px-6'>
                      origem
                    </th>
                    <th scope='col' className='py-3 px-6'>
                      destino
                    </th>
                    <th scope='col' className='py-3 px-6'>
                      centro de custos
                    </th>
                    <th scope='col' className='py-3 px-6'>
                      data de postagem
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {data.movements.map((movement, index) => (
                    <tr
                      key={movement.id}
                      className={cn(
                        'border-b ',
                        index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                      )}
                    >
                      <th
                        scope='row'
                        className='whitespace-nowrap py-4 px-6 font-medium text-gray-900'
                      >
                        {movement.id}
                      </th>
                      <td className='py-4 px-6'>{movement.label}</td>
                      <td className='py-4 px-6'>
                        {convertToBrl(movement.serviceValue)}
                      </td>
                      <td className='py-4 px-6'>{movement.originCity?.name}</td>
                      <td className='py-4 px-6'>
                        {movement.destinationCity?.name}
                      </td>
                      <td className='py-4 px-6'>
                        {movement.centerOfCost.name}
                      </td>
                      <td className='py-4 px-6'>
                        {format(parseISO(movement.postingDate), 'dd/MM/yyyy')}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
        <Pagination
          className='mt-2 border-t-2'
          limit={limit}
          offset={offset}
          total={totalItems}
          setOffset={setOffset}
          setLimit={setLimit}
        />
      </div>
    );
  }

  return <div />;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { qid } = ctx.req.cookies;

  if (!qid) {
    return {
      redirect: {
        destination: '/user/login',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};
