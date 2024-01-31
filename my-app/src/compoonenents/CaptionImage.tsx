import React, { useState, useEffect } from "react";

export type Props = {
  imgUrl: string;
  text: string;
};

type ComplexCount = {
  value: number;
  mutation: number;
};

export default function CaptionImage({ imgUrl, text }: Props) {
  const [count, setCount] = useState<ComplexCount>({ value: 0, mutation: 0 });

  useEffect(() => {
    console.log(count.value);
    console.log(count.mutation);

    // setCount 함수를 비동기적으로 호출
    setCount({
      value: 3,
      mutation: 4,
    });
  }, []); // 두 번째 매개변수로 빈 배열을 전달하여 컴포넌트가 처음 렌더링될 때만 실행되도록 함

  return (
    <div>
      <img src={imgUrl} alt={text} />
      <p>{text}</p>
    </div>
  );
}
