/*
  This is a Test suite for DataService... 
  Some Simple Test are being written, and Tests can be further added
*/
'use strict';
describe("DataService:", function() {
  var dataservice,
      httpBackend,
      resource;

  beforeEach(module('Backbase.services'));

  beforeEach(inject(function($injector, _dataservice_) {
    dataservice = _dataservice_;
    httpBackend = $injector.get('$httpBackend');
  }));

  afterEach(function() {
    httpBackend.verifyNoOutstandingExpectation();
    httpBackend.verifyNoOutstandingRequest();
  });

  it("returns a range of year to year now", function() {
    expect(dataservice.getYearsRange(2005)[0].name).toEqual(2005);
  });

  it('should have a getChampionships function', function() {
    expect(angular.isFunction(dataservice.getChampionships)).toBe(true);
  });

  it('should have a getChampionshipResults function', function() {
    expect(angular.isFunction(dataservice.getChampionshipResults)).toBe(true);
  });

});
