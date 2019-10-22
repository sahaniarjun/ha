describe('dictionaryController', function () {
    beforeEach(module('dictionaryApp'));
    var json_fix;

    var $controller, $rootScope, $scope;
    var apiFac, templateHtml, compile, $httpBackend;
    beforeEach(inject(function (_$controller_, _apiFac_, $templateCache, $compile, _$rootScope_, _$httpBackend_) {
      // The injector unwraps the underscores (_) from around the parameter names when matching
      $controller = _$controller_;
      $httpBackend = _$httpBackend_;
      apiFac=_apiFac_;
      json_fix=readJSON('test.json');

      $httpBackend.whenGET(json_fix.links[0])
      .respond([json_fix.response]);

    }));
  
    it("Testing synonym",function(){
    apiFac.synonym('good').then(function(response){
        obj=response;
    expect(obj.data).toEqual([json_fix.response]);
    });   
    $httpBackend.flush();
    });

});