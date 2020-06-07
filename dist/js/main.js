const basic = new BasicPriceOffer();
console.log(basic._getName());
function create() {
  var a = document.querySelector(".slider");
  var b = basic.createSlideTemplate("slide-front");
  var c = basic.createSlideTemplate("slide-side");
  var d = basic.createSlideTemplate("slide-side");
  a.innerHTML = c;
  a.innerHTML += b;
  a.innerHTML += d;
  console.log(a.innerHTML);
}
create();
