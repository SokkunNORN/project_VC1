 /*  ###################################################################################
     #                  Author by: Rothana SUOS                                        #
     #                                                                                 #
     ###################################################################################
 */

function getResultEstimation() {

        //get value from PrimeCost input
			var prCost = document.getElementById('primeCost').value;
        //get value from Duration used input
    		var duration = document.getElementById('duration').value;
        //get value from Km used input
    		var km = document.getElementById('numberOfKm').value;
        //get value from radio checked
    		var condition=document.getElementById('radio').value;
        //get value from brend selected
    		var brand=document.getElementById('brandMoto').value;
    		
    			
            // When radio check

                if (radio[0].checked) {
    				var baseNumber = 3;
    				
    				if(km<2000){
    					var priceDecreasedDependKm = 10/100; 
    					}
    				
    				if (km>2000 || km <10000) {
    					 var priceDecreasedDependKm = 8/100;
    					}

    				if (km>10000) {
    					var priceDecreasedDependKm = 5/100;
    					}
    			}
    			
    			else if(radio[1].checked){
    				var baseNumber = 2;

    				
    				if(km<2000){
    					var priceDecreasedDependKm = 15/100;
    					}
    				
    				if (km>2000 || km <10000) {
    					var priceDecreasedDependKm = 10/100;
    					}
    				
    				if (km>10000) {
   						var priceDecreasedDependKm =8/100;
    					}
			 	}
				
				else if(radio[2].checked){
    				var baseNumber = 1;

    				
    				if(km<2000){
    					var priceDecreasedDependKm = 20/100;
    					}
    				
    				if (km>2000 || km <10000) {
    					var priceDecreasedDependKm = 15/100;
    					}
    				
    				if (km>10000) {
   						var priceDecreasedDependKm = 10/100;
    					}
				 }

				     //Select Brand of moto 

    				if (brandMoto[0].selected) {
    					 var priceDecreasedDependBrand = 10/100;
    					}
    				
    				else if (brandMoto[1].selected) {
    		 			var priceDecreasedDependBrand = 8/100;
    					}
    				
    				else if (brandMoto[2].selected) {
    		 			var priceDecreasedDependBrand = 5/100;
    					}

                    //Validation

                    if (km=="" || duration=="" || prCost=="" || (radio[0].checked==false & radio[1].checked==false & radio[2].checked==false )) {
                        document.getElementById('Result').innerHTML="sorry Please input all information";
                        document.getElementById('Result').style.color="red";
                    }
                    else{
                        document.getElementById('Result').innerHTML="Estimate price your motobike is : $" + Math.round((baseNumber*(prCost/duration) + prCost*(priceDecreasedDependBrand+priceDecreasedDependKm)) );
                        document.getElementById('Result').style.color="white";
                    }
        }