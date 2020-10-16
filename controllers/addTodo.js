import { allTodos, saveAllTodos } from '../allTodos.js';

export const addTodo = async (ctx) => {
  try {
    const body = await ctx.request.body();
    const { title } = await body.value;

    const data = await allTodos();
    const id = Math.max(...data.map((i) => i.id)) + 1;

    const newTodo = {
      id,
      title,
      completed: false,
      dateCreated: new Date().toISOString(),
    };

    await saveAllTodos([...data, newTodo]);

    ctx.response.status = 201;
    ctx.response.body = 'Created';
  } catch (err) {
    console.log(err);
    ctx.response.status = 500;
    ctx.response.body = { error: err.message };
  }
};
