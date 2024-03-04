const axios = require("axios");
const url = "https://raw.githubusercontent.com/wapj/musthavenodejs/main/movieinfo.json";

axios
    .get(url)   // get 요청
    .then((result) => {
        // 상태코드가 200이 아닐 경우 에러
        if (result.status != 200) {
            throw new Error("요청에 실패했습니다!");
        }
        // result.data가 있으면 결과 반환
        if (result.data) {
            return result.data;
        }
        // result.data가 없는 경우 에러
        throw new Error("데이터가 없습니다.");
    })
    .then((data) => {
        // 데이터 크기가 0이면 에러
        if (!data.articleList || data.articleList.size == 0) {
            throw new Error("데이터가 없습니다.");
        }
        // 영화 리스트 반환
        return data.articleList;
    })
    .then((articles) => {
        // 리스트를 제목과 순위로 분리
        return articles.map((article, idx) => {
            return { title: article.title, rank: idx + 1 };
        });
    })
    .then((results) => {
        // 영화 정보 출력
        for (let movieInfo of results) {
            console.log(`[${movieInfo.rank}위] ${movieInfo.title}`);
        }
    })
    .catch((err) => {   // 중간에 에러 발생 시 여기서 처리 
        console.log("<<에러 발생>>");
        console.error(err);
    });