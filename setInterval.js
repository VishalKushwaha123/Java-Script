
let id1=setInterval(()=>{
  console.log("vishal");
},4000);


let id3=setInterval(()=>{
  console.log("kushwaha");
},3000);

clearInterval(id3)                 //id3 is nit printed
 
setInterval(()=>{
  console.log("maurya");
},2000);