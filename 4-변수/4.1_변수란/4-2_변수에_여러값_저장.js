// 변수는 하나의 값을 저장하기 위한 수단이다.
const userId = 1;
const userName = 'Lee';

//userId와 userName 은 변수이름(or 변수명)
//1과 'Lee'는 변수값
//변수에 값을 저장하는 것 =>  할당(assignment)(대입, 저장)
//변수에 저장된 값을 읽어 들이는 것 => 참조

// 객체나 배열 같은 자료구조를 사용하면 여러 개의 값을 하나로 그룹화해서 하나의 값처럼 사용할 수 있다.
const user = {id:1, name: 'Lee'};

var users = [
    {id:1, name: "Lee"},
    {id:2, name: "Kim"}
];

console.table(userId);
console.table(userName);
console.table(user);
console.table(users);

// 사람이 이해할 수 있는 언어로 명명한 변수 이름을 통해 젖아된 값의 의미를 명확히 할 수 있다.
//개발자의 의도를 나타내는 명확한 네이밍은 코드를 이해하기 쉽게 만들며, 이는 협업과 품질 향상에 도움을 준다.