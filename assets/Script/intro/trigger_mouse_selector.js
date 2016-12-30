cc.Class({
    extends: cc.Component,

    properties: {
        selector: {
            default: null,
            type: cc.Node
        }
    },

    // use this for initialization
    // note: only assign to items with anchor point 0.5, 0.5
    
    onLoad: function () {
        var that = this;
        
        cc.eventManager.addListener(cc.EventListener.create({
          event: cc.EventListener.MOUSE,
          onMouseMove: function(event) {
            var target = event.getCurrentTarget(); 
            var locationInNode = target.convertToNodeSpace(event.getLocation());
            var s = target.getContentSize();
            var rect = cc.rect(-that.node.width * 0.5, 
                               -that.node.height * 0.5, 
                               that.node.width, 
                               that.node.height);

            if (cc.rectContainsPoint(rect, locationInNode)) {       
                that.selector.x = that.node.x - that.node.width * 0.5 - 64;
                that.selector.y = that.node.y;
                that.node.getComponent(cc.Label).fontSize = 40
                that.selector.getComponent('trigger').target = that.node;
                return true;
            }else{
                that.node.getComponent(cc.Label).fontSize = 35
                return false;
            }

          }
        }), this.node);
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
