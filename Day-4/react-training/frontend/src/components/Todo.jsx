import {useUpdateTodos, useDeleteTodos} from '../api/react-query';

export const Todo = ({ todo }) => {
  const {mutate: editExistingTodo} = useUpdateTodos();
  const {mutate: deleteExistingTodo} = useDeleteTodos();
  return (
    <div className="flex items-center">
      <input
        checked={todo.done}
        type="checkbox"
        onChange={(e) => editExistingTodo({ ...todo, done: e.target.checked })}
      />
      <span className="flex-grow">{todo.task}</span>
      <button
        onClick={() => deleteExistingTodo(todo.id)}
        className="color-danger"
      >
        Delete
      </button>
    </div>
  );
};
