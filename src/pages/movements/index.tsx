/* eslint-disable no-underscore-dangle */
import cn from 'clsx';
import { useEffect, useState } from 'react';
import { Pagination } from '../../components/Pagination';
import { MovementWhereInput, useMovementsQuery } from '../../generated/graphql';

export default function MovementsIndex() {
  const [limit, setLimit] = useState(10);
  const [offset, setOffset] = useState(0);
  const [movWhere, setMovWhere] = useState<MovementWhereInput | null>(null);

  const { data, loading, refetch } = useMovementsQuery({
    variables: {
      take: limit,
      skip: offset,
      where: movWhere ?? {},
    },
    notifyOnNetworkStatusChange: true,
  });

  useEffect(() => {
    refetch({ skip: offset, take: limit, where: movWhere ?? {} });
  }, [limit, offset, movWhere]);

  const totalItems =
    data && data.aggregateMovement._count
      ? data.aggregateMovement._count.id
      : 0;

  if (loading) return <div>loading</div>;

  if (!loading && !data) return <div>error</div>;

  if (!loading && data) {
    return (
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
                    {`R$ ${movement.serviceValue.toLocaleString('pt-BR', {
                      currency: 'BRL',
                    })}`}
                  </td>
                  <td className='py-4 px-6'>{movement.originCity?.name}</td>
                  <td className='py-4 px-6'>
                    {movement.destinationCity?.name}
                  </td>
                  <td className='py-4 px-6'>{movement.centerOfCost.name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* <div>pagina: {page}</div> */}

        <Pagination
          className='mt-2 border-t-2'
          limit={limit}
          offset={offset}
          total={totalItems}
          setOffset={setOffset}
          setLimit={setLimit}
        />

        {/* <button type='button' onClick={() => setPage(page - 1)}>
          voltar pagina
        </button>
        <button type='button' onClick={() => setPage(page + 1)}>
          avançar pagina
        </button> */}
      </div>
    );
  }
}
