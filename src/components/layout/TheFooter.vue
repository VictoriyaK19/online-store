<template>
<footer class="footer">
	<div class="footer__redes">
		<ul class="footer__redes-wrapper">
			<li>
				<a href="#" class="footer__link">
					<i class="fab fa-facebook-f"></i>
					facebook
				</a>
			</li>
			<li>
				<a href="#" class="footer__link">
					<i class="fab fa-twitter"></i>
					twitter
				</a>
			</li>
			<li>
				<a href="#" class="footer__link">
					<i class="fab fa-instagram"></i>
					instagram
				</a>
			</li>
			<li>
				<a href="#" class="footer__link">
					<i class="fab fa-youtube"></i>
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
  color: #fff; /* Light text color */
  padding: 20px; /* Padding around the footer content */
}

.footer__redes-wrapper {
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
}

.footer__redes-wrapper li {
  margin: 0 10px; /* Spacing between social media links */
}

.footer__link {
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;
  transition: color 0.3s; /* Remove transition for color */
    margin-bottom: 1rem;
}

.footer__link:hover {
    text-shadow: 0 0 15px rgba(255, 255, 255, 0.9); /* Apply the shine animation on hover */
}



.separador {
  border-left: 1px solid #fff; /* White color vertical separator */
  margin: 0 20px; /* Spacing around separator */
}

.footer__texto {
  text-align: center; /* Centered text */
  margin-top: 20px; /* Spacing from separator */
}

</style>