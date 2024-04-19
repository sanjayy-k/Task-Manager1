function my(){
    var x=document.getElementById('i1').value;
    var y=document.getElementById('i2').value;
    var z=document.getElementById('i3').value;
   
//creating a new row
var newROw=document.createElement('tr');
//create cdlls for new row
var cell1=document.createElement("td");
var cell2=document.createElement("td");
var cell3=document.createElement("td");

//assign values:
cell1.textContent=x;
cell2.textContent=y;
cell3.textContent=z;

//appending cells to new row
newROw.appendChild(cell1);
newROw.appendChild(cell2);
newROw.appendChild(cell3);
var table=document.querySelector(".w table");
table.appendChild(newROw);

  }
  function del() {
    var table = document.querySelector(".w table");
    var rowCount = table.rows.length;

    // Check if there are rows to delete
    if (rowCount > 1) {
        // Delete the last row
        table.deleteRow(rowCount - 1);
    } else {
        // If no rows left, show a message or handle as needed
        alert("No rows to delete.");
    }
}
let sec = 0;
let min = 0;
let hrs = 0;
let isRunning = false;
let interval;

// function stsp() {
//     if (!isRunning) {
//         interval = setInterval(() => {
//             sec++;
//             if (sec >= 60) {
//                 sec = 0;
//                 min++;
//                 if (min >= 60) {
//                     hrs++;
//                     min = 0;
//                 }
//             }
//             isRunning = true;
//             document.getElementById('s').innerText = "STOP";
//             let form = `${hrs.toString().padStart(2, "0")}:${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`;
//             document.querySelector(".stopwatch").innerText = form;
//         }, 1000);
//     } else {
//         isRunning = false;
//         clearInterval(interval);
//         document.getElementById('s').innerText = "START";
//     }
// }
