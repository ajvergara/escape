import $ from "jquery";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";

class RevealOnScroll{
  constructor(){
    this.revealItem = $(".service-item");
    this.hideInitially();
    this.createWaypoints();
  }

  hideInitially(){
    this.revealItem.addClass("reveal-item--is-hidden");
  }

  createWaypoints(){
    this.revealItem.each(function(){
      var currentItem = this;
      new Waypoint({
        element: currentItem,
        handler: function(){
          $(currentItem).addClass("reveal-item--is-revealed")
        },
        offset: "60%"
      })
    });
  }
}

export default RevealOnScroll;
