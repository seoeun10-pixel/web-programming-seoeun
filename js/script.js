console.log("complete");
console.log($(window).width());
console.log($(window).height());

let wWidth = $(window).width();
let wHeight = $(window).height();

console.log(wWidth);
console.log(wHeight);

$(document).mousemove(function (e) {
  $("#status").html(e.pageX + "," + e.pageY);
  $(".box").css("width", e.pageX);
  $(".box").css("height", e.pageY);
});

//고양이랑 풀숲배경 조정해보기!

$(document).on("mousemove", function (event) {
  let mouseX = event.pageX;
  let mouseY = event.pageY;

  $(".bg-img").css("object-position", `${mouseX / 10}% ${mouseY / 10}%`);

  let imgWidth = $(".cat-img").width();
  let imgHeight = $(".cat-img").height();

  $(".cat-img").css("left", mouseX);
  $(".cat-img").css("top", mouseY);
});
