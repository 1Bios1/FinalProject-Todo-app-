
import { useContext } from "react"
import { TaskContext } from "../contexts/TasksProvider"
import Task from "../components/Task"

export default function TasksPage() {

    const { tasksCurState } = useContext(TaskContext)

    return (
        <>

            {
                tasksCurState.tasks.length > 0 ? (
                    tasksCurState.tasks.map((task) => {
                        return <Task task={task} />
                    })
                ) : (
                    <h1>Вы пока что не создали ни одного задания! Исправте ситуацию.</h1>
                )
            }

        </>
    )
}