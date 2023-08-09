
let htag = document.querySelector("h1");
let date = new Date();
let year = date.getUTCFullYear();
let month = date.getUTCMonth() + 1; // Months are zero-based, so add 1
let day = date.getUTCDate(); // Use getUTCDate() to get day of the month

   let hr =date.getHours();
   let min =date.getMinutes();
   let sec = date.getSeconds();

   let output = month+"/"+day+"/"+year+",  "+(hr>12 ? hr-12 : hr)+":"+min+":"+sec +(hr>12 ? " PM" : " AM");

   htag.innerHTML =output;