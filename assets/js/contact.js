  $('#contact_form').submit(function(e){
      e.preventDefault();
      var isValid = true;
      if(!$('#first_name').val()){
        $('#first_name_div').addClass('has-error');
        isValid = false;
      }
      else{
        $('#first_name_div').removeClass('has-error');
        $('#first_name_div').addClass('has-success');
      }
      if(!$('#last_name').val()){
        $('#last_name_div').addClass('has-error');
        isValid = false;
      }
      else{
        $('#last_name_div').removeClass('has-error');
        $('#last_name_div').addClass('has-success');
      }
      if(! isValidEmailAddress($('#email').val())){
        $('#email_div').addClass('has-error');
        isValid = false;
      }
      else{
        $('#email_div').removeClass('has-error');
        $('#email_div').addClass('has-success');
      }
      // if(!$('#phone').val()){

      //   $('#phone_div').addClass('has-error');
      //   isValid = false;
      // }
      // else{
      //   $('#phone_div').removeClass('has-error');
      //   $('#phone_div').addClass('has-success');
      // }
      if(!$('#comment').val()){

        $('#comment_div').addClass('has-error');
        isValid = false;
      }
      else{
        $('#comment_div').removeClass('has-error');
        $('#comment_div').addClass('has-success');
      }
      if(!isValid){
        return;
      }
      this.submit();
      

  });

  function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
};