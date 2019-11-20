import $ from "jquery";
import * as Global from "./global";

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
  const toToggle = document
    .getElementById(id)
    .getElementsByClassName("no_display");
  const img = document.getElementById(id).getElementsByTagName("img");
  $(toToggle).toggle(() => {});
}

export function setBg(idx) {
  $("#container_img_fade").fadeOut("slow", () => {
    $("#container_img").css({
      "background-image": "url(" + Global.store.imgList[idx].bg + ")"
    });
    $("#container_img_fade").fadeIn("slow");
  });
}

export function setSelectedLink(linkId) {
  $(linkId).addClass("selected");
}

export function unsetSelectedLink(linkId) {
  $(linkId).removeClass("selected");
}

export function scrollAnchor(id, clickedLinkIdx) {
  if (
    Global.store.tick === true ||
    clickedLinkIdx === Global.store.currentAnchorIdx
  ) {
  } else {
    Global.store.tick = true;
    unsetSelectedLink(Global.store.linkList[Global.store.currentAnchorIdx]);
    setSelectedLink(Global.store.linkList[clickedLinkIdx]);
    setBg(clickedLinkIdx);
    $("html, body").animate(
      {
        scrollTop: $(id).offset().top
      },
      1000,
      () => {
        Global.store.tick = false;
        Global.store.currentAnchorIdx = clickedLinkIdx;
      }
    );
  }
}

export function setNavTheme() {
  const top = $(window).scrollTop() + $("nav").height();
  const cTop = $("#companies").offset().top;
  const cBottom = $("#companies").outerHeight() + cTop;
  if (cTop < top && cBottom > top && Global.store.currentNavTheme === 0) {
    Global.store.currentNavTheme = 1;
    $("nav").addClass("nav_black");
    $("#nav_logo").attr("src", "/img/hetchr_logo_white.png");
  }
  if (cTop > top && Global.store.currentNavTheme === 1) {
    Global.store.currentNavTheme = 0;
    $("#nav_logo").attr("src", "/img/hetchr_logo.svg");
    $("nav").removeClass("nav_black");
  }
  if (cBottom < top && Global.store.currentNavTheme === 1) {
    Global.store.currentNavTheme = 0;
    $("#nav_logo").attr("src", "/img/hetchr_logo.svg");
    $("nav").removeClass("nav_black");
  }
}

export function setFootTheme() {
  const top = $(window).scrollTop() + $(window).height() - $("nav").height();
  const cTop = $("#companies").offset().top;
  const cBottom = $("#companies").outerHeight() + cTop;
  if (
    cTop < top &&
    cBottom + $("nav").height() > top &&
    Global.store.currentFootTheme === 0
  ) {
    Global.store.currentFootTheme = 1;
    $("footer").addClass("footer_black");
    $("#linkedin").attr("src", "/img/linkedin.png");
    $("#medium").attr("src", "/img/medium.png");
    $("#twitter").attr("src", "/img/twitter.png");
  }
  if (cTop > top && Global.store.currentFootTheme === 1) {
    Global.store.currentFootTheme = 0;
    $("footer").removeClass("footer_black");
    $("#linkedin").attr("src", "/img/linkedin_purple.png");
    $("#medium").attr("src", "/img/medium_purple.png");
    $("#twitter").attr("src", "/img/twitter_purple.png");
  }
  if (cBottom < top && Global.store.currentFootTheme === 1) {
    Global.store.currentFootTheme = 0;
    $("footer").removeClass("footer_black");
    $("#linkedin").attr("src", "/img/linkedin_purple.png");
    $("#medium").attr("src", "/img/medium_purple.png");
    $("#twitter").attr("src", "/img/twitter_purple.png");
  }
}

export function displayNavLogo() {
  $("#nav_logo").fadeIn("slow");
  Global.store.navLogoDisplayed = true;
}

export function hideNavLogo() {
  $("#nav_logo").fadeOut("slow");
  Global.store.navLogoDisplayed = false;
}

export function addImgLogo() {
  const top = $(window).scrollTop() + $("nav").height();
  const lTop = $("#hetchr_main_logo").offset().top;
  const lBottom = $("#hetchr_main_logo").height() + lTop;
  if (top > lBottom && Global.store.navLogoDisplayed === false) {
    return displayNavLogo();
  }
  if (top < lBottom && Global.store.navLogoDisplayed === true) {
    return hideNavLogo();
  }
}
