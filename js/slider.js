$(function(){
    var moveSlide = function(container,slideNum){
        
            var 
                items=container.find('.burgers__item'),
                activeSlide=items.filter('.active__slider'),
                regItem=items.eq(slideNum),
                 regIndex=regItem.index(),
                list=container.find('.burgers__list'),
                duration=500;

            if (regItem.length){
                     list.animate({
                    'left' : -regIndex * 100 + '%'
                }, duration,function(){
                    activeSlide.removeClass('active__slider');
                    regItem.addClass('active__slider');
                });
             }
        }
     $('.slider__right').on('click', function(e){
            e.preventDefault();
        
            var $this =$(this),
                container=$this.closest('.burger__slider-wrapper'),
                items=container.find('.burgers__item',container),
                activeItem=items.filter('.active__slider'),
                nextItem=activeItem.next();
              
            if(nextItem.length) {
                 moveSlide(container,nextItem.index());
            }else{
                 moveSlide(container,items.first().index());
            }
         
           
         
         
        });
    
      $('.slider__left').on('click', function(e){
            e.preventDefault();
        
            var $this =$(this),
                container=$this.closest('.burger__slider-wrapper'),
                items=container.find('.burgers__item',container),
                activeItem=items.filter('.active__slider'),
                 prevItem =activeItem.prev();
            
           if(prevItem.length) {
                 moveSlide(container,prevItem.index());
            }else{
                 moveSlide(container,items.last().index());
            }
           
         
        });
        
});



       
        
   
    
    
    



