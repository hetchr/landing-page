import "./css/index.scss";
import "./css/nav.scss";
import "./css/footer.scss";
import "./css/button.scss";
import "./css/article.scss";
import "./css/animation.scss";
import $ from "jquery";
import * as Animation from "./js/animation";
import * as CanvasLoader from "./js/loaderCanvas";
import * as ImgViewer from "./js/imgViewer";
import * as Global from "./js/global";
$(window).on("load", () => {
  Animation.setBg(Global.store.currentAnchorIdx);
  Animation.setSelectedLink(Global.store.linkList[0]);
  Animation.hideNavLogo();
  Animation.heartBeat("#main_logo", () => {
    $(".loader").fadeOut("slow", () => {
      $(".main_content").fadeIn("slow");
    });
  });
});

$(window).on("scroll", event => {
  ImgViewer.setImg();
  Animation.setNavTheme();
  Animation.setFootTheme();
  Animation.addImgLogo();
});

$(window).on("beforeunload", function() {
  $(window).scrollTop(0);
});

window.scrollAnchor = Animation.scrollAnchor;
window.toggle = Animation.toggle;
window.canvasDraw = CanvasLoader.canvasDraw;
