import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { startLoginWitEmailPassword } from '../../actions/auth';
import { schemaLoginForm } from '../../helpers/schemasYupForms';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

export const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schemaLoginForm)
  });
  const dispatch = useDispatch();

  const handleLogin = (data) => {
    const { email, password } = data
    dispatch( startLoginWitEmailPassword(email, password) )
  };

  return (
    <div className="bg-secondary rounded-lg px-10 py-5 max-w-max mx-auto mt-10 shadow-xl">
      <h2 className="text-center text-tertiary font-bold">Iniciar sesión</h2>
      <form 
        className="flex flex-col justify-between items-center mb-5" autoComplete="off"
        onSubmit={ handleSubmit(handleLogin) }
      >
        <input 
          className="mt-3 px-5 py-2 focus:outline-none border-2 rounded-md border-quaternary" 
          type="email" 
          {...register("email")}
          placeholder="Correo"
        />
        {
          errors.email &&
          <p className="text-xs text-quinary text-center my-1">
          {errors.email?.message}
          </p>
        }
        <input 
          className="mt-3 px-5 py-2 focus:outline-none border-2 rounded-md border-quaternary" 
          type="password"
          {...register("password")}
          placeholder="Contraseña"
        />
        {
          errors.password &&
          <p className="text-xs text-quinary text-center my-1">
          {errors.password?.message}
          </p>
        }
        <button className="mt-5 shadow-xl bg-quaternary hover:text-tertiary text-primary font-bold py-2 px-4 border-b-4 rounded">
          Entrar
        </button>
      </form>
      <div className="text-tertiary text-center">
        <p className="font-bold">Aún no estás registrado?</p>
        <Link to="/autenticacion/registro" className="border-b-2 hover:border-quaternary hover:text-quaternary">Crea tu cuenta</Link>
      </div>
    </div>
  )
}
