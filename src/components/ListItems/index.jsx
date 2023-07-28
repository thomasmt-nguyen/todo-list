import React, { useState } from 'react';
import ListItem from '../ListItem';

import './styles.css';

const ListItems = () => {

    const [Items, setItems] = useState([
        {
            id: '12345',
            description: 'item 1',
            checked: false
        },
        {
            id: '12346',
            description: 'item 2',
            checked: true
        }
    ])

    return (
        <table>
            <thead>
                <th id='list-completed-column'>Completed</th>
                <th id='list-description-column'>Description</th>
            </thead>
            <tbody>
                {Items.map((item, index) => {return <ListItem key={index} item={item}/>})}
            </tbody>
        </table>
    )
}

export default ListItems;