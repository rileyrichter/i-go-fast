window.addEventListener("load", (event) => {
  document.querySelector("#skip-to-main").onclick = function (e) {
    if (e.type === "keydown" && e.which !== 13) {
      return;
    }

    e.preventDefault();
    let target = $("#main");
    target.attr("tabindex", "-1");
    target.focus();
  };
});
