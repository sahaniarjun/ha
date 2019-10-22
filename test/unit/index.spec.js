describe('dictionaryController', function () {
  beforeEach(module('dictionaryApp'));
  var json_fix;

  var $controller, $rootScope, $scope;
  var apiFac, compile, $httpBackend;
  beforeEach(inject(function (_$controller_, _apiFac_, $templateCache, $compile, _$rootScope_, _$httpBackend_) {
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
    apiFac = _apiFac_;
    compile = $compile;
    $rootScope = _$rootScope_;
    $httpBackend = _$httpBackend_;
  }));


  beforeEach(function () {
    json_fix=readJSON('test.json');

    $httpBackend.whenGET(json_fix.links[0])
    .respond([ json_fix.response]);

  $httpBackend.whenGET(json_fix.links[1])
  .respond([]);
  
    $scope = $rootScope.$new();
    controller = $controller('dictionaryController', { $scope: $scope });

  });

  it('get_content function to be defined', function () {
    expect($scope.get_content).toBeDefined();
   
  });

  it('search function to be defined', function () {
    expect($scope.search).toBeDefined();
  });

  it('synonym function to be defined', function () {
    $scope.get_content();
    expect(apiFac.synonym).toBeDefined();
  });
  it('synonym fucntion should be called with search text', function () {
    $scope.search_word = "good"
    var spy = spyOn(apiFac, "synonym").and.callThrough();
    $scope.get_content();
    expect(spy).toHaveBeenCalledWith("good");
    $scope.search_word = "welcome"
    $scope.get_content();
  });


it('result_word should contain searched text, items should contain list of response data and search_word should be cleared ', function () {
    
  $scope.search_word = "good";
  $scope.get_content();
  apiFac.synonym($scope.search_word).then(function (response) {
    expect($scope.result_word).toEqual("good");
    expect($scope.items).toEqual(json_fix.response.words);
    expect($scope.search_word).toEqual("");
  });
  $httpBackend.flush();
});


  it('result_word should have empty string, items should contain empty list of response data and search_word should not be cleared', function () {

     $scope.search_word = "empty";
     $scope.get_content();
    apiFac.synonym($scope.search_word).then(function (response) {
      expect($scope.result_word).toEqual("");
      expect($scope.search_word).toEqual("empty");
      expect($scope.items).toEqual([]);
    });

    $httpBackend.flush();
  });

it("search function should call get_content()",function(){
  var spy=spyOn($scope,"get_content").and.callThrough();;
  $scope.search("good");
  expect(spy).toHaveBeenCalled();
});


it("search function should initialize clicked word to search_word",function(){
  var spy=spyOn($scope,"get_content").and.callThrough();;
  $scope.search("good");
  expect($scope.search_word).toEqual("good");
});



});