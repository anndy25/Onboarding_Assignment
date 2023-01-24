import React, { useState } from 'react'

const MainHeader = ({ level ,func}) => {
    const number = [1, 2, 3, 4];
   
    return (
        <div>
            <h1 className='text-2xl text-center my-6 font-bold'>Eden</h1>
            <div className='flex justify-center w-full'>
                {number.map((num, key) => {
                    return (
                        <div key={key} className='flex realtive'>
                            <div className={`${num <= level ? 'text-white bg-indigo-700' : 'text-gray-700 bg-white'} h-10 w-10 flex justify-center items-center border rounded-full realtive` } onClick={(num)=>func(num)}>{num}</div>
                            {number.length!==num?
                            <div className={`border-b-2 h-1/2 w-8 ${num <= level ? ' border-b-indigo-700' : "border-b-gray-200 "}` }></div>:""
                            }
                            
                        </div>
                    )
                })}

            </div>
        </div>
    )
}

export default MainHeader