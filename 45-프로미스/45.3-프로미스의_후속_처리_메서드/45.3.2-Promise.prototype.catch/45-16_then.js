// rejected
new Promise( (_, reject) => reject(new Error('rejected')))
    .then(undefined, e => console.log(e));

// catch 메서드는 then(undefined, onRejected)과 동일하게 동작한다.
// 따라서 then 메서드와 마찬가지로 언제나 프로미스를 반환한다.