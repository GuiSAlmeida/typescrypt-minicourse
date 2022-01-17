/** Type utilities:
 * 
 * - Readonly: Apenas leitura.
 * - Partial: Deixa todas as propriedades opcionais.
 * - Pick: Pega propriedades de outro type.
 * - Omit: Omite propriedades de outro type.
 */


type Todo = {
  title: string;
  description: string;
  completed: boolean;
};

const todo: Readonly<Todo> = {
  title: 'Assitir Dark de novo',
  description: 'Relembrar',
  completed: false,
};

console.log(todo);
// todo.completed = true;

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
  return { ...todo, ...fieldsToUpdate }
};

const todo2: Todo = updateTodo(todo, { completed: true });

type TodoPreview = Pick<Todo, 'title' | 'completed'>

const todo3: TodoPreview = {
  title: 'Fechar ghost of tsuchima',
  completed: false
}

type TodoPreview2 = Omit<Todo, 'description'>
const todo4: TodoPreview2 = {
  title: 'Fechar ghost of tsuchima',
  completed: false
}