// rejected
new Promise( (_, reject) => reject(new Error('rejected')))
    .catch(e => console.log(e)); // Error: rejected



//catch 매서드는 한개의 콜백 함수를 인수로 전달 받는다.
//catch 메서드의 콜백 함수는 프로미스가 rejected상태인 경우만 호출된다.