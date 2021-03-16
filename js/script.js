
$(document).ready(function () {
    let audio = document.getElementById('audio');
    let audio2 = document.getElementById('audio2');
    let audio3 = document.getElementById('audio3');
    let audio4 = document.getElementById('audio4');
    let isPlay = false ;

    $('.ouPrj__playStopBtn--1').click(function(){

        if (isPlay == false) {
            isPlay = true;
            audio.play() ;
            $('.ouPrj__btnIco--1').addClass('pause');
        }else {
            isPlay = false;
            audio.pause() ;
            $('.ouPrj__btnIco--1').removeClass('pause');
        }
    });

    $('.ouPrj__playStopBtn--2').click(function(){

        if (isPlay == false) {
            isPlay = true;
            audio2.play() ;
            $('.ouPrj__btnIco--2').addClass('pause');
        }else {
            isPlay = false;
            audio2.pause() ;
            $('.ouPrj__btnIco--2').removeClass('pause');
        }
    });
    
    $('.ouPrj__playStopBtn--3').click(function(){

        if (isPlay == false) {
            isPlay = true;
            audio3.play() ;
            $('.ouPrj__btnIco--3').addClass('pause');
        }else {
            isPlay = false;
            audio3.pause() ;
            $('.ouPrj__btnIco--3').removeClass('pause');
        }
    });

    $('.ouPrj__playStopBtn--4').click(function(){

        if (isPlay == false) {
            isPlay = true;
            audio4.play() ;
            $('.ouPrj__btnIco--4').addClass('pause');
        }else {
            isPlay = false;
            audio4.pause() ;
            $('.ouPrj__btnIco--4').removeClass('pause');
        }
    });
 });