// /** @format */

// function multipleboy(func, count) {
//   for (let i = 0; i < count; i++) {
//     func();
//   }
// }
// let boy = function () {
//   console.log("hello");
// };

// multipleboy(boy, 10);

function oddorevenfactory(request){
  if(request=="odd"){
    let odd=function(n){
      console.log(!(n%2==0));
    }
    return odd;
  }
  else if(request=="even"){
    let even=function(n){
      console.log(n%2==0);
    }
    return even;
  }
  else{
    console.log("wrong request");
  }
}

let request="odd";