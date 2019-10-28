import "./css/index.scss";
import "./css/nav.scss";
import "./css/footer.scss";
import "./css/button.scss";
import "./css/article.scss";
import $ from "jquery";
import * as Animation from "./js/animation";

$(window).on("load", () => {
  // $(".loader").fadeOut("fast");
  Animation.heartBeat("#main_logo", () => {
    $(".loader").fadeOut("fast");
  });
});

window.scrollTo = Animation.scrollTo;
window.toggle = Animation.toggle;
