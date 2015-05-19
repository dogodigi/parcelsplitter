/* global L, i18n, psLang */

/**
 *  Copyright (c) 2014 Milo van der Linden (milo@dogodigi.net)
 * 
 *  This file is part of parcelsplitter
 *  
 *  parcelsplitter is free software: you can redistribute it and/or modify
 *  it under the terms of the GNU General Public License as published by
 *  the Free Software Foundation, either version 3 of the License, or
 *  (at your option) any later version.
 *
 *  parcelsplitter is distributed in the hope that it will be useful,
 *  but WITHOUT ANY WARRANTY; without even the implied warranty of
 *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 *  GNU General Public License for more details.
 *
 *  You should have received a copy of the GNU General Public License
 *  along with parcelsplitter. If not, see <http://www.gnu.org/licenses/>.
 *
 */

var wkts = [];
function init() {
    i18n.init({lng: psLang, detectLngQS: 'l'}, function (t) {
        var mapboxmap = L.tileLayer('http://{s}.tiles.mapbox.com/v3/miblon.map-n72dremu/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWlibG9uIiwiYSI6IjRJak9WYUkifQ.NOqcZh0hQeYTp6BQIZr0GQ', {
            attribution:
                    t('L.mapdata') +
                    ' &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> ' +
                    t('L.contributors') +
                    ', <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                    t('L.imagery') + ' &copy; <a href="http://mapbox.com">Mapbox</a>',
            maxZoom: 21
        });
        var mapboxsat = L.tileLayer('http://{s}.tiles.mapbox.com/v4/miblon.m6f0i6ib/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWlibG9uIiwiYSI6IjRJak9WYUkifQ.NOqcZh0hQeYTp6BQIZr0GQ', {
            attribution:
                    t('L.mapdata') +
                    ' &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> ' +
                    t('L.contributors') +
                    ', <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
                    t('L.imagery') + ' &copy; <a href="http://mapbox.com">Mapbox</a>',
            maxZoom: 21
        });
        var baseMaps = {};
        baseMaps[t('L.mapboxsat')] = mapboxsat;
        baseMaps[t('L.mapboxmap')] = mapboxmap;
        var map = L.map('map', {zoomControl: false, layers: [mapboxmap]}).setView([-25.3, -57.647957029819496], 19);
        L.control.layers(baseMaps).addTo(map);
        L.control.zoom({
            zoomInTitle: t('L.zoomInTitle'),
            zoomOutTitle: t('L.zoomOutTitle')
        }).addTo(map);

        function highlightFeature(e) {
            var layer = e.target;
            layer.setStyle({
                weight: 5,
                color: '#666',
                dashArray: '',
                fillOpacity: 0.7
            });

            if (!L.Browser.ie && !L.Browser.opera) {
                layer.bringToFront();
            }
        }

        function onEachFeature(feature, layer) {
            layer.on({
                mouseover: highlightFeature,
                mouseout: resetHighlight,
                click: clickLote
            });
        }

        function clickLote(e) {
            var feat = e.target;
            if (wkts[0]) {
                wkts[1] = feat.feature;
                testWorkers();
            } else {
                wkts[0] = feat.feature;
            }
            feat.setStyle({
                weight: 5,
                color: '#ff0000',
                fillColor: "#CC7700",
                dashArray: '',
                fillOpacity: 0.7
            });
            if (!L.Browser.ie && !L.Browser.opera) {
                feat.bringToFront();
            }
        }
        function popUp(f, l) {
            var out = [];
            if (f.properties) {
                var key;
                for (key in f.properties) {
                    out.push(key + ": " + f.properties[key]);
                }
                l.bindPopup(out.join("<br />"));
            }
        }
        L.geoJson.ajax("data/manzanas.geojson", {
            onEachFeature: popUp
        }).addTo(map);

        var geojson;
        geojson = L.geoJson.ajax("data/lotes-extract.geojson", {
            style: {
                weight: 2,
                color: "#999",
                opacity: 1,
                fillColor: "#B0DE5C",
                fillOpacity: 0.8
            },
            onEachFeature: onEachFeature
        }).addTo(map);

        function resetHighlight(e) {
            // @todo don't reset when object is selected
            geojson.resetStyle(e.target);
        }

        var drawnItems = new L.FeatureGroup();
        map.addLayer(drawnItems);

        var drawControl = new L.Control.Draw({
            draw: {
                position: 'topleft',
                polygon: {
                    title: 'Draw a sexy polygon!',
                    allowIntersection: false,
                    drawError: {
                        color: '#b00b00',
                        timeout: 1000
                    },
                    shapeOptions: {
                        color: '#bada55'
                    },
                    showArea: true
                },
                polyline: {
                    metric: true
                },
                circle: {
                    shapeOptions: {
                        color: '#662d91'
                    }
                }
            },
            edit: {
                featureGroup: drawnItems
            }
        });
        map.addControl(drawControl);

        map.on('draw:created', function (e) {
            var type = e.layerType,
                    layer = e.layer;

            if (type === 'marker') {
                layer.bindPopup('A popup!');
            }

            drawnItems.addLayer(layer);
        });
    });


    //test worker
    testWorkers = function () {
        //myWorker = new Worker('workers/difference.js');
        //myWorker.postMessage({"buffer": [], "queue": wkts});
        //myWorker.addEventListener('message', function (e) {
        //    console.log(e.data);
        //}, false);
        // Send data to our worker.
        myWorker = new Worker('workers/touch.js');
        myWorker.postMessage({"buffer": [], "queue": wkts});
        wkts = [];
        myWorker.addEventListener('message', function (e) {
            console.log('result for touch: ' + e.data);
        }, false);
    };
}