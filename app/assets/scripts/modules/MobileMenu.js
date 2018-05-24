import $ from "jquery";

class MobileMenu{
  constructor(){
    this.siteHeader = $(".site-header");
    this.menuContent = $(".site-header__menu-content");
    this.menuIcon = $(".site-header__menu-icon");
    this.events();
  }

  events(){
    this.menuIcon.click(this.toggleMenu.bind(this));
  }

  toggleMenu(){
    this.siteHeader.toggleClass("site-header--is-expanded");
    this.menuContent.toggleClass("site-header__menu-content--is-visible");
  }
}

export default MobileMenu;
