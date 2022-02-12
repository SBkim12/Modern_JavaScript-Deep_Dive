// rejected된 프로미스
const rejected = new Promise( (_, reject) => reject(new Error('error occurred')));

/*
Promise {<rejected>: Error: error occurred
    at <anonymous>:1:52
    at new Promise (<anonymous>)
    at <anonymous>:1…}
        [[Prototype]]: Promise
        [[PromiseState]]: "rejected"
        [[PromiseResult]]: Error: error occurred
*/