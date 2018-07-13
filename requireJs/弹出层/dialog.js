/**
 * Created by 洋 on 2018/7/12.
 */
define(['jquery-1.12.4'],function () {
    var dialog = {
        open:function (arg) {
            defaultArg = {
                width: 300,
                height: 220
            };
            var options = $.extend(defaultArg, arg);
            this.$mask = $('<div class="mask"></div>');
            this.$content = $('<div class="content"></div>').css({
                width: options.width,
                height: options.height
            });
            this.$title = $('<div class="title"></div>');
            this.$txt = $('<span class="txt">登录</span>').html(options.title);
            this.$close = $('<span class="close">x</span>').on('click', function () {
                $('.mask,.content').remove();
            });
            this.$body = $('<div class="body">...</div>').load(options.content);
            this.$mask.append(this.$content);
            this.$content.append(this.$title).append(this.$body);
            this.$title.append(this.$txt).append(this.$close);
            $('body').append(this.$mask);
        },
        //     var html = '<div class="mask"></div>'
        //                     +'<div class="content">'
        //                         +'<div class="title">'
        //                             +'<span class="txt">登录</span>'
        //                             +'<span class="close">x</span>'
        //                         +'</div>'
        //                     +'<div class="body">...</div>'
        //                 +'</div>';
        //
        //     $('body').append(html);
        //     $('.content').css({
        //         width:options.width,
        //         height:options.height
        //     });
        //     $('.txt').html(options.title);
        //     $('.body').load(options.content);
        //     $('.close').on('click',function () {
        //         $('.mask,.content').remove();
        //     })
        //
        //
        close:function () {
            this.$close;
        }
    };
    return dialog;
});