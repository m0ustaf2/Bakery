import axios from 'axios'
import style from './Recipes.module.css'
import React, { useEffect, useState } from 'react'

export default function Recipes() {
let [recipes,setRecipes]=useState([])
 
let getRecipes=async()=>{
    let {data}=await axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Breakfast`)
    setRecipes(data.meals);
  };

  useEffect(() => {
    getRecipes()
  }, [])
  
  return (
    <>
    <div className="container">
      <div className='header'>
    <h1 className={`text-center main-color my-5 text-uppercase ${style.head}`}>Recipes</h1>
      </div>
      <div className="row offset-1">
      {recipes.slice(0,3).map((recipe,index)=>
         <div key={index} className="col-md-4">
         <div className='m-auto'>
         <div className="card rounded-4 main-border" style={{width: '18rem'}}>
           <img src={recipe.strMealThumb} className="card-img-top rounded-top-4" alt="..." />
           <div className="card-body">
              <h5 className="card-title main-color  fw-bold">{recipe.strMeal}</h5>
              <p className="card-text text-font">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled</p>
           </div>
         </div>
         </div>
         </div>
      )}
      </div>
      <div className='text-center my-4'>
      <button className='btn btn-warning text-uppercase text-white fw-bold rounded-4'>Contact us</button>
      </div>
    </div>
    </>
  )
}
