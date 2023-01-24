import React from 'react'

const WorkSpace = () => {
    return (
        <div className='w-full'>
            <h1 className='text-center font-bold text-3xl'>Let's set up a home for all your work</h1>
            <h3 className='text-gray-500 text-base text-center py-4 '>You can always change them later</h3>
            <div className='py-4'>
                <form className='flex flex-col text-base w-full items-center'>
                    <div className="w-4/5">
                        <label className="block text-gray-600 text-sm font-bold mb-2" for="username">
                            Workspace Name
                        </label>
                        <input className="selection: text-gray-400 border shadow-sm focus:outline-none rounded w-full py-2 px-3" id="username" type="text" placeholder="Eden" />
                    </div>
                    <div className="my-2 w-4/5">
                        <label className="block text-gray-600 text-sm font-bold mb-2" >
                            WorkSpace URL <small className='text-gray-400'>(optional)</small>
                        </label>

                        <div className="flex">
                            <span className="inline-flex items-center px-3 text-sm font-semibold text-gray-400 bg-gray-200 border border-r-0 border-gray-300 rounded-l-md ">
                                www.edn.com/
                            </span>
                            <input type="text" id="website-admin" className="selection: text-gray-400 border shadow-sm focus:outline-none rounded w-full py-2 px-3 " placeholder="Example" />
                        </div>
                    </div>
                    <button className='bg-indigo-600 p-2 text-white rounded text-sm my-2 w-4/5'>Create Workspace</button>
                </form>
            </div>
        </div>
    )
}

export default WorkSpace