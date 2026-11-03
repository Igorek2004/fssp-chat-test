(function ($) {
	window.mobileAndTabletCheck = function() {
		let check = false;
	    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
		return check;
	};
    var settings = {
        /* Общие настройки */
        windowPlase: 'right',       // right, left - положение окна чата
        windowResizable: true,      // true, false - позволять измениять размер окна чата по вертикали? (если false - подключить jquery-ui не нужно)
        openSpeed: 400,             // milliseconds - скорость открытия (всплывания) окна чата
        modPath: '/media/fssp/chat77/',          // (path) - путь до файлов (/ - если файлы располагаются в корне /folder/ - если в папке folder и т.д.)
        autoShowInterval: false,    // false или milliseconds - время, через которое чат раскроется сам
        openFirst: 'form',          // chat, form - что позывать перым при раскрытии? Чат или форму

        /* Что подключаем */
        showWidgetBtn: true,        // true, false (boolean) - показывать виджет кнопок?
        showWidgetChat: true,       // true, false (boolean) - показывать виджет Чата?
        showWidgetForm: false,       // true, false (boolean) - показывать виджет Формы?
        showWidgetCall: true,       // true, false (boolean) - показывать виджет Звонка?

        /* Названия */
        chatName: 'Онлайн-чат',     // (string) - название виджета Чата
        formName: 'Обратный вызов',	// (string) - название виджета Формы
        callName: 'Позвонить в ЦТО',  // (string) - название виджета Звонка

        /* Внешний вид */
        bgColor: 'blue',            // blue, red, green, grey - цвет Чата
        bgAlterColor: false,        // #343434 (hex) - альтернативный цвет чата 
        iconColor: 'white',         // white, black - цвет шрифтов и иконок

        /* Настройки формы */
        formInputName: 'Ваше имя',  // string or false - название поля ввода Имени (false - не показывать)
        formInputPhone: 'Телефон',  // string - название поля ввода Телефона
        formBtnName: 'Жду звонка',  // string - название кнопки отправки формы
        formText: 'Здравствуйте!<br>Хотите мы перезвоним Вам?', // string - текст сообщения
        formSuccess: 'Ваша заявка принята!', // string - текст при успешной отправке формы
        formUrl: '//infinity.fssp.gov.ru:34444/data/scenario/?ScenarioName=callback', // string - адрес отправки
        timeFrom: false,                // int or false - перезвонить С
        timeTo: false,                 // int or false - перезвонить До
        formPhoneMask: '+7 (000) 000-00-00' , // string или false - маска телефона (если false - проверка отключена и подключать jquery.mask не нужно)

        /* Настройки Звонка с сайта */
        callHost: 'infinity.fssp.gov.ru',
        callPort: 35063,
        callSecure: true,
        callFrom: '9000000001',
        callTo: '9901090',
        callPass: 'P@$$w0rd',
        callTimeout: 15000,
        callFinish: 'Завершить звонок',// (string)
        callIsMobile: mobileAndTabletCheck(), // проверка на мобильность устройства

        /* Настройки времени */
        timeOffset: 3,              // int - смещение времени
        timeWorkChatFrom: false,    // int or false - показывать чат С
        timeWorkChatTo: false,      // int or false - показывать чат До
        timeWorkFormFrom: false,    // int or false - показывать форму С
        timeWorkFormTo: false,      // int or false - показывать форму До
        timeWorkCallFrom: false,    // int or false - показывать звонок С
        timeWorkCallTo: false,      // int or false - показывать звонок До
    };

    var elems = {
        widgetWindow: null,
        widgetChat: null,
        widgetForm: null,
        widgetBtn: null,
        headBtns: null,
        sendForm: null
    }

    var isOpenedWindow = false;
    var animateTimeOut = false;
    var windowStandartHeight = 0;

    var methods = {
        init: function(options)
        {
            console.log(document)
            settings = $.extend(settings, options);

            methods.checkTime();

            if (settings.showWidgetChat || settings.showWidgetForm)
            {
                methods.buildWidgetWindow();

                methods.actionWindow();

                if (settings.autoShowInterval)
                {
                    methods.openWindowAuto();
                }
            }

            if (settings.showWidgetChat)
            {
                methods.buildWidgetChat();
            }

            if (settings.showWidgetForm)
            {
                methods.buildWidgetForm();

                methods.actionForm();
            }

            if (settings.showWidgetBtn)
            {
                methods.buildWidgetBtn();

                methods.setCountWidgetBtn();

                methods.animateWidgetBtn();

                methods.actionWidgetBtn();
            }
            else
            {
                windowStandartHeight = 40;

                elems.widgetWindow.css('height', windowStandartHeight + 'px');
            }

            methods.setBgColor();

            methods.actionBtns();
        },
        // Проверка времени
        checkTime: function()
        {
            var now = new Date();

            now = now.getHours() + (now.getTimezoneOffset() / 60);

            if (settings.timeWorkChatFrom && settings.timeWorkChatTo)
            {
                if (settings.timeWorkChatFrom - settings.timeOffset > now || settings.timeWorkChatTo - settings.timeOffset <= now)
                {
                    settings.showWidgetChat = false;
                }
            }

            if (settings.timeWorkFormFrom && settings.timeWorkFormTo)
            {
                if (settings.timeWorkFormFrom - settings.timeOffset > now || settings.timeWorkFormTo - settings.timeOffset <= now)
                {
                    settings.showWidgetForm = false;
                }
            }

            if (settings.timeWorkCallFrom && settings.timeWorkCallTo)
            {
                if (settings.timeWorkCallFrom - settings.timeOffset > now || settings.timeWorkCallTo - settings.timeOffset <= now)
                {
                    settings.showWidgetCall = false;
                }
            }
        },
        // Добавление общего окна чата и формы
        buildWidgetWindow: function()
        {
            var html = "" + 
            "<div id='it-widget-window' class='it-widget it-widget_" + settings.windowPlase + "'>" + 
            "	<div class='it-widget__head it-widget__head_" + settings.iconColor + "'>" + 
            "		<div class='it-widget__head-open' data-open='" + settings.openFirst + "'></div>" + 
            "		<div class='it-widget__head-title'>" + settings[settings.openFirst + 'Name'] +  "</div>" + 
            "		<div class='it-widget__head-btns' id='id-head-btns'>";

            // Добавление кнопки чата
            if (settings.showWidgetChat)
            {
                html = html + 
            "        <a href='javascript:;' class='it-widget__head-btn it-btn-open-chat' title='" + settings.chatName + "'>" + 
            "           <svg class='it-widget__head-icon'><use xlink:href='" + settings.modPath + "img/sprite.svg#chat'></use></svg>" +  
            "        </a>"
            }

            // Добавление кнопки формы
            if (settings.showWidgetForm)
            {
                html = html + 
            "        <a href='javascript:;' class='it-widget__head-btn it-btn-open-form' title='" + settings.formName + "'>" + 
            "			<svg class='it-widget__head-icon'><use xlink:href='" + settings.modPath + "img/sprite.svg#form'></use></svg>" + 
            "        </a>"
            }

            // Добавление кнопки звонка
            if (settings.showWidgetCall)
            {
                html = html + 
            "        <a href='javascript:;' class='it-widget__head-btn it-btn-open-call' title='" + settings.callName + "'>" + 
            "			<svg class='it-widget__head-icon'><use xlink:href='" + settings.modPath + "img/sprite.svg#call'></use></svg>" + 
            "        </a>"
            }

            html = html + 
            "		    <a href='javascript:;' class='it-widget__head-btn it-widget__head-btn_close'>" + 
            "			    <svg class='it-widget__head-icon it-widget__head-icon_close'>" + 
            "				    <use xlink:href='" + settings.modPath + "img/sprite.svg#close'></use>" + 
            "			    </svg>" + 
            "		    </a>" + 
            "		</div>" + 
            "	</div>" + 
            "	<div class='it-widget__parts'>" + 
            "	</div>" + 
            "</div>" + 
            "";

            $("body").append(html);

            elems.widgetWindow = $('#it-widget-window');

            elems.headBtns = $('#id-head-btns');
        },
        // Добавление виджета чата
        buildWidgetChat: function()
        {
            var html = "" + 
            "<div class='it-widget__part' id='it-widget-chat'>" + 
            "	<iframe src='" + settings.modPath + "chat.html' id='it-chat-frame' scrolling='no' frameborder='0'></iframe>" + 
            "</div>";

            $(elems.widgetWindow).find('.it-widget__parts').append(html);

            elems.widgetChat = $('#it-widget-chat');
        },
        // Добавление виджета формы
        buildWidgetForm: function()
        {
            var html = "" + 
            "<div class='it-widget__part' id='it-widget-form'>" + 
            "   <form class='it-form' method='post' id='it-form'>";

            if (settings.formText)
            {
                html = html + "<div class='it-form__text'>" + settings.formText + "</div>";
            }

            if (settings.formInputName)
            {
                html = html + "<input type='text' placeholder='" + settings.formInputName + "' class='it-form__input it-form-name'>";
            }

            html = html + "<input type='tel' placeholder='" + (settings.formInputPhone ? settings.formInputPhone : "Телефон") + "' class='it-form__input it-form-phone' required>";

            if (settings.timeFrom && settings.timeTo && settings.timeFrom < settings.timeTo)
            {
                html = html + "<div class='it-form__text'>Выберите удобное время звонка:</div>";

                html = html + 
                "<div class='it-form__time'>" + 
                "	<span class='it-form__time-sep'>с </span>" + 
                "	<select class='it-form__time-select it-time-from-h'>";

                for (var i = settings.timeFrom; i < settings.timeTo; i++)
                {
                    html = html + '<option value="' + i + '">' + i + '</option>';
                }

                html = html + 
                "	</select>" + 
                "	<span class='it-form__time-sep'> : </span>" + 
                "	<select class='it-form__time-select it-time-from-m'>" + 
                "		<option value='00'>00</option>" + 
                "		<option value='15'>15</option>" + 
                "		<option value='30'>30</option>" + 
                "		<option value='45'>45</option>" + 
                "	</select>" + 
                "	<span class='it-form__time-sep'> до </span>" + 
                "	<select class='it-form__time-select it-time-to-h'>";

                for (var i = settings.timeFrom + 1; i <= settings.timeTo; i++)
                {
                    html = html + '<option ' + (i == settings.timeTo ? 'selected' : '') + ' value="' + i + '">' + i + '</option>';
                }

                html = html + 
                "	</select>" + 
                "	<span class='it-form__time-sep'> : </span>" + 
                "	<select class='it-form__time-select it-time-to-m'>" + 
                "		<option value='00'>00</option>" + 
                "		<option value='15'>15</option>" + 
                "		<option value='30'>30</option>" + 
                "		<option value='45'>45</option>" + 
                "	</select>" + 
                "</div>";
            }

            html = html + 
            "       <button type='submit' class='it-form__btn'>" + (settings.formBtnName ? settings.formBtnName : "Жду звонка") + "</button>" + 
            "   </form>" + 
            "</div>";

            $(elems.widgetWindow).find('.it-widget__parts').append(html);

            elems.widgetForm = $('#it-widget-form');

            elems.sendForm = $('#it-form');

            if (settings.formPhoneMask)
            {
                $(elems.sendForm).find('input[type="tel"]').mask(settings.formPhoneMask);
            }
        },
        // Добавление виджета с кнопками
        buildWidgetBtn: function()
        {
            var html = "" + 
            "<div class='it-get-btn it-get-btn_icon-" + settings.iconColor + "' id='it-widget-btn'>" + 
            "    <a href='javascript:;' class='it-get-btn__btn it-get-btn__btn_main'>" + 
            "		<svg class='it-get-btn__icon it-get-btn__icon_show'><use xlink:href='" + settings.modPath + "img/sprite.svg#main'></use></svg>" + 
            "       <svg class='it-get-btn__icon it-get-btn__icon_close'><use xlink:href='" + settings.modPath + "img/sprite.svg#close'></use></svg>" + 
            "		<span class='it-get-btn__panel it-get-btn__panel_main'>" + 
            "			Напишите или<br>" + 
            "			позвоните нам" + 
            "		</span>" + 
            "    </a>" + 
            "    <div class='it-get-btn__btn-block'>";

            // Добавление кнопки чата
            if (settings.showWidgetChat)
            {
                html = html + 
            "        <a href='javascript:;' class='it-get-btn__btn it-get-btn__btn_inner it-btn-open-chat'>" + 
            "           <svg class='it-get-btn__icon'><use xlink:href='" + settings.modPath + "img/sprite.svg#chat'></use></svg>" + 
            "			<span class='it-get-btn__panel it-get-btn__panel_inner'>" + settings.chatName + "</span>" + 
            "        </a>"
            }

            // Добавление кнопки формы
            if (settings.showWidgetForm)
            {
                html = html + 
            "        <a href='javascript:;' class='it-get-btn__btn it-get-btn__btn_inner it-btn-open-form'>" + 
            "			<svg class='it-get-btn__icon'><use xlink:href='" + settings.modPath + "img/sprite.svg#form'></use></svg>" + 
            "			<span class='it-get-btn__panel it-get-btn__panel_inner'>" + settings.formName + "</span>" + 
            "        </a>"
            }

            // Добавление кнопки звонка
            if (settings.showWidgetCall)
            {
                html = html + 
            "        <a href='javascript:;' class='it-get-btn__btn it-get-btn__btn_inner it-btn-open-call'>" + 
            "			<svg class='it-get-btn__icon'><use xlink:href='" + settings.modPath + "img/sprite.svg#call'></use></svg>" + 
            "			<span class='it-get-btn__panel it-get-btn__panel_inner'>" + settings.callName + "</span>" + 
            "        </a>"
            }

            html = html + 
            "    </div>" + 
            "</div>"

            $("body").append(html);

            elems.widgetBtn = $('#it-widget-btn');
        },
        // Добавление фоновы цветов
        setBgColor: function()
        {
            if (settings.bgAlterColor)
            {
                $(elems.widgetWindow).css('backgroundColor', settings.bgAlterColor);
    
                $(elems.widgetBtn).find('a').css('backgroundColor', settings.bgAlterColor);
            }
            else
            {
                $(elems.widgetWindow).addClass("it-widget_" + settings.bgColor);

                $(elems.widgetBtn).addClass("it-get-btn_" + settings.bgColor);
            }
        },
        // Отправка сообщения
        sendMessage: function(data)
		{
            var frame = document.getElementById('it-chat-frame');

            frame.contentWindow.postMessage(data, '*');
        },
        // Открытие окна чата
        openWindow: function(e)
        {
            if (e && e.data && e.data.widgetName)
            {
                settings.openFirst = e.data.widgetName;
            }

            methods.toggleWidgetBtn();

            isOpenedWindow = true;

            elems.widgetWindow.animate({

                height: "400px"

            }, settings.openSpeed, 'linear', function () {

                methods.sendMessage({ command: 'open' });
            });

            elems.widgetWindow.addClass('active');

            $(elems.widgetBtn).fadeOut(0);

            elems.headBtns.find('.it-widget__head-btn_active').removeClass('it-widget__head-btn_active');

            elems.headBtns.find('.it-btn-open-' + settings.openFirst).addClass('it-widget__head-btn_active');

            elems.widgetWindow.find('.it-widget__part_open').removeClass('it-widget__part_open');

            $('#it-widget-' + settings.openFirst).addClass('it-widget__part_open');

            var strName = elems.headBtns.find('.it-btn-open-' + settings.openFirst).attr('title');

            elems.widgetWindow.find('.it-widget__head-title').text(strName);
        },
        // Автооткрытие окна
        openWindowAuto: function()
        {
            window.addEventListener('message', function(event) {

                if (event.data && event.data.command && event.data.command == 'connected')
                {
                    setTimeout(function() {
    
                        if (!isOpenedWindow) methods.openWindow();
    
                    }, settings.autoShowInterval);
                }
            });
        },
        // Действия виджета чата
        actionWindow: function()
        {
            elems.widgetWindow.find('.it-widget__head-open').click(methods.openWindow);

            elems.widgetWindow.find('.it-widget__head-btn_close').click(function() {

                elems.widgetWindow.animate({
    
                    height: windowStandartHeight
    
                }, settings.openSpeed, 'linear');

                elems.widgetWindow.removeClass('active');

                methods.sendMessage({ command: 'close' });

                $(elems.widgetBtn).fadeIn(600);

                $('.it-widget__head-btn_active').removeClass('it-widget__head-btn_active');
            });

            if (settings.windowResizable)
            {
                elems.widgetWindow.resizable({
                    handles: "n",
                    minHeight: 400,
                    ////maxHeight: $('body').height(),
                });
            }
        },
        // Количество кнопок
        setCountWidgetBtn: function()
        {
            var countBtn = 0;

            if (settings.showWidgetChat) countBtn++;
            if (settings.showWidgetForm) countBtn++;
            if (settings.showWidgetCall) countBtn++;

            elems.widgetBtn.addClass('it-get-btn_' + countBtn);
        },
        // Анимации виджета с кнопками
        animateWidgetBtn: function()
        {
            setTimeout(function(){

                elems.widgetBtn.show();
    
            }, 100);

            setTimeout(function(){
    
                elems.widgetBtn.addClass('it-get-btn_active');
    
            }, 200);

            animateTimeOut = setTimeout(function(){

                elems.widgetBtn.addClass('it-get-btn_show-panel');
        
            }, 1000);
        },
        // Скрыти подсказки "Напишите или позвоните нам"
        stopAndHideWriteUs: function()
        {
            clearTimeout(animateTimeOut);

            $(elems.widgetBtn).removeClass('it-get-btn_show-panel');
        },
        // Скрытие / показ виджета с кнопками
        toggleWidgetBtn: function()
        {
            methods.stopAndHideWriteUs();

            $(elems.widgetBtn).toggleClass('it-get-btn_open');
        },
        // Поведение виджета с кнопками
        actionWidgetBtn: function()
        {
            elems.widgetBtn.find('.it-get-btn__btn_main').mouseenter(function(){
    
                methods.stopAndHideWriteUs();
    
                elems.widgetBtn.addClass('it-get-btn_open');
            });

            elems.widgetBtn.find('.it-get-btn__btn_main').click(methods.toggleWidgetBtn);
        },
        // Действия кнопок в шапке и виджете с кнопками 
        actionBtns: function()
        {
            $('.it-btn-open-chat').on('click', {widgetName: "chat"}, methods.openWindow);

            $('.it-btn-open-form').on('click', {widgetName: "form"}, methods.openWindow);

            $('.it-btn-open-call').on('click', function(){

                if (InfinityIsSupported() && !settings.callIsMobile)
                {
                    if ($('.it-btn-open-call').hasClass('active'))
                    {
                        InfinityDrop();
                    }
                    else
                    {
                        InfinityCall({
                            host: settings.callHost,
                            port: settings.callPort,
                            secure: settings.callSecure,
                            from: settings.callFrom,
                            to: settings.callTo,
                            password: settings.callPass,
                            timeout: settings.callTimeout,
                            onConnected: function ()
                            {
                                $('.it-btn-open-call').addClass('active');

                                $(elems.widgetWindow).find('.it-btn-open-call').attr('title', settings.callFinish)

                                $(elems.widgetBtn).find('.it-btn-open-call .it-get-btn__panel').text(settings.callFinish);
                            },
                            onFinished: function ()
                            {
                                $('.it-btn-open-call').removeClass('active');

                                $(elems.widgetWindow).find('.it-btn-open-call').attr('title', settings.callName)

                                $(elems.widgetBtn).find('.it-btn-open-call .it-get-btn__panel').text(settings.callName);
                            }
                        });
                    }
                }
				else if (settings.callIsMobile)
				{
					window.location.href = 'tel:88003030000';
					$('.it-btn-open-call').removeClass('active');
				}
            });
        },
        // Действия формы
        actionForm: function()
        {
            if (settings.formPhoneMask)
            {
                $(elems.sendForm).find('input[type="tel"]').on('input', function(e){

                    if (e.target.value.length < e.target.maxLength) e.target.setCustomValidity("Укажите код города и телефон");
                    else e.target.setCustomValidity("");
                });
            }

            $(elems.sendForm).on('submit', function(e){

                e.preventDefault();
				var s = $('.it-form-phone').val()
				console.log(s)
				s = s.replace(/^\+7(.+)$/, '08$1')
                console.log(s)
				var data = {
                    //"Phone"	: $('.it-form-phone').val(),
                    "Phone"	: s,
					"Name"	: $('.it-form-name').val(),
                    "URL"	: window.location.href,
                    //"ComagicId" : Comagic.getCredentials().session_id
                };

                if (settings.timeFrom && settings.timeTo)
                {
                    data.Time1 = settings.timeFrom + ':00';
                    data.Time2 = settings.timeTo + ':00';

                    var fromH = $('.it-time-from-h').val();
                    var fromM = $('.it-time-from-m').val();
                    var toH = $('.it-time-to-h').val();
                    var toM = $('.it-time-to-m').val();

                    if (fromH && fromM && toH && toM && parseInt(fromH + fromM) < parseInt(toH + toM))
                    {
                        
                        data.Time1 = fromH + ':' + fromM;
                        data.Time2 = toH + ':' + toM;
                    }
                }

                $.ajax({
                    url: settings.formUrl,
                    type: 'POST',
                    data: '{"Result":' + JSON.stringify(data) + '}',
                    success: function(jsondata){
    
                        if (jsondata.result.Data === 'OK')
                        {
                            var html = "" + 
                            "<div class='it-success'>" + 
                            "   <svg class='it-success__icon'><use xlink:href='" + settings.modPath + "img/sprite.svg#success'></use></svg>" + 
                            "   <div class='it-success__text'>" + settings.formSuccess + "</div>" + 
                            "</div>";

                            $(elems.sendForm).after(html);

                            $(elems.sendForm).remove();
                        }
                        else
                        {
                            alert("Ошибка сервера");
                        }
                    },
                    error: function(){
    
                        alert("Ошибка отправки данных");
                    }
                });
    
                return false;
            });
        }
    }

    jQuery.fn.itOnlineCons = function (options) {

        methods.init(options);
    }

})(jQuery);