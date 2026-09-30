import { useEffect, useState } from "react";
import { useParams } from "react-router";

const MealDetails = ()=>{
    const [meal , setmeal] = useState(null)
    const {mealid} = useParams()
    async function getMeals(){
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`)
        const data = await res.json()
        console.log(data?.meals)
        setmeal(data?.meals)
    }

    useEffect(()=>{
        getMeals()
    },[])
    
    return(
        <>
        <h1>hello meal details</h1>
        </>
    )

}
export default MealDetails;