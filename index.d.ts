// Type definitions for iNavi Maps Api Javascript API 3.0
// Project: http://imapsapi.inavi.com/main.html
// Definitions by: 이상엽 <https://github.com/sylee-dev>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// iNavi Maps Api Javascript API 3.0

declare namespace inavi.maps {
    // --------------------------------------------------------------------------
    //  Types
    // --------------------------------------------------------------------------
    export type EventType =
        | 'mousedown'
        | 'mouseup'
        | 'click'
        | 'dblclick'
        | 'mousemove'
        | 'mouseenter'
        | 'mouseleave'
        | 'mouseover'
        | 'mouseout'
        | 'contextmenu'
        | 'touchstart'
        | 'touchend'
        | 'touchcancel';

    export type MapType = 'NORMAL' | 'SATELLITE';

    export type AnchorType =
        | 'top-left'
        | 'top'
        | 'top-right'
        | 'left'
        | 'center'
        | 'right'
        | 'bottom-left'
        | 'bottom'
        | 'bottom-right';

    export type LngLatArrayLiteral = [number, number];
    export type PixelArrayLiteral = [number, number];

    export type LngLatLike = LngLat | LngLatObjectLiteral | LngLatArrayLiteral;
    export type TWLngLatLike = TWLngLat | LngLatObjectLiteral | LngLatArrayLiteral;
    export type TWLngLatBoundsLike = [TWLngLatLike, TWLngLatLike];
    export type PixelLike = PixelObjectLiteral | PixelArrayLiteral;
    export type PixelBoundsLike = [PixelObjectLiteral, PixelObjectLiteral] | [PixelArrayLiteral, PixelArrayLiteral];

    export type LngLatBoundsLike = [LngLatLike, LngLatLike];

    export type CircleStyle = FigureStyle;
    export type PolygonStyle = FigureStyle;

    export type CompassControlOptions = ControlOptions;
    export type ZoomControlOptions = ControlOptions;

    // --------------------------------------------------------------------------
    //  Interfaces
    // --------------------------------------------------------------------------
    export interface LngLatObjectLiteral {
        lat: number;
        lng: number;
    }

    export interface PixelObjectLiteral {
        x: number;
        y: number;
    }

    export interface FigureStyle {
        fillOpacity: number;
        fillColor: string;
        fillOutlineColor: string;
    }

    export interface PolylineStyle {
        lineColor: string;
        lineOpacity: number;
        lineWidth: number;
        lineOffset: number;
        lineBlur: number;
        lineDashArray: number[];
    }

    export interface LabelStyle {
        textColor: string;
        textOpacity: number;
        textHaloColor: string;
        textHaloWidth: number;
    }

    export interface CircleOptions {
        map?: Map;
        position?: LngLatLike;
        radius?: number;
        style?: PolygonStyle;
    }

    export interface PaddingOptions {
        top: number;
        bottom: number;
        left: number;
        right: number;
    }

    export interface PanOptions {
        heading: number;
        tilt: number;
        duration: number;
    }

    export interface FitOptions extends PanOptions {
        padding: number | PaddingOptions;
        zoom: number;
    }

    export interface ZoomOptions {
        duration: number;
    }

    export interface ControlOptions {
        position: 'bottom-left' | 'bottom-right' | 'top-left' | 'top-right';
    }

    export interface LogoScaleControlOptions extends ControlOptions {
        showScale: boolean;
    }

    export interface MapOptions {
        container: string;
        type?: MapType;
        center?: LngLatLike | TWLngLatLike;
        zoom?: number;
        heading?: number;
        tilt?: number;
        maxZoom?: number;
        hash?: boolean;
        zoomable?: boolean;
        draggable?: boolean;
        rotatable?: boolean;
        keyboard?: boolean;
        disableDefaultUI?: boolean;
        logoScaleControl?: LogoScaleControlOptions;
        compassControl?: CompassControlOptions;
        zoomControl?: ZoomControlOptions;
    }

