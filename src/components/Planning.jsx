import React from 'react'

const Planning = () => {
    return (
        <div className='w-full'>
            <h1 className='text-center font-bold text-3xl'>How are you planning to use Eden?</h1>
            <h3 className='text-gray-500 text-base text-center py-4 '>We'll stremline your setup experience accordingly</h3>
            <div className='py-4'>
                <div className='flex  flex-col  text-base w-full items-center '>
                    <div className="flex justify-between w-4/5">
                        <div className='w-[45%] h-40 border p-2 rounded'>
                            <h1 className='text-base font-bold m-2'>For myself</h1>
                            <p className='text-sm text-gray-400 p-2'>white better, Think more clearly, Stay Orginized</p>
                        </div>
                        <div className='w-[45%] h-40 border rounded p-2'>
                            <h1 className='text-base font-bold m-2'>With myb team</h1>
                            <p className='text-base text-gray-400 p-2'>wikis, docs, & project , all in one place</p>
                        </div>
                    </div>
                        <button className='bg-indigo-600 p-2 text-white rounded text-sm mt-6 w-4/5'>Create Workspace</button>
                </div>
            </div>
        </div>
    )
}

export default Planning