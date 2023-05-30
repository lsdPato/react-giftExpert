import React from 'react';
import {useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';



export const GifExpertApp = () => {
    const [ categories, setCategories ] = useState([ 'Zelda' ]);
    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        // console.log(newCategory);
        //categories.push('Valorant');
       setCategories([...categories,newCategory]);

    }
    
 
 return (
    <>
    <h1>GifExpertApp</h1>
    <AddCategory 
        onNewCategory={event => onAddCategory(event)}>

    </AddCategory>
    
    <ol>
        {categories.map(category => 
            
            <GifGrid key={category} category={category}/>
        )}
        
       
    </ol>
    </>

  )
}