    export interface InfoWindowOptions {
        position: LngLatLike;
        map: Map;
        anchor: AnchorType;
        offset: number | [number, number];
        zIndex: number;
        opacity: number;
        content: string | HTMLElement;
        closeButton: boolean;
    }

    export interface LabelOptions {
        map: Map;
        position: LngLatLike;
        text: string;
        style: LabelStyle;
    }

    export interface MarkerOptions {
        icon: string;
        anchor: AnchorType;
        offset: number | [number, number];
        draggable: boolean;
        position: LngLatLike;
        map: Map;
        zIndex: number;
        opacity: number;
    }

    export interface MarkerClustererIcon {
        url: string;
        size: [number, number];
        position: [number, number];
    }

    export interface MarkerClustererOptions {
        gridSize: number;
        steps: number[];
        icons: MarkerClustererIcon[];
    }

    export interface FeatureOptions {
        map: Map;
        path: LngLatLike[];
        style: PolygonStyle | PolylineStyle;
    }

    /**
     * Pixel
     */
    class Pixel {
        constructor(x: number, y: number);

        static convertToLngLat(map: Map, pixel: Pixel): LngLat;
        static convertToTWLngLat(map: Map, pixel: Pixel, precision?: boolean): LngLat;
        convertToLngLat(map: Map): LngLat;
        convertToTWLngLat(map: Map, precision?: boolean): LngLat;
    }

    /**
     * TWLngLatBounds
     */
    class TWLngLatBounds {
        constructor(southWest: LngLatLike, northEast: LngLatLike);

        convertToLngLatBounds(): LngLatBounds;
        static convertToLngLatBounds(twLngLatBoundsLike: TWLngLatBoundsLike): LngLatBounds;
        static convertToPixelBounds(map: Map, twLngLatBoundsLike: TWLngLatBoundsLike): PixelBounds;
        convertToPixelBounds(map: Map): PixelBounds;
        northEast(): TWLngLat;
        northEast(northEast: TWLngLatLike): void;
        northWest(): TWLngLat;
        northWest(northWest: TWLngLatLike): void;
        southEast(): TWLngLat;
        southEast(southEast: TWLngLatLike): void;
        southWest(): TWLngLat;
        southWest(southWest: TWLngLatLike): void;
    }

    /**
     * LngLatBounds
     */
    class LngLatBounds {
        constructor(southWest: LngLatLike, northEast: LngLatLike);

        convertToPixelBounds(map: Map, precision?: boolean): PixelBounds;
        convertToPixelBounds(map: Map, lngLatBoundsLike: LngLatBoundsLike, precision?: boolean): PixelBounds;
        convertToTWLngLatBounds(precision?: boolean): TWLngLatBounds;
        convertToTWLngLatBounds(lngLatBoundsLike: LngLatBoundsLike, precision?: boolean): TWLngLatBounds;
        northEast(northEast: LngLatLike): void;
        northEast(): LngLat;
        northWest(northWest: LngLatLike): void;
        northWest(): LngLat;
        southEast(southEast: LngLatLike): void;
        southEast(): LngLat;
        southWest(southWest: LngLatLike): void;
        southWest(): LngLat;
    }

    /**
     * PixelBounds
     */
    class PixelBounds {
        constructor(southWest: LngLatLike, northEast: LngLatLike);

        convertToLngLatBounds(map: Map, pixelBoundsLike?: PixelBoundsLike): LngLatBounds;
        convertToTWLngLatBounds(map: Map, precision?: boolean): LngLatBounds;
        static convertToTWLngLatBounds(map: Map, pixelBoundsLike: PixelBoundsLike, precision?: boolean): TWLngLatBounds;
        northEast(): Pixel;
        northEast(northEast: PixelLike): void;
        northWest(): PixelLike;
        northWest(northWest: PixelLike): void;
        southEast(): PixelLike;
        southEast(southEast: PixelLike): void;
        southWest(): PixelLike;
        southWest(southWest: PixelLike): void;
    }

    /**
     * MapEventListener
     */
    class MapEventListener<T> {
        off(eventType?: EventType, listener?: () => any): T;
        on(eventType?: EventType, listener?: () => any): T;
        once(eventType?: EventType, listener?: () => any): T;
    }

