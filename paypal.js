paypal.Button.render({

    env: 'sandbox', // sandbox | production

    // PayPal Client IDs - replace with your own
    // Create a PayPal app: https://developer.paypal.com/developer/applications/create
    client: {
        sandbox:    'AZDxjDScFpQtjWTOUtWKbyN_bDt4OgqaF4eYXlewfBP4-8aqX3PiV8e1GWU6liB2CUXlkA59kJXE7M6R',
        production: '<insert production client id>'
    },
    style: {
                     size:   'tiny', // tiny, small, medium
                     color:  'blue', // orange, blue, silver
                     shape:  'pill'    // pill, rect
             },
    // Show the buyer a 'Pay Now' button in the checkout flow
    commit: true,

    // payment() is called when the button is clicked
    payment: function(data, actions) {

        // Make a call to the REST api to create the payment
        return actions.payment.create({
            payment: {
              transactions: [{
              		amount: { total: totalPrice, currency: 'USD' },
              		item_list: {
              			items: paypalformat
              		}
              	}]
            }
        });
    },

    // onAuthorize() is called when the buyer approves the payment
    onAuthorize: function(data, actions) {

        // Make a call to the REST api to execute the payment
        return actions.payment.execute().then(function() {
            window.alert('Payment Complete!');
        });
    }

}, '#checkout');
