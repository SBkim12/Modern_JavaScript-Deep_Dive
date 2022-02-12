// GET 요청을 위한 비동기 함수
const get = url => {
    // npm install xhr2
    // node로 XMLHttpRequest 사용을 위해 사용
    const XMLHttpRequest = require('xhr2'); 
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();

    xhr.onload = () => {
        if(xhr.status === 200 ){
            //1. 서버의 응답을 반환한다.
            return JSON.parse(xhr.response);
        }else{
            console.error(`${xhr.status} ${xhr.statusText}`);
        }
    };
};

// 2. id가 1인 post를 취득
const response = get('https://jsonplaceholder.typicode.com/posts/1');
console.log(response); // undefined



/*
get 함수가 비동기 함수인 이유
    =>  get 함수 내부의 onload 이벤트 핸들러가 비동기로 동작함
        get 함수 호출하면서 GET 요청을 전송하고 onload 이벤트 핸들러를 등록한다음 undefined를 반환하고 즉시 종료된다. 
        (즉, onload 이벤트 핸들러는 get 함수가 종료된 이후에 실행된다.)

xhr.onload 이벤트 핸들러 프로퍼티에 바인딩한 이벤트 핸들러의 반환문(1.)은 get함수의 반환문이 아니다.
get 함수는 반환문이 생략되었으므로 암묵적으로 undefined를 반환한다.
onload의 이벤트 핸들러의 반환값을 get 함수가 캐치할 수 없다.
*/