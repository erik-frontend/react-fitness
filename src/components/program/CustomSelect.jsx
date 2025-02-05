import React from 'react'
import Select from 'react-select'
import { options } from '../../data/programData'

const CustomSelect = () => {
    return (
        <>
            <Select classNamePrefix="custom-select" 
                options={options}
                defaultValue={options[0]}
            />
        </>
    )
}

export default CustomSelect