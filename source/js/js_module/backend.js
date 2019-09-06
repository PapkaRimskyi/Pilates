(function () {
  const URL_SAVE = 'https://echo.htmlacademy.ru';
  const SUCCESS_STATUS_CODE = 200;

  let getRequestPreparation = function (onLoad, onError) {
    let xhr = new XMLHttpRequest();
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

  let save = function (data, onLoad, onError) {
    let xhr = getRequestPreparation(onLoad, onError);

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
