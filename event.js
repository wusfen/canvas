function EventTarget() {
    this.events = {
        // 'type': ['listener'];
    };
}
EventTarget.prototype = {
    on: function(type, listener) {
        this.events[type] = this.events[type] || [];
        this.events[type].push(listener);
    },
    trigger: function(type) {
        var fns = this.events[type];
        for (var i in fns) {
            fns[i]();
        }
    },
    off: function(type, listener) {
        var fns = this.events[type] = this.events[type] || [];
        if (listener) {
            for (var i = 0; i < fns.length; i++) {
                if (fns[i] == listener) {
                    fns.splice(i, 1);
                }
            }
        } else {
            fns.length = 0;
        }
    }
};




function 报社() {}
报社.prototype = new EventTarget;



var 羊城晚报 = new 报社;

羊城晚报.on('发布', function() {
    console.log('我 阅读');
})




羊城晚报.trigger('发布');
羊城晚报.trigger('发布');


羊城晚报.off('发布');
羊城晚报.trigger('发布');