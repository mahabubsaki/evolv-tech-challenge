import React, { useEffect, useState } from 'react';
import { BiUserCircle, BiUserCheck } from 'react-icons/bi'
import { CircularProgressbar } from 'react-circular-progressbar';
import CusomizedProgressBar from './CusomizedProgressBar';
import { TbCalendarTime } from 'react-icons/tb'
import { MdOutlineNavigateNext } from 'react-icons/md'
import { useNavigate } from 'react-router-dom';
import { AiOutlineExclamation } from 'react-icons/ai'
import { GrNotification } from 'react-icons/gr'
import CustomizedPieChart from './CustomizedPieChart';

const SingleUser = ({ user }) => {
    const navigate = useNavigate()
    const { userId, name, email, stepsWalked, stepsTarget, performedDate, sheduledDate, calorieInTake, calorieTarget, proteinConsumed, proteinTarget, crabsConsumed, crabsTarget, fatConsumed, fatTarget, feedback } = user
    const [currentWalk, setCurrentWalk] = useState(0)
    const [currentCalory, setCurrentCalory] = useState(0)
    useEffect(() => {
        setCurrentWalk(stepsWalked)
        setCurrentCalory(calorieInTake)
    }, [stepsWalked, calorieInTake])
    return (
        <tr className="bg-[#1e262f] my-2">
            <td></td>
            <td className="pr-8">
                <div className="flex items-center">
                    <div><BiUserCircle className='text-[40px] mr-5' /></div>
                    <div className='flex flex-col gap-0'>
                        <span className="text-[14px] text-[white] font-medium mb-[-4px]">{name}</span>
                        <span className="text-[10px] text-[#bdbcbe] font-medium">{email}</span>
                    </div>
                </div>
            </td>
            <td className="pr-15">
                <div className="flex w-full items-center">
                    <CusomizedProgressBar value={(currentWalk / stepsTarget) * 100} styles={{
                        path: {
                            stroke: '#7FD18C'
                        }
                    }}>
                        <div>
                            <p className="font-bold text-[12px]">{currentWalk}</p>
                        </div>
                        <div className="font-medium text-[8px] text-[#BDBCBE]" >Walked</div>
                    </CusomizedProgressBar>
                    <div className="flex flex-col ml-3 items-center gap-[4px]">
                        <button className="px-[12px] bg-[#101317] hover:bg-opacity-50 rounded-[4px] duration-300" onClick={() => setCurrentWalk(pre => pre + 500)} disabled={currentWalk === stepsTarget}>+</button>
                        <div className="text-center">
                            <p className="text-[16px] font-bold mb-[-6px]">{stepsTarget / 1000}K</p>
                            <p className="text-[10px] font-medium text-[#BDBCBE]">target</p>
                        </div>
                        <button className="px-[16px] bg-[#101317] hover:bg-opacity-50 rounded-[4px] duration-300" onClick={() => setCurrentWalk(pre => pre - 500)} disabled={currentWalk === 0}>-</button>
                    </div>
                </div>
            </td>
            <td className="pr-15">
                <div className="flex items-center">
                    <div className="flex flex-col gap-[13px] mr-[18px]">
                        <div className={`flex items-center rounded-[8px] px-[7px] py-[2px]`}>
                            <BiUserCheck className="text-[22px]" />
                            <p className="ml-[8px] text-[14px] font-semibold">{performedDate.split(' ').reverse().join(' ')}</p>
                        </div>
                        <div className={`flex items-center rounded-[8px] px-[7px] py-[2px] ${sheduledDate === (new Date().toDateString()).split(' ').slice(1, 3).join(' ') && 'bg-[#CC3838]'}`}>
                            <TbCalendarTime className="text-[22px]" />
                            <p className="ml-[8px] text-[14px] font-semibold">{sheduledDate.split(' ').reverse().join(' ')}</p>
                        </div>
                    </div>
                    <button onClick={() => navigate(`/workout/${userId}`)} className={`${feedback ? 'bg-[#CC3838]' : 'bg-[#101317]'} hover:bg-opacity-50 rounded-[8px] py-[24px] duration-300 px-[10px]`}>{feedback ? <AiOutlineExclamation className='text-[white] text-[18px]' /> : <MdOutlineNavigateNext className=' text-[white] text-[18px]' />}</button>
                </div>
            </td>
            <td className="pr-15">
                <div className="flex w-full items-center">
                    <CustomizedPieChart crabsConsumed={crabsConsumed} fatConsumed={fatConsumed} className="tooltip-main rounded-full" proteinConsumed={proteinConsumed}>
                        <div>
                            <p className="font-bold text-[12px]">{currentCalory}</p>
                        </div>
                        <div className="font-medium text-[8px] text-[#BDBCBE]" >Calories</div>
                        <div className="tooltiptext">
                            <div className="bg-[#1B222A] mb-[13px] px-[5px] py-[8px] rounded-[5px]">
                                <div className="flex justify-between font-medium text-[14px] mb-[6px]">
                                    <p>PROTEIN</p>
                                    <p>{proteinTarget}g</p>
                                </div>
                                <div className="w-full bg-transparent flex items-center rounded-[9px]">
                                    <div className={`bg-[#F45C84] rounded-[9px] w-[${((proteinConsumed / proteinTarget) * 100).toFixed(2)}%]`}><p className="opacity-0">hide</p></div>
                                    <p className="text-[#F45C84] text-[10px] ml-[3px]">{proteinConsumed}g</p>
                                </div>
                            </div>
                            <div className="bg-[#1B222A] mb-[13px] px-[5px] py-[8px]">
                                <div className="flex justify-between font-medium text-[14px] mb-[6px]">
                                    <p>FAT</p>
                                    <p>{fatTarget}g</p>
                                </div>
                                <div className="w-full bg-transparent flex items-center rounded-[9px]">
                                    <div className={`bg-[#03C6FA] rounded-[9px] w-[${((fatConsumed / fatTarget) * 100).toFixed(2)}%]`}><p className="opacity-0">hide</p></div>
                                    <p className="text-[#03C6FA] text-[10px] ml-[3px]">{fatConsumed}g</p>
                                </div>
                            </div>
                            <div className="bg-[#1B222A] px-[5px] py-[8px]">
                                <div className="flex justify-between font-medium text-[14px] mb-[6px]">
                                    <p>CARBS</p>
                                    <p>{crabsTarget}g</p>
                                </div>
                                <div className="w-full bg-transparent flex items-center rounded-[9px]">
                                    <div className={`bg-[#F0C50F] rounded-[9px] w-[${((crabsConsumed / crabsTarget) * 100).toFixed(2)}%]`}><p className="opacity-0">hide</p></div>
                                    <p className="text-[#F0C50F] text-[10px] ml-[3px]">{crabsTarget}g</p>
                                </div>
                            </div>
                        </div>
                    </CustomizedPieChart>
                    <div className="flex flex-col mx-[17px] items-center gap-[4px]">
                        <button className="px-[12px] bg-[#101317] hover:bg-opacity-50 rounded-[4px] duration-300" onClick={() => setCurrentCalory(pre => pre + 100)} disabled={currentCalory === calorieTarget}>+</button>
                        <div className="text-center">
                            <p className="text-[16px] font-bold mb-[-6px]">{calorieTarget / 1000}K</p>
                            <p className="text-[10px] font-medium text-[#BDBCBE]">target</p>
                        </div>
                        <button className="px-[16px] bg-[#101317] hover:bg-opacity-50 rounded-[4px] duration-300" onClick={() => setCurrentCalory(pre => pre - 100)} disabled={currentCalory === 0}>-</button>
                    </div>
                    <button onClick={() => navigate(`/nutrition/${userId}`)} className={`bg-[#101317] hover:bg-opacity-50 rounded-[8px] py-[26px] duration-300 px-[10px]`}><MdOutlineNavigateNext className=' text-[white] text-[18px]' /></button>
                </div>
            </td>
            <td>
                <button className='p-[10px] hover:bg-opacity-50 duration-300 bg-[#36F5C7] rounded-[8px]'><GrNotification className="text-[22px]" /></button>
            </td>
        </tr>
    );
};

export default SingleUser;