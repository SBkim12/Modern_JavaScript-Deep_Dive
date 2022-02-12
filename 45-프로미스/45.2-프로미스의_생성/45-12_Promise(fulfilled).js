// fulfilled된 promise
const fulfilled = new Promise(resolve => resolve(1));

/*
Promise {<fulfilled>: 1}
[[Prototype]]: Promise
[[PromiseState]]: "fulfilled"               <- 비동기 처리 상태 정보
[[PromiseResult]]: 1                        <- 비동기 처리 결과 정보
*/