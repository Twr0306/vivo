//meishi开始
$(document).ready(function(){
    $(".meishi").click(function(){
        if ($('.meishi22').hasClass('grade-w-roll')) {
            $('.meishi22').removeClass('grade-w-roll');
            $(this).removeClass('current');
            $('.screening').attr('style',' ');
        } else {
            $('.meishi22').addClass('grade-w-roll');
            $(this).addClass('current');
            $(".Regional").removeClass('current');
            $(".Brand").removeClass('current');
            $(".Sort").removeClass('current');
            $('.screening').attr('style','position: fixed;top:0;');
        }
    });
});

$(document).ready(function(){
    $(".meishia-w>li").click(function(){
        $(".meishia-t")
            .css("left","50%")
    });
});

$(document).ready(function(){
    $(".meishia-t>li").click(function(){
        $(".meishia-s")
            .css("left","50%")
    });
});





//Regional开始
$(document).ready(function(){
    $(".Regional").click(function(){
        if ($('.grade-eject').hasClass('grade-w-roll')) {
            $('.grade-eject').removeClass('grade-w-roll');
            $(this).removeClass('current');
            $('.screening').attr('style',' ');
        } else {
            $('.grade-eject').addClass('grade-w-roll');
            $(this).addClass('current');
            $(".meishi").removeClass('current');
            $(".Brand").removeClass('current');
            $(".Sort").removeClass('current');
            $('.screening').attr('style','position: fixed;top:0;');
        }
    });
});

$(document).ready(function(){
    $(".grade-w>li").click(function(){
        $(".grade-t")
            .css("left","50%")
    });
});

$(document).ready(function(){
    $(".grade-t>li").click(function(){
        $(".grade-s")
            .css("left","50%")
    });
});

//Brand开始

$(document).ready(function(){
    $(".Brand").click(function(){
        if ($('.Category-eject').hasClass('grade-w-roll')) {
            $('.Category-eject').removeClass('grade-w-roll');
            $(this).removeClass('current');
            $('.screening').attr('style',' ');
        } else {
            $('.Category-eject').addClass('grade-w-roll');
            $(this).addClass('current');
            $(".meishi").removeClass('current');
            $(".Regional").removeClass('current');
            $(".Sort").removeClass('current');
            $('.screening').attr('style','position: fixed;top:0;');
        }
    });
});



//Sort开始
$(document).ready(function(){
    $(".Sort").click(function(){
        if ($('.Sort-eject').hasClass('grade-w-roll')) {
            $('.Sort-eject').removeClass('grade-w-roll');
            $(this).removeClass('current');
            $('.screening').attr('style',' ');
        } else {
            $('.Sort-eject').addClass('grade-w-roll');
            $(this).addClass('current');
            $(".meishi").removeClass('current');
            $(".Regional").removeClass('current');
            $(".Brand").removeClass('current');
            $('.screening').attr('style','position: fixed;top:0;');
        }
    });
});


//判断页面是否有弹出
$(document).ready(function(){
    $(".meishi").click(function(){
        if ($('.Category-eject').hasClass('grade-w-roll')){
            $('.Category-eject').removeClass('grade-w-roll');
        };
    });
});
$(document).ready(function(){
    $(".meishi").click(function(){
        if ($('.Sort-eject').hasClass('grade-w-roll')){
            $('.Sort-eject').removeClass('grade-w-roll');
        };
    });
});$(document).ready(function(){
    $(".meishi").click(function(){
        if ($('.grade-eject').hasClass('grade-w-roll')){
            $('.grade-eject').removeClass('grade-w-roll');
        };
    });
});






$(document).ready(function(){
    $(".Regional").click(function(){
        if ($('.Category-eject').hasClass('grade-w-roll')){
            $('.Category-eject').removeClass('grade-w-roll');
        };
    });
});
$(document).ready(function(){
    $(".Regional").click(function(){
        if ($('.Sort-eject').hasClass('grade-w-roll')){
            $('.Sort-eject').removeClass('grade-w-roll');
        };
    });
});
$(document).ready(function(){
    $(".Regional").click(function(){
        if ($('.meishi22').hasClass('grade-w-roll')){
            $('.meishi22').removeClass('grade-w-roll');
        };

    });
});





$(document).ready(function(){
    $(".Brand").click(function(){
        if ($('.Sort-eject').hasClass('grade-w-roll')){
            $('.Sort-eject').removeClass('grade-w-roll');
        };
    });
});
$(document).ready(function(){
    $(".Brand").click(function(){
        if ($('.grade-eject').hasClass('grade-w-roll')){
            $('.grade-eject').removeClass('grade-w-roll');
        };
    });
});
$(document).ready(function(){
    $(".Brand").click(function(){
        if ($('.meishi22').hasClass('grade-w-roll')){
            $('.meishi22').removeClass('grade-w-roll');
        };
    });
});

$(document).ready(function(){
    $(".Sort").click(function(){
        if ($('.Category-eject').hasClass('grade-w-roll')){
            $('.Category-eject').removeClass('grade-w-roll');
        };
    });
});
$(document).ready(function(){
    $(".Sort").click(function(){
        if ($('.grade-eject').hasClass('grade-w-roll')){
            $('.grade-eject').removeClass('grade-w-roll');
        };

    });
});
$(document).ready(function(){
    $(".Sort").click(function(){
        if ($('.meishi22').hasClass('grade-w-roll')){
            $('.meishi22').removeClass('grade-w-roll');
        };

    });
});


function grade1(wbj){
    var arr = document.getElementById("gradew").getElementsByTagName("li");
    for (var i = 0; i < arr.length; i++){
        var a = arr[i];
        a.style.background = "";
    };
    wbj.style.background = "#ffb6c1"

}

