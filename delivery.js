$(document).ready(function() {
    // When the form is submitted
    $('#delivery-form').submit(function(e) {
        e.preventDefault();  // Prevent the default form submission behavior

        // Get form data
        var formData = {
            name: $('#name').val(),
            address: $('#address').val(),
            phone: $('#phone').val(),
            product: $('#product').val()
        };

        // Validate the form (just an example of simple validation)
        if (!formData.name || !formData.address || !formData.phone || !formData.product) {
            $('#response-message').html('<p style="color: red;">All fields are required!</p>');
            return;
        }

        // AJAX request to submit the form data (empty URL for mock backend)
        $.ajax({
            url: '', // Empty URL simulates no backend or mock backend
            type: 'POST',
            data: formData,
            success: function(response) {
                // Handle the success response
                $('#response-message').html('<p style="color: green;">Thank you for submitting your delivery request!</p>');
                $('#delivery-form')[0].reset();  // Reset the form
            },
            error: function() {
                // Handle error response
                $('#response-message').html('<p style="color: red;">There was an error with your request. Please try again later.</p>');
            }
        });
    });
});
