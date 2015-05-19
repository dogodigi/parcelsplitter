/* global jsts, self */

/**
 * 
 * Hand the script two geojson objects and return if they touch yes/no
 */
importScripts('../js/libs/javascript.util.js', '../js/libs/jsts.js');

var wkts = null;
var buffers = [];
reader = new jsts.io.GeoJSONReader();

onmessage = function (evt) {
    var geometry1 = reader.read(evt.data.queue[0]).geometry;
    var geometry2 = reader.read(evt.data.queue[1]).geometry;
    
    //do they touch?
    var result = geometry1.touches(geometry2);
    self.postMessage(result);
};