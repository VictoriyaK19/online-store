<template>
  <div class="background">
    <div class="images">
      <img src="../assets/about_us/tech.jpg" alt="" />
      <img src="../assets/about_us/tech2.jpg" alt="" />
      <img src="../assets/about_us/tech3.jpg" alt="" />
    </div>
    <div class="content">
      <p>
        "Welcome to [Your Online Store Name], Where Tech Meets Innovation At
        [Your Online Store Name], we're not just about selling products; we're
        about crafting experiences. Our passion for technology and innovation
        drives everything we do. We believe that technology should be more than
        just functional - it should be seamlessly integrated into your life,
        enhancing it in ways you never thought possible. Our online store is
        more than just a place to shop; it's a gateway to a world of
        possibilities. From cutting-edge gadgets to revolutionary smart home
        solutions, we curate a selection of products that embody the latest
        trends and advancements in technology. But we're more than just a
        retailer. We're a community of tech enthusiasts, always eager to share
        our knowledge and expertise. Whether you're a seasoned tech aficionado
        or a curious beginner, you'll find resources and support to help you
        navigate the ever-evolving world of technology. At [Your Online Store
        Name], customer satisfaction is not just a goal; it's a standard we
        strive to exceed every day. Our dedicated team is committed to providing
        you with personalized service and support, ensuring that your shopping
        experience is nothing short of exceptional. So come join us on this
        journey into the future of technology. Whether you're upgrading your
        devices, outfitting your smart home, or simply exploring the latest
        innovations, [Your Online Store Name] is your destination for all things
        tech. Experience the future today at [Your Online Store Name]."
      </p>
    </div>
  </div>
</template>

<style scoped>
  .background {
    display: flex;
    justify-content: center;
    align-items: flex-start; /* Align items flex-start to prevent the images from stretching the container */
    padding: 20px;
    position: relative; /* Set position relative for the background container */
  }

  .images {
    margin: 2rem;
    width: 18rem; /* Set a specific width for the images container */
    position: absolute; /* Set position absolute for the images container */
    top: 0; /* Position from the top edge of the background container */
    left: 0; /* Position from the left edge of the background container */
    padding-right: 20px; /* Add some padding to the right to create space for the images */
  }

  .images img {
    width: 100%; /* Make images fill their container */
    height: auto; /* Maintain aspect ratio */
    border-radius: 10px; /* Add border radius for rounded corners */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */
    transition: transform 0.3s ease; /* Add transition for smooth hover effect */
  }

  .images img:hover {
    transform: scale(1.05); /* Add a slight scale effect on hover */
  }

  .content {
    max-width: 800px;
    text-align: center;
  }

  p {
    font-family: 'Arial', sans-serif;
    font-size: 18px;
    line-height: 1.6;
    color: #03459a;
  }

  @media screen and (max-width: 768px) {
    .content {
      padding: 0 20px;
    }
  }
</style>

