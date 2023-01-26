import React from 'react';

export default function Login() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className=''>
      {/* <div className="bg-[url('./login-bg.png')] h-screen bg-no-repeat hidden"></div> */}
      <div className='mt-50 flex flex-col gap-5 items-center'>
        <h1 className='text-3xl text-primary-content'>Conecte-se</h1>
        <p>Faça login para acessar seu espaço</p>
        <form
          className='flex flex-col gap-5 w-screen items-center'
          onSubmit={handleSubmit}
        >
          <label className='label'>
            <span className='label-text'>Email</span>
          </label>
          <input
            type='email'
            className='input input-bordered w-full max-w-xs'
          />
          <label className='label'>
            <span className='label-text'>Password</span>
          </label>
          <input
            type='password'
            className='input input-bordered w-full max-w-xs'
          />
          <button
            type='submit'
            className='btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg'
          >
            Entrar
          </button>
        </form>
        <p>
          Você não tem uma conta? <a>Problema seu!</a>
        </p>
      </div>
    </div>
  );
}
