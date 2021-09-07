const tdList = document.querySelectorAll('#calendarTable td')
    
// console.log(tdList) //NodeList(42)
// console.log(schedule)

tdList.forEach((td) => {
    // console.log(td) 
    td.onclick = () => {
      const schedule = td.querySelector(".schedule")
      schedule.style.display = "block"}
    })