import { Buttontypes } from '@/lib/types'
import React from 'react'

const Button = ({ title, onclick, classes }: Buttontypes) => {
    return (
        <button onClick={onclick} className={`cursor-pointerpy-3 px-8 rounded text-white w-fit ${classes}`}>{title}</button>
    )
}

export default Button