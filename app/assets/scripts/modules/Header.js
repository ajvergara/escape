import $ from "jquery";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";
import smoothScroll from "jquery-smooth-scroll";

class Header{
  constructor(){
    this.siteHeader = $(".site-header");
    this.headerTrigger = $(".large-hero__title");
    this.headerWaypoints();
    this.pageSection = $(".page-section");
    this.navWaypoints();
    this.navlinks = $(".primary-nav a");
    this.homeTag = $("#escape-link");
    this.homeTagTrigger = $("#escape");
    this.homeWaypoints();
    this.smoothScrolling();
  }

  smoothScrolling(){
    this.navlinks.smoothScroll();
  }

  headerWaypoints(){
    var that = this;
    new Waypoint({
      element: this.headerTrigger[0],
      handler: function(){
        that.siteHeader.toggleClass("site-header--dark");
      }
    });
  }

  navWaypoints(){
    var that = this;
    this.pageSection.each(function(){
      var currentPage = this;
      new Waypoint({
        element: currentPage,
        handler: function(direction){
          if(direction == "down"){
            var dataMatchLink = currentPage.getAttribute("data-link");
            that.navlinks.removeClass("is-current-link");
            $(dataMatchLink).addClass("is-current-link");
          }
        },
        offset: "80%"
      });

      new Waypoint({
        element: currentPage,
        handler: function(direction){
          if(direction == "up"){
            var dataMatchLink = currentPage.getAttribute("data-link");
            that.navlinks.removeClass("is-current-link");
            $(dataMatchLink).addClass("is-current-link");
          }
        },
        offset: "-40%"
      });
    });
  }

  homeWaypoints(){
    var that = this;
    new Waypoint({
      element: this.homeTagTrigger[0],
      handler: function(){
        that.homeTag.addClass("is-current-link");
      }
    });

    new Waypoint({
      element: this.headerTrigger[0],
      handler: function(direction){
        if(direction == "up"){
          that.navlinks.removeClass("is-current-link");
          that.homeTag.addClass("is-current-link");
        }
      }
    });
  }
}

export default Header;
