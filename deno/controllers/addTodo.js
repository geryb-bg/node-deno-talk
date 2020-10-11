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

    const updatedData = [...data, newTodo];
    await saveAllTodos(updatedData);

    ctx.response.body = 'Created';
    ctx.response.status = 201;
  } catch (err) {
    console.log(err);
    ctx.response.body = { error: err.message };
    ctx.response.status = 500;
  }
};
