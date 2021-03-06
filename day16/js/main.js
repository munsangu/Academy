const tdList= document.querySelectorAll("#calendarTable td");
//new Date().getMonth() 현재 달의 -1을 반환(0~11)
printCalendar(new Date().getMonth()+1);

function printCalendar(paraMonth,paraYear=(new Date().getYear()+1900)){
  let dateMonth=paraMonth-1; //Date()는 month 가 0~11까지
  //9월 마지막 일 구하기
  let lastDay=new Date(paraYear,dateMonth+1,0).getDate();
  //9월의 시작하는 요일 구하기
  let firstDay=new Date(paraYear,dateMonth,1).getDay();
  //전달의 마지막날 구하기
  let lastMonth=new Date(paraYear,dateMonth,0).getDate();
  //////////////////////////////////////////////////////////////////////


  function ButtonValue(month,year){
    this.month=month;
    this.year=year;
    this.text=`${this.year}년도 ${this.month}월`;
    this.value=`${this.year}-${this.month}`;
  }
  const nextB=(paraMonth+1==13)?new ButtonValue(1,paraYear+1):new ButtonValue(paraMonth+1,paraYear);

  const preB=(paraMonth-1==0)?new ButtonValue(12,paraYear-1):new ButtonValue(paraMonth-1,paraYear);

  document.getElementById("nextMonth").innerText=nextB.text;
  document.getElementById("nextMonth").value=nextB.value;

  document.getElementById("preMonth").innerText=preB.text;
  document.getElementById("preMonth").value=preB.value;

  document.getElementById("toDate").innerText=`${paraYear}. ${paraMonth}`;
  //document.getElementById("toDate").innerText=new Date(paraYear,dateMonth);



  //활성화된 해당 월 출력n
  for(let i=firstDay,d=1; i<lastDay+firstDay; i++){
    tdList[i].querySelector(".day").innerText=d++;
    tdList[i].classList.add("active"); //활성화된 td 스타일 추가
    tdList[i].classList.remove("disabled"); //비활성화된 td 스타일 삭제

  }

  //비활성화된 전달의 출력
  for(let i=firstDay-1; i>=0; i--){
    tdList[i].querySelector(".day").innerText=lastMonth--;
    tdList[i].classList.add("disabled");//비활성화된 td 스타일 추가
    tdList[i].classList.remove("active");//활성화된 td 스타일 삭제

  }
  //비활성화된 다음달 출력
  let nextMonth=firstDay+lastDay
  for(let i=nextMonth,num=1; i<=tdList.length-1; i++){
    tdList[i].querySelector(".day").innerText=num++;
    tdList[i].classList.add("disabled");//비활성화된 td 스타일 추가
    tdList[i].classList.remove("active");//활성화된 td 스타일 삭제

  }
}
//button인 달 바꾸기만 onclick이벤트 재정의
document.querySelectorAll(".changeMonth[type=button]").forEach((item) => {
//  item.onclick=function(){}
    item.addEventListener("click",(event)=>{
      let yearMonthArr=event.target.value.split("-");//"2021-8"->[2021,8]
      printCalendar(Number(yearMonthArr[1]),Number(yearMonthArr[0]));
    });
});