<!DOCTYPE html>
<html lang="en">

	<head>
	
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
		<meta http-equiv="x-ua-compatible" content="ie=edge">
		<title>Your store assistant</title>
		
		<!-- Custom Fonts -->
		<link href="resources/css/vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css">
		<!-- Bootstrap Core CSS -->
		<link href="resources/css/vendor/bootstrap4/bootstrap.css" rel="stylesheet">
		<!-- Material Design Bootstrap -->
		<link href="resources/css/vendor/bootstrap4/mdb.css" rel="stylesheet">
		<!-- Custom css -->
		<link href="resources/css/system/dashboard.css" rel="stylesheet">
	
	</head>
	
	<body>   
	 
		<header>
	
			<!--Navbar-->
			<nav class="navbar navbar-toggleable-md navbar-dark bg-primary">
				<button class="navbar-toggler navbar-toggler-left" type="button" data-toggle="collapse" data-target="#collapseEx2" aria-controls="collapseEx2" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="container">
					
					<a class="navbar-brand" href="#">
						<img alt="" class="logo img-fluid rounded float-left" src="resources/images/brandLogo.jpg">
                    </a>

					<div class="collapse navbar-collapse" id="collapseEx2">
						<ul class="navbar-nav mr-auto">
							<li class="nav-item active">
								<a id="home" class="nav-link waves-effect waves-light">Home <span class="sr-only">(current)</span></a>
							</li>
							<li class="nav-item">
								<a id="catalog" class="nav-link waves-effect waves-light">Catalog</a>
							</li>
							<li class="nav-item">
								<a id="user" class="nav-link waves-effect waves-light">User</a>
							</li>
							<li class="nav-item btn-group">
								<a class="nav-link dropdown-toggle waves-effect waves-light" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
								<div class="dropdown-menu" aria-labelledby="dropdownMenu1">
									<a class="dropdown-item waves-effect waves-light">Action</a>
									<a class="dropdown-item waves-effect waves-light">Another action</a>
									<a class="dropdown-item waves-effect waves-light">Something else here</a>
								</div>
							</li>
						</ul>
					
						<div id="collapseEx3">	
							<form class="form-inline">
								<!--Navigation icons-->
								<ul class="nav-icons navbar-nav mr-auto">
									<li class="nav-item">
										<input class="form-control" placeholder="Search" type="text">
									</li>
								</ul>
							</form>
						</div>
						<div id="collapseEx4">	
							<form class="form-inline">
								<ul class="nav-icons navbar-nav mr-auto">
									<li class="nav-item">
										<a id="payment" href="#" data-toggle="tooltip" title="Payment" class="nav-link waves-effect waves-light navbar_color">
											<i class="fa fa-money"></i>
											<!-- <span>Payment</span> -->
										</a>
									</li>
									<li class="nav-item">
										<a id="cart" href="#cart-modal-ex" data-toggle="tooltip" title="Cart" class="nav-link waves-effect waves-light">
											<i class="fa fa-cart-plus "></i>
											<!-- <br><span>Cart</span>  data-toggle="modal" -->
											<span class="nav-counter">4</span>
										</a>
									</li>
								</ul>
							</form>
						</div>						
					</div>
				</div>
				<!-- </div> -->
			</nav>	
			<!--/.Navbar-->
		
		</header>
    
		<main>
		
		    <!--Main layout-->
		    <div class="container">
		        <!--First row-->
		        <div id="homeDiv" class="row">
		            <div class="col-md-7">
		            	<h2 class="h2-responsive"> </h2> 
						<div class="view overlay hm-white-light z-depth-1-half">
					        <!-- <img src="https://mdbootstrap.com/images/proffesions/slides/socialmedia/img%20(2).jpg" class="img-fluid " alt="">-->
					        <img src="resources/images/HealthWellness.jpg" class="img-fluid " alt="">
					        <div class="mask">
					        </div>
					    </div>	
						<br>				                
					</div>
		
		            <!--Main information-->
		            <div class="col-md-5">
					    <h2 class="h2-responsive">We are professionals</h2>
					    <hr>
					    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis pariatur quod ipsum atque quam dolorem voluptate officia sunt placeat consectetur alias fugit cum praesentium ratione sint mollitia, perferendis natus quaerat!</p>
					    <a href="" class="btn btn-primary">Get it now!</a>
		            </div>
		        </div>
		        <!--/.First row-->
		
		
				<!--Second row-->
				<div id="catalogDiv" class="row">
		        <!--First row-->
		            <div class="col-md-12">
		            	<h2 class="h2-responsive"> Showing Results for cold</h2> 
						<br>				                
					</div>
		
		            <!--Main information-->
		            
		        <!--/.First row-->
				    <!--First columnn-->
				    <div id="catalogCardsDiv" class="col-md-12"></div>
				    <!--First columnn-->				    

					  <button id="submitCatalog" type="button" class="btn btn-primary">Submit</button>
				</div>
				<!--/.Second row-->

		        <!--Third row-->
		        <div id="userDiv" class="row">

		            <div class="col-md-5">
		            
						<div class="form-group">
							<label for="login">Login:</label>
							<input type="text" class="form-control" id="usrLoginId">
						</div>
						<div class="form-group">
							<label for="pwd">Password:</label>
							<input type="password" class="form-control" id="pwd">
						</div> 
						<div class="form-group">
							<label for="name">Name:</label>
							<input type="text" class="form-control" id="name">
						</div>
						<form>
						<div class="form-group">
							<label for="comment">Address:</label>
							<textarea class="form-control" rows="5" id="address"></textarea>
						</div>
						</form>
						<div class="form-group">
							<label for="city">City:</label>
							<input type="text" class="form-control" id="city">
						</div>												
						<div class="form-group">
							<label for="state">State:</label>
							<input type="text" class="form-control" id="state">
						</div>						
						<div class="form-group">
							<label for="zip">Zip:</label>
							<input type="text" class="form-control" id="zip">
						</div>						
						<div class="form-group">
							<label for="country">Country:</label>
							<input type="text" class="form-control" id="country">
						</div>						
						<div class="form-group">
							<label for="card">Credit/Debit Card:</label>
							<input type="text" class="form-control" id="card">
						</div>																														
						<button id="createUser" type="button" class="btn btn-primary">Create User</button>
								            
					</div>
            
		        </div>
		        <!--/.Third row-->	
	
				<!--Fourth row-->
				<div id="cartDiv" class="row">
				    <h2 class="h2-responsive">Catalog</h2>
				    <table class="table table-hover">
					    <thead>
					      <tr>
					        <th>Medicines</th>
					        <th>Count</th>
					        <th>Modify item</th>
					      </tr>
					    </thead>
					    <tbody>
					      <tr>
					        <td>Paracetamol</td>
					        <td>10</td>
					        <td>Edit/Delete</td>
					      </tr>
					      <tr>
					        <td>Solvin Cold Tablet</td>
					        <td>1</td>
					        <td>Edit/Delete</td>
					      </tr>
					      <tr>
					        <td>Corex DX Syrup</td>
					        <td>1</td>
					        <td>Edit/Delete</td>
					      </tr>
					      <tr>
					        <td>Brufen Tablet</td>
					        <td>10</td>
					        <td>Edit/Delete</td>
					      </tr>					      
					    </tbody>
					  </table>
					  <button id="paymentBtn" type="button" class="btn btn-primary">Proceed to Payment</button>
				</div>
				<!--/.Fourth row-->	
	
				<!--Fifth row-->
				<div id="paymentDiv" class="row">
				<!-- <div class="row"> -->
				    <!--First columnn-->
				    <div class="col-md-3">
				        <!--Card-->
				        <div class="card">
				
				            <!--Card image-->
				            <div class="view overlay hm-white-slight">
				                <img src="https://mdbootstrap.com/images/regular/city/img%20(2).jpg" class="img-fluid" alt="">
				                <a href="#">
				                    <div class="mask"></div>
				                </a>
				            </div>
				            <!--/.Card image-->
				
				            <!--Card content-->
				            <div class="card-block">
				                <!--Title-->
				                <h4 class="card-title">Mobile Wallet</h4>
				                <!--Text-->
				                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				                <a href="#" class="btn btn-primary">Select</a>
				            </div>
				            <!--/.Card content-->
				
				        </div>
				        <!--/.Card-->
				    </div>
				    <!--First columnn-->
				
				    <!--Second columnn-->
				    <div class="col-md-3">
				        <!--Card-->
				        <div class="card">
				
				            <!--Card image-->
				            <div class="view overlay hm-white-slight">
				                <img src="https://mdbootstrap.com/images/regular/city/img%20(4).jpg" class="img-fluid" alt="">
				                <a href="#">
				                    <div class="mask"></div>
				                </a>
				            </div>
				            <!--/.Card image-->
				
				            <!--Card content-->
				            <div class="card-block">
				                <!--Title-->
				                <h4 class="card-title">Credit Card</h4>
				                <!--Text-->
				                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				                <a href="#" class="btn btn-primary">Select</a>
				            </div>
				            <!--/.Card content-->
				
				        </div>
				        <!--/.Card-->
				    </div>
				    <!--Second columnn-->
				
				    <!--Third columnn-->
				    <div class="col-md-3">
				        <!--Card-->
				        <div class="card">
				
				            <!--Card image-->
				            <div class="view overlay hm-white-slight">
				                <img src="https://mdbootstrap.com/images/regular/city/img%20(8).jpg" class="img-fluid" alt="">
				                <a href="#">
				                    <div class="mask"></div>
				                </a>
				            </div>
				            <!--/.Card image-->
				
				            <!--Card content-->
				            <div class="card-block">
				                <!--Title-->
				                <h4 class="card-title">Debit Card</h4>
				                <!--Text-->
				                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
				                <a href="#" class="btn btn-primary">Select</a>
				            </div>
				            <!--/.Card content-->
				
				        </div>
				        <!--/.Card-->
				    </div>
				    <!--Third columnn-->
				<!-- </div> -->
				<!--/.Fifth row-->		
		    </div>
		    <!--/.Main layout-->
		
		</main>

		<!--Footer
		<footer class="page-footer blue center-on-small-only">
		
		
		    <div class="container-fluid">
		        <div class="row">
		
		            <div class="col-md-6">
		                <h5 class="title">Footer Content</h5>
		                <p>Here you can use rows and columns here to organize your footer content.</p>
		            </div>
		
		            <div class="col-md-6">
		                <h5 class="title">Links</h5>
		                <ul>
		                    <li><a href="#!">Link 1</a></li>
		                    <li><a href="#!">Link 2</a></li>
		                    <li><a href="#!">Link 3</a></li>
		                    <li><a href="#!">Link 4</a></li>
		                </ul>
		            </div>
		        </div>
		    </div>
		
		    <div class="footer-copyright">
		        <div class="container-fluid">
		            © 2015 Copyright: <a href="https://mdbootstrap.com"> MDBootstrap.com </a>
		
		        </div>
		    </div>
		
		</footer>
		-->
		<!--/.Footer-->
		
		<!-- Local Repository -->
		<!-- jQuery -->
		<script type ="text/javascript" src="resources/javascript/vendor/jquery3/jquery-3.1.1.js"></script>
		<!-- Bootstrap tooltips -->
		<script type ="text/javascript" src="resources/javascript/vendor/bootstrap4/tether.min.js"></script>
		<!-- Bootstrap Core JavaScript -->
		<script type ="text/javascript" src="resources/javascript/vendor/bootstrap4/bootstrap.min.js"></script>	
		<!-- MDB core JavaScript -->
		<script type ="text/javascript" src="resources/javascript/vendor/bootstrap4/mdb.min.js"></script>	
		<!-- Local Repository -->

	<script type ="text/javascript">
	
	$(document).ready(function() {
		console.log("\tdashboard.jsp");
		
		$.ajax({ 
			url : "resources/javascript/system/dashboard.js",
			dataType : "script",
			cache : true		
		}).done(function(){ 
			console.log("inside done....");
			me.dashboard.onload();
		});
		
	});
	
	
	</script>
	</body>

</html>
