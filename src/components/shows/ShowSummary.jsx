import React, { useState, useEffect } from "react";
import { NavLink, useParams } from "react-router-dom";
import BookForm from "../booking/BookForm";

const ShowSummary = () => {
  const params = useParams();
  const { id } = params;
  const [movieData, setMovieData] = useState([]);
  const[bookOpen,setBookOpen]=useState(false);

  useEffect( () => {
    fetch(process.env.REACT_APP_BASEURL)
    .then(res=>res.json())
    .then(data=>{
        const filteredData = data.filter(({ show }) => show.id == id);
    setMovieData(filteredData);
    });
  }, []);
  return (
    <>
    <div className="">
      <div className="">
        {movieData.map(({ show }) => {
          return (
            <>
              <div className="py-8 px-3 bg-slate-800">
                <div className="flex justify-center items-center flex-col md:flex-row max-w-7xl mx-auto gap-6 px-8">
                  <div className="min-w-[400px]">
                    <img
                      className="object-fill w-full"
                      src={show.image.original}
                      alt={show.name}
                    />
                  </div>
                  <div>
                    <div className="flex flex-col px-3 gap-4">
                      <h4 className="mb-2 mt-3 text-5xl font-bold tracking-tight text-slate-200 ">
                        {show.name}
                      </h4>
                      <p className="w-[68px] py-1 text-lg text-center text-slate-200 font-bold bg-green-700 rounded">
                        {show.rating.average ? show.rating.average : 4.2}/10
                      </p>
                      <p className="py-2 text-slate-200">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quod sapiente nostrum ea corrupti exercitationem iusto quia illum provident, earum saepe consequuntur reprehenderit magni fuga sequi quas aperiam neque at.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quod sapiente nostrum ea corrupti exercitationem iusto quia illum provident, earum saepe consequuntur reprehenderit magni fuga sequi quas aperiam neque at.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quod sapiente nostrum ea corrupti exercitationem iusto quia illum provident, earum saepe consequuntur reprehenderit magni fuga sequi quas aperiam neque at.
                      </p>

                      <div className="mb-3 font-normal text-slate-200">
                        Genre: {show.genres.map((genre) => (
                          <span className="mr-2 text-blue-300">{genre}</span>
                        ))}

                        <p className="mt-3 text-sm">Language: {show.language}</p>
                      </div>
                    </div>

                    <button 
                    onClick={()=>setBookOpen(true)}
                    className="inline-flex items-center ml-3 mt-5 px-5 py-2 text-xl font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                      Book Ticket
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>

    {bookOpen&&<BookForm movieData={movieData} setBookOpen={setBookOpen}/>}
    </>
  );
};

export default ShowSummary;
