let talk="hello";
function outertalk(){
  let talk="namaste";
  console.log(talk);
  function innertalk(){
    let talk="bye";
    console.log(talk);
  }
  innertalk();
}
console.log(talk);
  outertalk();
  