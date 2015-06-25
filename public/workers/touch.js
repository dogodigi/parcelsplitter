/* global jsts, self */

/**
 * 
 * Hand the script two geojson objects and return if they touch yes/no
 */
importScripts('../js/libs/javascript.util.js', '../js/libs/jsts.js');

var wkts = null;
var buffers = [];
var relations = [
    "disjoint", "touches",
    "intersects", //"crosses",
    "within", "contains",
    "overlaps",
    //"covers", "coveredBy",
    "relate"
];

reader = new jsts.io.GeoJSONReader();

onmessage = function (evt) {

    var geometry1 = reader.read(evt.data.queue[0]).geometry;
    var geometry2 = reader.read(evt.data.queue[1]).geometry;

    //geometry checks
    console.log("geometry1.getArea() = " + geometry1.getArea());
    console.log("geometry2.getArea() = " + geometry2.getArea());

    for (var r in relations) {
        var relation = relations[r];
        console.log("geometry1." + relation + "(geometry2) = " + geometry1[relation](geometry2));
        console.log("geometry2." + relation + "(geometry1) = " + geometry2[relation](geometry1));
    }

    //do they touch?
    var result = geometry1.touches(geometry2);
    self.postMessage(result);
};