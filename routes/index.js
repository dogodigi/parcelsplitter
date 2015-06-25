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
 * @returns {pdfkit.pdf}
 */
function print(req, res) {

    var PDFDocument = require('pdfkit');
    // Create PDF
    var doc = new PDFDocument();
    // doc.pipe(fs.createWriteStream('print.pdf'));
    doc.pipe(res);
    // Write headers
    res.writeHead(200, {
        'Content-Type': 'application/pdf',
        'Access-Control-Allow-Origin': '*',
        'Content-Disposition': 'attachment; filename=print.pdf'
    });
    doc.font('assets/fonts/rm_typerighter_medium.ttf')
      .fontSize(25)
      .text('This is my Title', 100, 100)
      .moveDown(0.5)
      .fontSize(18)
      .text('A subtitle in smaller font')
      .moveDown(10);

    var lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam in suscipit purus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus nec hendrerit felis. Morbi aliquam facilisis risus eu lacinia. Sed eu leo in turpis fringilla hendrerit. Ut nec accumsan nisl. Suspendisse rhoncus nisl posuere tortor tempus et dapibus elit porta. Cras leo neque, elementum a rhoncus ut, vestibulum non nibh. Phasellus pretium justo turpis. Etiam vulputate, odio vitae tincidunt ultricies, eros odio dapibus nisi, ut tincidunt lacus arcu eu elit. Aenean velit erat, vehicula eget lacinia ut, dignissim non tellus. Aliquam nec lacus mi, sed vestibulum nunc. Suspendisse potenti. Curabitur vitae sem turpis. Vestibulum sed neque eget dolor dapibus porttitor at sit amet sem. Fusce a turpis lorem. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae;'   
    doc.text(lorem,{
      columns: 3,
      columnGap: 15,
      height: 100,
      width: 465,
      align: 'justify'});

    // Pipe generated PDF into response
    doc.end(); // Close document and, by extension, response
}

/**
 * Export all functions from this module
 */
exports.print = print;
exports.setup = setup;
exports.index = index;
