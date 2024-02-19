<template>
  <div class="my-profile background">
    <h2>My Profile</h2>
    <div class="profile-info">

      <div class="details">
        <p><strong>Name:</strong> {{ user.firstName }} {{ user.lastName }}</p>
        <p><strong>Email:</strong> {{ user.email }}</p>
        <p><strong>Address:</strong> {{ user.address }}</p>
        <!-- Additional user details can be displayed here -->
      </div>
    </div>
    <div class="orders">
      <h3>My Orders</h3>
      <ul>
        <li v-for="order in orders" :key="order.id">
          <p><strong>Order ID:</strong> {{ order.id }}</p>
          <p><strong>Date:</strong> {{ order.date }}</p>
          <p><strong>Total:</strong> ${{ order.total }}</p>
          <!-- Additional order details can be displayed here -->
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@example.com',
        avatar: 'path/to/avatar.jpg',
        address: '123 Main St, Anytown, USA',
        // Add more user details as needed
      },
      orders: [
        {
          id: 1,
          date: '2024-02-18',
          total: 50.00,
          // Add more order details as needed
        },
        {
          id: 2,
          date: '2024-02-16',
          total: 75.00,
          // Add more order details as needed
        },
        // Add more orders as needed
      ],
    };
  },
};
</script>

<style scoped>
.my-profile {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}


.details p {
  margin: 5px 0;
}

.orders {
  margin-top: 20px;
}

.orders li {
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  margin-bottom: 10px;
}

.orders li:last-child {
  border-bottom: none;
}
</style>