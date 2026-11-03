(function ($) {

    jQuery.fn.itOnlineChat = function (options) {

        $.infChatObject = 1;

        var settings = $.extend({
            'sendBtn': "#sendBtn",
            'messageText': "#messageText",
            'sendBtnText': 'Отправить',
            'textareaText': 'Введите сообщение',
            'imageBtn': "#imageBtn",
            'imageBtnText': 'Картинка',
            'maxImageSize': 5 * 1024 * 1024,
            'canSendImage': false,
        }, options);

        var strVar = "";

        strVar += "<div id='chatForm' class='chat-form'>";
        strVar += "<div id='sectionChat'>";
        strVar += "<div id='chatMessages' class='scrollbar_it chat-messages'><\/div>";
        strVar += "<\/div>";
        strVar += "<div id='footerChat' class='chat-footer'>";
        strVar += "<textarea id='messageText' autocomplete='off' placeholder='" + settings.textareaText + "' class='scrollbar_it chat-text'><\/textarea>";
        strVar += "<button type='button' name='sendBtn' class='chat-btn' id='sendBtn'>" + settings.sendBtnText + "</button>";

        if (settings.canSendImage) strVar += "<button type='button' name='imageBtn' class='chat-btn' id='imageBtn'>" + settings.imageBtnText + "</button>";

        strVar += "<\/div>";
        strVar += "<\/div>";

        $("body").append(strVar);

		/* Category screen */
		if (settings.showCategoryScreen && settings.listCategoryScreen)
		{
			strVar = "<div id='chatCategoryScreen' class='chat-screen" + (settings.firstScreen === 'category' ? ' chat-screen_first' : '') + "'>";
			strVar += "<div class='chat-screen__title'>" + settings.titleCategoryScreen + "</div>";
			strVar += "<div class='chat-category'>";

			settings.listCategoryScreen.forEach(function(str) {

				strVar += "<a href='javascript:;' class='chat-category__link js-category-send'>" + str + "</a>";
			});

			strVar += "</div>";
			strVar += "</div>";

			$("#chatForm").append(strVar);

			$(".js-category-send").click(function (event) {

				event.preventDefault();

				var str = $(this).text();

				kitAjax({
					method: 'webchatsend',
					data: {
						category: str
					},
					success: function (res) {

						$('#chatCategoryScreen').remove();
					},
					error: function () {
						console.log('send theme failed ' + str);
						AppendMessage(new Object({ Time: "", Sender: "Y", Body: "Сервис временно недоступен: нет связи с сервером (send)" }));
					}
				});
			});
		}
		

		function validateEmail(email)
		{
			var emailRegex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

			return emailRegex.test(email);
		}

		function validatePhone(phone)
		{
			var phoneRegex = /^((8|\+7)[\- ]?)(\(?\d{3}\)?[\- ]?)[\d\- ]{7}$/; /*/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;*/

			return phoneRegex.test(phone);
		}
		
		function validateFIO(fio)
		{
			var FIORegex = /^([А-ЯЁ][а-яё]+[\-\s]?){3,}$/;

			return FIORegex.test(fio);
		}

		/* Welcome screen */
		if (settings.showWelcomeScreen && settings.inputsWelcomeScreen)
		{
			strVar = "<div id='chatWelcomeScreen' class='chat-screen" + (settings.firstScreen === 'welcome' ? ' chat-screen_first' : '') + "'>";
			strVar += "<div class='chat-screen__title'>" + settings.titleWelcomeScreen + "</div>";
			strVar += "<div class='chat-welcome'>";
			strVar += "<form id='chatWelcomeForm'>";

			for (key in settings.inputsWelcomeScreen) {

				if (settings.inputsWelcomeScreen[key].text)
				{
					if (settings.inputsWelcomeScreen[key].type === 'textarea')
					{
						strVar += "<textarea class='chat-welcome__textarea' name='" + key + "' placeholder='" + settings.inputsWelcomeScreen[key].text + "' " + (settings.inputsWelcomeScreen[key].required ? 'required' : '') + "></textarea>";
					}
					else if (settings.inputsWelcomeScreen[key].type === 'date') {
						strVar += "<label>" + settings.inputsWelcomeScreen[key].text + "</label><input class='chat-welcome__input' name='" + key + "' type='" + settings.inputsWelcomeScreen[key].type + "' " + (settings.inputsWelcomeScreen[key].required ? 'required' : '') + " value='2000-01-01' min='1910-01-01' max='2010-01-01'>"
					}					
					else if (settings.inputsWelcomeScreen[key].type === 'list') 
					{
						strVar += "<label>" + settings.inputsWelcomeScreen[key].text + "</label><select class='chat-welcome__input' name='" + key + "' " + (settings.inputsWelcomeScreen[key].required ? 'required' : '') + ">" + 
						"<option value = '01'>Адыгея Республика</option>" +
						"<option value = '04'>Республика Алтай</option>" +
						"<option value = '02'>Республика Башкортостан</option>" +
						"<option value = '03'>Республика Бурятия</option>" +
						"<option value = '05'>Республика Дагестан</option>" +
						"<option value = '80'>Донецкая Народная Республика</option>" +
						"<option value = '06'>Республика Ингушетия</option>" +
						"<option value = '07'>Кабардино-Балкарская Республика</option>" +
						"<option value = '08'>Республика Калмыкия</option>" +
						"<option value = '09'>Карачаево-Черкесская Республика</option>" +
						"<option value = '10'>Республика Карелия</option>" +
						"<option value = '11'>Республика Коми</option>" +
						"<option value = '82'>Республика Крым</option>" +
						"<option value = '81'>Луганская Народная Республика</option>" +
						"<option value = '12'>Республика Марий Эл</option>" +
						"<option value = '13'>Республика Мордовия</option>" +
						"<option value = '14'>Республике Саха (Якутия)</option>" +
						"<option value = '15'>Республика Северная Осетия — Алания</option>" +
						"<option value = '16'>Республика Татарстан</option>" +
						"<option value = '17'>Республика Тыва</option>" +
						"<option value = '18'>Удмуртская Республика</option>" +
						"<option value = '19'>Республика Хакасия</option>" +
						"<option value = '95'>Чеченская Республика</option>" +
						"<option value = '21'>Чувашская Республика — Чувашия</option>" +
						"<option value = '22'>Алтайский край</option>" +
						"<option value = '75'>Забайкальский край</option>" +
						"<option value = '23'>Краснодарский край</option>" +
						"<option value = '24'>Красноярский край</option>" +
						"<option value = '59'>Пермский край</option>" +
						"<option value = '25'>Приморский край</option>" +
						"<option value = '26'>Ставропольский край</option>" +
						"<option value = '27'>Хабаровский край</option>" +
						"<option value = '28'>Амурская область</option>" +
						"<option value = '29'>Архангельская область</option>" +
						"<option value = '30'>Астраханская область</option>" +
						"<option value = '31'>Белгородская область</option>" +
						"<option value = '32'>Брянская область</option>" +
						"<option value = '33'>Владимирская область</option>" +
						"<option value = '34'>Волгоградская область</option>" +
						"<option value = '35'>Вологодская область</option>" +
						"<option value = '36'>Воронежская область</option>" +
						"<option value = '85'>Запорожская область</option>" +
						"<option value = '37'>Ивановская область</option>" +
						"<option value = '38'>Иркутская область</option>" +
						"<option value = '39'>Калининградская область</option>" +
						"<option value = '40'>Калужская область</option>" +
						"<option value = '41'>Камчатский край</option>" +
						"<option value = '42'>Кемеровская область - Кузбасс</option>" +
						"<option value = '43'>Кировская область</option>" +
						"<option value = '44'>Костромская область</option>" +
						"<option value = '45'>Курганская область</option>" +
						"<option value = '46'>Курская область</option>" +
						"<option value = '47'>Ленинградская область</option>" +
						"<option value = '48'>Липецкая область</option>" +
						"<option value = '49'>Магаданская область</option>" +
						"<option value = '50'>Московская область</option>" +
						"<option value = '51'>Мурманская область</option>" +
						"<option value = '52'>Нижегородская область</option>" +
						"<option value = '53'>Новгородская область</option>" +
						"<option value = '54'>Новосибирская область</option>" +
						"<option value = '55'>Омская область</option>" +
						"<option value = '56'>Оренбургская область</option>" +
						"<option value = '57'>Орловская область</option>" +
						"<option value = '58'>Пензенская область</option>" +
						"<option value = '60'>Псковская область</option>" +
						"<option value = '61'>Ростовская область</option>" +
						"<option value = '62'>Рязанская область</option>" +
						"<option value = '63'>Самарская область</option>" +
						"<option value = '64'>Саратовская область</option>" +
						"<option value = '65'>Сахалинская область</option>" +
						"<option value = '66'>Свердловская область</option>" +
						"<option value = '67'>Смоленская область</option>" +
						"<option value = '68'>Тамбовская область</option>" +
						"<option value = '69'>Тверская область</option>" +
						"<option value = '70'>Томская область</option>" +
						"<option value = '71'>Тульская область</option>" +
						"<option value = '72'>Тюменская область</option>" +
						"<option value = '73'>Ульяновская область</option>" +
						"<option value = '84'>Херсонская область</option>" +
						"<option value = '74'>Челябинская область</option>" +
						"<option value = '76'>Ярославская область</option>" +
						"<option value = '77' selected = 'selected'>Москва</option>" +
						"<option value = '78'>Санкт-Петербург</option>" +
						"<option value = '82'>Севастополь</option>" +
						"<option value = '27'>Еврейская автономная область</option>" +
						"<option value = '29'>Ненецкий автономный округ</option>" +
						"<option value = '86'>Ханты-Мансийский автономный округ — Югра</option>" +
						"<option value = '41'>Чукотский автономный округ</option>" +
						"<option value = '89'>Ямало-Ненецкий автономный округ</option>" +
						"</select>";
					}
					else
					{
						strVar += "<input class='chat-welcome__input' name='" + key + "' type='" + settings.inputsWelcomeScreen[key].type + "' value='' placeholder='" + settings.inputsWelcomeScreen[key].text + "' " + (settings.inputsWelcomeScreen[key].required ? 'required' : '') + ">";
					}
				}
			}

			strVar += "<button type='submit' class='chat-btn' id='sendBtnWelcome'>" + settings.sendBtnText + "</button>";
			strVar += "</form>";
			strVar += "</div>";
			strVar += "</div>";

			$("#chatForm").append(strVar);

			$('.chat-welcome__input').keydown(function(){

				$(this).removeClass('error');
			});

			$("#chatWelcomeForm").submit(function(e) {

				e.preventDefault();

				if (settings.validateJsPhone)
				{
					var phone = $("#chatWelcomeForm input[type='tel']:required");

					if (phone)
					{
						if (!validatePhone(phone.val()))
						{
							phone.addClass('error');

							phone.focus();

							return false;
						}
					}
				}

				if (settings.validateJsEmail)
				{
					var email = $("#chatWelcomeForm input[type='email']:required");

					if (email)
					{
						if (!validateEmail(email.val()))
						{
							email.addClass('error');

							email.focus();

							return false;
						}
					}
				}

				var data = {};

				$(e.target).find('input').each(function(elem){

					data[$(this).attr('name')] = $(this).val();
					
				});
				
				$(e.target).find('select').each(function(elem){

					data[$(this).attr('name')] = $(this).val();
				});

				$(e.target).find('textarea').each(function(elem){

					data[$(this).attr('name')] = $(this).val();
				});

				kitAjax({
					method: 'webchatsend',
					data: data,
					success: function () {
						console.log('form raw data ' + data);
						$('#chatWelcomeScreen').remove();
					},
					error: function () {
						console.log('send failed');
						AppendMessage(new Object({ Time: "", Sender: "Y", Body: "Сервис временно недоступен: нет связи с сервером (send)" }));
					}
				});
			});
		}

		$('.scrollbar_it').scrollbar();

/*         var ItGetDate = function () {

            var today = new Date();

            var hh = today.getHours();
            if (hh < 10) hh = '0' + hh;

            var mm = today.getMinutes();
            if (mm < 10) mm = '0' + mm;

            return hh + ':' + mm;
        } */

        var FindLink = function (inputText) {

            if (inputText.indexOf("<a href") >= 0 || inputText.indexOf("<img src=") >= 0)
                return inputText;

            var pattern = /([-a-zA-Z0-9@:%_\+.~#?&\/\/=]{2,256}\.[a-z]{2,4}\b(\/?[-a-zA-Z0-9@:%_\+.~#?&\/\/=]*)?)/gi;
            var replacedText = inputText.replace(pattern, '<a href="$1" target="_blank">$1</a>');
            return replacedText;
        }

        function isNull(value_) {
            return value_ === null || value_ === undefined;
        }

        function isNullOrEmpty(value_) {
            return isNull(value_) || value_ === "";
        }

        function isArrayBuffer(object_) {
            return (!isNull(object_) && object_ instanceof ArrayBuffer)
        }

        var kitAjax = function (params_) {
            var processData = true;
            var data = null;
            if (params_.data) {
                if (isArrayBuffer(params_.data)) {
                    data = params_.data;
                    processData = false;
					console.log('params data' + data);
                }
                else
                    data = JSON.stringify(params_.data);
					console.log('json data' + data);
            }
            else {
                data = "{}";
            }

            if (isNullOrEmpty(settings.host)) {
                console.log('settings.host is null');
                AppendMessage(new Object({ Time: "", Sender: "Y", Body: "Сервис временно недоступен: ошибка host" }));
                return false;
            }

            if (isNullOrEmpty(settings.accountID)) {
                console.log('settings.accountID is null');
                AppendMessage(new Object({ Time: "", Sender: "Y", Body: "Сервис временно недоступен: ошибка accountID" }));
                return false;
            }

            if (isNullOrEmpty(settings.accountKey)) {
                console.log('settings.accountKey is null');
                AppendMessage(new Object({ Time: "", Sender: "Y", Body: "Сервис временно недоступен: ошибка accountKey" }));
                return false;
            }

            var contentType = "application/json; charset=UTF-8";
            if (!isNullOrEmpty(params_.contentType)) {
                contentType = params_.contentType;
            }

            $.ajax(settings.host + 'messenger/' + settings.accountID + '/' + params_.method + '?key=' + settings.accountKey, {
                method: "POST",
                xhrFields: {
                    withCredentials: true
                },
                contentType: contentType,
                data: data,
                processData: processData,
                success: function (data_) {
                    if (params_.success)
                        params_.success(data_);
                    if (params_.complete)
                        params_.complete();
					console.log('result data' + data)
                },
                error: function (response_) {
                    if (params_.error)
                        params_.error(response_);
                    if (params_.complete)
                        params_.complete();
                }
            });
        }

        var _connected = false;
        var _closed = true;

        var Connect = function () {
            kitAjax({
                method: 'webchathello',
                success: function (data) {
                    _connected = true;
                    parent.postMessage({ command: 'connected', settings: data.Params }, '*');

                },
                error: function () {
                    console.log('hello failed');
                    AppendMessage(new Object({ Time: "", Sender: "Y", Body: "Сервис временно недоступен: нет связи с сервером (hello)" }));
                }
            });
        }

        var Open = function () {
            if (!_connected)
                return;
            _closed = false;
            kitAjax({
                method: 'webchatopen',
                success: function (data) {
					/*UpdateHistory(data.History);*/
                    StartHistoryComet();
                },
                error: function () {
                    console.log('open failed');
                    AppendMessage(new Object({ Time: "", Sender: "Y", Body: "Сервис временно недоступен: нет связи с сервером (open)" }));
                }
            });
        }

        var Close = function () {
            if (!_connected)
                return;
            _closed = true;
            kitAjax({
                method: 'webchatclose',
                success: function (data) {
                },
                error: function () {
                    console.log('close failed');
                }
            });
        }

		window.addEventListener('message', function(event) { 
		  if (event.data && event.data.command) {
			if (event.data.command == 'open')
			  Open();
			else if (event.data.command == 'close')
			  Close();
		  }
		});

        jQuery(window).bind(
            "beforeunload",
            function () {
                if (_closed)
                    return;
                Close();
            }
        )

        function UpdateHistory(history_) {
            if (!isNull(history_)) {
                $.each(history_, function () {
                    var item = this;
                    var msg = {};
                    if (item.Direction == "In")
                        msg.Sender = "I";
                    else
                        msg.Sender = "Y";
                    msg.Time = item.DisplayTime;
                    msg.Date = item.DisplayDate;

                    if (item.MessageType == "URL") {
                        var caption = item.Text;
                        var link = item.Media;
                        if (isNullOrEmpty(caption))
                            caption = link;

                        msg.Body = "<a href='" + link + "' target='blank'>" + caption + "</a>";
                    }
                    else if (item.MessageType == "Picture") {
                        msg.Body = "<img src='" + item.Media + "' />";
                    }
                    else {
                        msg.Body = item.Text;
                    }

                    AppendMessage(msg, false);
                });
                AppendMessage(null); // прокрутка
            }
        }

        var _changesOK = true;
        function StartHistoryComet() {
            if (!_connected)
                return;
            kitAjax({
                method: 'webchatchanges',
                success: function (data) {
                    _changesOK = true;
                    UpdateHistory(data.History);
                    setTimeout(function () {
                        StartHistoryComet();
                    }, 1000);
                },
                error: function () {
                    console.log('changes failed');
                    if (_changesOK) {
                        _changesOK = false;
                        AppendMessage(new Object({ Time: "", Sender: "Y", Body: "Сервис временно недоступен: нет связи с сервером (changes)" }));
                    }
                    setTimeout(function () {
                        StartHistoryComet();
                    }, 10000);
                }
            });
        }

        var SendMessage = function () {

            var msgText = $(settings.messageText).val();

            if (isNullOrEmpty(msgText))
                return;

            var query = { cmd: "message", msgBody: msgText };

            msgText = msgText.replace(new RegExp("\n", 'g'), '<br>');

            $(settings.messageText).val('');

            kitAjax({
                method: 'webchatsend',
                data: { text: msgText },
                success: function () { },
                error: function () {
                    console.log('send failed');
                    AppendMessage(new Object({ Time: "", Sender: "Y", Body: "Сервис временно недоступен: нет связи с сервером (send)" }));
                }
            });

            $(settings.messageText).focus();
        }

        var SendPicture = function () {
            if (!window.File || !window.FileReader || !window.FileList || !window.Blob) {
                alert('Загрузка файлов не поддерживается');
                return;
            }

            var fileSelector = document.createElement('input');
            fileSelector.setAttribute('type', 'file');
            fileSelector.setAttribute('accept', '.jpg, .png, .jpeg, .gif, .bmp, .tif, .tiff|image/*');

            $(fileSelector).change(function () {
                if (fileSelector.files.length != 1)
                    return;

                var file = fileSelector.files[0];
                if (settings.maxImageSize > 0 && file.size > settings.maxImageSize) {
                    alert('Файл слишком большой');
                    return;
                }

                var reader = new FileReader();
                reader.onload = (function (theFile) {

                    kitAjax({
                        method: 'webchatpicture',
                        data: theFile.target.result,
                        contentType: "application/file",
                        success: function () {
                        },
                        error: function () {
                            console.log('send picture failed');
                            AppendMessage(new Object({ Time: "", Sender: "Y", Body: "Сервис временно недоступен: нет связи с сервером (picture)" }));
                        }
                    });
                });

                reader.readAsArrayBuffer(file);
            });

            $(fileSelector).trigger("click");
            $(settings.messageText).focus();
        }

        var AppendMessage = function (msgObj, animate_) {

            var txtArea = $("#chatMessages");

            if (!isNull(msgObj)) {
                var msgStr = ParseMessage(msgObj);

                txtArea.append(msgStr);
            }

            if (animate_ != false) {
                scrollToBottom();

                setTimeout(scrollToBottom, 100);
            }
        }

        var scrollToBottom = function () {
            $("#chatMessages").animate({
                scrollTop: $("#chatMessages")[0].scrollHeight - $("#chatMessages").height()
            }, 100);
        }

        var lastDate = "";

        var ParseMessage = function (msgObj) {

            var it_temp = '';

            if (!isNullOrEmpty(msgObj.Date)) {
                if (msgObj.Date != lastDate) {
                    lastDate = msgObj.Date;
                    it_temp += '<p class="it_d"><span>' + msgObj.Date + '</span></p>';
                }
            }

            if (isNullOrEmpty(msgObj.Time))
                msgObj.Time = "";

            if (msgObj.Sender == 'I') it_temp += '<p class="it_i">';
            else it_temp += '<p class="it_y">';

            if (msgObj.Sender == 'I') {
                it_temp = it_temp + '<span>' + FindLink(msgObj.Body) + '<b>' + msgObj.Time + '</b>' + '</span>';

            } else {
                it_temp = it_temp + '<span>' + FindLink(msgObj.Body) + '<b>' + msgObj.Time + '</b>' + '</span>';
            }

            return it_temp + '</p>';
        }

/*         var SetCookie = function (cookieName, cookieValue, nDays) {

            var today = new Date();
            var expire = new Date();

            if (nDays == null || nDays == 0) nDays = 1;

            expire.setTime(today.getTime() + 3600000 * 24 * nDays);
            document.cookie = cookieName + "=" + escape(cookieValue) + ";expires=" + expire.toGMTString();
        } */

        $(settings.sendBtn).click(function (event) {
            event.preventDefault();
            SendMessage();
        });

        $(settings.imageBtn).click(function (event) {
            event.preventDefault();
            SendPicture();
        });

        $(settings.messageText).keypress(function (event) {

            /*if ((event.ctrlKey) && ((event.keyCode == 13) || (event.keyCode == 10))) {*/
			if (event.keyCode == 13 || event.keyCode == 10) {
                event.preventDefault();
                SendMessage();
                $(settings.messageText).css('height', '26px');
            }
        });

        $(window).resize(function () {

            var bas_temp = $('#chatForm').height() - $('#footerChat').height();

            $('#sectionChat').css('height', bas_temp + 'px');
        });

       /*  $(settings.messageText).keyup(function () {

            $(this).css('height', this.scrollHeight + 'px');

            $(window).resize();

            $("#chatMessages").animate({

                scrollTop: $("#chatMessages")[0].scrollHeight - $("#chatMessages").height()

            }, 0);
        }); */

        Connect();
    }

})(jQuery);