const tdList= document.querySelectorAll("#calendarTable td");
for(td of tdList){
  td.onmouseenter=(event)=>{
    event.target.querySelector(".schedule").style.visibility="visible";
  }
  td.addEventListener("mouseleave",function(event){
    event.target.querySelector(".schedule").style.visibility="hidden";
  })
}
//new Date().getMonth() 현재 달의 -1을 반환(0~11)
printCalendar(new Date().getMonth()+1);
//function(para,para="default") 꼭 마지막 파라미터에 기본값 주기
printCalendar(09,2021);
//new Date().getYear() = 2000-1900: 100, 2021-1900: 121
function printCalendar(paraMonth,paraYear=(new Date().getYear()+1900)){
  let dateMonth=paraMonth-1; //Date()는 month 가 0~11까지
  //9월 마지막 일 구하기
  let lastDay=new Date(paraYear,dateMonth+1,0).getDate();
  //9월의 시작하는 요일 구하기
  let firstDay=new Date(paraYear,dateMonth,1).getDay();
  //전달의 마지막날 구하기
  let lastMonth=new Date(paraYear,dateMonth,0).getDate();
//////////////////////////////////////////////////////////////////////
  document.getElementById("toDate").innerText=`${paraYear}. ${paraMonth}`;
  document.getElementById("nextMonth").innerText=`${paraYear}. ${paraMonth+1}`;
  document.getElementById("nextMonth").value=`${paraYear}-${paraMonth+1}`
  document.getElementById("preMonth").innerText=`${paraYear}. ${paraMonth-1}`;
  document.getElementById("preMonth").value=`${paraYear}-${paraMonth-1}`;

  //document.getElementById("toDate").innerText=new Date(paraYear,dateMonth);



  //활성화된 해당 월 출력
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
      let yearMonthArr=event.target.value.split("-")
      printCalendar(Number(yearMonthArr[1]),Number(yearMonthArr[0]));
    });
});