import {useState} from "react";
import type {Todo} from "../types.ts";

export const useTodos = () => {
    // STATE TODOS
    // [
    // {id: 2342123, text1, completed: false},
    // {id: 1245545, text2, completed: false},
    // {id: 1324665, text3, completed: false},
    // ]

    const [todos, setTodos] = useState<Todo[]>([])

    const addTodo = (text: string) => {
        setTodos(prev => [
            ...prev,
            {id: Date.now(), text, completed: false},
        ])
    }



    const deleteTodo = (id: number) => {
        setTodos(
            prev => prev.filter(todo => todo.id = id)
        )
    }

    const editTodo = (id: number, newText: string) => {
        setTodos(prev =>
            prev.map(todo =>
                todo.id === id ? {...todo, text: newText} : todo
            )
        )
    }
    // STATE TODOS
    // [
    // {id: 2342123, text1, completed: false},
    // {id: 1245545, text2, completed: false},
    // {id: 1324665, text3, completed: false},
    // ]

    const toggleTodo = (id: number) => {
        setTodos(prev =>
            prev.map(todo =>
                todo.id === id ? {...todo, completed: !todo.completed} : todo
            )
        )
    }

    const clearAll = () => {
        setTodos([]);
    }



    return {
        todos,
        addTodo,
        deleteTodo,
        editTodo,
        toggleTodo,
        clearAll
    }
}