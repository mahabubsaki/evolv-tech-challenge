import React, { useContext } from 'react';
import { MyContext } from '../App';
import { BiWalk } from 'react-icons/bi'
import { CgGym } from 'react-icons/cg'
import SingleUser from './SingleUser';

const Main = () => {
    // (new Date().toDateString()).split(' ').slice(1,3).join(' ')
    const { data } = useContext(MyContext)
    return (
        <div className="overflow-x-auto p-6">
            <table className="table w-full text-white border-separate
             border-spacing-y-[25px]">

                <thead>
                    <tr>
                        <th></th>
                        <th className='pr-8'>
                            <div className="text-[18px] font-bold flex items-center gap-[12px]">
                                Information
                            </div>
                        </th>
                        <th className='pr-15'>
                            <div className="text-[18px] font-bold flex items-center gap-[12px]">
                                <BiWalk className='text-2xl' />
                                <span>Steps</span>
                            </div>
                        </th>
                        <th className='pr-15'>
                            <div className="text-[18px] font-bold flex items-center gap-[12px]">
                                <CgGym className='text-2xl' />
                                <span>Workout</span>
                            </div>
                        </th>

                        <th className='pr-15'>
                            <div className="text-[18px] font-bold flex items-center gap-[12px]">
                                <svg width="24" height="20" viewBox="0 0 24 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M22.8 13.2C22.8 7.65 18.5916 3.0708 13.2 2.4708V0H10.8V2.4708C5.4084 3.0708 1.2 7.65 1.2 13.2V15.6H22.8V13.2ZM3.6 13.2C3.6 8.5692 7.3692 4.8 12 4.8C16.6308 4.8 20.4 8.5692 20.4 13.2H3.6ZM0 16.8H24V19.2H0V16.8Z" fill="white" />
                                </svg>
                                <span>Nutrition</span>
                            </div>
                        </th>
                        <th className='pl-8'></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((user, index) => <SingleUser key={index} user={user} />)}
                </tbody>
            </table>
        </div>
    );
};

export default Main;