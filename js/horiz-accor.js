$(function(){
    $('.menu__item-trigger').on('click', function(e){
        e.preventDefault();
        
        var item = $(this).closest('.menu__item'),
            otherContent=$('.menu__item-content-wrapper'),
            items=$('.menu__item'),
            content = item.find('.menu__item-content-wrapper'),
            regWidth =item.find('.menu-item__content').outerWidth();
            
            if (!item.hasClass('active-hor-acco')){
                    items.removeClass('active-hor-acco') ,
                     item.addClass('active-hor-acco');
                    
                 otherContent.css({
                        'width': 0
                    })          

                content.css({
                    'width' : regWidth

                })
            }else{
                item.removeClass('active-hor-acco');
                content.css({
                    'width' : 0
                });
            }
            
           
            
    })
});