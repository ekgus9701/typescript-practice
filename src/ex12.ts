//interface와 type의 확장

//interface는 extends와 implements 키워드 사용 가능
interface TodoItem2 {
  id: string | number;
  title: string;
  color: string;
}

interface AdvancedTodoItem extends TodoItem {
  completed: boolean;
  etc: string;
}

type TypeTodo = {
  id: string;
  title: string;
  color: String;
};

type AdvancedTypeTodo = TypeTodo & {
  completed: boolean;
  etc: string;
};
