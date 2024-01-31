function enumerable1(value: boolean) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
    descriptor.enumerable = value;
  };
}
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }

  //greet라는 메소드에 데코레이터가 붙음
  @enumerable1(false)
  greet() {
    return "Hello, " + this.greeting;
  }
}
const greet = new Greeter("World");
greet.greet();
