export default interface Config {
    targetRoot?: HTMLElement;
    renderAtNaturalSize?: boolean;
    markerColors?: MarkerColors;
}
export interface MarkerColors {
    mainColor: string;
    highlightColor: string;
    coverColor: string;
}
