/*
 *(#)dashboard.js - Copyright
 * All rights reserved.
 */
me = new Object();

if (typeof me.dashboard == 'undefined') {
	me.dashboard = function() {
		return {

			dashboardDetails : [],
			fileDetails : [],
			cartItemList : [],
			userDetailsList : [],
			cartItemObject : {},
			
			/**
			 * @author rahikhan
			 * @description Function to be called once the dashboard loaded.
			 */
			onload : function(){
				console.log("dashboard.js : onload..called without error");
				
				$("#catalogDiv").hide();
				$("#catalogDiv1").hide();
				$("#userDiv").hide();
				$("#cartDiv").hide();
				$("#paymentDiv").hide();
				
				
				$("#home").click(function(){
					console.log("home link clicked....");
					$("#homeDiv").show();
				    $("#catalogDiv").hide();
				    $("#catalogDiv1").hide();
				    $("#userDiv").hide();
				    $("#cartDiv").hide();
				    $("#paymentDiv").hide();
				    
				});

				$("#catalog").click(function(){
					console.log("catalog link clicked....");
				    $("#catalogDiv").show();
				    $("#catalogDiv1").hide();
					$("#homeDiv").hide();
				    $("#userDiv").hide();
				    $("#cartDiv").hide();
				    $("#paymentDiv").hide();
				    me.dashboard.getCatalogDetails();
				    
				}); 
				
				$("#user").click(function(){
					console.log("user link clicked");
					$("#homeDiv").hide();
				    $("#catalogDiv").hide();
				    $("#catalogDiv1").hide();
				    $("#userDiv").show();
				    $("#cartDiv").hide();
				    $("#paymentDiv").hide();
				});

				$("#cart").click(function(){
					console.log("user link clicked");
					$("#homeDiv").hide();
				    $("#catalogDiv").hide();
				    $("#catalogDiv1").hide();
				    $("#userDiv").hide();
				    $("#cartDiv").show();
				    $("#paymentDiv").hide();
				});

				$("#payment").click(function(){
					console.log("user link clicked");
					$("#homeDiv").hide();
				    $("#catalogDiv").hide();
				    $("#catalogDiv1").hide();
				    $("#userDiv").hide();
				    $("#cartDiv").hide();
				    $("#paymentDiv").show();
				});

				$("#paymentBtn").click(function(){
					console.log("user link clicked");
					$("#homeDiv").hide();
				    $("#catalogDiv").hide();
				    $("#catalogDiv1").hide();
				    $("#userDiv").hide();
				    $("#cartDiv").hide();
				    $("#paymentDiv").show();
				});				
				
				
				$("#submit").click(function(){
					console.log("submit button clicked");
				});				
				
				$("#submitCatalog").click(function(){
					console.log("submitCatalog button clicked");
					me.dashboard.saveToCart();
				});				

				$("#createUser").click(function(){
					console.log("createUser button clicked..::.");
					
					var userDetailsObject = {};
					userDetailsObject["usrLoginId"] = $("#usrLoginId").val();
					userDetailsObject["pwd"] = $("#pwd").val();
					userDetailsObject["name"] = $("#name").val();
					userDetailsObject["address"] = $("#address").text();
					userDetailsObject["city"] = $("#city").text();
					userDetailsObject["state"] = $("#state").text();
					userDetailsObject["zip"] = $("#zip").text();
					userDetailsObject["country"] = $("3country").text();
					userDetailsObject["card"] = $("#card").text();
					me.dashboard.userDetailsList.push(userDetailsObject);
					
					console.log("\t userDetailsObject : " + JSON.stringify(userDetailsObject));
					me.dashboard.createUser(userDetailsObject);
					
				});			
				
				/*
				var promiseDashboardDetails = me.dashboard.getDashboardDetails();

				$.when(promiseDashboardDetails).then(function() {
					me.dashboard.initializeDashboard();
				});
				 */
				
				
				/* Resetting file input button on page load*/
				$('#file1').val("");
				$('#file1').unbind();
				$("#searchText").val("");

				$("#fileSearch").click(function(){
					if($("#searchText").val().length > 0){
						me.dashboard.searchFileDetails();
						$('#fileSearchDialog').modal('show');
					}else{
						alert("Please provide search input")
					}
				});
				

				
			},

			/**
			 * @author rahikhan
			 * @description This method make ajax call to fetch the dashboard details.
			 */
			getDashboardDetails : function(){
				console.log("dashboard.js : getDashboardDetails");
				
				var promise = $.ajax({
					async: true,
					url: "dashboard/getDashboardDetails.htm",
					type: "GET",
					datatype: "json",
					accept: "application/json",
				}).done(function(result) {
					me.dashboard.dashboardDetails = JSON.parse(result);
					console.log("\tme.dashboard.dashboardDetails : " + JSON.stringify(me.dashboard.dashboardDetails));
				}).fail(function(jqXHR, textStatus) {
					console.log("\tgetDashboardDetails : Application Exception Occured " );
				});
				return promise;
			},
			
			/**
			 * @author rahikhan
			 * @description This method make ajax call to fetch the dashboard details.
			 */
			getCatalogDetails : function(){
				console.log("dashboard.js : getCatalogDetails..");
			
				var promise = $.ajax({
					async: true,
					url: "dashboard/getCatalogDetails.htm",
				type: "GET",
				datatype: "json",
				accept: "application/json",
				}).done(function(result) {
					result = JSON.parse(result);
					console.log("\t result : " + JSON.stringify(result));
					var catalogCardDiv = '';
					$.each(result,function(index,value){
						console.log("\t value : " + JSON.stringify(value));
						console.log("\t value.name : " + value.name);
						console.log("\t value.name : " + value["name"]);

						catalogCardDiv = '<div class="card"><div class="card-block"><div class="row"><div class="col-xs-7 col-sm-9">';
						catalogCardDiv = catalogCardDiv + '<a href="#" data-index="'+index+'" data-product-type="drugs" data-name="'+ value.name +'" >'+ value.name +'</a></div>';
						catalogCardDiv = catalogCardDiv + '<div class="col-xs-5 col-sm-3 text-right">106.43</div></div>';
						
						catalogCardDiv = catalogCardDiv + '<div class="row"><div class="col-xs-7 col-sm-9">';
						catalogCardDiv = catalogCardDiv + '<div class="small">'+ value.type +'</div>';
						catalogCardDiv = catalogCardDiv + '<div class="small text-secondary"><p class="text-muted">'+ value.manufacturer +'</p></div></div>';
						
						catalogCardDiv = catalogCardDiv + '<div class="col-xs-5 col-sm-3" align="right"><div class="text-right small invisible">';
						catalogCardDiv = catalogCardDiv + '<span class="brand-discount">'+ value.discount +'</span>';
						catalogCardDiv = catalogCardDiv + '<span class="text-right">'+ value.cost +'</span></div>';

						if(value.availability == 'no' || value.availability == "undefined"){
							catalogCardDiv = catalogCardDiv + '<div id="catalogAvailability" class="out-of-stock text-right">';
							catalogCardDiv = catalogCardDiv + '<div id="notAvailable_'+ value.id +'" data-id="'+ value.id +'" data-avail="Not Available" class="small">Not Available</div>';
						}else{
							catalogCardDiv = catalogCardDiv + '<a id="addToCart_'+ value.id +'" data-id="'+ value.id +'" data-avail="'+ value.availability +'" data-name="'+ value.name +'" data-su="1" data-pform="bottle"';
							catalogCardDiv = catalogCardDiv + 'data-mrp="'+ value.cost +'" class="btn btn-inline btn-primary button-text" onclick="javascript:me.dashboard.saveToCart('+ value.id +')"><span>Add to Cart</span></a>';
						}
						
						catalogCardDiv = catalogCardDiv + '</div></div></div></div></div>';
						$("#catalogCardsDiv").append(catalogCardDiv);
						
					});
					
				}).fail(function(jqXHR, textStatus) {
					console.log("\t getCatalogDetails : Application Exception Occured " );
					});
					return promise;
				
			},

			/**
			 * @author rahikhan
			 * @description This method make ajax call to fetch the dashboard details.
			 */
			saveToCart : function(itemId){
				console.log("dashboard.js : saveToCart");
				console.log("\t itemId : " + itemId);
				
				var itemIdTemp = '"'+itemId+'"';
				var cartItemObject = {};
				
				if(me.dashboard.cartItemObject[itemId]){
					me.dashboard.cartItemObject[itemId] = me.dashboard.cartItemObject[itemId] + 1;
				}else {
					me.dashboard.cartItemObject[itemId] = 1;
				}
			
				cartItemObject[itemId] = 1;
				me.dashboard.cartItemList.push(cartItemObject);
				
				if(me.dashboard.cartItemObject){
					var promise = $.ajax({
						async: true,
						url: "dashboard/saveToCart.htm",
						type: "POST",
						data: "postJson=" + JSON.stringify(me.dashboard.cartItemObject),
						datatype: "json",
						accept: "application/json",
					}).done(function(result) {
						result = JSON.parse(result);
						console.log("\t result : " + JSON.stringify(result));
					}).fail(function(jqXHR, textStatus) {
						console.log("\t saveToCart() : Application Exception Occured " );
					});
					return promise;
				}
				
				
			},

			/**
			 * @author rahikhan
			 * @description This method make ajax call to fetch the dashboard details.
			 */
			createUser : function(userDetails){
				console.log("dashboard.js : createUser");
				console.log("\t userDetails : " + JSON.stringify(userDetails));
				
				var promise = $.ajax({
					async: true,
					url: "dashboard/createUser.htm",
					type: "POST",
					data: "postJson=" + JSON.stringify(userDetails),
					datatype: "json",
					accept: "application/json",
				}).done(function(result) {
					result = JSON.parse(result);
					console.log("\t result : " + JSON.stringify(result));
				}).fail(function(jqXHR, textStatus) {
					console.log("\t createUser() : Application Exception Occured " );
				});
				return promise;
			},			
			
			/**
			 * @author rahikhan
			 * @description This method initializes the screen with dashboard details.
			 */
			initializeDashboard : function(){

				$("#pageHeader").text(me.dashboard.dashboardDetails[0].pageName);

				$("#currentMonthSaving").text(me.dashboard.dashboardDetails[0].savingAmount);
				$("#currentMonthEarning").text(me.dashboard.dashboardDetails[0].earningAmount);
				$("#totalOwed").text(me.dashboard.dashboardDetails[0].owedAmount);
				$("#currentMonthExpenses").text(me.dashboard.dashboardDetails[0].expensesAmount);

				$("#currentMonthSavingHdr").text(me.dashboard.dashboardDetails[0].savingDetails);
				$("#currentMonthEarningHdr").text(me.dashboard.dashboardDetails[0].earningDetails);
				$("#totalOwedHdr").text(me.dashboard.dashboardDetails[0].owedDetails);
				$("#currentMonthExpensesHdr").text(me.dashboard.dashboardDetails[0].expensesDetails);

			},

			/**
			 * @author rahikhan
			 * @description This method makes call to fetch file detail based on search text provided
			 */
			searchFileDetails : function(){

				var searchText = $("#searchText").val();

				if(searchText.length > 0){ 
					var promise = $.ajax({
						async: true,
						url: "fileUpload/getFileDetails.htm?searchText=" + searchText,
						type: "GET",
						datatype: "json",
						accept: "application/json",
					}).done(function(result) {
						me.dashboard.fileDetails = JSON.parse(result);

						var fileSearchTableBody = "";
						$.each(me.dashboard.fileDetails,function(index,object){
							fileSearchTableBody = "<tr><td>"+object.fileName+"</td><td>"+object.dealCount+"</td></tr>";
						});

						if(fileSearchTableBody.length > 0){
							$("#searchText").val("");
							$("#searchTableBody").empty();
							$("#searchTableBody").append(fileSearchTableBody);
						}else{
							$("#searchTableBody").empty();
							$("#searchTableBody").append("<h3>No data found</h3>");

						}
					}).fail(function(jqXHR, textStatus) {
						console.log("\t searchFileDetails : Application Exception Occured " );
					});

					return promise;
				}
			},


			/**
			 * @author rahikhan
			 * @description Method to display bar-graph
			 */
			displayDashBoardChart : function(){

				var dataPointsArray = [];
				$.each(me.dashboard.dashboardDetails[0].dealsPerCurrencyMap,function(key,value){
					var dataPointObject = {};
					dataPointObject["label"]=key;
					dataPointObject["y"]=parseInt(value);
					dataPointsArray.push(dataPointObject);
				});

				var chart = new CanvasJS.Chart("dealsPerCurrencyGraph",
						{
					//title:{text: "Deals count per currency"},
					animationEnabled: true,
					axisY: {title: "Deals"},
					axisX: {title: "Currency"},
					legend: {verticalAlign: "bottom",horizontalAlign: "left"},
					theme: "theme2",
					data: [{
						type: "column",  
						showInLegend: true, 
						legendMarkerColor: "grey",
						dataPoints: dataPointsArray,
					}]
						});
				chart.render();

			},

		}
	}();
}
