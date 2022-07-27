import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MyContext } from '../App';

const Workout = () => {
    const { data } = useContext(MyContext)
    const { userId } = useParams()
    const [userInfo, setUserInfo] = useState(null)
    useEffect(() => {
        setUserInfo(data.find(user => user.userId === userId))
    }, [userId, data])
    const { name, email, performedDate, sheduledDate, feedback } = userInfo || {}
    return (
        <div className='h-screen flex justify-center items-center'>
            <div className='w-[80%] sm:w-[60%] mx-auto'>
                <h1 className="text-2xl font-bold text-center text-white mb-4">Workout Details</h1>
                <div className='border rounded-[8px] flex flex-col gap-[5px] p-2 text-white font-medium'>
                    <p>User Id : {userId}</p>
                    <p>Name : {name}</p>
                    <p>Email : {email}</p>
                    <p>Performed Date : {performedDate}</p>
                    <p>Schedule Date : {sheduledDate}</p>
                    <p>Feedback : {feedback ? 'Done' : 'Not Done Yet'}</p>
                </div>
            </div>
        </div>
    );
};

export default Workout;