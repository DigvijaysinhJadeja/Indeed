

import {Select,MenuItem,FormControl,InputLabel} from '@mui/material';

const Dropdown = ({
    label,
    id,
    value,
    handleChange,
    name,
    options,
    ...props
}) => {
    
    return (
    <FormControl fullWidth>
        <InputLabel id = {id}>{label}</InputLabel> 
        <Select
            labelId={id}
            id={id}
            value={value} 
            label={label}
            onChange={handleChange}
            name = {name} // bacics of react
            {...props}
        > 
            {
                options.map(option =>(
                    <MenuItem value = {option}>{option}</MenuItem> // values,options(array of object) would be passed from the database as we do not know how much is required
                ))
            }
        </Select>
    </FormControl>
    )
}

export default Dropdown;