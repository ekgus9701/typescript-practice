function enumerable(value: boolean) {
  return function sample(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.enumerable = value;
  };
}

class Greeters {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }

  //greet라는 메소드에 데코레이터가 붙음
  @enumerable(false)
  greet() {
    return "Hello, " + this.greeting;
  }
}
const greets = new Greeters("World");
greets.greet();

for (let p in greet) {
  //@sample이 있으면 반복이 안돎
  console.log(p);
}
