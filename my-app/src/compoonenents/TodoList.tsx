import React, { useEffect, useState } from "react";
//export default인 것은 {} 없이 쓰고 export인 것은 {}를 사용한다.
import TodoItem, { type TodoData } from "./TodoItem";

type TodoDataArray = TodoData[];
export type Props = {
  todoList: TodoDataArray;
  onDelete: (id: number | string) => void;
  onUpdate: (id: number | string, arg1: string) => void;
  inputText: string;
};

export default function TodoList({ todoList, onDelete, onUpdate }: Props) {
  return (
    <div>
      <h3>TodoList</h3>
      <ul>
        {todoList.map((todo, idx) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              remove={() => {
                onDelete(todo.id);
              }}
              update={(text: string) => {
                onUpdate(todo.id, text);
              }}
            />
          );
        })}
      </ul>
    </div>
  );
}
