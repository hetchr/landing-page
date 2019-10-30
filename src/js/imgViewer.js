import $ from "jquery";
import * as Animation from "./animation";
import * as Global from "./global";

export function setImg() {
  if (Global.store.tick === true) {
    return;
  }
  const top = $(window).scrollTop();
  Global.store.anchorList.forEach((anchor, idx) => {
    if (idx !== Global.store.currentAnchorIdx) {
      const aTop = $(anchor).offset().top;
      const aBottom = $(anchor).offset().top + $(anchor).height();
      if (aTop <= top && aBottom >= top) {
        Global.store.tick = true;
        Animation.setBg(idx);
        Animation.setSelectedLink(Global.store.linkList[idx]);
        Animation.unsetSelectedLink(
          Global.store.linkList[Global.store.currentAnchorIdx]
        );
        Global.store.currentAnchorIdx = idx;
        Global.store.tick = false;
      }
    }
  });
  // Global.store.anchorList.forEach((anchor, idx) => {
  //    if ($(anchor).offset().top < $(window).scrollTop() && $(anchor).offset)
  // })
  //   if ($(Global.store.anchorList[Global.store.currentAnchorIdx]).offset().top <= $(window).scrollTop() &&)
}
