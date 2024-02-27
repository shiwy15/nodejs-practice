console.log("require 함수로 부르면 실행됩니다.");

// module.export : require을 사용해 불렀을 때 반환하는 객체를 저장하는 함수
// module은 현재 모듈, exports는 외부에 노출할 객체를 저장하는 변수
module.exports = {
    add: (a, b) => a+b,
    sub: (a, b) => a-b,
    mul: (a, b) => a*b,
    div: (a, b) => a/b,
}