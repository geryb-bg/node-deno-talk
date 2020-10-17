# Demo

## Hello World

- `console.log`
- with function
- with import/export
- with CSS `console.log('%cSomething', 'background-color:purple;color:white;font-weight:bold');`

## Fetch API

- `const json = fetch("dog_url")`
- ... `.then response.json()`
- ... `.then console.log`
- run with error
- add `allow-net=dog.ceo`

- show with top level await

## HTTP Server

- `server_import`
- `const server = serve({ hostname: '0.0.0.0', port: 8080 });`
- `console.log` - something about server started
- `for await (const request of server)`
- move fetch code
- `request.respond({ status: 200, body: 'Find your random dog at ${data.message}' });`

## TODO application

- `oak_import`
- `oak_setup`
- `router.get('/', async (ctx) => {});`
- move fetch code
- `oak_response`
- `oak_start`
- SHOW WORKING

### Data

- create file `allTodos.js`
- `const filePath='./data/todos.json';`
- `all_todos`
- create file controllers/getTodos
- import allTodos
- `oak_function`
  - `getTodos`
  - `200`
  - `data`
- `const data = await allTodos();`
- change `main.js`
- add `--allow-read` flag
- SHOW WORKING

### Add TODO

- `save_todo` - create function in allTodos to save
- create addTodo file in controllers
- `oak_function`
  - `addTodo`
  - `201`
  - `'Created'`
- `read_body`
  - `title`
- `create_id`
- `new_todo`
- `await saveAllTodos([...data, newTodo]);`
- import statement
- add `.post('/', addTodo);` to router
- add `--allow-write` flag
- SHOW WORKING

### Update TODO

- create updateTodo file in controllers
- `oak_function`
  - `addTodo`
  - `204`
  - `'Updated'`
- `const id = parseInt(ctx.params.id);`
- `const data = await allTodos();`
- `find_todo`
- write `updatedData` map script
- `await saveAllTodos(updatedData);`
- add `.put('/:id', updateTodo)` to router
- SHOW WORKING

### Delete TODO

- create deleteTodo file in controllers
- add function same as updateTodo
- add try catch and return error
- add 204 updated response
- `const id = parseInt(ctx.params.id);`
- `const data = await allTodos();`
- `find_todo`
- write `updatedData` filter script
- `await saveAllTodos(updatedData);`
- add `.delete('/:id', deleteTodo)` to router
- SHOW WORKING

## Debugging

- add `--inspect-brk`
- go to `chrome://inspect`
- under Remote Target find deno and click inspect

## Testing

- `test_import`
- `Deno.test('My first test', () => {})`
- `assert`
- `assertEquals`
- `assertNotEquals`
- `assertThrows` - function, Error, 'error message'
