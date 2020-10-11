import { allTodos, saveAllTodos } from '../allTodos.js';

export const updateTodo = async (ctx) => {
  try {
    const id = parseInt(ctx.params.id);

    const data = await allTodos();

    const todo = data.find((t) => t.id === id);
    if (!todo) {
      ctx.response.body = 'Not Found';
      ctx.response.status = 404;
      return;
    }

    const updatedData = data.map((t) => {
      if (t.id !== id) {
        return t;
      }

      return {
        ...t,
        completed: !t.completed,
      };
    });

    await saveAllTodos(updatedData);

    ctx.response.body = 'Updated';
    ctx.response.status = 204;
  } catch (err) {
    console.log(err);
    ctx.response.body = { error: err.message };
    ctx.response.status = 500;
  }
};
