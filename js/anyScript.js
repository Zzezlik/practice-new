const callendarBodyEl = document.querySelector(".js-calendar-tbody");
let prevTdEl = null;

const onCalendarClick = (e) => {
  const { target, currentTarget } = e;

  if (target.textContent === "" || target.tagName !== "TD") {
    return;
  }

  if (prevTdEl === null) {
    target.classList.add("active");
    prevTdEl = target;
    return;
  }

  if (prevTdEl === target) {
    target.classList.remove("active");
    return;
  }

  prevTdEl.classList.remove("active");
  target.classList.add("active");
  prevTdEl = target;
};

callendarBodyEl.addEventListener("click", onCalendarClick);

const head = document.querySelector("head");

console.dir(head.children);
for (let i = 0; i < head.children.length; i++) {
  console.log(head.children[i]);
}
