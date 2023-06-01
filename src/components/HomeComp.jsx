import React, { useEffect, useState } from "react";
import Card from "./shows/Card";


const HomeComp = () => {
  const [showData, setShowData] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_BASEURL)
    .then(res=>res.json())
    .then(data=>setShowData(data));

  }, []);

  return (
    <>
      
      <div className="">
        <div className="grid grid-rows-6 md:grid-rows-4 lg:grid-rows-2 grid-flow-col gap-4">
          {showData.map(({show})=>{
            {console.log(show)}
          return <Card show={show}/>
          })}
        </div>
      </div>
    </>
  );
};

export default HomeComp;
