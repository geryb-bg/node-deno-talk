import { allTodos, saveAllTodos } from '../allTodos.js';

export const deleteTodo = async (ctx) => {
  try {
    const id = parseInt(ctx.params.id);

    const data = await allTodos();

    const todo = data.find((t) => t.id === id);
    if (!todo) {
      ctx.response.body = 'Not Found';
      ctx.response.status = 404;
      return;
    }

    const updatedData = data.filter((t) => t.id !== id);

    await saveAllTodos(updatedData);

    ctx.response.status = 204;
    ctx.response.body = 'Deleted';
  } catch (err) {
    console.log(err);
    ctx.response.status = 500;
    ctx.response.body = { error: err.message };
  }
};
