import type { TodoStatsProps } from "./types.ts";

const TodoStats = ({ todos }: TodoStatsProps) => {

    const total = todos.length;
    const completed = todos.filter(todo => todo.completed).length;
    const active = total - completed;

    return (
        <>
            <div className="text-center text-sm mb-4">
                <span>Total: {total}</span>
                <span>Active: {active}</span>
                <span>Completed: {completed}</span>


            </div>
        </>
    )
}
export default TodoStats;
