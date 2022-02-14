// rejected된 프로미스
const rejected = new Promise( (_, reject) => reject(new Error('error occurred')));

/*
Promise {<rejected>: Error: error occurred
    at <anonymous>:1:52
    at new Promise (<anonymous>)
    at <anonymous>:1…}
        [[Prototype]]: Promise                              
        [[PromiseState]]: "rejected"                        <- 비동기 처리 상태 정보
        [[PromiseResult]]: Error: error occurred            <- 비동기 처리 결과 정보


=> 프로미스는 비동기 처리 상태와 처리 결과를 관리하는 객체
*/