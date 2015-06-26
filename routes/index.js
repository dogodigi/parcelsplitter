/*!
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

/* global exports */

/**
 * Initiate the Express application
 *
 * @param {type} app
 * @returns {undefined}
 */
function setup(app){
    app.get('/', index);
    app.all('/print', print);
}

/**
 * Render the Index page
 *
 * @param {type} req
 * @param {type} res
 * @returns {undefined}
 */
function index(req, res) {
    var activelang;
    activelang = req.i18n.language();
    res.render('index', {mylang: activelang, mode: req.app.get('env')});
}

/**
 * Generate pdf file (print). In this state, a dummy. 
 * Will be changed to full print functionality in the future.
 * 
 * @param {type} req
 * @param {type} res
 * @returns {application/pdf}
 */
function print(req, res){
    var toner = require("toner")();
    toner.engine("jsrender", require("toner-jsrender"));
    toner.recipe("wkhtmltopdf", require("toner-wkhtmltopdf")());
    toner.render({
        template: { 
            engine: "jsrender",
            recipe: "wkhtmltopdf", 
            content: "<h1>{{:foo}}</h1>"
        },
        data: {foo: "hello world"}
    }, function(err, out) {
        if(err){
            res.status(400).send(err);
        } else {
            // If we ommit the header, the pdf is opened in the browser,
            // If headers are set, it is offered as download.
            res.writeHead(200, {
                'Content-Type': 'application/pdf',
                'Access-Control-Allow-Origin': '*',
                'Content-Disposition': 'attachment; filename=print.pdf'
            });
            out.stream.pipe(res);
        }
    });
    
}

/**
 * Export all functions from this module
 */
exports.print = print;
exports.setup = setup;
exports.index = index;
