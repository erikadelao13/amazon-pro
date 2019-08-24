let stripe = Stripe('pk_test_f7QNo0sarQxIa0OpxPeh6XSl00aBEm5CSL');

let elements = stripe.elements();

var style = {
  base: {
    color: '#000',
    fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
    fontSmoothing: 'antialiased',
    fontSize: '20px',
    iconColor: '#000',
    '::placeholder': {
      color: '#222222'
    }
    
  },
  invalid: {
    color: '#fa755a',
    iconColor: '#fa755a'
  }
};

// Create an instance of the card Element.
var card = elements.create('card', {style: style});

// Add an instance of the card Element into the `card-element` <div>.
card.mount('#card-element');

var form = document.getElementById('payment-form');
form.addEventListener('submit', function(event) {
  event.preventDefault();

  stripe.createToken(card).then(function(result) {
    console.log(result.token.id)
    alert(result.token.id)
  });
});