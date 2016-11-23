$(function () {

    $(".js-show-other-options").click(function() {
      $('.show-more-options').hide();
      $('.client-only-table').show();
    });

    $(".js-download-windows").click(function() {
      $('.download-platform-windows-options').show();
    });

    $(".js-download-linux").click(function() {
      $('.download-platform-linux-options').show();
    });

    $(".js-download-mac").click(function() {
      $('.download-platform-mac-options').show();
    });

    // var OSName="Unknown OS";
    // if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
    // else if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
    // else if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
    // else if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";

    // setTimeout(function(){
    //     $('.js-bottom-notice').addClass('bottom0');
    // }, 350);
    // switch(OSName){
    //     case "MacOS":
    //         $('.js-os-type').html("Mac"); 
    //         $('.js-file-url').attr('src','https://github.com/OpenBazaar/OpenBazaar-Installer/releases/download/v1.1.5/OpenBazaar-1.1.5.dmg');
    //         break;
    //     case "Windows":
    //         // if 64-bit
    //         if (navigator.userAgent.indexOf("WOW64") != -1 || navigator.userAgent.indexOf("Win64") != -1 ){
    //             $('.js-os-type').html("Windows(64-bit"); 
    //             $('.js-file-url').attr('src','https://github.com/OpenBazaar/OpenBazaar-Installer/releases/download/v1.1.5/OpenBazaar-1.1.5_Setup_x64.exe');
    //         }else{
    //             $('.js-os-type').html("Windows(32-bit"); 
    //             $('.js-file-url').attr('src','https://github.com/OpenBazaar/OpenBazaar-Installer/releases/download/v1.1.5/OpenBazaar-1.1.5_Setup_i386.exe');
    //         }
    //         break;
    //     default: 
    //         $('.js-download-message').html('Choose an operating system below');
    //         break;
    // }
});