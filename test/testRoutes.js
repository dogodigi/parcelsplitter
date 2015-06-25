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

var request = require('supertest'),
  server = require('../server.js');


describe('Routes', function() {
  it('GET Index', function(done) {
    // See that we get a status 200 on retrieving the Index
    server.app.set('env', 'production');
    request(server.app).get('/')
      .expect(200, done)
  });

  it('POST Print', function(done) {
    server.app.set('env', 'production');
    var postData = {
      "question" : {
        "type" : "freeResponse",
        "text" : "This is a test freeResponse question (automated testing)",
        "duringClass" : "1"
      }
    };
    request(server.app).post('/print').send(postData)
    .expect(200)
    .expect('Content-Type', 'application/pdf', done)
    //.end(function(err, res){
    //  done();
    //});
  });
});
