<template>
  <div class="faq-container">
    <h1>Frequently Asked Questions</h1>

    <div v-for="(item, index) in faqItems" :key="index" class="faq-item">
      <button @click="toggleAnswer(index)" class="question">{{ item.question }}</button>
      <p v-show="item.showAnswer" class="answer">{{ item.answer }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      faqItems: [
        {
          question: "What makes [Your Online Store Name] unique?",
          answer: "At [Your Online Store Name], we pride ourselves on offering a curated selection of cutting-edge tech products coupled with unparalleled customer service.",
          showAnswer: false
        },
        {
          question: "How can I contact customer support?",
          answer: "You can reach our customer support team via email at your@email.com or by phone at +123456789.",
          showAnswer: false
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. Additionally, we offer the convenience of PayPal for secure transactions.",
          showAnswer: false
        },
        {
          question: "Do you offer international shipping?",
          answer: "Yes, we do! We ship to select international destinations. Shipping costs and delivery times may vary depending on your location. Please note that additional customs fees and duties may apply.",
          showAnswer: false
        },
        {
          question: "What is your return policy?",
          answer: "We want you to be completely satisfied with your purchase. If for any reason you're not happy with your order, you can return it within [number of days] days for a full refund or exchange. Please refer to our Returns & Exchanges page for more information on the process.",
          showAnswer: false
        },
        {
          question: "Are your products covered by a warranty?",
          answer: "Absolutely! Most of our products come with a manufacturer's warranty to ensure your peace of mind. The duration and terms of the warranty may vary depending on the product. Please refer to the product description or contact our customer support team for more information.",
          showAnswer: false
        },
        {
          question: "How do I track my order?",
          answer: "Once your order has been processed and shipped, you will receive a tracking number via email. You can use this tracking number to monitor the status and whereabouts of your package. If you encounter any issues with tracking your order, feel free to reach out to our customer support team for assistance.",
          showAnswer: false
        },
        {
          question: "Can I cancel or modify my order after it's been placed?",
          answer: "We understand that circumstances may change. If you need to cancel or modify your order, please contact us as soon as possible. We'll do our best to accommodate your request, but please note that orders are typically processed and shipped promptly to ensure timely delivery.",
          showAnswer: false
        },
        {
          question: "Do you offer bulk or corporate discounts?",
          answer: "Yes, we do offer discounts for bulk orders and corporate purchases. Please reach out to our sales team at sales@email.com for more information on pricing and availability.",
          showAnswer: false
        },
        {
          question: "How can I stay updated on new product releases and promotions?",
          answer: "Stay in the loop by subscribing to our newsletter! Simply enter your email address in the signup form at the bottom of our website to receive exclusive updates on new arrivals, special offers, and more.",
          showAnswer: false
        },
      ]
    };
  },
  methods: {
    toggleAnswer(index) {
      this.faqItems[index].showAnswer = !this.faqItems[index].showAnswer;
    }
  }
};
</script>

<style scoped>
.faq-container {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}


h1 {
  margin-top: 0.5rem;
  text-align: center;
  background: -webkit-linear-gradient(0.8turn, #004aad, #cb6ce6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.faq-item {
  margin-bottom: 20px;
}

.question {
  cursor: pointer;
  font-size: 18px;
  color: #333;
  border: none;
  background: none;
  outline: none;
  width: 100%;
  text-align: left;
}

.answer {
  padding-left: 20px;
  border-left: 2px solid #007bff;
}

@media screen and (max-width: 600px) {
  .faq-container {
    padding: 10px;
  }
}
</style>
