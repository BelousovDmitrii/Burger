$(function (){
   $('#order-form').on('submit',function(e){
         e.preventDefault();
            var 
                form = $(this),
                formData= form.serialize();

                $.ajax({
                    url:'mail.php',
                    type:'POST',
                    data: formData,
                       success: function (data){
                            if (data.status) {
                                 $('[data-remodal-id=ok]').remodal().open();
                            } else{
                                 $('[data-remodal-id=error]').remodal().open();
                            }
                }
            });  
       }); 
});