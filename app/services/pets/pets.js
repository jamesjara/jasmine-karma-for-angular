(function(){
	'use strict';
	
	angular.module('api.pets', []).
	factory('Pets', function(){
		var Pets = {};
		
		var petsDummyData = [{
			id: 1,
			name: 'witi'
		},{
			name: '.lolita2'
		},{
			name: '.lolita3'
		}];
		Pets.petsDummyData = petsDummyData;
		
		Pets.all = function(){
			return petsDummyData;
		}
		
		var petDummySingle = {
			id : 1,
			name: 'witi'
		};
		Pets.petDummySingle = petDummySingle;
		
		Pets.findById = function(id){
			return petsDummyData.find(function(pet){
				return pet.id == id;
			});
		}
		
		return Pets;
	});
	
})();