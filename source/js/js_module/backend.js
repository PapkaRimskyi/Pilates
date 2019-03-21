'use strict';

(function () {
  var URL_SAVE = 'https://echo.htmlacademy.ru';
  var SUCCESS_STATUS_CODE = 200;

  var getRequestPreparation = function (onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === SUCCESS_STATUS_CODE) {
        onLoad(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });
    return xhr;
  };

  var save = function (data, onLoad, onError) {
    var xhr = getRequestPreparation(onLoad, onError);

    xhr.addEventListener('error', function () {
      onError('Ошибка ' + xhr.status + ' ' + xhr.statusText);
    });

    xhr.open('POST', URL_SAVE);
    xhr.send(data);
  };

  window.backend = {
    save: save
  };
})();
