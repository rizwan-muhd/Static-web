import React from 'react'
import { collabContent } from '../constants'

function Collaboration() {
    return (
        <div className='container lg:flex'>
            <div className='max-w-[25rem]'>
                <h2>AI Chat App for Seamless Collaboraion</h2>
                <ul className='max-w-[22rem]'>
                    {collabContent.map((item) => (
                        <li className='mb-3 py-3' key={item.id}>
                            <div className='flex items-center'>
                                {/* <img src={check} /> */}
                            </div>

                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default Collaboration