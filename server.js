/* global global, exports, __dirname, process */

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

// To run in production: NODE_ENV=production

var express = require('express'),
        path = require('path'),
        routes = require('./routes'),
        i18n = require('i18next');

i18n.init({
    detectLngQS: 'l',
    saveMissing: true,
    sendMissingTo : 'all',
    useCookie: false,
    debug: true,
    fallbackLng: 'dev'
});

var app = express();
app.use(i18n.handle);
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use('/locales', express.static(__dirname + '/locales'));
app.use('/data', express.static(__dirname + '/data'));
app.use(express.static(path.join(__dirname, 'public')));
i18n.registerAppHelper(app);
i18n.serveClientScript(app)
        .serveDynamicResources(app)
        .serveMissingKeyRoute(app);
// development mode
if (app.get('env') === 'development') {
    console.log('[INFO] - running in development mode');
    app.locals.pretty = true;
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

if (app.get('env') === 'production') {
    console.log('[INFO] - running in production mode');
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: {}
        });
    });
}

routes.setup(app);
function start(test) {
    app.listen(app.get('port'), function () {
        console.log("Express server listening on port %d in %s mode", app.get('port'), app.settings.env);
    });
}
exports.start = start;
exports.app = app;
