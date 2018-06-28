$(function(){
    var sections=$('.section'),
        display=$('.main__content-wrapper'),
        inScroll=false,
        screen=0;
    
    var scrollToSection = function (sectionEq) {
        var position;
        
        position=(sections.eq(sectionEq).index() * -100) + '%';
        
        sections.eq(sectionEq).addClass('active')
        .siblings()
        .removeClass('active');
        
        display.css({
            'transform' : 'translate3d(0,' + position + ', 0 )'
        })
        
        setTimeout(function () {
            inScroll = false;
            
            $('.fixed-menu__item').eq(sectionEq)
            .addClass('active')
            .siblings()
            .removeClass('active')
            
        },1300);
    }
    
    
  $(document).on('wheel',function(e){
    var deltaY=e.originalEvent.deltaY;  
      var activeSection = sections.filter('.active');
      var nextSection = activeSection.next();
      var prevSection = activeSection.prev();
      var regSection;
      
      if(inScroll) return;
      
      inScroll = true;
      
      if(deltaY > 0){
          if(activeSection.next().length){
              screen= nextSection.index();
          }
        }
          
      
      
      if(deltaY < 0) {
           if(activeSection.prev().length){
              screen=prevSection.index();
          }
          
      }
           scrollToSection(screen);      
    });
    $('.scroll__down').on('click',function(e){
       e.preventDefault(); 
        scrollToSection(1);
        
    });
    
    $('.fixed-menu__link, .header__buy,.burger__buy,.list__item-link').on('click',function(e){
       e.preventDefault(); 
        var href=parseInt($(this).attr('href'));
        scrollToSection(href);
        
    });
    
    $(document).on('keydown', function(e){
        
    var activeSection = sections.filter('.active');
        if($(e.target).is('textarea')) return;
        if($(e.target).is('input')) return;
       switch (e.keyCode){
           case 38: 
               if (activeSection.prev().length){
                   screen = activeSection.prev().index();
               }
               break;
               
           case 40: 
               if (activeSection.next().length){
                   screen = activeSection.next().index();
               }
               break;
       }
        scrollToSection(screen);
    });
});

            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            