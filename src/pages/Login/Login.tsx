import React, { useRef } from 'react';
import { login, register } from '../../services/firebase/auth';

export default function Login() {
  const passwordRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);

  async function handleLogin(e: React.SyntheticEvent) {
    e.preventDefault();
    if (passwordRef.current && emailRef.current) {
      await login(emailRef.current.value, passwordRef.current.value);
    }
  }

  async function handleRegister(e: React.SyntheticEvent) {
    e.preventDefault();
    if (passwordRef.current && emailRef.current) {
      await register(emailRef.current.value, passwordRef.current.value);
    }
  }

  return (
    <div className=''>
      {/* <div className="bg-[url('./login-bg.png')] h-screen bg-no-repeat hidden"></div> */}
      <div className='mt-50 flex flex-col gap-5 items-center'>
        <h1 className='text-3xl text-primary-content'>Conecte-se</h1>
        <p>Faça login para acessar seu espaço</p>
        <form className='flex flex-col gap-5 w-screen items-center'>
          <label className='label'>
            <span className='label-text'>Email</span>
          </label>
          <input
            type='email'
            className='input input-bordered w-full max-w-xs'
            ref={emailRef}
            required
          />
          <label className='label'>
            <span className='label-text'>Password</span>
          </label>
          <input
            type='password'
            className='input input-bordered w-full max-w-xs'
            ref={passwordRef}
            required
          />
          <div>
            <button
              type='submit'
              className='btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg'
              onClick={handleLogin}
            >
              Entrar
            </button>
            <button
              type='submit'
              className='btn btn-primary btn-xs sm:btn-sm md:btn-md lg:btn-lg'
              onClick={handleRegister}
            >
              Registrar
            </button>
          </div>
        </form>
        <p>
          Você não tem uma conta? <a>Problema seu!</a>
        </p>
      </div>
    </div>
  );
}
