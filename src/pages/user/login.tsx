/* eslint-disable jsx-a11y/label-has-associated-control */
import cn from 'clsx';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { FiAlertCircle } from 'react-icons/fi';
import { AuthContext } from '../../contexts/AuthContext';

export default function Login() {
  const { signIn } = useContext(AuthContext);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    const response = await signIn(data);

    if (typeof response !== typeof Error) {
      router.push('/');
    } else {
      setError('usernameOrEmail', {
        message: 'usuario/email ou senha incorreto(a)',
      });
      setError('password', {
        message: 'usuario/email ou senha incorreto(a)',
      });
    }
  };

  return (
    <div className='flex items-center justify-center'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='mb-4 w-96 rounded bg-white p-4 shadow-md'
      >
        <div className='mb-6'>
          <label
            htmlFor='email'
            className='mb-2 block text-sm font-medium text-gray-900'
          >
            usuário
          </label>
          <input
            type='text'
            className={cn(
              'block  w-full rounded-lg border p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 ',
              errors.usernameOrEmail ? 'border-red-500' : 'border-gray-300'
            )}
            {...register('usernameOrEmail', { required: true })}
          />
          {errors.usernameOrEmail && (
            <div className='text-bold mt-2 mb-3 flex flex-row text-red-500 '>
              <FiAlertCircle />
              <div className='ml-1 -mt-1'>
                {errors.usernameOrEmail.message as string}
              </div>
            </div>
          )}
        </div>
        <div className='mb-6'>
          <label
            htmlFor='password'
            className='mb-2 block text-sm font-medium text-gray-900 '
          >
            senha
          </label>
          <input
            type='password'
            id='password'
            className={cn(
              'block  w-full rounded-lg border p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 ',
              errors.password ? 'border-red-500' : 'border-gray-300'
            )}
            {...register('password', { required: true })}
          />
          {errors.password && (
            <div className='text-bold mt-2 mb-3 flex flex-row text-red-500 '>
              <FiAlertCircle />
              <div className='ml-1 -mt-1'>
                {errors.password.message as string}
              </div>
            </div>
          )}
        </div>
        <div className='mb-6 flex items-start'>
          <div className='flex h-5 items-center'>
            <input
              id='remember'
              type='checkbox'
              {...register('remember')}
              className='focus:ring-3 h-4  w-4 rounded border border-gray-300 focus:ring-blue-300 '
            />
          </div>
          <label
            htmlFor='remember'
            className='ml-2 text-sm font-medium text-gray-900 '
          >
            manter logado
          </label>
        </div>
        <div className='flex-1'>
          <button
            type='submit'
            className='w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 sm:w-auto '
          >
            Entrar
          </button>
        </div>
      </form>
    </div>
  );
}
