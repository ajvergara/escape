import $ from "jquery";
import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";

const mobileMenu = new MobileMenu();


const revealServiceItem = new RevealOnScroll($(".service-item"), "70%"),
      revealFeature = new RevealOnScroll($(".service-item__feature"), "80%"),
      revealTeam = new RevealOnScroll($(".team-item"), "70%");
