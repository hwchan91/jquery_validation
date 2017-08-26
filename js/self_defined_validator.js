$ (function(){
  var validation = {
    check_email: function() {
//      $('#email').blur(function(){
        var email = $('#email').val()
        var email_valid = /.+@.+\..+/.test(email)
        validation.toggleError.call($('#email'), email_valid, "email", "Invalid email");
        if (email_valid) { validation.equal( $('#email'), $('#email_confirm'), "email_confirm", "Email must be equal"); } 
//        });      
    },
    
    check_password: function() {
//      $('#password').blur(function(){
        var pw = $('#password').val()
        var pw_valid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@#$%^&*\.\!]{6,30}$/.test(pw)
        validation.toggleError.call($('#password'), pw_valid, "password", "Password must be within 6-30 characters, contain a small letter, a captial letter, and a number");
        if (pw_valid) { validation.equal( $('#password'), $('#password_confirm'), "password_confirm", "Password must be equal"); } 
//      })
    },
    
    toggleError: function(criteria, name, msg) {
      if (criteria) {
        $(this).removeClass("error").addClass("valid")
				$('#' + name + '_msg').remove()
      } else {
        $(this).addClass("error").removeClass("valid")
        if (!$('#' + name + '_msg').length) {
          $(this).after($('<div class="error" id="' + name + '_msg">' + msg +'</div>'))
        }
      } 
    },
    
    equal: function(elem1, elem2, name, msg) {
//      elem2.blur(function(){
        var input1 = elem1.val(),
            input2 = elem2.val()
        var same_inputs = input1 == input2
        if (input2 != "") {
          validation.toggleError.call(elem2, same_inputs, name, msg);
        }
//      })
    },

    
    submit: function() {
      $('#form').on('submit', function(event){
        event.preventDefault();
	validation.check_all();
	submitted_once = true
	if ($('div').hasClass('error')) {
	  alert("Form has errors");
	} else {
          alert("Form submitted");
	}
      })
    },
    
    require: function(element, name) {
 //     element.blur(function() {
        var empty = element.val() == ""
        validation.toggleError.call(element, !empty, name, "Field is required");      
 //     })
    },

    check_all: function() {
	  validation.require($('#country'), "country");
	  validation.require($('#email_confirm'), "email_confirm");
	  validation.require($('#password_confirm'), "password_confirm");
	  validation.check_email();
	  validation.check_password();
    }

  }


  validation.submit();
  var submitted_once = false;
    $('input').on('focus keydown keyup', function(){
      if (submitted_once) {
        validation.check_all();
      }
    });


})

