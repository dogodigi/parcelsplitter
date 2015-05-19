/* global jsts, self */

/**
 * 
 * Hand the script two geojson objects and return the geometry that is the difference of the two
 */
importScripts('../js/libs/javascript.util.js', '../js/libs/jsts.js');

var wkts = null;
var buffers = [];
reader = new jsts.io.GeoJSONReader();
writer = new jsts.io.GeoJSONWriter();

onmessage = function (evt) {
    var geometry1 = reader.read(evt.data.queue[0]).geometry;
    var geometry2 = reader.read(evt.data.queue[1]).geometry;
    
    //do they touch?
    var result = geometry1.difference(geometry2);
    var output = [];
    //result.forEach(function (geom) {
    //        var f = {type: "Feature", properties: {}, geometry: writer.write(geom)};
    //        output.features.push(f);
    //    });
    output = writer.write(result);
    self.postMessage(JSON.stringify(output));
};