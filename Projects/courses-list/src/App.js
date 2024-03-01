import React, { useEffect, useState } from "react";
import {apiUrl, filterData}from "./data";
import { toast } from "react-toastify";
import { FcMakeDecision } from "react-icons/fc";
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import Spin from "./components/Spin";

const App = () => {

  const [courses,setCourses] = useState(null);
  const [loading,setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);


  async function fetchData(){
    setLoading(true);
      try{
        let response = await fetch(apiUrl);
        let output = await response.json();
        setCourses(output.data);
      }
     catch(error){
      toast.error("Something went wrong");
     }
     setLoading(false);

    }

    useEffect( () =>{
      fetchData();
    },[])

  return (
    <div className="min-h-screen flex-col flex bg-bgDark2">
      <div>
          <Navbar/>
      </div>
      <div className="bg-bgDark2">
          <div>
            <Filter filterData={filterData} 
            category={category}
            setCategory={setCategory}/>
          </div>
          <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
            { 
              loading ? (<Spin/>) : (<Cards courses={courses} category={category}/>)
              }
          </div>
      </div>
    </div>
  );
};

export default App;
