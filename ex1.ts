let number: number = 5;
let text: string = "Hello World";

//적어두지 않아도 당연하게 타입 추론이 된다
let number2: 5;
let text2: "Hello World";

//boolean
let bool1: boolean = true;

//array
let arr1: String[] = ["a", "b", "c"];
let arr2: Array<String> = ["a", "b", "c"];

//console.log(arr2);

//tuple , 숫자,함수 형태
let sample: [number, Function] = [0, () => {}];

//any는 진짜 모를때 사용 하지만 unknown을 더 많이 씀
let anyValue: any = 1;
function func1(value: any) {
  console.log(value);
}

function func2(num1: number): void {
  //:void -> 함수가 리턴하지 않아요
  console.log(num1);
}

let nullValue: null = null;
let undefinedValue: undefined = undefined;
