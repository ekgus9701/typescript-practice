//데코레이터 사용하는 이유: 공통 기능 재사용 위해서

//함수를 인자로 받음
function reportableClassDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  console.log("Decorator 호출");

  constructor.prototype.sample = function () {
    console.log("injected method");
  };

  return class extends constructor {
    reportingURL = "http://www...";
  };
}

//@써있으면 위 함수에 인자로 아래 클래스를 줌
@reportableClassDecorator
class BugReport {
  type: string = "report";
  title: string;
  reportingURL: undefined | string;
  sample() {
    throw new Error("Should Be implemented");
  }

  constructor(t: string) {
    this.title = t;
  }
}
const bug = new BugReport("Needs dark mode");
console.log(bug.title); // Outputs: Needs dark mode
console.log(bug.type); // Outputs: report
console.log(bug.reportingURL);
bug.sample();
