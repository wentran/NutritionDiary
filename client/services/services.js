angular.module('services', [])
.factory('retrieve', function($http) {

var retrieveData = function(input) {	
      console.log(input)
		return $http({
	      method: 'GET',
	      url:'https://api.nutritionix.com/v1_1/search/' + input + '?results=0%3A5&cal_min=0&cal_max=50000&fields=item_name%2Cbrand_name%2Citem_id%2Cbrand_id%2Cnf_calories%2Cnf_calories_from_fat%2Cnf_total_fat%2Cnf_saturated_fat%2Cnf_monounsaturated_fat%2Cnf_polyunsaturated_fat%2Cnf_trans_fatty_acid%2Cnf_cholesterol%2Cnf_sodium%2Cnf_total_carbohydrate%2Cnf_dietary_fiber%2Cnf_sugars%2Cnf_protein%2Cnf_vitamin_a_iu%2Cnf_vitamin_a_dv%2Cnf_vitamin_c_mg%2Cnf_vitamin_c_dv%2Cnf_calcium_mg%2Cnf_calcium_dv%2Cnf_iron_mg%2Cnf_iron_dv%2Cnf_potassium&appId=cdd7515f&appKey=5a99213297b9f86805a094c16db4eb1c' 	

	     })
		.then(function(resp) {
			console.log(resp.data)
					return resp.data;
				});
			};

  	return {
  		retrieveData: retrieveData
  	}
})

