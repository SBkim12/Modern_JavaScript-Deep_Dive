/* 
then 메서드의 두 번째 콜백 함수는 
    첫 번째 콜백 함수에서 발생한 에러를 캐치하지 못하고 
    코드가 복잡해져서 가독성이 좋지 못하다.
*/

const wrongUrl = "https://jsonplaceholder.typicode.com/XXX/1";

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

// 부적절한 URL이 지정되었기 때문에 에러가 발생한다.
promiseGet(wrongUrl).then(
    res => console.xxx(res), //에러 인식 못함
    err => console.error(err)
);
//Error: 404