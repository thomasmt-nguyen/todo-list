import React from 'react';

import Header from '../Header';
import ListItems from '../ListItems';

import './styles.css';

const TodoList = () => {
    return (
        <div id='todo-list'>
            <Header header='To Do List'/>
            <ListItems />
        </div>
    )
}

export default TodoList;