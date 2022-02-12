// 프로미스 생성
const promsie = new Promise( (resolve, reject) => {
    // Promise 함수의 콜백 함수 내부에서 비동기 처리를 수행한다.
    if(/* 비동기 처리 성공 */){
        resolve('result');
    }else { /* 비동기 처리 실패 */
        reject('failure reason');
    }
})

/*
ES6에서 도입된 Promise는 호스트 객체가 아닌 ECMAScript 사양에 정의된 표준빌트인 객체다.

Promise 생성자 함수는 비동기 처리를 수행할 콜백 함수(ECMAScript 사양에서는 executor 함수라고 부른다)를 인수로 전달받는데 이 콜백 함수는 resolve와 reject 함수를 인수로 전달받는다.
비동기 처리가 성공하면 콜백 함수의 인수로 전달받는 resolve 함수를 호출하고, 비동기 처리가 실패하면 reject 함수를 호출한다
*/