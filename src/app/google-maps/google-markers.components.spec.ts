///<reference path="../../../node_modules/@types/googlemaps/index.d.ts"/>
declare var google: any;
import { TestBed, async } from '@angular/core/testing';
import { GoogleMarkersComponent } from './google-markers.component';

describe('GoogleMarkersComponent', () => {

  let component: GoogleMarkersComponent;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        GoogleMarkersComponent
      ],
    }).compileComponents();
    const fixture = TestBed.createComponent(GoogleMarkersComponent);
    component = fixture.componentInstance;
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(GoogleMarkersComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it('it should load a google map when called with both latitude or longitude', () => {

    spyOn(window, 'setTimeout');

    const position = new google.maps.LatLng(1.1234, 37.1234);
    const markers = [new google.maps.Marker({
      position: position
    })];
    component.show(markers, 'Title', 'Loading..');
    expect(component.title).toBe('Title');
    expect(component.loadingMessage).toBe('Loading..');
    expect(component.showing).toBe(true);
    expect(window.setTimeout).toHaveBeenCalledWith(component.showMarkers, 1000, markers);
  });

  it('it should not show a map if the corresponding element cannot be founf in dom', () => {

    spyOn(document, 'getElementById').and.returnValue(undefined);
    const position = new google.maps.LatLng(1.2, 1.5);
    const marker = [new google.maps.Marker({
      position: position
    })];
    component.showMarkers(marker);
  });

  it('it should show a map on the given div element', () => {

    const element = {};
    const marker = {
      setMap(map: any) { },
      getPosition: () => { }
    };
    const fakeLocation = {};
    const fakeMap = {
      setCenter: () => { }
    };
    const options = {
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

    const position = new google.maps.LatLng(1.2, 1.5);
    const markers = [new google.maps.Marker({
      position: position
    })];
    component.showMarkers(markers);

    expect(google.maps.LatLng).toHaveBeenCalledWith(1.2, 1.5);
    expect(google.maps.Map).toHaveBeenCalledWith(element, options);
    expect(google.maps.Marker).toHaveBeenCalledWith({ position: fakeLocation });
    expect(marker.setMap).toHaveBeenCalledWith(fakeMap);

  });

  it('it should hide the google map', () => {
    component.showing = true;
    component.hide();
    expect(component.showing).toEqual(false);
  });
});
