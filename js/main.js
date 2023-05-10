var logo = document.querySelector("#main__menu .logo");
var menu = document.querySelector("#main__menu .list__menu");
var opener = document.querySelector("#main__menu .bar .opener");
var closer = document.querySelector("#main__menu .bar .closer");
var ul = document.querySelector("#main__menu .list__menu ul");
//window resize
//tạo function bắt resize màn hình, truyền vào tham số breakpoint
function resizeWindow(breakpoint) {
  // xử lý khi chạm điểm breakpoint, bằng .matches
  if (breakpoint.matches) {
    // chạm breakpoint
    // menu.classList.add("none");
    opener.classList.remove("none");
    closer.classList.add("none");
    ul.classList.add("none");

  } else {
    // chưa chạm breakpoint
    menu.classList.remove("none");
    opener.classList.add("none");
    closer.classList.add("none");
    ul.classList.remove("none");

    // overlay.classList.add("none");
  }
}
// tạo biến chưa giá trị breakpoint
var breakpoint = window.matchMedia("(max-width: 768px)");
// chạy function resizeWindow, lúc không thay đổi kích thước
resizeWindow(breakpoint);
// bắt thuộc tính khi thay đổi giá trị breakpoint
breakpoint.addEventListener("change", () => {
  resizeWindow(breakpoint);
});
// nút menu
opener.onclick = function (){
  opener.classList.add("none");
  closer.classList.remove("none");
  menu.classList.add("show");
  ul.classList.remove("none");

}
closer.onclick = function (){
  opener.classList.remove("none");
  closer.classList.add("none");
  menu.classList.remove("show");
  ul.classList.add("none");


}


