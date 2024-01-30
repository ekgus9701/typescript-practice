//함수 선언식과 표현식의 차이
//선언식은 선언되기전에도 함수 호출 가능
//표현식은 표현식이 끝난 다음에 함수 호출 가능

function add(a: number, b: number): number {
  return a + b;
}

const add2 = function (a: number, b: number): number {
  return a + b;
};

const add3: (a: number, b: number) => number = (a, b) => {
  return a + b;
};
