/** setTimeout으로 10까지 차례로 세기 */ 

function waitOneSecond(msg) {
    // setTimeout은 타이머ID가 반환되어 비동기 처리되지 않으므로, Promise로 감싸서 반환
    return new Promise((resolve, _) => {
        setTimeout(() => resolve(`${msg}`), 1000);
    });
};

async function countOneToTen() {
    for (let x of [...Array(10).keys()]) {
        let result = await waitOneSecond(`${x+1}초 대기 중...`);
        console.log(result);
    }
    console.log("완료");
}

countOneToTen();

/** async-await 사용하지 않은 경우 */
// // 1: 1~10초 대기중 차례로 -> 완료
// function countOneToTen() {
//     for (let i = 1; i <= 10; i++) {
//         setTimeout(() => {
//             console.log(`${i}초 대기 중...`);
//             if (i === 10) {
//                 console.log("완료");
//             }
//         }, i * 1000);
//     }
// }
// // 2: 완료 -> 1~10초 대기중 한꺼번에
// // for문이 순회하며 i=1~10인 1초짜리 타이머가 한꺼번에 설정됨
// // 이 사이에 countOneToTen이 실행 종료되며 "완료"가 먼저 찍힌 후,
// // 10개의 타이머가 동시에 종료되며 한꺼번에 대기중 문구가 10개 찍힘
// function countOneToTen() {
//     for (let i = 1; i <= 10; i++) {
//         setTimeout(() => {
//             console.log(`${i}초 대기 중...`);
//         }, 1000);
//     }
//    console.log("완료");
// }
// countOneToTen();