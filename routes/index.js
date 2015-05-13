/* global exports */

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

/**
 * 
 * @param {type} app
 * @returns {undefined}
 */
function setup(app){
    app.get('/', index);
}
/**
 * 
 * @param {type} req
 * @param {type} res
 * @returns {undefined}
 */
function index(req, res) {
    var activelang;
    if (req.i18n.language() !== 'nl' && req.i18n.language() !== 'dev' && req.i18n.language() !== 'en') {
        console.log(req.i18n.language());
        req.i18n.setLng('dev');
        activelang = 'dev';
    } else {
        activelang = req.i18n.language();
    }
    res.render('index', {mylang: activelang, mode: req.app.get('env')});
}

exports.setup = setup;
exports.index = index;