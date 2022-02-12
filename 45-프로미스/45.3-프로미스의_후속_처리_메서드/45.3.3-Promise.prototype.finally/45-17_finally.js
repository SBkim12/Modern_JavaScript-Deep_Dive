new Promise(() => {})
    .finally( () => console.log('finally') ); //finally

/*
finally 매서드의 콜백 함수는 프로미스의 성공/실패와 상관없이 무조건 한 번 호출된다.
promise의 상태와 상관없이 공통적으로 수행할 경우 유용
finally 메서드도 then/catch 메서드와 마찬가지로 언제나 프로미스를 반환한다.
*/