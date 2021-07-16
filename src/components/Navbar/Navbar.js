import React from 'react'
import rev from '../../media/img/rev.png';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { startLogout } from '../../actions/auth';


export const Navbar = () => {
  const dispatch = useDispatch();
  const { isLogged } = useSelector(state => state.auth);

  const handleLogout = () => {
    dispatch( startLogout() );
  }

  return (
    <>
      {
        (isLogged)
        ?
          ( 
            <nav className="bg-secondary font-bold text-tertiary">
              <ul className="grid md:grid-cols-7 place-items-center border-b-2 border-quinary p-2">
                <li className="col-start-6">
                  <button onClick={handleLogout} className="font-bold">Cerrar sesión</button>
                </li>
              </ul>
              <ul className="grid md:grid-cols-7 place-items-center py-1">
                <li className="col-start-1">
                  <Link to="/"><img src={rev} alt="Icono MundoReseñas" className="w-20 sm:w-24"/></Link>
                </li>
                <li className="col-start-4 h-full w-full hover:text-quaternary">
                  <Link to="/" className="block h-full m-w-content flex justify-center items-center">Inicio</Link>
                </li>
                <li className="col-start-6 h-full w-full hover:text-quaternary">
                  <Link to="/crear-reseña" className="block h-full m-w-content flex flex-col justify-center items-center">
                    <i className="far fa-plus-square text-quinary"></i>
                    Crear reseña
                  </Link>
                </li>
                <li className="col-start-7 h-full w-full hover:text-quaternary">
                  <Link to="/mi-cuenta" className="block h-full m-w-content flex flex-col justify-center items-center">
                    <i className="fas fa-cog text-quinary"></i>
                    Mi cuenta
                  </Link>
                </li>
              </ul>
            </nav>
          )
        : 
          (

            <nav className="bg-secondary font-bold text-tertiary">
              <ul className="grid md:grid-cols-7 place-items-center border-b-2 border-quinary p-2">
                <li className="col-start-6"><Link to="/autenticacion/iniciar-sesion">Iniciar sesión</Link></li>
                <li className="col-start-7"><Link to="/autenticacion/registro">Registrarse</Link></li>
              </ul>
              <ul className="grid md:grid-cols-7 place-items-center py-1">
                <li className="col-start-1">
                  <Link to="/"><img src={rev} alt="Icono MundoReseñas" className="w-20 sm:w-24"/></Link>
                </li>
                <li className="col-start-4 h-full w-full hover:text-quaternary">
                  <Link to="/" className="block h-full m-w-content flex justify-center items-center">Inicio</Link>
                </li>
              </ul>
            </nav>
          )
      }
    </>
  )
}
