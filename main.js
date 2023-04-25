let element = document.querySelector(".scroller")

/*
  scrollHeight: ENTIRE content & padding (visible or not).
  clientHeight: VISIBLE content & padding.
*/

let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

//The scrollTop: Gets or sets the number of pixels that an element's content is scrolled vertically.

window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  console.log(scrollTop);
  element.style.width = `${(scrollTop / height) * 100}%`;
});