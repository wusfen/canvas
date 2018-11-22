GameObject = (function() {
    var Class = function(img, x, y) {
        this.x = x || 0;
        this.y = x || 0;
        this.width = img.width;
        this.height = img.height;
        this.img = img;
        this.context = null;
        this.ImageData = null;

        // this.ImageData init
        /*var canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        var context = canvas.getContext('2d');
        context.drawImage(this.img, 0, 0);
        this.ImageData = context.getImageData(0,0, canvas.width,canvas.height);*/
    };

    Class.prototype = {
        show: function() {
            if (this.context) {
                this.context.drawImage(this.img, this.x, this.y);
            };
        }
    };
    Class.prototype.constructor = Class;

    return Class;
}());
