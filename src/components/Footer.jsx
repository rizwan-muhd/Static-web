import React from 'react'
import { socials } from '../constants'

function Footer() {
    return (
        <div className='container flex sm:justify-between justify-center items-center gap-10 max-sm:flex-col'>
            <p className='caption text-n-4 lg:block'>{new Date().getFullYear()}. All rights reserved</p>
            <ul className='flex gap-5 flex-wrap bottom-3'>
                {socials.map((item) => (
                    <a key={item.id} className='flex item-center justify-center w-10 h-10'>
                        <img src={item.iconUrl} width={16} height={16} />
                    </a>
                ))}

            </ul>
        </div>
    )
}

export default Footer
