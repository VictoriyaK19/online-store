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
    align-items: flex-start; 
    position: relative; 
  }

  .images {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    margin-right: 20px;
    width: 50%;
  }

  .images img {
    position: absolute;
    width: calc(50% - 10px);
    margin-bottom: 20px;
    border-radius: 10px; 
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease; 
  }
  .images img:hover {
    transform: scale(1.05); 
  }
  
  .images img:nth-child(2) {
    position: absolute;
    top: 1rem;
    left: 1rem;
    }

  .content {
    max-width: 50%; /* Set max-width to 50% */
    text-align: center; /* Align text to the left */
  }

  p {
    font-family: 'Arial', sans-serif;
    font-size: 18px;
    line-height: 1.6;
    color: #03459a;
    padding: 0 20px; /* Add padding for spacing */
  }

  @media screen and (max-width: 768px) {
    .background {
      flex-direction: column; /* Stack items vertically on smaller screens */
      align-items: center; /* Center align items */
    }
    .content {
      
    max-width: 100%;
    text-align: center; 
  }

    .images {
      width: 15rem; /* Set width to 100% on smaller screens */
      margin: 0; /* Remove margin for full width */
    }

    .images img {
      width: calc(100% - 30px); /* Set image width to 100% of the container minus margin */
    }

    .images img:nth-child(2) {
    }

    .images img:nth-child(3) {
    }
  }
</style>
