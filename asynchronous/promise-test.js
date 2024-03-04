const DB = [];

// DB에 저장 후 콜백 실행
function saveDB(user, callback) {
    const oldDBSize = DB.length + 1;
    DB.push(user);
    console.log(`save ${user.name} to DB`);
    // 콜백 대신 promise 객체 반환
    return new Promise((resolve, reject) => {
        // 성공시 user 반환, 실패시 에러 발생
        if (DB.length > oldDBSize) {
            resolve(user);
        } else {
            reject(new Error("Save Error"))
        }
    });
}

// 이메일 발송(log만) 후 콜백
function sendEmail(user) {
    console.log(`email to ${user.email}`);
    // promise 객체 반환, 실패 처리 없음
    return new Promise((resolve) => {
        resolve(user);
    });
}

// 결과 반환
function getResult(user) {
    return new Promise((resolve, reject) => {
        resolve(`success register ${user.name}`);
    }); 
}

// 회원가입 API 함수 : 콜백 3중 중첩
function registerByPromise(user) {
    // 비동기 호출이지만 순서를 지켜서 실행
    const result = saveDB(user)
                    .then(sendEmail)
                    .then(getResult)
                    .catch(error => new Error(error))
                    // 성공/실패 여부 관계없이 실행함
                    .finally(() => console.log("완료!"));
    console.log(result);
    return result;
}

const myUser = { email: "dedoo@practice.com", password: "0000", name: "deedo" };
const result = registerByPromise(myUser);
// // result의 결과값이 promise이므로 then 메서드에 함수를 넣어서 결과값을 볼 수 있음
result.then(console.log);
// console.log(result)

/** 동시에 여러 promise 객체 호출 */
// allResult = Promise.all([saveDB(myUser), sendEmail(myUser), getResult(myUser)]);
// allResult.then(console.log);