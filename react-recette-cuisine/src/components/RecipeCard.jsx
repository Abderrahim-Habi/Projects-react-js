import React from 'react';
import { Soup, Heart, HeartPulse } from 'lucide-react';
import  { useState } from 'react';


const RecipeCard = ({ recipe,bg,badge}) => {
  if (!recipe) return null; // Handle undefined or null recipe gracefully.
  const [isFavorite, setIsFavorite] = useState(localStorage.getItem("favorites")?.includes(recipe.strMeal));

  const addRecipeToFavorites = () => {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
      
    // Check if the current recipe is already in the favorites array.
    const isRecipeAlreadyInFavorites = favorites.some((fav) => fav.strMeal === recipe.strMeal);

    if (isRecipeAlreadyInFavorites) {
        // If the recipe is already in the favorites, remove it.
        favorites = favorites.filter((fav) => fav.strMeal !== recipe.strMeal);
        setIsFavorite(false);
    } else {
        favorites.push(recipe);
        setIsFavorite(true);
    }
    //to save the changes 
    localStorage.setItem("favorites", JSON.stringify(favorites));
    };

  return (
    <div className={`flex flex-col rounded-md ${bg} overflow-hidden p-3 relative`}>
      <a href={recipe.strYoutube || '#'} target='_blank' rel='noopener noreferrer' className='relative h-32'>
        <img
          src={recipe.strMealThumb || '/404.jpg'} // Use a placeholder if no image is available.
          alt={recipe.strMeal}
          className='rounded-md w-full h-full object-cover cursor-pointer'
        />
        <div className='absolute bottom-2 left-2 bg-white rounded-full p-1 cursor-pointer flex items-center gap-1 text-sm'>
          <Soup size={16} /> {recipe.strArea || 'N/A'} Cuisine
        </div>
        <div className='absolute top-1 right-2 bg-white rounded-full p-1 cursor-pointer' onClick={(e)=>{
            e.preventDefault();
            addRecipeToFavorites();
        }}>
          {!isFavorite && <Heart size={20} className='hover:fill-red-500 hover:text-red-500' />}
          {isFavorite && <Heart size={20} className='fill-red-500 text-red-500' />}
        </div>
      </a>

      <div className='flex mt-1'>
        <p className='font-bold tracking-wide'>{recipe.strMeal}</p>
      </div>
      <p className='my-2'>Category: {recipe.strCategory || 'Unknown Category'}</p>
      <div className='flex gap-2 mt-auto'>
        <div className={`flex gap-1 ${badge} items-center p-1 rounded-md`}>
          <HeartPulse size={16} />
          <span className='text-sm tracking-tighter font-semibold'>Gluten-free</span>
        </div>
        <div className={`flex gap-1 ${badge} items-center p-1 rounded-md`}>
          <HeartPulse size={16} />
          <span className='text-sm tracking-tighter font-semibold'>Heart-healthy</span>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;
