describe('Pets factory', function(){
	it('has a dummy test 1 +1 ', function(){
		expect(2+2).toEqual(4); // to fail the test
	});
	
	var Pets;
	
	beforeEach(angular.mock.module('api.pets')); // each test
	
	beforeEach(inject(function(_Pets_) {
		Pets = _Pets_;
	}));
	
	// test to verify if pets factory exist
	it('should exits', function(){
		expect(Pets).toBeDefined();
	})
	
	describe('api all()', function(){ 
		// expect some pets factory methods
		it('shoudl expected', function(){
			expect(Pets.all).toBeDefined();
		});
		
		it('shoudl expected data', function(){
			expect(Pets.all()).toEqual(Pets.petsDummyData);
		});
	});
	
	describe('api findById', function(){
		it('should exists', function(){
			expect(Pets.findById()).toBeDefined();
		});
		it('should get the hardcoded users', function(){
			expect(Pets.findById(1)).toEqual(Pets.petDummySingle);
		});
	});
	
});
 