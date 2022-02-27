var month = 11;
var monthName;

switch (month){
    case 1: monthName = 'January';
    case 2: monthName = 'February';
    case 3: monthName = 'March';
    case 4: monthName = 'April';
    case 5: monthName = 'May';
    case 6: monthName = "June";
    case 7: monthName = 'July';
    case 8: monthName = 'August';
    case 9: monthName = 'September';
    case 10: monthName = "October";
    case 11: monthName = "November";
    case 12: monthName = "December";
    default: monthName = "Invalid month";
}

console.log(monthName); //Invalid month

// switch문에서 일치하는 case 문으로 이동하여 알맞게 동작하였지만 break문으로 탈출하지 못하고 이후 일치할수 있는 case문과 default문이 실행되어 Invalid month 가 출력됨
// 이를 폴스루(fall through)라 한다.

// 오류 수정
switch (month){
    case 1: monthName = 'January';
        break;
    case 2: monthName = 'February';
        break;
    case 3: monthName = 'March';
        break;
    case 4: monthName = 'April';
        break;
    case 5: monthName = 'May';
        break;
    case 6: monthName = "June";
        break;
    case 7: monthName = 'July';
        break;
    case 8: monthName = 'August';
        break;
    case 9: monthName = 'September';
        break;
    case 10: monthName = "October";
        break;
    case 11: monthName = "November";
        break;
    case 12: monthName = "December";
        break;
    default: monthName = "Invalid month";
}

console.log(monthName); //November

// default문에 break문을 생략하는 것은 일반적
// default문은 맨 마지막에 위치하므로 default문이 종료되면 switch문을 빠져 나간다.

// break문을 생략한 폴스루가 유용한 예
var year = 2000; // 2000년은 윤년으로 2월이 29일이다.
var month = 2;
var days = 0;

switch (month){
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        days = 31;
        break;
    case 4: case 6: case 9: case 11:
        days = 30;
    case 2:
        //윤년 계산 알고리즘
        // 1. 연도가 4로 나누어 떨어지는 해는 윤년이다.
        // 2. 연도가 4로 나누어 떨어지더라도 100으로 나누어 떨어지는해는 평년이다.
        // 3. 연도가 400으로 나누어 떨어지는 해는 윤년이다.
        days = ((year % 4 === 0 && year % 100 !==0)||(year % 400 ===0)) ? 29 : 28;
        break;
    default : 
        console.log('Invalid month');
}

console.log(days);

// 조건이 많아서 if...else보다 switch문을 사용했을때 가독성이 좋을경우 switch문을 사용하자