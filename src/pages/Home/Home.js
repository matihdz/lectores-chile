import React from 'react';

export const Home = () => {
  return (
    <div className="p-8">
      <form className="bg-secondary flex items-center rounded-full shadow p-4">
        <input 
          className="bg-indigo-50 rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none mr-1" 
          id="search" type="text" 
          placeholder="El principito, Cerebro de pan, ..."
          autoComplete="off"
        />
        <button className="rounded-full p-2 focus:outline-none hover:bg-quinary w-12 h-12 flex items-center justify-center">
          <i className="fas fa-search text-tertiary "></i>
        </button>
      </form>
      <div className="flex flex-col place-content-center items-center text-secondary">
        <i className="far fa-grin-wink fa-5x mt-20"></i>
        <span className="font-bold text-xl text-center mt-5">Investiga y reseña libros</span>
      </div>
    </div>
  )
}
