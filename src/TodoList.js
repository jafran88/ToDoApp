import React from 'react'
import Todo from './Todo'

export default function TodoList({list , hanldeCompleteClick}) {    
    return (
            list.map(element =>
            {
                return <Todo key = {element.id}todo = {element} hanldeCompleteClick = {hanldeCompleteClick}/>
            })
    )
}