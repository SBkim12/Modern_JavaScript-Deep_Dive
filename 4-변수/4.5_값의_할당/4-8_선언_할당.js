console.log(score); // undefined

var score; // 1. 변수 선언
score = 100; // 2. 값의 할당

console.log(score); // 100

/*
변수 선언이 런타임 이전에 동작
이후 순차적 코드 동작
값의 할당 이전은 undefined
감의 할당 이후는 100 출력
*/