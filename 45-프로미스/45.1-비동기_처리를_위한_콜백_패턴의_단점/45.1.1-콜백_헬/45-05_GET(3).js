let todos;

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
            // 1. 서버의 응답을 상위 스코프의 변수에 할당한다.
            todos = JSON.parse(xhr.response);
        }else{
            console.error(`${xhr.status} ${xhr.statusText}`);
        }
    };
};

// 2. id가 1인 post를 취득
get('https://jsonplaceholder.typicode.com/posts/1');
console.log(todos); // undefined

/*
xhr.onload 이벤트 핸들러 프로퍼티에 바인딩한 이벤트 핸들러는 언제나 2.의 console.log가 종료한 이후에 호출된다.
=> xhr.onload  이벤트 핸들러에서 서버의 응답을 상위 스코프의 변수 에 할당(1.)하면 처리 순서가 보장되지 않는다.

xhr.onload 핸들러 프로퍼티에 바인딩한 이벤트 해늗ㄹ러가 즉실 실행되는 것이 아니다.
xhr.onload 이벤트 핸들러는 load 이벤트가 발생하면 일단 태스크 큐에 저장되어 대기하닥, 콜 스택이 비면 이벤트 루프에 의해 콜 스택으로 푸시되어 실행된다.
이벤트 핸들러의 평가 => 이벤트 핸들러의 실행 컨텍스트 생성 => 콜 스택에 푸시 => 이벤트 핸들러 실행과정

xhr.onload 이벤트가 핸들러가 실행되는 시점에는 콜 스택이 빈 상태여야 하므로 2.의 console.log는 이미 종료된 이후다. 만약 get 함수 이후 console.log가 100번 호출된다 해도 xhr.onload는 모든 console.log가 종료된 이후에 실행된다.
즉, xhronload 이벤트 핸들러에서 상위 스코프의 변수에 서버 응답 결과를 할당하기 이전에 console.log가 먼저 호출되어 undefined가 출력된다.



이처럼 비동기 함수는
    비동기 처리결과를 외부에 반환 X
    상위 스코프에 변수에 할당 X

    =>  비동기 함수의 처리 결과에 대한 후속 처리는 비동기 함수 내부에서 수행해야 한다.
        이 때 비동기 함수를 범용적으로 사용하기 위해 비동기 함수에 비동기 처리 결과에 대한 후속 처리를 수행하는 콜백 함수를 전달하는 것이 일반적이다.
        필요에 따라 비동기 처리가 성공하면 호출될 콜백함수와 비동기처리가 실패하면 호출될 콜백함수를 전달할 수 있다.
*/