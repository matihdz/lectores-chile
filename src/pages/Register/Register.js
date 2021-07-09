import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { startRegisterWithUsernameEmailPassword } from '../../actions/auth';
import { schemaRegisterForm } from '../../helpers/schemasYupForms';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';

export const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schemaRegisterForm)
  });
  const dispatch = useDispatch();

  const handleRegister = (data) => {
    const { userName, email, password } = data;
    dispatch( startRegisterWithUsernameEmailPassword(userName, email, password) )
  }

  return (
    <div className="bg-secondary rounded-lg px-10 py-5 max-w-max mx-auto mt-10 shadow-xl">
      <h2 className="text-center mb-5 text-tertiary font-bold">Registro</h2>
      <form 
        className="flex flex-col justify-between items-center mb-5" 
        autoComplete="off"
        onSubmit={ handleSubmit(handleRegister) }
      >
        <input 
          className="mt-3 px-5 py-2 focus:outline-none border-2 rounded-md border-quaternary" 
          type="text" 
          {...register("userName")}
          placeholder="Nombre usuario"
        />
        {
          errors.userName && <p className="text-xs text-quinary text-center my-1">{errors.userName?.message}</p>
        }
        <input 
          className="mt-3 px-5 py-2 focus:outline-none border-2 rounded-md border-quaternary" 
          type="email" 
          {...register("email")}
          placeholder="Correo"
        />
        {
          errors.email && <p className="text-xs text-quinary text-center my-1">{errors.email?.message}</p>
        }
        <input 
          className="mt-3 px-5 py-2 focus:outline-none border-2 rounded-md border-quaternary" 
          type="password" 
          {...register("password")}
          placeholder="Contraseña"
        />
        {
          errors.password && <p className="text-xs text-quinary text-center my-1">{errors.password?.message}</p>
        }
        <input 
          className="mt-3 px-5 py-2 focus:outline-none border-2 rounded-md border-quaternary" 
          type="password" 
          {...register("confirmPassword")} 
          placeholder="Confirmar contraseña"
        />
        {
          errors.confirmPassword && <p className="text-xs text-quinary text-center my-1">{errors.confirmPassword?.message}</p>
        }
        <button className="mt-5 shadow-xl bg-quaternary hover:text-tertiary text-primary font-bold py-2 px-4 border-b-4 rounded">
          Registrarme
        </button>
      </form>
      <div className="text-tertiary text-center">
        <p className="font-bold">Ya estás registrado?</p>
        <Link to="/autenticacion/iniciar-sesion" className="border-b-2 hover:border-quaternary hover:text-quaternary">Ve a iniciar sesión</Link>
      </div>
    </div>
  )
}