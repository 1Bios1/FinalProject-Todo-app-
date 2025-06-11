

export default function Task({ task }) {

    return (
        <>
            <div className="task" key={task.id}>
                <div className="task__container">
                    <h1 className="task__title">{ task.title }</h1>
                    
                    <div className="task__text">
                        { task.text}
                    </div>

                    <small className="task__creationTime">
                        { task.createdAt }
                    </small>

                    <div className="task__buttons-row">
                        <button className="task__btn-success">Задание выполнено!</button>
                        <br />
                        <button className="task__btn-failure">Удалить задание/Отменить задание</button>
                    </div>
                </div>
            </div>
        </>
    )
}