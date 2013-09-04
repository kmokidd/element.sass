var nav = {
    "in": function($self){
        // 导航栏hover上去的时候 上下分界线都要消失
        $self.removeClass("showLine").removeClass("hideLine");
        $self.parent().next().children().removeClass("showLine").removeClass("hideLine");

        if(!$self.hasClass("first"))
            $self.addClass("hideLine");
        $self.parent().next().children().addClass("hideLine");
    },
    "out": function($self){
        if(!$self.hasClass("showLine")){
            if(!$self.parent().hasClass("first"))
                $self.addClass("showLine");
            $self.parent().next().children().addClass("showLine");
        }

        if($self.hasClass("hideLine")){
            $self.parent().removeClass("hideLine");
            $self.parent().next().children().removeClass("hideLine");
        }
    }
}

var operate_select = {
    "substitute": function($select){
        var wrap = $("<div class='dropdown'></div>");
        var list = $("<ul class='dropdown-menu' role='menu' aria-labelledby='dLabel'></ul>");
        $.each($select.children(), function(option_i, option_n){
            var id = $(option_n).val();
            if(option_i==0){
                var button = "<button class='btn dropdown-btn dropdown-toggle' data-toggle='dropdown'>"+
                                $(option_n).html()+"<i class='icon-arrow-down'></i></button>";
                wrap.append(button);
            }
            var li = "<li id='"+id+"'><a href='#'>"+ $(option_n).html()+"</a></li>";
            list.append(li);
        });
        wrap.append(list);
        $select.after(wrap); //替换成div.dropdown
        $select.css("display", "none"); //隐藏select 不可以remove 提交表单时候还要用
    },
    "choose": function($dropdown_li){
        var content = $dropdown_li.text();
        //button显示选中的li的内容
        var btn = $dropdown_li.closest(".dropdown").find("button");
        btn.html(content+"<i class='icon-arrow-down'></i>");

        //被隐藏的select-option设置为selected
        $dropdown_li.closest(".dropdown").prev().val($dropdown_li.attr("id"));
    }
}

$(function(){
    //select-option替换 成div-ul-li
    //替换之后 select隐藏
    //点击dropdown选中的li对应的option也要selected
    var select_num = $('select').length;
    for(var count=0; count<select_num; count++){
        operate_select.substitute($('select').eq(count));
    }
    $('.dropdown-toggle').dropdown(); //显示下拉框
    $(".dropdown").delegate('li', 'click', function(){
        $(this).closest(".dropdown").removeClass("open");
        operate_select.choose($(this));
        return false;
    });

    //导航栏样式处理
    $(".main-nav .second a").hover(function(){
        nav.in($(this));
    }, function(){
        nav.out($(this));
    })
});