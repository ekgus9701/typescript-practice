"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//함수를 인자로 받음
function reportableClassDecorator(constructor) {
    console.log("Decorator 호출");
    constructor.prototype.sample = function () {
        console.log("injected method");
    };
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.reportingURL = "http://www...";
            return _this;
        }
        return class_1;
    }(constructor));
}
//@써있으면 위 함수에 인자로 아래 클래스를 줌
var BugReport = /** @class */ (function () {
    function BugReport(t) {
        this.type = "report";
        this.title = t;
    }
    BugReport.prototype.sample = function () {
        throw new Error("Should Be implemented");
    };
    BugReport = __decorate([
        reportableClassDecorator,
        __metadata("design:paramtypes", [String])
    ], BugReport);
    return BugReport;
}());
var bug = new BugReport("Needs dark mode");
console.log(bug.title); // Outputs: Needs dark mode
console.log(bug.type); // Outputs: report
console.log(bug.reportingURL);
console.log(bug.sample());
