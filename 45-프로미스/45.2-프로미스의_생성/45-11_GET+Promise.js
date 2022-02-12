const promiseGet = url => {
    return new Promise((resolve, reject) => {
        const XMLHttpRequest = require('xhr2'); 
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();

        xhr.onload = () => {
            if(xhr.status === 200){
                //성공적으로 응답을 전달받으면 resolve 함수를 호출한다.
                resolve(JSON.parse(xhr.response));
            }else{
                // 에러 처리를 위해 reject 함수를 호출한다.
                reject(new Error(xhr.status));
            }
        };
    });
};

// promiseGet 함수는 프로미스를 반환한다.
promiseGet('https://jsonplaceholder.typicode.com/posts/1');

/*
프로미스이 상태 정보
                         의미                                     상태 변경 조건
pending     비동기 처리가 아직 수행되지 않는 상태           프로미스가 생성된 직후 기본 상태  
fulfiled    비동기 처리가 수행된상태(성공)                  resolve 함수 호출
rejected    비동기 처리가 수행된상태(실패)                  reject 함수 호출


프로미스 상태는 resolve or reject 함수를 호출하는 것으로 결정된다.
fulfilled or rejected 상태를 settled 상태라고 한다.(pending이 아닌 상태로 빋오기 처리가 수행된 상태)
pending 상태에선 settled 상태로 변경 가능하지만 settled 상태가 되면 더이상 다른 형태로 변화가 불가능하다.
*/