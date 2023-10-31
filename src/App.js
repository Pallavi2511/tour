import React, {useEffect, useState} from 'react';
import Tours from "./Tours";
import Loading from './Loading';

const url = 'https://course-api.com/react-tours-project'

function App() {

  const [isLoading, setIsLoading]= useState(true);
  const [tours, setTours]= useState([]);

  const removeTour = (id) =>{
    const newTour = tours.filter((tour)=>tour.id !== id)
    setTours(newTour);
  }

  const fetchTours = async ()=>{
    setIsLoading(true)
    try{
      const response = await fetch(url)
      const tours = await response.json();
      setIsLoading(false)
      setTours(tours)
    }catch(error){
      setIsLoading(false)
      console.log(error);
    }
  }
  
  useEffect(()=>{
    fetchTours()
  },[]);
  if (isLoading){
    return(
      <main>
        <Loading/>
      </main>
    )
  }
  if(tours.length === 0){
    return (
      <main>
       <div className='title'>
         <h2>No tours left</h2>
         <button className='btn' onClick={()=>{
          fetchTours()}}>refresh</button>
       </div>
      </main>
       
     );
  }
  return(
    <main>
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
  )

}

export default App;
