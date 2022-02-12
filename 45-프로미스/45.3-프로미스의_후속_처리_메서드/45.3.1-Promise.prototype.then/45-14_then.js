// fulfilled
new Promise(resovle => resovle('fulfilled'))
    .then(v => console.log(v), e => console.error(e)); //fulfilled
// 프로미스가 fulfilled 상태(resolve 함수가 호출된 상태)가 되면 호출된다.
// 이때 콜백 함수는 프로미스의 비동기 처리 결과를 인수로 전달받는다.

// rejected
new Promise((_, reject) => reject(new Error('rejected')))
    .then(v => console.log(v), e => console.error(e)); // Error: rejected
// 프로미스가 rejected 상태(reject 함수가 호출된 상태)가 되면 호출된다.
// 이때 콜백 함수는 프로미스의 에러를 인수로 전달받는다.

/*
then 메서드는 항상 프로미스를 반환한다. 만약에 then 메서드의 콜백함수가 포리미스를 반환하면 프로미스를 그대로 반환하고, 
콜백 함수가 프로미스가 아닌 값을 반환하면 그 값을 암묵적으로 resolve or reject하여 프로미스를 생성해 반환한다.
*/