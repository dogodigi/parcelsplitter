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
    app.post'/print', print);
}

/**
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
 * @returns {pdfkit.pdf}
 */
function print(req, res) {
    // Create PDF
    var doc = new pdfDocument();

    // Write headers
    res.writeHead(200, {
        'Content-Type': 'application/pdf',
        'Access-Control-Allow-Origin': '*',
        'Content-Disposition': 'attachment; filename=Untitled.pdf'
    });

    // Pipe generated PDF into response
    doc.pipe(res);

    // Process image
    request({
        url: 'http://dummyimage.com/640.jpeg',
        encoding: null // Prevents Request from converting response to string
    }, function(err, response, body) {
        if (err) throw err;

        // Inject image
        doc.image(body); // `body` is a Buffer because we told Request
                         // to not make it a string

        doc.end(); // Close document and, by extension, response
        return;
    });
}
exports.print = print;
exports.setup = setup;
exports.index = index;
