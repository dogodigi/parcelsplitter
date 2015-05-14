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


function init() {
    i18n.init({lng: psLang, detectLngQS: 'l' }, function (t) {
        var mapbox = L.tileLayer('http://{s}.tiles.mapbox.com/v3/miblon.map-n72dremu/{z}/{x}/{y}.png', {
            attribution: 
                    t('L.mapdata') + 
                    ' &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> ' +
                    t('L.contributors')+ 
                    ', <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' + 
                    t('L.imagery') + ' &copy; <a href="http://mapbox.com">Mapbox</a>',
            maxZoom: 18
        });
        var map = L.map('map', {layers: [mapbox]}).setView([-25.299398189009363, -57.619957029819496], 13);
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


}
