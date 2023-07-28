import React from 'react';


import './styles.css';

const ListItem = ({item, index}) => {
    
    return (
        <tr id={`list-item-${index}`}>
            <td>
                <input id={`list-item-${index}-checkbox`} type='checkbox' checked={item.checked}/>
            </td>
            <td>
                <input className='input-description' id={`list-item-${index}-description`} type='text' value={item.description} />
            </td>
        </tr>
    )
}

export default ListItem;