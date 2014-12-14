// jQuery Sliding Menu 0.1
// ------------------------------------------------------------------------
//
// Desarrollado por Jimmy Miller
// http://www.jotamiller.cl
//
// ------------------------------------------------------------------------

(function ($) {
    'use strict';
    $.fn.extend({
        sliding_menu_js: function (opciones) {

            // Configuración Base por defecto
            var config = {
                header_title: false,
                header_logo: false,
                toggle_button: true,
                transitionSpeed: 0.5,
                easing: 'ease'
            };

            if (opciones) {
                jQuery.extend(config, opciones);
            }

            // Se agregan elementos básicos
            $('<div/>', { id: 'sliding_menu_js_btn'}).appendTo('body');

            $('<div/>', { id: 'sliding_menu_js', class: 'cerrado' }).appendTo('body');

            $('<div/>', { class: 'header' }).appendTo('#sliding_menu_js');

            $('<ul/>').appendTo('#sliding_menu_js');

            $('<div/>', { id: 'sliding_menu_js_over' }).appendTo('body');


            // Se agrega un padding top para mostrar todo el contenido del sitio
            $('body').css('padding-top', '60px');

            // Se copia el menu original
            $('#sliding_menu_js ul').append($(this).html());

            // Se eliminan elementos innecesarios
            $('.divider').remove();
            $('#sliding_menu_js ul').removeClass();
            $('#sliding_menu_js ul li').removeClass();
            $('#sliding_menu_js ul li a').removeClass();

            // Titulo
            if (config.header_title) {
                $('#sliding_menu_js .header').prepend("<h3>" + config.header_title + "</h3>");
                $('#sliding_menu_js_btn').append("<h3>" + config.header_title + "</h3>");
            }

            // Logo
            if (config.header_logo) {
                $('#sliding_menu_js .header').prepend("<img src='" + config.header_logo + "' />");
            }

            // Transición
            $('#sliding_menu_js').css('transition', 'left ' + config.transitionSpeed + 's ' + config.easing);


            $('#sliding_menu_js_btn').click(function () {
                toggle();
            });

            $('#sliding_menu_js_over').click(function () {
                ocultar();
            });

            // Al presionar cualquier enlace dentro del menu
            $('#sliding_menu_js ul li a').click(function () {
                // ocultar();
            });

            // Muestra/Oculta el panel
            function toggle (){
                if ( $('#sliding_menu_js').hasClass('open') ) {
                    ocultar();
                } else {
                    mostrar();
                }
            }

            // Muestra la barra lateral
            function mostrar(){
                if ( $('#sliding_menu_js').hasClass('cerrado') ) {
                    $('#sliding_menu_js').css('left','0px');
                    $('#sliding_menu_js').removeClass('cerrado');
                    $('#sliding_menu_js').addClass('open');
                    $('#sliding_menu_js_over').show();
                };
            }

            // Oculta la barra lateral
            function ocultar(){
                if ( $('#sliding_menu_js').hasClass('open') ) {
                    $('#sliding_menu_js').css('left','-300px');
                    $('#sliding_menu_js').removeClass('open')
                    $('#sliding_menu_js').addClass('cerrado')
                    $('#sliding_menu_js_over').hide();
                };
            }
        }
    })
})(jQuery)