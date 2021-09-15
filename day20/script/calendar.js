// const d_09=
//   {
//     13:{
//       430:{text:"기상 커피마기",linked:3},
//       450:{text:"에이콘아카데미 출근",linked:2},
//       1080:{text:"퇴근",linked:0},
//       1170:{text:"집 도착",linked:0},
//       1328: {text:"취침,linked:0}"
//     },
//     14:{
//       430:{text:"기상 커피마기",priority:0~5,linked:-1},
//       450:{text:"에이콘아카데미 출근",linked:-1},
//       1180:{text:"퇴근2",linked:0},
//       1270:{text:"집 도착2",linked:0},
//       1428: {text:"취침2,linked:0}"
//     },
//    14:{
//       430:{text:"기상 커피마기",priority:0~5,linked:-1},
//     }
// }
const d_09=
  {
    13:{
      430:"기상 커피마기",
      450:"에이콘아카데미 출근",
      1080: "퇴근",
      1170: "집 도착",
      1328: "취침"
    },
    14:{
      430:"기상 커피마기",
      450:"에이콘아카데미 출근2",
      1080: "퇴근2",
      1170: "집 도착2",
      1328: "취침2"
    }
}
/////////////////////////////////////////////////////////////////
//const day={};
const tdList= document.querySelectorAll("#calendarTable td");
//new Date().getMonth() 현재 달의 -1을 반환한다.(0~11)
let toDate=new Date();

printCalendar(toDate.getMonth()+1);
printMemo(toDate.getMonth()+1,toDate.getYear()+1900,1);

function printCalendar(paraMonth,paraYear=(toDate.getYear()+1900)){
  let dateMonth=paraMonth-1; //Date()는 month 가 0~11까지다.
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
  const nextB=(paraMonth+1==13)
                ?new ButtonValue(1,paraYear+1)
                :new ButtonValue(paraMonth+1,paraYear);

  const preB=(paraMonth-1==0)
                ?new ButtonValue(12,paraYear-1)
                :new ButtonValue(paraMonth-1,paraYear);

  document.getElementById("nextMonth").innerText=nextB.text;
  document.getElementById("nextMonth").value=nextB.value;

  document.getElementById("preMonth").innerText=preB.text;
  document.getElementById("preMonth").value=preB.value;

  document.getElementById("toDate").innerText=`${paraYear}. ${paraMonth}`;
  //document.getElementById("toDate").innerText=new Date(paraYear,dateMonth);

  //let memo = "aaa";

  //활성화된 해당 월 출력
  for(let i=firstDay,d=1; i<lastDay+firstDay; i++){
    tdList[i].querySelector(".day").innerText=d;
    tdList[i].classList.add("active"); //활성화된 td 스타일 추가
    tdList[i].classList.remove("disabled"); //비활성화된 td 스타일 삭제
    ////////////////////////////////////////////////////////
    let li_html="";
    for(key in d_09[d]){
      li_html+="<li>"
      li_html+="<span>"
      li_html+=d_09[d][key];
      li_html+="</span>"
      li_html+="</li>"
    }
    tdList[i].querySelector("ul.schedule").innerHTML=li_html;
    //////////////////////////////////////////////////////////
    tdList[i].addEventListener("click",function(event){
      event.stopPropagation();// 자식노드에 이벤트를 전달하지 않음
      //console.log(this);//this onclick 재지정한 노드
      //console.log(event.currentTarget);//event.currentTarget ==this
      //console.log(event.target); //이벤트가 버블링, 전달된 자식 노드 중에 이벤트가 발생한 곳
      //console.log(event.path[0]);
      let targetDay=Number(event.currentTarget.querySelector(".day").innerText);
      ///단수 선택자를 줄여서 작성가능 ?? es5 or es6
      //console.log(memo); //document.querySelector("#memo") or document.getElementById("memo")
      //console.log(insertSchedule);//document.forms["insertSchedule"] or document.forms.insertSchedule
      //단수 선택자가 없을 시 선택자를 복잡하게(구체적) 사용하는 것을 권장
      printMemo(paraMonth,paraYear,targetDay);
     });
    d++;
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
//document.forms.insertSchedule==insertSchedule
insertSchedule.regist.addEventListener("click",function(){
  let y=insertSchedule.year.value;
  let m=insertSchedule.month.value;
  let d=insertSchedule.day.value;
  let tArr=insertSchedule.time.value.split(":");//09:00 =>9*60+0
  let t=Number(tArr[0])*60+Number(tArr[1]);
  let val=insertSchedule.text.value;
  //기존 day에 오브젝트가 있는 경우에 time이 등록된다.
  (d_09[d])?d_09[d][t]=val:d_09[d]={[t]:val};
  printCalendar(m,y);
  printMemo(m,y,d);
});




function deleteScheldule(e,month,year,day,time){
  delete d_09[day][time];
  printCalendar(month,year);
  printMemo(month,year,day);
}
function printMemo(month,year,day,selector="#memo"){
  let li_html="";
  for(key in d_09[day]){
    li_html+="<li>";
    li_html+="<b class='time'>";
    li_html+=(Number.parseInt(key/60)+"").padStart(2,0);
    li_html+=":"+(key%60+"").padStart(2,0);
    li_html+="</b>";
    li_html+="<span>";
    li_html+=d_09[day][key];
    li_html+="</span>"
    //li_html+="<button class='delete' onclick='deleteScheldule(event,"+key+")'>";
    li_html+=`<button class='delete' onclick='deleteScheldule(event,${month},${year},${day},${key})'>`;
    li_html+="🗑";
    li_html+="</button>";
    li_html+="</li>";
  }
  document.querySelector(selector+" .title").innerHTML=`${year}년 ${month}월 ${day}일`;
  document.querySelector(selector+" ul.schedule").innerHTML=li_html;

  ////////////////////////////
  insertSchedule.year.value=year;
  insertSchedule.month.value=month;
  insertSchedule.day.value=day;

}




















////////////////////////
