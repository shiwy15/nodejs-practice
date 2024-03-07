const axios = require("axios");

async function getTop20Movies() {
    const url = "https://raw.githubusercontent.com/wapj/musthavenodejs/main/movieinfo.json";
    try {
        // 1. get 요청(네트워크에서 받아오므로 await로 기다림)
        const result = await axios.get(url);
        
        // 2. 데이터에 결과값이 없을 때 예외처리 
        const {data} = result;
        if (!data.articleList || data.articleList.size == 0) {
            throw new Error("데이터가 없습니다.");
        }

        // 3. 데이터에서 영화제목과 순위 정보 추출
        const movieInfos = data.articleList.map((article, idx) => {
            return { title: article.title, rank: idx + 1 };
        });

        // 4. 데이터 출력
        for (let movieInfo of movieInfos) {
            console.log(`[${movieInfo.rank}위] ${movieInfo.title}`);
        }
    } catch (err) {
        throw new Error(err);
        // console.log("<<에러 발생>>");
        // console.error(err);
    }
}

getTop20Movies();