import { useState } from 'react'


export default function Dropdown({ 
    options=[], 
    value, 
    defaultValue,
    onChange, 
    className=''
}) {
    const [isOpen, setIsOpen] = useState(false)

    const handleConst = (option) => {
        onChange(option),
        setIsOpen(false)
    }

    return (
        <select
            value={ value }
            defaultValue={ defaultValue }
            onChange={ (e) => onChange(e.target.value) }
            className={ `${className}` }
        >
            { options.map((option, index) => (
                <option value={ option } key={ index }>
                    { option }
                </option>
            ))}
        </select>
    )
}
