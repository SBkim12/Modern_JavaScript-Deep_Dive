const Url = "https://jsonplaceholder.typicode.com/todos/1";

const promiseGet = url => {
    return new Promise((resolve, reject) => {
        const XMLHttpRequest = require('xhr2'); 
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();

        xhr.onload = () => {
            if(xhr.status === 200){
                //성공적으로 응답을 전달받으면 resolve 함수를 호출한다.
                resolve(JSON.parse(xhr.response));
            }else{
                // 에러 처리를 위해 reject 함수를 호출한다.
                reject(new Error(xhr.status));
            }
        };
    });
};

promiseGet(Url)
    .then(res => console.xxx(res))
    .catch(err => console.error(err));
//Error: 404


// catch를 모든 then 메서드를 호출한 이후에 호출하면 비동기처리 오류 뿐만 아니라 then메서드 내부에서 발생한 에러까지 모두 캐치 가능
// 또한 catch가 then 메서드로 에러 캐치하는것보다 가독성이 좋고 명확!!
// catch를 사용하는것을 권장