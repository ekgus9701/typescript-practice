import React, { useCallback, useState } from "react";
import TodoList from "./TodoList";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuidv4 } from "uuid";

const COLOR_MAP = [
  { color: "#ccd5ae" },
  { color: "#e9edc9" },
  { color: "#fefae0" },
  { color: "#faedcd" },
];

export default function TodoApp() {
  const [inputText, setInputText] = useState("");
  const [activeColor, setActiveColor] = useState(COLOR_MAP[0].color);
  const [incrementCount, setIncrementCount] = useState(3);

  type TodoLists = Array<TodoItems>;

  interface TodoItems {
    id: number | string;
    title: string;
    color: string;
  }

  const [todoList, setTodoList] = useState<TodoLists>([
    {
      id: uuidv4(),
      title: "todo-1",
      color: "#ccd5ae",
    },
    {
      id: uuidv4(),
      title: "todo-2",
      color: "#e9edc9",
    },
  ]);

  const deleteTodo = useCallback(
    (todoId: number | string) => {
      setTodoList((prev) => prev.filter((todo) => todo.id !== todoId));
    },
    [setTodoList]
  );

  const updateTodo = useCallback(
    (todoId: number | string, newTitle: string) => {
      setTodoList((prev) =>
        prev.map((todo) =>
          todo.id === todoId ? { ...todo, title: newTitle } : todo
        )
      );
    },
    [setTodoList]
  );

  return (
    <div className="todo-app">
      <Container>
        <div>
          <div>TodoApp</div>
        </div>
        <div>
          <input
            type="text"
            value={inputText}
            style={{ backgroundColor: activeColor }}
            onChange={(e) => {
              setInputText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const item = {
                id: uuidv4(),
                title: inputText,
                color: activeColor,
              };
              setTodoList((prev) => prev.concat(item));
              setIncrementCount((prev) => prev + 1);
            }}
          >
            제출
          </button>
        </div>
        <div className="colors">
          {COLOR_MAP.map((elem) => {
            return (
              <div
                onClick={() => {
                  setActiveColor(elem.color);
                }}
                key={elem.color}
                style={{
                  width: 20,
                  height: 20,
                  backgroundColor: elem.color,
                  border: "1px solid",
                  borderRadius: 5,
                  borderColor: "e9e9e9",
                }}
              ></div>
            );
          })}
        </div>
        <div>
          <TodoList
            todoList={todoList}
            onDelete={deleteTodo}
            onUpdate={updateTodo}
            inputText={""}
          />
        </div>
      </Container>
    </div>
  );
}
