Game = (function() {
    var Class = function(canvas) {
        // canvas
        if (!canvas) {
            canvas = document.createElement('canvas');
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            canvas.style.display = 'block';
            canvas.style.position = 'absolute';
            canvas.style.top = 0;
            canvas.style.left = 0;
            document.body.appendChild(canvas);
            window.onresize = function() {
                canvas.width = window.innerWidth;
                canvas.height = window.innerHeight;
            };
        };

        // 
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        this.childList = [];
        this._timer = null;
    };
    Class.prototype = {
        addChild: function(child) {
            child.context = this.context;
            this.childList.push(child);
        },
        update: function() {
            this.canvas.width = this.canvas.width; // 触发 canvas 重新渲染
            var list = this.childList;
            for (var i = 0; i < list.length; i++) {
                var obj = list[i];
                obj.show();
            }
        },
        run: function() {
            // console.log(this);
            this.update();
            // requestAnimationFrame(this.run); // 错误，this 执行一次后会变成 window
            // requestAnimationFrame(this.run.bind(this)); // 同下等效
            var self = this;
            this._timer = requestAnimationFrame(function() {
                self.run();
            });
        },
        stop: function() {
            cancelAnimationFrame(this._timer);
        }
    };
    return Class;
}());
