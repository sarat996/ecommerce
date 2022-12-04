import React from 'react'
import DispCard from '../components/DispCard';
import Dashbar from '../components/NavBar';
import {Data} from '../data/Data';
const MainPage = ()=> {

  return (
    <>
    <Dashbar/>
    <div className='ListCards'>
    {Data.map((item) =>
    <DispCard title={item.title} desc={item.desc} category={item.category} cost={item.cost} imglink={item.imglink}/>
    )}
    </div>
    </>
  )
}

export default MainPage;