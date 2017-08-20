$(document).ready(function () {
    $("#form").validate({
        rules: {
            "email": {
                required: true,
                email: true
            },
            "email_confirm": {
                required: true,
                email: true,
                equalTo: "#email"
            },
            "country": {
            		required: true
            },
            "password": {
                required: true,
                minlength: 6,
                pwcheck: true
            },
            "password_confirm": {
                required: true,
                equalTo: "#password"
            }
        },
        messages: {
            "email": {
                required: "Please enter an email",
                email: "Email is invalid"
            },
            "email_confirm": {
                required: "Please enter an email",
                email: "Email is invalid",
                equalTo: "Email is different"
            },
            "password": {
                pwcheck: "Password must contain a lowercase letter and a digit"
            }
        },
        highlight: function(element, errorClass, validClass) {
            $(element).addClass(errorClass).removeClass(validClass);
            $(element.form).find("label[for=" + element.id + "]")
              .addClass(errorClass);
          },
          unhighlight: function(element, errorClass, validClass) {
            $(element).removeClass(errorClass).addClass(validClass);
            $(element.form).find("label[for=" + element.id + "]")
              .removeClass(errorClass);
        },
        errorElement: "div",
        errorClass: "error",
        errorPlacement: function (error, element) {
            //error.appendTo($('#form').find("label[for=" + element.id + "]"));
            error.insertAfter($(element).prev())
        },

        submitHandler: function (form) { // for demo
            alert('valid form submitted'); // for demo
            return false; // for demo; otherwise: form.submit()
        }
    });
    
    $.validator.addMethod("pwcheck", function(value) {
       return /^[A-Za-z0-9\d=!\-@._*]*$/.test(value) // consists of only these
       && /[a-z]/.test(value) // has a lowercase letter
       && /\d/.test(value) // has a digit
    });

});