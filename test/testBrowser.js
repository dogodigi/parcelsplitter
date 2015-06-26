/*var phantom = require('phantom'),
  server = require('../server.js');

describe('Test Browser javascript', function () {
    'use strict';
    var browser;

    before(function (done) {
        // get our browser and server up and running
        phantom.create(function (ph) {
            ph.createPage(function (tab) {
                browser = tab;
                server.start();
            });
        });
    });
    it('should return data back', function (done) {
        browser.open('http://localhost:3000', function (status) {

            setTimeout(function () {
                browser.evaluate(function inBrowser() {
                    // this will be executed on a client-side
                    return window;
                }, function fromBrowser(result) {
                    console.log(result);
                    server.close();
                });
            }, 1000); // give time for xhr to run

        });
    });
});
*/