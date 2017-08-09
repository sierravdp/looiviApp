<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Sign Up</title>
	<!--link rel="stylesheet" type="text/css" href="./css/bootstrap.min.css"-->
	<link href="https://fonts.googleapis.com/css?family=Montserrat:400,700|NutmegThin" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="./css/font-awesome.min.css">
	<link rel="stylesheet" type="text/css" href="./css/animate.css">
	<link rel="stylesheet" type="text/css" href="./css/swiper.min.css">
	<link rel="stylesheet" type="text/css" href="./css/main.css">
</head>
<body onload="onInit();">
	<?php $module = "register"; ?>

	<script>var module = '<?= $module; ?>';</script>
	
	<?php require('./header.php'); ?>

	<div class="row image-bg image-login-bg pt_108 pb_84" style="background-color: white;">
		<form id="register" class="ct-t fadeIn animated">
			<h1 class="ct-t zoomIn animated" >Regístrate</h1>
			<h3 class="ct-t zoomIn animated" >Tu momento es ahora</h3>
			<div class="_form-group content-input fadeInLeft animated">
				<input class="save-input-s" type="text" name="name" data-required-values="required">
				<label class="control-label" for="input">Nombre *</label><i class="bar"></i>
				<span class="_error hide" data-target-s="name"></span>
			</div>
			<div class="_form-group content-input fadeInRight animated">
				<input class="save-input-s" type="text" name="lastname" data-required-values="required">
				<label class="control-label" for="input">Apellido *</label><i class="bar"></i>
				<span class="_error hide" data-target-s="lastname"></span>
			</div>
			<div class="_form-group content-input fadeInLeft animated">
				<input class="save-input-s" type="email" name="email" data-required-values="required">
				<label class="control-label" for="input">Email *</label><i class="bar"></i>
				<span class="_error hide" data-target-s="email"></span>
			</div>
			<div class="_form-group content-input fadeInRight animated">
				<input class="save-input-s" type="password" name="password" data-required-values="required">
				<label class="control-label" for="input">Contraseña *</label><i class="bar"></i>
				<span class="_error hide" data-target-s="password"></span>
			</div>

			<button class="_btn _btn-green ct-t s-animate v_hidden zoomIn animated" style="visibility: visible;">
				<p>
					<a href="#">Registrarse</a>
				</p>
			</button>

		</form>
	</div>
	
	<?php require('./footer.php'); ?>

	<script type="text/javascript" src="./js/jquery-2.1.3.min.js"></script>
	<!--script type="text/javascript" src="./js/bootstrap.min.js"></script-->
	<script type="text/javascript" src="./js/animation.js"></script>
	<script type="text/javascript" src="./js/main.js"></script>
</body>
</html>