    /**
     * LngLat
     */
    class LngLat {
        constructor(lng: number, lat: number);

        convertToPixel(map: Map, precision?: boolean): Pixel;
        convertToPixel(map: Map, lngLatLike: LngLatLike, precision?: boolean): Pixel;
        convertToTWLngLat(precision?: boolean): TWLngLat;
        convertToTWLngLat(lngLatLike: LngLatLike, precision?: boolean): TWLngLat;
    }

    /**
     * TWLngLat
     */
    class TWLngLat {
        constructor(lng: number, lat: number);

        convertToLngLat(twLngLatLike?: TWLngLatLike): LngLat;
        convertToPixel(map: Map, twLngLatLike?: TWLngLatLike): Pixel;
    }

    /**
     * Map
     */
    class Map extends MapEventListener<Map> {
        constructor(mapOptions: MapOptions);

        fitbounds(lngLatBoundsLike: LngLatBoundsLike, fitOptions?: FitOptions): void;
        fitCoordinates(lngLatLikeArray: LngLatLike[], fitOptions?: FitOptions): void;
        flyTo(lngLatLike: LngLatLike, flyOptions: FitOptions): void;
        getBounds(): LngLatBounds;
        getCanvas(): HTMLElement;
        getCenter(): LngLat;
        getDraggable(): boolean;
        getFeatures(): any[];
        getHeading(): number;
        getMaxZoom(): number;
        getMinZoom(): number;
        getRotatable(): boolean;
        getTilt(): number;
        getType(): string;
        getZoom(): number;
        getZoomable(): boolean;
        panBy(offset: [number, number], panOptions: PanOptions): void;
        panTo(lngLatLike: LngLatLike, panOptions: PanOptions): void;
        remove(): void;
        setCenter(lngLatLike: LngLatLike): void;
        setDraggable(draggability?: boolean): void;
        setHeading(degree: number, options: object): void;
        setMaxZoom(zoom: number): void;
        setMinZoom(zoom: number): void;
        setRotatable(rotatability: boolean): void;
        setTilt(degree: number, options: object): void;
        setType(type: string): void;
        setZoom(zoom: number): void;
        setZoomable(zoomability: boolean): void;
        update(): void;
        zoomIn(zoomOptions: ZoomOptions): void;
        zoomOut(zoomOptions: ZoomOptions): void;
    }

    /**
     * Circle
     */
    class Circle extends MapEventListener<Circle> {
        constructor(circleOptions?: CircleOptions);

        getDraggable(): boolean;
        getMap(): Map | undefined;
        getPosition(): LngLat;
        getRadius(): number;
        getStyle(): CircleStyle;
        getVisible(): boolean;
        getZIndex(): number;
        setDraggable(draggability: boolean): void;
        setMap(map?: Map | null): void;
        setPosition(position: LngLatLike): void;
        setRadius(radius: number): void;
        setStyle(style: CircleStyle): void;
        setVisible(visibility?: boolean): void;
        setZIndex(zIndex: number): void;
    }

    /**
     * CustomInfoWindow
     */
    class CustomInfoWindow extends InfoWindow {
        constructor(infoWindowOptions?: InfoWindowOptions);
    }

    /**
     * InfoWindow
     */
    class InfoWindow extends MapEventListener<InfoWindow> {
        constructor(infoWindowOptions: InfoWindowOptions);

        getContent(): string | HTMLElement;
        getMap(): Map;
        getOpacity(): number;
        getPosition(): LngLat;
        getVisible(): boolean;
        getZIndex(): number;
        setContent(content: string | HTMLElement): void;
        setMap(map?: Map): void;
        setOpacity(opacity?: number): void;
        setPosition(position?: LngLatLike): void;
        setVisible(visibility?: boolean): void;
        setZIndex(zIndex?: number): void;
    }

    /**
     * Label
     */
    class Label extends MapEventListener<Label> {
        constructor(labelOptions: LabelOptions);

