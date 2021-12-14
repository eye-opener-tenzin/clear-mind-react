let btn = document.getElementById("button");
var smallScreen = window.matchMedia("(max-width: 650px)")

function genTable() {
  let table = ``;
  let numbers = sliderRange();
  for (var row = 0; row < 11; row++) {
    table += `<tr>`;
    table += `<td>${numbers[row]}</td>`;
    table += `<td>-</td>`;
    table += `</tr>`;
    // for (var col = 0; col < 2; col++) {
    //   table += `<td >`;
    // }
  }
  document.getElementById("grid").innerHTML = table;
}

function sliderRange() {
  const numbers = [];
  for (var i = 0; i <= 100; i += 10) {
    numbers.push(i);
  }
  return numbers.reverse();
}

function applySliderConfigs({ color, size, scale, defaultPosition }) {
  if (color !== undefined) {
    btn.style.backgroundColor = color;
  }
  if (size !== undefined) {
    btn.style.height = size;
  }
  if (scale !== undefined) {
    btn.innerHTML = scale;
  }
  if (defaultPosition !== undefined) {
    btn.style.top = defaultPosition;
  }
};
smallScreen.matches
  ? applySliderConfigs({ color: "red", size: "50px", scale: 0, defaultPosition: "0px"})
  : applySliderConfigs({ color: "green", size: "150px", scale: 0,  defaultPosition: "725px"})

function buttonMove() {
  let start = null;
  btn.onmousedown = function (e) {
    start = e.clientY;
  };
  smallScreen.matches
    ? btn.onmousemove = function (e) {
      if (start !== null) {
        let current = e.clientY;
        let difference = current - start;
        let currentTop = Number(
          e.target.style.top.slice(0, e.target.style.top.length - 2)
        );
        let newPosition = Math.max(currentTop + difference, 0 - 370);
        newPosition = Math.min(newPosition, 70 - 60);
        e.target.style.top = `${newPosition}px`
        start = e.clientY;
        applySliderConfigs({
          scale: 10 - Math.round(((newPosition - 10) / 500 ) * 120),
        
          // defaultPosition: `${newPosition}px`
             
        })
        console.log("small", newPosition)
      };
    }
    :  btn.onmousemove = function (e) {
      if (start !== null) {
        let current = e.clientY;
        let difference = current - start;
        let currentTop = Number(
          e.target.style.top.slice(0, e.target.style.top.length - 2)
        );
        let newPosition = Math.max(currentTop + difference, 200 - 150);
        newPosition = Math.min(newPosition, 805 - 108);
        e.target.style.top = `${newPosition}px`
        start = e.clientY;
        applySliderConfigs({
          scale: 100 - Math.round(((newPosition - 50) / 650) * 100),
          // defaultPosition: `${newPosition}px`
        })
        console.log("big", newPosition)
      }
           }
       btn.onmouseup = function (e) {
    start = null;
  };

  btn.onmouseleave = function (e) {
    start = null;
   
  };
    
  smallScreen.matches
  ? btn.addEventListener("dblclick", function (e) {
    start = null;
    applySliderConfigs({ scale: 0, defaultPosition: "0px" });
  })
  
  : btn.addEventListener("dblclick", function (e) {
    start = null;
    applySliderConfigs({ scale: 0, defaultPosition: "725px" });
  });
  
 
  };
 




 
 
 
 
 
 
 /* let btn = document.querySelector("button");
let start = null;
btn.addEventListener("mousedown", function (e) {
  start = e.clientY;
});
btn.addEventListener("mousemove", function (e) {
  if (start !== null) {
    let current = e.clientY;
    let difference = current - start;
    let currentTop = Number(
      e.target.style.top.slice(0, e.target.style.top.length - 2)
    );
    let newPosition = Math.max(currentTop + difference, 111.5 - 60);
    newPosition = Math.min(newPosition, 770 - 75);
    e.target.style.top = `${newPosition}px`;
    start = e.clientY;
  }
});
btn.addEventListener("mouseup", function (e) {
  start = null;
});
btn.addEventListener("mouseleave", function (e) {
  start = null;
}); */
