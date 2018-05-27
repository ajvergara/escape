import $ from "jquery";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";

class Header{
  constructor(){
    this.siteHeader = $(".site-header");
    this.headerTrigger = $(".large-hero__title");
    this.headerWaypoints();
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
}

export default Header;
