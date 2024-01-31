import React, { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

export type Props = {
  todoList: Array<{
    id: number;
    title: string;
    color: string;
  }>;
  onDelete: (arg0: number) => void;
  onUpdate: (arg0: number, arg1: string) => void;
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
