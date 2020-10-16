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
- `ctx.response.status = 200;`
- `ctx.response.body = 'Find your random pic at: ${data.message}';`
- `oak_start`
- SHOW WORKING

- move function to new file controllers/getTodos
- add try/catch
- add import (don't forget .js)
- SHOW WORKING

### Data

- create folder called data
- create json file called todos
- `create_todo` - to add data
- create file `allTodos.js`
- `const filePath='./data/todos.json';`
- `all_todos`
- import into getTodos
- `const data = await allTodos();`
- change body of return
- add `--allow-read` flag
- SHOW WORKING

### Add TODO

- `save_todo` - create function in allTodos to save
- create addTodo file in controllers
- add function same as getTodos
- add try catch and return error
- add 201 created response
- `read_body`
  - title
- `create_id`
- `new_todo`
- `const updatedData = [...data, newTodo];` - import here!
- `await saveAllTodos(updatedData);`
- add `.post('/', addTodo);` to router
- add `--allow-write` flag
- SHOW WORKING

### Update TODO

- create updateTodo file in controllers
- add function same as addTodo
- add try catch and return error
- add 204 updated response
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
