$(function(){
    $('.item__title-trigger').on('click', function(e){
        e.preventDefault();
        
        var item = $(this).closest('.command__item'),
            otherContent=$('.item__content'),
            items=$('.command__item'),
            content = item.find('.item__content'),
            regHieght =item.find('.item__content-left').outerHeight();
            
            if (!item.hasClass('active-trigger')){
                    items.removeClass('active-trigger') ,
                     item.addClass('active-trigger');
                    
                 otherContent.css({
                        'height': 0
                    })          

                content.css({
                    'height' : regHieght

                })
            }else{
                item.removeClass('active-trigger');
                content.css({
                    'height' : 0
                });
            }
    })
});
