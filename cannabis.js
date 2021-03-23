// This is an TypeScript example for ED Companys course  by shemuelx
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Cannabis = /** @class */ (function () {
    function Cannabis() {
    }
    Cannabis.prototype.getDescription = function () {
        return this.description;
    };
    ;
    return Cannabis;
}());
var CannabisDecorator = /** @class */ (function (_super) {
    __extends(CannabisDecorator, _super);
    function CannabisDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CannabisDecorator;
}(Cannabis));
// ------------------------------ Products ------------------------------
var Smoke = /** @class */ (function (_super) {
    __extends(Smoke, _super);
    function Smoke() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.description = "Smoke";
        return _this;
    }
    Smoke.prototype.cost = function () {
        return 10.99;
    };
    return Smoke;
}(Cannabis));
var Oil = /** @class */ (function (_super) {
    __extends(Oil, _super);
    function Oil() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.description = "Oil";
        return _this;
    }
    Oil.prototype.cost = function () {
        return 25.99;
    };
    return Oil;
}(Cannabis));
var Drop = /** @class */ (function (_super) {
    __extends(Drop, _super);
    function Drop() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.description = "Drop";
        return _this;
    }
    Drop.prototype.cost = function () {
        return 9.99;
    };
    return Drop;
}(Cannabis));
var Brownie = /** @class */ (function (_super) {
    __extends(Brownie, _super);
    function Brownie() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.description = "Brownie";
        return _this;
    }
    Brownie.prototype.cost = function () {
        return 36.99;
    };
    return Brownie;
}(Cannabis));
// ------------------------------ Types ------------------------------
var Sativah = /** @class */ (function (_super) {
    __extends(Sativah, _super);
    function Sativah(product) {
        var _this = _super.call(this) || this;
        _this.decoratedCannabis = product;
        return _this;
    }
    Sativah.prototype.getDescription = function () {
        return this.decoratedCannabis.getDescription() + ' plus Sativah Power';
    };
    Sativah.prototype.cost = function () {
        return this.decoratedCannabis.cost() + 8.50;
    };
    return Sativah;
}(CannabisDecorator));
var Indica = /** @class */ (function (_super) {
    __extends(Indica, _super);
    function Indica(product) {
        var _this = _super.call(this) || this;
        _this.decoratedCannabis = product;
        return _this;
    }
    Indica.prototype.getDescription = function () {
        return this.decoratedCannabis.getDescription() + ' with Indica peace';
    };
    Indica.prototype.cost = function () {
        return this.decoratedCannabis.cost() + 12.20;
    };
    return Indica;
}(CannabisDecorator));
// ------------------------------  Cannabis! ------------------------------
var joint = new Smoke();
joint = new Sativah(joint);
joint = new Indica(joint);
var brownie = new Brownie();
brownie = new Sativah(brownie);
var forGranny = new Oil();
forGranny = new Indica(forGranny);
forGranny = new Sativah(forGranny);
console.log(brownie.getDescription());
console.log('just for', brownie.cost());
console.log(forGranny.getDescription());
console.log('just for', forGranny.cost());
console.log(joint.getDescription());
console.log('just for', joint.cost());
