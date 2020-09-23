class Marker {

    set name(name) {
        this.varname = name;
    }

    get name() {
        return this.varname;
    }

    set coords(coords) {
        this.varcoords = coords;
    }

    get coords() {
        return this.varcoords;
    }

    set map(map) {
        this.varmap = map;
    }

    get map() {
        return this.varmap;
    }

    set color(color) {
        this.varcolor = color;
    }

    get color() {
        return this.varcolor;
    }

    set lMarker(lMarker) {
        this.varlMarker = lMarker;
    }

    get lMarker() {
        return this.varlMarker;
    }

    constructor(coords, map) {
        this.varcoords = coords;
        this.varmap = map;
    }

    compile() {
        //var coords =  [[48,-3],[50,5],[44,11],[48,-3]] ;     
        if (this.varcolor == null) {
            this.varcolor = "#9999ff";
        }
           
        
        this.varlMarker = L.marker(this.varcoords, {color: this.varcolor});
        this.varlMarker.bindPopup("<b>" + this.name +"</b>").openPopup();
    }

    draw() {
        this.compile();
        this.varlMarker.addTo(this.varmap);
    }

    remove() {
        this.varmap.removeLayer(this.varlMarker)
    }
}