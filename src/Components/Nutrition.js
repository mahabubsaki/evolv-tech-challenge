import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MyContext } from '../App';

const Nutrition = () => {
    const { data } = useContext(MyContext)
    const { userId } = useParams()
    const [userInfo, setUserInfo] = useState(null)
    console.log(userInfo);
    useEffect(() => {
        setUserInfo(data.find(user => user.userId === userId))
    }, [userId, data])
    const { name, email, calorieInTake, calorieTarget, proteinConsumed, proteinTarget, crabsConsumed, crabsTarget, fatConsumed, fatTarget } = userInfo || {}
    return (
        <div className='h-screen flex justify-center items-center'>
            <div className='w-[80%] sm:w-[60%] mx-auto'>
                <h1 className="text-2xl font-bold text-center text-white mb-4">Nutrition Details</h1>
                <div className='border rounded-[8px] flex flex-col gap-[5px] p-2 text-white font-medium'>
                    <p>User Id : {userId}</p>
                    <p>Name : {name}</p>
                    <p>Email : {email}</p>
                    <p>Calory Taken : {calorieInTake}g</p>
                    <p>Calory Target : {calorieTarget}g</p>
                    <p>Protein Taken : {proteinConsumed}g</p>
                    <p>Protein Target : {proteinTarget}g</p>
                    <p>Fats Taken : {fatConsumed}g</p>
                    <p>Fats Target : {fatTarget}g</p>
                    <p>Carbs Taken : {crabsConsumed}g</p>
                    <p>Carbs Target : {crabsTarget}g</p>
                </div>
            </div>
        </div>
    );
};

export default Nutrition;