declare var module: any;
declare var google: any;
import {} from '@types/googlemaps';
import { Component, Input } from '@angular/core';
/**
 * Use this to display maps using google coordinates
 *
 * @export
 * @class GoogleMarkersComponent
 */
@Component({
  moduleId: module.id,
  selector: 'app-maps',
  templateUrl: 'google-markers.component.html',
  styleUrls: ['google-markers.component.css']
})
export class GoogleMarkersComponent {

  /**
   * Boolean value to show and display borders on the google map div
   *
   * @memberof GoogleMarkersComponent
   */
  @Input() hasBorder = true;
  /**
   * Use this to show or hide the map
   *
   * @memberof GoogleMarkersComponent
   */
  @Input() showing = true;
  /**
   * Use this to pass the display title string
   *
   * @type {string}
   * @memberof GoogleMarkersComponent
   */
  @Input() title: string;
  /**
   * Use this to pass the display loading message string
   *
   * @type {string}
   * @memberof GoogleMarkersComponent
   */
  @Input() loadingMessage: string;
  /**
   * Use this to display map object
   *
   * @type {google.maps.Map}
   * @memberof GoogleMarkersComponent
   */
  map: google.maps.Map;

  /**
   * Function to show or hide markers
   *
   * @param {Array<google.maps.Marker>} markers
   * @param {string} title
   * @param {string} loadingMessage
   * @memberof GoogleMarkersComponent
   */
  show(markers: Array<google.maps.Marker>, title: string, loadingMessage: string) {
    this.title = title;
    this.loadingMessage = loadingMessage;
    this.showing = true;
    setTimeout(this.showMarkers, 1000, markers);
  }

  /**
   * Use this function to show and draw marker on the map
   *
   * @param {Array<google.maps.Marker>} markers
   * @returns
   * @memberof GoogleMarkersComponent
   */
  showMarkers(markers: Array<google.maps.Marker>) {
    this.showing = true;
    const elem = document.getElementById('google-marker');
    if (!elem) {
      return;
    }

    const initialCenter = new google.maps.LatLng(0.0, 0.0);
    const options = {
      zoom: 9,
      center: initialCenter,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    const map = new google.maps.Map(elem, options);
    markers.forEach(marker => {
      map.setCenter(marker.getPosition());
      marker.setMap(map);
    });

    this.map = map;
  }

  /**
   * use this function to hide map
   *
   * @memberof GoogleMarkersComponent
   */
  hide() {
    this.showing = false;
  }

}
