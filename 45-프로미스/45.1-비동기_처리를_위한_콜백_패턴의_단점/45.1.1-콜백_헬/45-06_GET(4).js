// GET 요청을 위한 비동기 함수
const get = (url, successCallback, failureCallback) => {
    // npm install xhr2
    // node로 XMLHttpRequest 사용을 위해 사용
    const XMLHttpRequest = require('xhr2'); 
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();

    xhr.onload = () => {
        if(xhr.status === 200 ){
            // 서버의 응답을 콜백 함수에 인수로 전달하면서호출하여 응답에 대한 후속 처리를 한다.
            successCallback(JSON.parse(xhr.response));
        }else{
            // 에러 정보를 콜백 함수에 인수로 전달하면서 호출하여 에러 처리를 한다.
            failureCallback(xhr.status);
        }
    };
};

// id가 1인 post를 취득
// 서버의 응답에 대한 후속 처리를 위한 콜백 하뭇를 비동기 함수니 get에 전달해야 한다.
get("http://jsonplaceholder.typicode.com/posts/1", console.log, console.error);
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
이처럼 콜백함수를 통해 비동기 처리 결과에 대한 후속처리를 수행하는 비동기 함수가 비동기 처리 결과를 가지고 또다시 비동기 함수를 호출해야 한다면 콜백 함수 호출이 중첩되어 복잡도가 높아지는 현상이 발생함
=> 콜백 헬(callback hell)
*/