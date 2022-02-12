// GET 요청을 위한 비동기 함수
const get = (url, callback) => {
    // npm install xhr2
    // node로 XMLHttpRequest 사용을 위해 사용
    const XMLHttpRequest = require('xhr2'); 
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();

    xhr.onload = () => {
        if(xhr.status === 200) {
            // 서버의 응답을 콜백 함수에 전달하면서 호출하여 응답에 대한 후속처리를 한다.
            callback(JSON.parse(xhr.response));
        }else{
            console.error(`${xhr.status} ${xhr.statusText}`);
        }
    };
};

const url = 'https://jsonplaceholder.typicode.com';

// id가 1인 post의 userId를 취득
get(`${url}/posts/1`, ({ userId }) => {
    console.log(userId); // 1
    // post의 userId를 사용하여 user 정보를 취득
    get(`${url}/users/${userId}`, userInfo => {
        console.log(userInfo);
    });
});

/*
위의 예제는 콜백 헬의 예제이다.
가독성을 나쁘게 하며 실수를 유발하는 원인이 된다.
*/