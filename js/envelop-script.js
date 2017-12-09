jQuery(document).ready( function($){
/*
    @package envelop Contact Form
*/
    $('.js-close-overlay').on('click', function(e){
        e.preventDefault();
        $('.envelop-loader').addClass('hidden');
    });
    $('#js-envelop-contact').on('submit', function(e){
        e.preventDefault();

        
        
        $('.has-error').removeClass('has-error');
        $('.js-show-feedback').removeClass('js-show-feedback');

        var form = $(this),
                name = form.find('#name').val(),
                email = form.find('#email').val(),
                message = form.find('#message').val();
                //ajaxurl = form.data('url');
                
        if( name === '' ){
            $('#name').parent('.form-group').addClass('has-error');
            return;
        }

        if( email === '' ){
            $('#email').parent('.form-group').addClass('has-error');
            return;
        }

        if( message === '' ){
            $('#message').parent('.form-group').addClass('has-error');
            return;
        }

        
        $('.envelop-loader').addClass('js-show-feedback');
        $('.envelop-loader').removeClass('hidden');

        $.ajax({
            
            url : 'mail.php',
            type : 'post',
            data : {
                
                name : name,
                email : email,
                message : message
                
            },
            error : function( response ){
                setTimeout(function(){
                    $('.js-form-submission').addClass('hidden');
                    $('.js-envelop-contact').removeClass('js-show-feedback');
                    $('.js-form-error').addClass('js-show-feedback');
                    $('.js-form-error').removeClass('hidden');
                    //form.find('input, button, textarea').removeAttr('disabled');
                },1500);
            },
            success : function( response ){
                
                if( response != 1 ){
                    
                    setTimeout(function(){
                        $('.js-form-submission').addClass('hidden');
                        $('.js-envelop-contact').removeClass('js-show-feedback');
                        $('.js-form-error').addClass('js-show-feedback');
                        $('.js-form-error').removeClass('hidden');
                        //form.find('input, button, textarea').removeAttr('disabled');
                    },1500);

                } else {
                    
                    setTimeout(function(){
                        $('.js-form-submission').addClass('hidden');
                        $('.js-envelop-contact').removeClass('js-show-feedback');
                        $('.js-form-success').addClass('js-show-feedback');
                        $('.js-form-success').removeClass('hidden');
                        form.find('input, textarea').val('');
                    },1500);

                }
            }
            
        });
        
    });
});