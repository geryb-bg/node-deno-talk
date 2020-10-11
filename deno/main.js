import { Application, Router } from 'https://deno.land/x/oak/mod.ts';
import { getTodos } from './controllers/getTodos.js';
import { addTodo } from './controllers/addTodo.js';
import { updateTodo } from './controllers/updateTodo.js';
import { deleteTodo } from './controllers/deleteTodo.js';

const router = new Router();
const app = new Application();
const PORT = 8080;

router.get('/', getTodos).post('/', addTodo).put('/:id', updateTodo).delete('/:id', deleteTodo);

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({ port: PORT });
