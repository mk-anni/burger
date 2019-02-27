
  
    function ready() {
      ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
                center: [55.751574, 37.573856],
                zoom: 9
            }, {
                searchControlProvider: 'yandex#search'
            }),
    
            // Создаём макет содержимого.
            MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
                '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
            ),
    
            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: 'Собственный значок метки',
                balloonContent: 'Это красивая метка'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: '../img/icons/map-marker.svg',
                // Размеры метки.
                iconImageSize: [46, 57],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [0,-57]
            }),
    
            myPlacemarkWithContent = new ymaps.Placemark([59.926807523795354, 30.31951904296875], {
                hintContent: 'Собственный значок метки с контентом',
                balloonContent: 'А эта — новогодняя',
                iconContent: '12'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#imageWithContent',
                // Своё изображение иконки метки.
                iconImageHref: '../img/icons/map-marker.svg',
                // Размеры метки.
                iconImageSize: [46, 57],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [0, -57],
                // Смещение слоя с содержимым относительно слоя с картинкой.
                iconContentOffset: [15, 15],
                // Макет содержимого.
                iconContentLayout: MyIconContentLayout
            });
            myPlacemarkWithContent2 = new ymaps.Placemark([59.971193211942236, 30.263687093307453], {
              hintContent: 'Собственный значок метки с контентом',
              balloonContent: '2',
              iconContent: '2'
          }, {
              // Опции.
              // Необходимо указать данный тип макета.
              iconLayout: 'default#imageWithContent',
              // Своё изображение иконки метки.
              iconImageHref: '../img/icons/map-marker.svg',
              // Размеры метки.
              iconImageSize: [46, 57],
              // Смещение левого верхнего угла иконки относительно
              // её "ножки" (точки привязки).
              iconImageOffset: [0, -57],
              // Смещение слоя с содержимым относительно слоя с картинкой.
              iconContentOffset: [15, 15],
              // Макет содержимого.
              iconContentLayout: MyIconContentLayout
          });
          myPlacemarkWithContent3 = new ymaps.Placemark([59.958476768915034, 30.360504109909016], {
            hintContent: 'Собственный значок метки с контентом',
            balloonContent: '3',
            iconContent: '3'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#imageWithContent',
            // Своё изображение иконки метки.
            iconImageHref: '../img/icons/map-marker.svg',
            // Размеры метки.
            iconImageSize: [46, 57],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, -57],
            // Смещение слоя с содержимым относительно слоя с картинкой.
            iconContentOffset: [15, 15],
            // Макет содержимого.
            iconContentLayout: MyIconContentLayout
        });
        myPlacemarkWithContent4 = new ymaps.Placemark([59.93080359114037, 30.43405449941406], {
          hintContent: 'Собственный значок метки с контентом',
          balloonContent: '4',
          iconContent: '4'
      }, {
          // Опции.
          // Необходимо указать данный тип макета.
          iconLayout: 'default#imageWithContent',
          // Своё изображение иконки метки.
          iconImageHref: '../img/icons/map-marker.svg',
          // Размеры метки.
          iconImageSize: [46, 57],
          // Смещение левого верхнего угла иконки относительно
          // её "ножки" (точки привязки).
          iconImageOffset: [0, -57],
          // Смещение слоя с содержимым относительно слоя с картинкой.
          iconContentOffset: [15, 15],
          // Макет содержимого.
          iconContentLayout: MyIconContentLayout
      });
    
        myMap.geoObjects
            .add(myPlacemark)
            .add(myPlacemarkWithContent)
            .add(myPlacemarkWithContent2)
            .add(myPlacemarkWithContent3)
            .add(myPlacemarkWithContent4);

            myMap.behaviors.disable('scrollZoom');
    });
   
    
})

  }
  document.addEventListener("DOMContentLoaded", ready);