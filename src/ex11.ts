function identity<T>(arg: T): T {
  return arg;
}

identity(10);

function useState<T>(arg: T): [T, (arg: T) => void] {
  return [arg, (arg2) => {}];
}

const [count, setCount] = useState<number>(0);

const a: number[] = [1, 2, 3];
const b: Array<number | string> = [1, 2, 3, "a", "b"]; //generic 타입

//todoList 타입
// [{
//     id:'',
//     title:'',
//     color:''

// ,...}]

type TodoList = Array<TodoItem> | null;
// TodoList를 배열 형태로 정의
//type TodoList = Todo[];

interface TodoItem {
  id: string;
  title: string;
  color: string;
}

const [todoList, setTodoList] = useState<TodoList>([]);

todoList?.map((elem, idx) => {
  return elem.color;
});

setTodoList([
  {
    id: "a",
    title: "todo",
    color: "pink",
  },
]);
