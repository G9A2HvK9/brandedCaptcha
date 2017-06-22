const Browser = require('zombie');
var expect = require('chai').expect
var assert = require('assert');
var app = require('../index.js')
var sinon = require('sinon')

describe('minigame3', function(){
  const browser = new Browser();


  beforeEach(function(done) {
    browser.visit('http://localhost:8080/minigame3', done);
  });

  it('should display an image with id mainImage', function(){
    browser.assert.element('img#mainImage')
  });

  it('should display 3 images on the page with class testImage', function(){
    browser.assert.elements('input.testImage', 3)
  });

  it('visits /failed when clicking input 0', function(done){
    browser.click('input#img0', function(){
      browser.assert.url('/failed');
      done();
    });
  });

  it('visits /failed when clicking input 1', function(done){
    browser.click('input#img1', function(){
      browser.assert.url('/failed');
      done();
    });
  });

  it('visits /confirmed when clicking input 2', function(done){
    browser.click('input#img2', function(){
      browser.assert.url('/confirmed');
      done();
    });
  });
});
