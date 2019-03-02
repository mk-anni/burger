function ready() {
    ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
           center: [51.52425877689033,46.04030515534218],
           zoom: 9
       }, {
           searchControlProvider: 'yandex#search'
       }),
  
  
  
          // Создаём макет содержимого.
          MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
              '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
              ),
  
          myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
              hintContent: 'Мы тут',
              balloonContent: 'Мы тут'
          }, {
              // Опции.
              // Необходимо указать данный тип макета.
              iconLayout: 'default#image',
              // Своё изображение иконки метки.
              iconImageHref: 'img/icons/map-marker.svg',
              // Размеры метки.
              iconImageSize: [48, 48],
              // Смещение левого верхнего угла иконки относительно
              // её "ножки" (точки привязки).
              iconImageOffset: [-5, -38]
          }),
  
          myPlacemark2 = new ymaps.Placemark([51.42425877689033,46.24030515534218], {
              hintContent: 'Мы тут',
              balloonContent: 'Мы тут'
          }, {
              // Опции.
              // Необходимо указать данный тип макета.
              iconLayout: 'default#imageWithContent',
              // Своё изображение иконки метки.
              iconImageHref: 'img/icons/map-marker.svg',
              // Размеры метки.
              iconImageSize: [48, 48],
              // Смещение левого верхнего угла иконки относительно
              // её "ножки" (точки привязки).
              iconImageOffset: [-24, -24],
              // Макет содержимого.
              iconContentLayout: MyIconContentLayout
          });
  
          myPlacemark3 = new ymaps.Placemark([51.62425877689033,46.14030515534218], {
              hintContent: 'Мы тут',
              balloonContent: 'Мы тут'
          }, {
              // Опции.
              // Необходимо указать данный тип макета.
              iconLayout: 'default#imageWithContent',
              // Своё изображение иконки метки.
              iconImageHref: 'img/icons/map-marker.svg',
              // Размеры метки.
              iconImageSize: [48, 48],
              // Смещение левого верхнего угла иконки относительно
              // её "ножки" (точки привязки).
              iconImageOffset: [-24, -24],
              // Макет содержимого.
              iconContentLayout: MyIconContentLayout
          });
  
          myMap.geoObjects
          .add(myPlacemark)
          .add(myPlacemark2)
          .add(myPlacemark3);
  
          myMap.behaviors.disable('scrollZoom');
      });
};
document.addEventListener("DOMContentLoaded", ready);