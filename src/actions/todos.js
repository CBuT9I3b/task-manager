export const SET_TODOS = 'SET_TODOS';
export const SELECT_TODO = 'SELECT_TODO';
export const SET_TASKS = 'SET_TASKS';

export const setTodos = todos => ({
  type: SET_TODOS,
  todos
});

export const selectTodo = todo => ({
  type: SELECT_TODO,
  todo
});

export const setTasks = tasks => ({
  type: SET_TASKS,
  tasks
});
