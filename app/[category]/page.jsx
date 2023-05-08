import React from 'react'

const CategoryPage = ({title}) => {
  return (
    <div>
        <h1>{title}</h1>
        <a href=""><h2>Event 1</h2></a>
        <a href=""><h2>Event 2</h2></a>
        <a href=""><h2>Event 3</h2></a>
        <a href=""><h2>Event 4</h2></a>
        <a href=""><h2>Event 5</h2></a>
        <a href=""><h2>Event 6</h2></a>
    </div>
  )
}

export default CategoryPage


export const getStaticProps=()=>{
  console.log("hi");
  return{
    props:{
      title:"Event In Ofankor"
    }
  }
}