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
        this.y_movement_angle = 0;
        this.time_to_screen = 0;
    },

    // called every frame, uncomment this function to activate update callback
     update: function (dt) {
        this.y_movement_angle += dt;
        this.time_to_screen += dt;
        
        if(this.y_movement_angle > 360){
            this.y_movement_angle = 0;
        }
        
        this.node.y += Math.sin(this.y_movement_angle) * 0.5;
        this.node.x += dt * 15;
        
        if(this.time_to_screen >= 80){
            
        }
     },
});
