"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
/**
 * Use this to display maps using google coordinates
 *
 * @export
 * @class GoogleMarkersComponent
 */
var GoogleMarkersComponent = (function () {
    function GoogleMarkersComponent() {
        /**
         * Boolean value to show and display borders on the google map div
         *
         * @memberof GoogleMarkersComponent
         */
        this.hasBorder = true;
        /**
         * Use this to show or hide the map
         *
         * @memberof GoogleMarkersComponent
         */
        this.showing = true;
    }
    /**
     * Function to show or hide markers
     *
     * @param {Array<google.maps.Marker>} markers
     * @param {string} title
     * @param {string} loadingMessage
     * @memberof GoogleMarkersComponent
     */
    GoogleMarkersComponent.prototype.show = function (markers, title, loadingMessage) {
        this.title = title;
        this.loadingMessage = loadingMessage;
        this.showing = true;
        setTimeout(this.showMarkers, 1000, markers);
    };
    /**
     * Use this function to show and draw marker on the map
     *
     * @param {Array<google.maps.Marker>} markers
     * @returns
     * @memberof GoogleMarkersComponent
     */
    GoogleMarkersComponent.prototype.showMarkers = function (markers) {
        this.showing = true;
        var elem = document.getElementById('google-marker');
        if (!elem) {
            return;
        }
        var initialCenter = new google.maps.LatLng(0.0, 0.0);
        var options = {
            zoom: 9,
            center: initialCenter,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(elem, options);
        markers.forEach(function (marker) {
            map.setCenter(marker.getPosition());
            marker.setMap(map);
        });
        this.map = map;
    };
    /**
     * use this function to hide map
     *
     * @memberof GoogleMarkersComponent
     */
    GoogleMarkersComponent.prototype.hide = function () {
        this.showing = false;
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], GoogleMarkersComponent.prototype, "hasBorder", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], GoogleMarkersComponent.prototype, "showing", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], GoogleMarkersComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], GoogleMarkersComponent.prototype, "loadingMessage", void 0);
    GoogleMarkersComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'app-maps',
            templateUrl: 'google-markers.component.html',
            styleUrls: ['google-markers.component.css']
        })
    ], GoogleMarkersComponent);
    return GoogleMarkersComponent;
}());
exports.GoogleMarkersComponent = GoogleMarkersComponent;
//# sourceMappingURL=google-markers.component.js.map