    // <body>, <frame>, <iframe>, <img>, <input type="img">, <link>,<script>, <style>
    // onload 사용 가능한 태그
    window.onload = function () {
      document.querySelector("h1").style.textDecoration = "dotted underline royalblue";
      document.body.style.textAlign = "center";
      document.querySelectorAll("ul").forEach((i) => {
        i.style.listStyle = "none";
      }) 
      document.querySelectorAll("ol").forEach((i) => {
        i.style.listStyle = "none";
      })
    }

    document.querySelector("h1").style.backgroundColor = "skyblue"
    document.querySelector("h1").style.color = "white"
    document.querySelector("h1").style.textShadow = "1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue"
    document.querySelectorAll("h2").forEach((i) => {
      i.style.textAlign = "center";
      i.style.color = "lavender";
      i.style.fontFamily = "serif";
      i.style.textShadow = "1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue";
    })

    document.querySelectorAll("ul>li").forEach((i) => {
      i.addEventListener("mouseenter", () => {
        i.style.color = "red";
      })
    });  

    let li_node = document.createElement("li");
    li_node.innerText = "추가";
    document.querySelector("ul").append(li_node);