import $ from "jquery";

export function fadeOut(elementId) {
  $(elementId).fadeOut("slow");
}

export function heartBeat(elementId, cb) {
  $(elementId).animate({ width: "110%" }, 500, () => {
    $(elementId).animate({ width: "100%" }, 200, () => {
      $(elementId).animate({ width: "115%" }, 500, () => {
        $(elementId).animate({ width: "0%" }, 500, () => {
          cb();
        });
      });
    });
  });
}

export function toggle(id) {
  const toToggle = document.getElementById(id).getElementsByTagName("p");
  const img = document.getElementById(id).getElementsByTagName("img");
  $(toToggle).toggle(() => {});
}

export function scrollTo(id) {
  console.log(id);
  // $("html, body").animate(
  //   {
  //     scrollTop: $(id).offset().top
  //   },
  //   1500
  // );
}
