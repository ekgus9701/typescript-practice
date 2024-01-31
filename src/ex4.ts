interface User {
  //인터페이스는 상속이 가능하다!

  readonly id: number; //수정이 안되고 읽기전용임
  name: string;
  age?: number; //number도 되고 undefined도 돼
}

let user2: User = {
  id: 1,
  name: "John2",
};

user2.name = "Sam";
//user2.id=5; //수정 안돼서 오류남

let user: User = {
  id: 2,
  name: "John",
  age: 30,
};
