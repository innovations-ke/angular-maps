/// <reference types="googlemaps" />
/**
 * Use this to display maps using google coordinates
 *
 * @export
 * @class GoogleMarkersComponent
 */
export declare class GoogleMarkersComponent {
    /**
     * Boolean value to show and display borders on the google map div
     *
     * @memberof GoogleMarkersComponent
     */
    hasBorder: boolean;
    /**
     * Use this to show or hide the map
     *
     * @memberof GoogleMarkersComponent
     */
    showing: boolean;
    /**
     * Use this to pass the display title string
     *
     * @type {string}
     * @memberof GoogleMarkersComponent
     */
    title: string;
    /**
     * Use this to pass the display loading message string
     *
     * @type {string}
     * @memberof GoogleMarkersComponent
     */
    loadingMessage: string;
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
    show(markers: Array<google.maps.Marker>, title: string, loadingMessage: string): void;
    /**
     * Use this function to show and draw marker on the map
     *
     * @param {Array<google.maps.Marker>} markers
     * @returns
     * @memberof GoogleMarkersComponent
     */
    showMarkers(markers: Array<google.maps.Marker>): void;
    /**
     * use this function to hide map
     *
     * @memberof GoogleMarkersComponent
     */
    hide(): void;
}
