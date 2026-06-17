import React, { useState } from 'react'

function Receipe() {
    const [selectedCategory ,setSelectedCategory]=useState("all")

    const categories=["all", "breakfast" , "lunch", "dinner"]

    const recipes=[
        {
        id:1,
        title:"Pancakes",
        category:"breakfast",
        time:"20 min",
        difficulty:"easy",
        imge:"",
        ingredients:['past', 'eggs' , 'cheese', 'bacon']
        

        },
        {
        id:2,
        title:"Pasta Carbonra",
        category:"dinner",
        time:"30 min",
        difficulty:"medium",
        imge:"",
        ingredients:['past', 'eggs' , 'cheese', 'bacon']
        

        },
    ]
        
  return (
    <div className='min-h-screen bg-gradient-to-br from-orange-100 to-rose-100 py-8 px-4'>
        <div className='max-w-4xl mx-auto'>
            {/* Header */}
             <div className='text-center mb-12'>
                 <h1 className='text-3xl font-bold text-gray'>My Recipe Collection</h1>
            <p  className='text-gray-600'>Find your fovorite receips and start Cooking</p>
             </div>
             {/* Navs */}
             <div className='flex justify-center gap-4 flex-wrap'>
                {
                    categories.map((category)=>(
                    <button key={category} 
                    
                    onClick={()=>setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full capitalize ${selectedCategory === category ? "bg-orange-500 text-white " : "bg-white  text-gray-600 hover:bg-orange-100" } cursor-pointer `}>{category}</button>
                    ))
                }
             </div>
           
        </div>
    </div>
  )
}

export default Receipe