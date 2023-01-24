import React from 'react'

const UserInfo = () => {
    return (
        <div className='w-full'>
            <h1 className='text-center font-bold text-3xl'>Welcome! First things first...</h1>
            <h3 className='text-gray-500 text-base text-center py-4 '>You can always change them later</h3>
            <div className='py-4'>
            <form className='flex flex-col text-base w-full items-center'>
                    <div className="w-4/5">
                        <label className="block text-gray-600 text-sm font-bold mb-2" for="username">
                            Full Name
                        </label>
                        <input className="selection: text-gray-400 border shadow-sm focus:outline-none rounded w-full py-2 px-3" id="username" type="text"  />
                    </div>
                    <div className="my-2 w-4/5">
                        <label className="block text-gray-600 text-sm font-bold mb-2" >
                            Display Name
                        </label>
                        <input className="selection: text-gray-500 shadow-sm focus:outline-none border rounded w-full py-2 px-3" id="username" type="text"  />
                    </div>       
                    <button className='bg-indigo-600 p-2 text-white rounded text-sm my-2 w-4/5'>Create Workspace</button>
                </form>
            </div>
        </div>
    )
}

export default UserInfo
