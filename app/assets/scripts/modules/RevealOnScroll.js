import $ from "jquery";
import waypoints from "../../../../node_modules/waypoints/lib/noframework.waypoints";

class RevealOnScroll{
  constructor(els, offset){
    this.revealItem = els;
    this.offsetPercentage = offset;
    this.hideInitially();
    this.createWaypoints();
    this.lazyImages = $(".lazyload");
    this.wayPoinntsRefresh();
  }

  wayPoinntsRefresh(){
    this.lazyImages.on("load", function(){
      return Waypoint.refreshAll();
    });
  }

  hideInitially(){
    this.revealItem.addClass("reveal-item--is-hidden");
  }

  createWaypoints(){
    var that = this;
    this.revealItem.each(function(){
      var currentItem = this;
      new Waypoint({
        element: currentItem,
        handler: function(){
          $(currentItem).addClass("reveal-item--is-revealed")
        },
        offset: that.offsetPercentage
      })
    });
  }
}

export default RevealOnScroll;
