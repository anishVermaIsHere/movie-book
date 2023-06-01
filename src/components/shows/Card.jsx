import React from "react";
import { NavLink } from "react-router-dom";

const Card = ({show}) => {

    const {id,url,language, genres, image,name,rating}=show;

  return (
    <div 
    className="flex flex-col max-w-sm bg-slate-800 border border-gray-100 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" 
    key={'card'+id}>
      <NavLink to={`movie/${id}`}>
        <img className="rounded-t-lg mx-auto" src={image.medium} alt={name} />
      </NavLink>
      <div className="p-5">
        <div className="flex items-center justify-between">
          <h4 className="mb-2 text-xl font-bold tracking-tight text-slate-200 dark:text-white">
            {name}
          </h4>
          <p className="grid place-items-center h-[30px] w-[50px] text-sm text-slate-200 font-bold bg-green-700 rounded">
            {rating.average?rating.average:4.2}/10
          </p>
        </div>

        <p className="mb-3 font-normal text-slate-200">
          {genres.map(genre=><span className="mr-2 text-sm text-blue-300">{genre}</span>)}
        </p>
        <NavLink to={`movie/${id}`}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Book
          <svg
            aria-hidden="true"
            className="w-4 h-4 ml-2 -mr-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </NavLink>
      </div>
    </div>
  );
};

export default Card;
