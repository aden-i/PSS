
$(document).ready(function () {
    let audio = document.getElementById('audio');
    let isPlay = false ;

    $('.player__btn').click(function(){
        $('.player__innerBtn').css('margin-left:', '20px;' )

        if (isPlay == false) {
            isPlay = true;
            audio.play() ;
        }else {
            isPlay = false;
            audio.pause() ;
        }
    });
 });