"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var google_markers_component_1 = require("./google-markers.component");
describe('GoogleMarkersComponent', function () {
    var component;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [
                google_markers_component_1.GoogleMarkersComponent
            ],
        }).compileComponents();
        var fixture = testing_1.TestBed.createComponent(google_markers_component_1.GoogleMarkersComponent);
        component = fixture.componentInstance;
    }));
    it('should create the app', testing_1.async(function () {
        var fixture = testing_1.TestBed.createComponent(google_markers_component_1.GoogleMarkersComponent);
        var app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));
    it('it should load a google map when called with both latitude or longitude', function () {
        spyOn(window, 'setTimeout');
        var position = new google.maps.LatLng(1.1234, 37.1234);
        var markers = [new google.maps.Marker({
                position: position
            })];
        component.show(markers, 'Title', 'Loading..');
        expect(component.title).toBe('Title');
        expect(component.loadingMessage).toBe('Loading..');
        expect(component.showing).toBe(true);
        expect(window.setTimeout).toHaveBeenCalledWith(component.showMarkers, 1000, markers);
    });
    it('it should not show a map if the corresponding element cannot be founf in dom', function () {
        spyOn(document, 'getElementById').and.returnValue(undefined);
        var position = new google.maps.LatLng(1.2, 1.5);
        var marker = [new google.maps.Marker({
                position: position
            })];
        component.showMarkers(marker);
    });
    it('it should show a map on the given div element', function () {
        var element = {};
        var marker = {
            setMap: function (map) { },
            getPosition: function () { }
        };
        var fakeLocation = {};
        var fakeMap = {
            setCenter: function () { }
        };
        var options = {
            zoom: 9,
            center: fakeLocation,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        spyOn(marker, 'setMap');
        spyOn(document, 'getElementById').and.returnValue(element);
        spyOn(google.maps, 'LatLng').and.returnValue(fakeLocation);
        spyOn(google.maps, 'Map').and.returnValue(fakeMap);
        spyOn(google.maps, 'MapTypeId').and.returnValue({});
        spyOn(google.maps, 'Marker').and.returnValue(marker);
        var position = new google.maps.LatLng(1.2, 1.5);
        var markers = [new google.maps.Marker({
                position: position
            })];
        component.showMarkers(markers);
        expect(google.maps.LatLng).toHaveBeenCalledWith(1.2, 1.5);
        expect(google.maps.Map).toHaveBeenCalledWith(element, options);
        expect(google.maps.Marker).toHaveBeenCalledWith({ position: fakeLocation });
        expect(marker.setMap).toHaveBeenCalledWith(fakeMap);
    });
    it('it should hide the google map', function () {
        component.showing = true;
        component.hide();
        expect(component.showing).toEqual(false);
    });
});
//# sourceMappingURL=google-markers.components.spec.js.map