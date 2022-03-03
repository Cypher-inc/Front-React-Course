var GoodGreeter = /** @class */ (function () {
    function GoodGreeter() {
        this.a = 2;
        this.b = 4;
        this.c = 6;
    }
    GoodGreeter.prototype.Display = function () {
        console.log(this.a);
        console.log(this.b);
        console.log(this.c);
    };
    return GoodGreeter;
}());
var a = new GoodGreeter();
a.Display();
