const Page = require('../models/page.js');
const chai = require('chai');
const expect = chai.expect;

describe('Page Table', function(){
  describe('Validation', function(){
  });
  describe('methods', function(){
    it('creates urlTitles out of the title', function(){
      page = Page.build({title: 'This is  a Title'});
      expect(page.getUrlTitle).to.equal('This_is_a_Title');
    });
    it('has a urlTitle with only alphanumeric characters and underscores', function(){
      page = Page.build({title: 'This   title has b@d $#*T 123*'});
      expect(page.getUrlTitle).to.equal('This_title_has_bd_T_123');
    });
  });
});
