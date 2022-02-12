let g = 0;

setTimeout(() => { g = 100; }, 0);
console.log(g);


// 비동기 함수인 setTimeout 함수는 콜백 함수의 처리 결과를 외부로 반환하거나 상위 소크포의 변수에 할당하지 못한다.
/*
setTimeout 함수의 콜백 함수를 호출 스케줄링한 다음, 타이머 id를 반환하고 즉시 종료됨 
=> setTimeout 함수의 콜백 함수는 setTimeout의 함수가 종료된 이후에 호출된다.
*/
