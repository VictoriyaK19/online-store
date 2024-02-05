<template>
<footer class="footer">
	<div class="footer__redes">
		<ul class="footer__redes-wrapper">
			<li>
				<a href="#" class="footer__link">
					<font-awesome-icon icon="facebook-f" />
					facebook
				</a>
			</li>
			<li>
				<a href="#" class="footer__link">
					
					instagram
				</a>
			</li>
			<li>
				<a href="#" class="footer__link">
					
					youtube
				</a>
			</li>
		</ul>
	</div>
	<div class="separador"></div>
	<p class="footer__texto">Copyright @ 2024</p>
</footer>
</template>

<script>
</script>

<style scoped>
.footer {
  color: #fff; 
  padding: 20px; 
}

.footer__redes-wrapper {
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
}

.footer__redes-wrapper li {
  margin: 0 10px; 
}

.footer__link {
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: color 0.3s; 
}

.footer__link:hover {
    text-shadow: 0 0 15px rgba(255, 255, 255, 0.9); 
}



.separador {
  border-left: 1px solid #fff; 
  margin: 0 20px; 
}

.footer__texto {
  text-align: center; 
  margin-top: 20px; 
}
.footer__texto::before {
  content: '';
  display: block;
  width: 40px; 
  height: 2px; 
  background-color: #fff; 
  margin: 0 auto; 
  margin-top: 2rem;
  margin-bottom: 2rem; 
  box-shadow: 0 2px 5px rgba(255, 255, 255, 5);
}
</style>