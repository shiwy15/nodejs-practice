/** callback 함수
 * 회원가입 API : DB 저장 -> 이메일 보내기 -> 성공 메세지 출력
 */
const DB = [];

// 회원가입 API 함수 : 콜백 3중 중첩
function register(user) {
    return saveDB(user, function(user) {            // 콜백
        return sendEmail(user, function(user) {     // 콜백
            return getResult(user);     // 콜백
        });
    });
}

// DB에 저장 후 콜백 실행
function saveDB(user, callback) {
    DB.push(user);
    console.log(`save ${user.name} to DB`);
    return callback(user)
}

// 이메일 발송(log만) 후 콜백
function sendEmail(user, callback) {
    console.log(`email to ${user.email}`);
    return callback(user);
}

// 결과 반환
function getResult(user) {
    return `success register ${user.name}`;
}

const result = register({ email: "dedoo@practice.com", password: "0000", name: "deedo" });
console.log(result); 