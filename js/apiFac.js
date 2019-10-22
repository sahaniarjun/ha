angular.module('dictionaryApp')
  .factory('apiFac',function($http) {
    var apiFac;
    apiFac.synonym = function(word){
        apiFac.synonym = function(word){
        $http
            .get("https://api.wordnik.com/v4/word.json/"+word+"/relatedWords?useCanonical=false&relationshipTypes=synonym&limitPerRelationshipType=10&api_key=c23b746d074135dc9500c0a61300a3cb7647e53ec2b9b658e")
            .then(function(response){
                return response
            })
      return ;
    };
      return "dfd";
    };
    return apiFac;
  });
