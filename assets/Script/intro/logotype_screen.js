cc.Class({
    extends: cc.Component,

    properties: {
        background: {
            default: null,
            type: cc.Node
        }
    },

    // use this for initialization
    onLoad: function () {
        this.node.opacity = 0; // transparent
        
        var fade_in = cc.FadeIn(1);
        var wait = cc.DelayTime(2);
        var fade_out = cc.FadeOut(1);
        var change_scene = cc.CallFunc(function(){
           cc.director.loadScene("Scene/intro/title");
        });
        
        var sequence = cc.Sequence(fade_in, wait, fade_out, change_scene);
        
        this.node.runAction(sequence);
    },

});
