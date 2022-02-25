$( document ).ready(function() {
    
    // Parallax
    
    // Para carregar primeiro as imagens:
    
    setTimeout(function() {
        $('#rating-area').parallax({imageSrc: 'img/Avaliacao.png'});
    }, 200);
    
    // Scroll para as seções
    
    let navBtn = $('.nav-item');
    let aboutSection = $('#about-area');
    let ratingSection = $('#rating-area');
    let gallerySection = $('#gallery-area');
    let storeSection = $('#store-area');
    let scrollTo = '';
    
    $(navBtn).click(function() {
        
        let btnId = $(this).attr('id');
        
        if(btnId == 'about-menu') {
            scrollTo = aboutSection;
        } else if(btnId == 'rating-menu') {
            scrollTo = ratingSection;
        } else if(btnId == 'gallery-menu') {
            scrollTo = gallerySection;
        } else if(btnId == 'store-menu') {
            scrollTo = storeSection;
        } else {
            scrollTo = bannerSection;
        }
        
        $([document.documentElement, document.body]).animate({
            scrollTop: $(scrollTo).offset().top - 70
        }, 1500);
    });
    
});