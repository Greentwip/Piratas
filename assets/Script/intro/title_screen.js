cc.Class({
    extends: cc.Component,

    properties: {
        // foo: {
        //    default: null,      // The default value will be used only when the component attaching
        //                           to a node for the first time
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function () {
        // we'll verify wether if we are mobile or desktop, upon that, our keyboard will
        // be enabled for the required tasks, otherwise, we'll use touch inputs
        var is_mobile = false;
        
        if(cc.sys.isMobile){
            is_mobile = true
        } 
        
        var that = this; // closure
        
        if(is_mobile){
            // check input
        } else {
            if (cc.sys.capabilities.hasOwnProperty('keyboard')) 
            { 
                cc.eventManager.addListener( 
                { 
                     event: cc.EventListener.KEYBOARD, 

                     onKeyPressed: function(key, event) 
                     {
                     	cc.log("Key Pressed: " + key.toString()); 
                     }
                }, this.node); 
            } 
            
            if(cc.sys.capabilities.hasOwnProperty('mouse')){
                cc.eventManager.addListener( 
                { 
                     event: cc.EventListener.MOUSE, 

                     onMouseDown: function(event) 
                     {
                     	var selector = that.node.getChildByName('selector');
                     	var trigger = selector.getComponent('trigger');
                     	var target = trigger.target;
                     	
                        var locationInNode = target.convertToNodeSpace(event.getLocation());
                        var rect = cc.rect(0, 
                                           0, 
                                           target.width, 
                                           target.height);

                        var can_trigger = false;
                        
                        if (cc.rectContainsPoint(rect, locationInNode)) { 
                            can_trigger = true;
                        }
                        
                     	if(can_trigger){
                         	if(target.getName() == 'start'){
                         	    cc.log('start triggered');
                         	}
                         	
                         	if(target.getName() == 'options'){
                         	    cc.log('options triggered');
                         	}
                     	}
                     	
                     }
                }, this.node); 
            }

        }
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
