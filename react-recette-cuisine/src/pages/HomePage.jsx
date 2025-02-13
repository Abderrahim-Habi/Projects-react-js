import React from 'react'
import { Search,Soup,Heart, HeartPulse } from 'lucide-react';
import RecipeCard from '../components/RecipeCard';
import { useEffect,useState } from 'react';
import { getRandomColor } from '../lib/utils';

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
	const [loading, setLoading] = useState(true);

	const fetchRecipes = async (searchQuery) => {
		setLoading(true);
		setRecipes([]);
		try {
			const res = await fetch(
				`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchQuery}`
			);
			const data = await res.json();
      console.log(data.meals)
			setRecipes(data.meals);
		} catch (error) {
			console.log(error.message);
		} finally {
			setLoading(false);
		}
	};

  const handleSearchRecipe = (e) => {
		e.preventDefault();
		fetchRecipes(e.target[0].value);
	};

	useEffect(() => {
		fetchRecipes("chicken");
	}, []);
  return (
    <div className='bg-[#faf9fb] p-10 flex-1'>
			<div className='max-w-screen-lg mx-auto'>
				<form onSubmit={handleSearchRecipe}>
					<label className='input shadow-md flex items-center gap-2'> {/*items-center vertically centers the items inside the label */}
						<Search size={"24"} />
						<input
							type='text'
							className='text-sm md:text-md grow'
							placeholder='What do you want to cook today?'
						/>
					</label>
				</form>
        <h1 className='font-bold text-3xl md:text-5xl mt-4'>Recommended Recipes</h1>
				<p className='text-slate-500 font-semibold ml-1 my-2 text-sm tracking-tight'>Popular choices</p>
        
        <div className='grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
          {!loading &&
              recipes.map((recipe, index) => (
                <RecipeCard key={index} recipe={recipe} {...getRandomColor()}/> 
                //...getRandomColor is used to destructure the object returned by getRandomColor and pass its properties (bg, badge) as individual props to a component.
                //Equivalent a <RecipeCard key={index} recipe={recipe} bg="bg-[#F9EFE1]" badge="bg-[#F7E0B8]" />
              ))}
          {loading &&
              [...Array(9)].map((_, index) => (
                <div key={index} className='flex flex-col gap-4 w-full'>
                  <div className='skeleton h-32 w-full'></div>
                  <div className='flex justify-between'>
                    <div className='skeleton h-4 w-28'></div>
                    <div className='skeleton h-4 w-24'></div>
                  </div>
                  <div className='skeleton h-4 w-1/2'></div>
                </div>
              ))}
        </div>
			</div>
		</div>
  )
}

export default HomePage