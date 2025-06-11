
import { createContext, useReducer } from "react"

export const TaskContext = createContext()

const tasksReducer = (state, action) => {
    switch (action.type) {
        case 'CREATE_TASK':
            return {
                ...state,
                tasks: [
                    ...state.tasks,
                    {
                        id: Date.now(),
                        title: action.payload.title,
                        text: action.payload.title,
                        createdAt: Date.now().toString(),
                        completed: false,
                        complededAt: null,
                    }
                ]
            }
        
        case 'DELETE_TASK':
            return {
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload.id)
            }
    }
}

const initalTasksState = {
    tasks: [
        {id: Date.now(), title: 'Купить курицу', text: 'Мне нужно купить курицу к 2м часам дня.', completed: false, completedAt: null}
    ],
    completedTasks: []
}

export default function TasksProvider({ children }) {

    const [state, dispatch] = useReducer(tasksReducer, initalTasksState)

    const contextValue = {
        tasksCurState: state,
        tasksDispatch: dispatch,
    }

    return (
        <TaskContext.Provider value={contextValue}>
            { children }
        </TaskContext.Provider>
    )
}