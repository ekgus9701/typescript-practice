import React, { useEffect, useState } from "react";

export type TodoData = {
  id: number | string;
  title: string;
  color: string;
};

type Props = {
  todo: TodoData;
  remove: () => void;
  update: (arg1: string) => void;
};

export default function TodoItem({ todo, remove, update }: Props) {
  const [mode, setMode] = useState("normal");
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    setInputText(todo.title);
  }, [todo]);

  return (
    <li style={{ backgroundColor: todo.color }}>
      <div>
        {mode === "updates" ? (
          <input
            value={inputText}
            type="text"
            onChange={(e) => setInputText(e.target.value)}
          />
        ) : mode === "normal" ? (
          todo.title
        ) : null}
      </div>

      <div
        onClick={() => {
          remove();
        }}
        style={{ cursor: "pointer" }}
      >
        X
      </div>

      <div
        onClick={() => {
          if (mode === "normal") {
            setMode("updates");
          } else {
            // Call the parent component's update function
            // with the new title
            update(inputText);
            setMode("normal");
          }
        }}
      >
        수정
      </div>
    </li>
  );
}
