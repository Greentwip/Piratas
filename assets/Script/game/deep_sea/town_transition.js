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
        this.transition_time = 0;
        this.transitioning = false;
    },

    // called every frame, uncomment this function to activate update callback
     update: function (dt) {
        this.transition_time += dt;
        
        if(this.transition_time >= 16 && !this.transitioning){
            this.transition_time = 0;
            this.transitioning = true;

            var fade_in = cc.FadeIn(1);
            var wait = cc.DelayTime(2);
            var fade_out = cc.FadeOut(1);
            var change_scene = cc.CallFunc(function(){
               cc.director.loadScene("Scene/game/deep_sea/town");
            });
            
            var sequence = cc.Sequence(fade_out, wait, change_scene, fade_in);
            
            this.node.runAction(sequence);
        }
     },
});
