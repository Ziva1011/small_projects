import React from 'react'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export function Button({name, onClick}) {
    return (
       <>
        <div >
            <button  className="calculator-button" value={name} onClick={(e)=> onClick(e.target.value)}>{name} </button>
        </div>
       </>

    )
}


