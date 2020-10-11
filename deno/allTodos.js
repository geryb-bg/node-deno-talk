const filePath = './data/todos.json';

export async function allTodos() {
  const text = await Deno.readTextFile(filePath);
  return JSON.parse(text);
}

export async function saveAllTodos(todos) {
  await Deno.writeTextFile(filePath, JSON.stringify(todos));
}
