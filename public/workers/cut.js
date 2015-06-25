/*!
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 turf
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

/* global turf */

importScripts('//api.tiles.mapbox.com/mapbox.js/plugins/turf/v2.0.0/turf.min.js');

onmessage = function (evt) {
    poly = evt.data.queue[0];
    line = evt.data.queue[1];
    if (poly.geometry === void 0 || poly.geometry.type !== 'Polygon') {
        console.log('"turf-cut" only accepts Polygon type as victim input');
    }
    if (line.geometry === void 0 || line.geometry.type !== 'LineString') {
        console.log('"turf-cut" only accepts LineString type as axe input');
    }
    if (inside(point(line.geometry.coordinates[0]), poly) || inside(point(line.geometry.coordinates[line.geometry.coordinates.length - 1]), poly)) {
        console.log('Both first and last points of the polyline must be outside of the polygon');
    }

    var _axe = turf.buffer(line, 0.000000001, 'meters').features[0]; // turf-buffer issue #23
    var _body = erase(poly, _axe);
    var pieces = [];

    if (_body.geometry.type === 'Polygon') {
        pieces.push(pol(_body.geometry.coordinates));
    } else {
        _body.geometry.coordinates.forEach(function (a) {
            pieces.push(pol(a));
        });
    }

    pieces.forEach(function (a) {
        a.properties = poly.properties;
    });

    return fc(pieces);
};




