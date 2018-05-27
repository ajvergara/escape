import $ from "jquery";
import MobileMenu from "./modules/MobileMenu";
import RevealOnScroll from "./modules/RevealOnScroll";
import Modal from "./modules/Modal";
import Header from "./modules/Header";

const mobileMenu = new MobileMenu(),
      modal = new Modal(),
      header = new Header();

const revealServiceItem = new RevealOnScroll($(".service-item"), "70%"),
      revealFeature = new RevealOnScroll($(".service-item__feature"), "100%"),
      revealTeam = new RevealOnScroll($(".team-item"), "70%");
