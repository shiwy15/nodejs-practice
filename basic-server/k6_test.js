/* 'hello.js' 서버 성능테스트
 * 100명이 10초동안 localhost:8000에 동시에 계속 요청을 보내는 내용
 */
import http from "k6/http";

/* 성능 테스트 옵션값 
 * vus(virtual users): 가상 유저 설정
 * duration: 테스트 진행 시간(초)
 */
export const options = {
    vus: 100,
    duration: "10s"
};

/* 성능 테스트에 사용될 함수
 * http 프로토콜의 get 메서드로 localhost:8000에 요청을 보낸다.
 */
export default function() {
    http.get("http://localhost:8000");
}

/** 🔥 import & export 🔥 **
 * import는 다른 모듈에서 변수, 함수, 클래스 등을 가져올 때 사용
 * export는 현재 모듈에서 변수, 함수, 클래스 등을 다른 모듈에서 사용할 수 있도록 공개할 때 사용
 * export default는 모듈에서 기본적으로 내보내는 항목을 정의. 모듈 하나당 default 하나.
 */