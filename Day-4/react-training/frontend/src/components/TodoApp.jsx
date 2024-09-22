import { ApiState } from './ApiState';
import { Todo } from './Todo';
import { useCreateTodos } from '../api/react-query';
import { useState,useCallback } from 'react';
import { v4 as uuid } from 'uuid';
import { useQueryClient } from '@tanstack/react-query';

const _TodoApp = ({ todos }) => {
  const [task, setTask] = useState('');
  const { mutate, isPending } = useCreateTodos();
  const queryClient = useQueryClient();

  const handleReferesh = useCallback(() => {
    queryClient.invalidateQueries({ queryKey: ["Todo"] });
  }, [queryClient]);

  const editExistingTodo = useCallback((todo) => {
    queryClient.invalidateQueries({ queryKey: ['Todo'] });
  }, [queryClient]);

  const deleteExistingTodo = useCallback((id) => {
    queryClient.invalidateQueries({ queryKey: ['Todo'] });
  }, [queryClient]);

  return (
    <div className="flex flex-column gap-1">
      <div className="flex gap-1">
        <input value={task} onChange={(e) => setTask(e.target.value)} />
        <button
          disabled={isPending}
          onClick={() => {
            mutate({ task, id: uuid(), done: false });
            setTask('');
          }}
        >
          {isPending ? 'loading...' : 'Add Todo'}
        </button>
        <button onClick={handleReferesh}>Referesh</button>
      </div>
      {(todos ?? []).map((todo) => (
        <Todo
          key={todo.id}
          todo={todo}
          editExistingTodo={editExistingTodo}
          deleteExistingTodo={deleteExistingTodo}
        />
      ))}
    </div>
  );
};

export const TodoApp = ApiState(_TodoApp);