        getDraggable(): void;
        getMap(): Map | undefined;
        getPosition(): LngLat;
        getStyle(): LabelStyle;
        getText(): string;
        getVisible(): boolean;
        getZIndex(): number;
        setDraggable(draggability?: boolean): void;
        setMap(map?: Map): void;
        setPosition(position: LngLatLike): void;
        setStyle(style: LabelStyle): void;
        setText(text?: string): void;
        setVisible(visibility?: boolean): void;
        setZIndex(zIndex: number): void;
    }

    /**
     * LogoScaleControl
     */
    class LogoScaleControl {
        constructor(logoScaleControlOptions: LogoScaleControlOptions);

        addTo(map: Map): void;
        remove(): void;
        setOptions(logoScaleControlOptions: LogoScaleControlOptions): void;
        setShowScale(showScale?: boolean): void;
    }

    /**
     * Marker
     */
    class Marker extends MapEventListener<Marker> {
        constructor(markerOptions: MarkerOptions);

        getDraggable(): void;
        getIcon(): HTMLElement;
        getInfoWindow(): InfoWindow | CustomInfoWindow | undefined;
        getMap(): Map;
        getOpacity(): number;
        getPosition(): LngLat;
        getVisible(): boolean;
        getZIndex(): number;
        setDraggable(draggability?: boolean): void;
        setIcon(icon?: string | HTMLElement): void;
        setInfoWindow(infoWindow: InfoWindow): void;
        setMap(map?: Map): void;
        setOpacity(opacity?: number): void;
        setPosition(position: LngLatLike): void;
        setVisible(visibility?: boolean): void;
        setZIndex(zIndex: number): void;
    }

    /**
     * MarkerClusterer
     */
    class MarkerClusterer extends MapEventListener<MarkerClusterer> {
        constructor(map: Map, markerClustererOptions: MarkerClustererOptions, markers?: Marker[]);

        addMarker(marker: Marker): void;
        addMarkers(markers: Marker[]): void;
        clearMarkers(): void;
        getClusterChildren(clusterMarker: Marker, callback: () => any): void;
        getClusters(): Marker[];
        getGridSize(): number;
        getMap(): Map | undefined;
        getMarkers(): Marker[];
        getMaxZoom(): number;
        getStyles(): any;
        getTotalClusters(): number;
        getTotalMarkers(): number;
        isZoomOnClick(): boolean;
        removeMarker(marker: Marker): void;
        setGridSize(gridSize: number): void;
        setMap(map?: Map): void;
        setMaxZoom(maxZoom: number, callback?: () => any): void;
        setStyles(): any;
        setZoomOnClick(zoomOnClick: boolean): void;
    }

    /**
     * Polygon
     */
    class Polygon extends MapEventListener<Polygon> {
        constructor(polygonOptions: FeatureOptions);

        getDraggable(): boolean;
        getMap(): Map | undefined;
        getPath(): LngLat[];
        getStyle(): PolygonStyle;
        getVisible(): boolean;
        getZIndex(): number;
        setDraggable(draggability?: boolean): void;
        setMap(map?: Map): void;
        setPath(path?: LngLatLike[]): void;
        setStyle(): PolygonStyle;
        setVisible(visibility?: boolean): void;
        setZIndex(zIndex: number): void;
    }

    /**
     * Polyline
     */
    class Polyline extends MapEventListener<Polyline> {
        constructor(polylineOptions: FeatureOptions);

        getDraggable(): boolean;
        getMap(): Map | undefined;
        getPath(): LngLat[];
        getStyle(): PolylineStyle;
        getVisible(): boolean;
        getZIndex(): number;
        setDraggable(draggability?: boolean): void;
        setMap(map?: Map): void;
        setPath(path?: LngLatLike[]): void;
        setStyle(style: PolylineStyle): void;
        setVisible(visibility?: boolean): void;
        setZIndex(zIndex: number): void;
    }

    /**
     * ZoomControl
     */
    class ZoomControl {
        constructor(options: ZoomControlOptions);

        addTo(map: Map): void;
        remove(): void;
    }
}
