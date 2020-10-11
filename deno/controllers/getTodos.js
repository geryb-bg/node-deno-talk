import { allTodos } from '../allTodos.js';

export const getTodos = async (ctx) => {
  try {
    const data = await allTodos();

    ctx.response.status = 200;
    ctx.response.body = data;
  } catch (err) {
    console.log(err);
    ctx.response.body = { error: err.message };
    ctx.response.status = 500;
  }
};
