// GET 요청을 위한 비동기 함수
const get = url => {
    // npm install xhr2
    // node로 XMLHttpRequest 사용을 위해 사용
    const XMLHttpRequest = require('xhr2'); 
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();

    xhr.onload = () => {
        if(xhr.status === 200 ){
            // 서버의 응답을 콘솔에 출력
            console.log(JSON.parse(xhr.response));
        }else{
            console.error(`${xhr.status} ${xhr.statusText}`);
        }
    };
};

//id 가 1인 post를 취득
get('https://jsonplaceholder.typicode.com/posts/1');

/*
{
  userId: 1,
  id: 1,
  title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
  body: 'quia et suscipit\n' +
    'suscipit recusandae consequuntur expedita et cum\n' +
    'reprehenderit molestiae ut ut quas totam\n' +
    'nostrum rerum est autem sunt rem eveniet architecto'
}
*/


/*
get 함수는 비동기 함수(비동기로 동작하는 코드를 포함한 함수)
비동기 함수 호출 시 함수 내부의 비동기로 동작하는 코드가 완료되지 않았다 해도 기다리지 않고 즉시 종료된다.
=>  비동기 함수 내부의 비동기로 동작하는 코든느 비동기 함수가 종료도니 이후에 완료된다.
    비동기로 동작하는 코드에서 처리 결과를 외부로 반환하거나 상위 소크포의 변수에 할당하면 기대한대로 동작하지 않는다.
*/