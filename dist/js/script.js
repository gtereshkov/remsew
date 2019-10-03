var app = angular.module('myApp', []);

app.controller('examplesCtrl', function ($scope) {

    $scope.examplesList = [
        {
            name: 'Ножные машины',
            img: 'nozhnaya'
        }, {
            name: 'Ручные машины',
            img: 'ruchnaya'
        }, {
            name: 'Эл. механические машины',
            img: 1
        }, {
            name: 'Компьютерные машины',
            img: 1
        }, {
            name: 'Промышленные машины',
            img: 1
        }, {
            name: 'Вышивальные машины',
            img: 1
        }, {
            name: 'Распошивальные машины',
            img: 1
        }, {
            name: 'Вязальные машины',
            img: 1
        }, {
            name: 'Кеттельные машины',
            img: 1
        }, {
            name: 'Вязальные машины',
            img: 'viazalka'
        }, {
            name: 'Оверлоки',
            img: 'overlock'
        }, {
            name: 'Коверлоки',
            img: 1
        }, {
            name: 'Гладильные системы',
            img: 1
        }, {
            name: 'Утюги',
            img: 1
        }, {
            name: 'Парогенераторы',
            img: 1
        }, {
            name: 'Раскройное оборудование',
            img: 1
        }
    ];

});


app.controller('pricelistCtrl', function ($scope) {

    $scope.priceList = {
        shveinoye: [
          {
            type: 'Настройка швейной машины',
            price: 30
          },
          {
            type: 'Смазка',
            price: 20
          },
          {
            type: 'Дефектовка челнока',
            price: 40.5
          },
          {
            type: 'Дефектовка челнока',
            price: 40.5
          },
          {
            type: 'Дефектовка челнока',
            price: 40.5
          },
          {
            type: 'Дефектовка челнока',
            price: 40.5
          },
          {
            type: 'Дефектовка челнока',
            price: 40.5
          }
        ],
        viazalnoye: [
          {
            type: 'Настройка швейной машины',
            price: 30
          },
          {
            type: 'Смазка',
            price: 20
          },
          {
            type: 'Дефектовка челнока',
            price: 40.5
          },
          {
            type: 'Дефектовка челнока',
            price: 40.5
          },
          {
            type: 'Дефектовка челнока',
            price: 40.5
          },
          {
            type: 'Дефектовка челнока',
            price: 40.5
          }
        ],
        parogladilnoye: [
          {
            type: 'Настройка швейной машины',
            price: 30
          },
          {
            type: 'Смазка',
            price: 20
          },
          {
            type: 'Дефектовка челнока',
            price: 40.5
          },
          {
            type: 'Дефектовка челнока',
            price: 40.5
          },
          {
            type: 'Дефектовка челнока',
            price: 40.5
          }
        ]
      };

});


(function ($) {
    $(document).ready(function () {

        $('.diagnostic-problems__item-title').on('click', function(e) {

            $(e.delegateTarget.nextElementSibling).toggle (200, 'linear');

        });

        $('.prices-pricelist').pricelistTabs({
            duration: 500,
            eventTrigger: 'click'
        });

        /* Формы обратной связи */

        $('#remsew-fb1').wiFeedBack({
            fbScript: 'blocks/wi-feedback.php',
            fbLink: '.wi-fb1-link',
            fbColor: '#337ab7',
            fbTheme: false
        });

        $('#remsew-fb2').wiFeedBack({
            fbScript: 'blocks/wi-feedback.php',
            fbLink: false,
            fbColor: '#337ab7',
            fbTheme: false
        });

        $('#remsew-fb3').wiFeedBack({
            fbScript: 'blocks/wi-feedback.php',
            fbLink: false,
            fbColor: '#337ab7',
            fbTheme: false
        });


        /* Yandex maps */

        $.fn.remsewMapInit = function () {

          var remsewMapOptions = {
              center: [53.872858, 27.478045],
              zoom: 16,
              controls: ['zoomControl', 'fullscreenControl']
          }

          if (window.innerWidth < 768) {
            remsewMapOptions.behaviors = ['multiTouch'];
          } else {
            remsewMapOptions.behaviors = ['drag'];
          }

          var remsewMap = new ymaps.Map('remsew-map', remsewMapOptions);

          var remsewPlacemark = new ymaps.Placemark([53.872858, 27.478045], {
              hintContent: 'Ремонт швейной техники',
              balloonContentHeader: 'Ремонт швейной техники',
              balloonContentBody: 'Магазин-мастерская швейной техники и аксессуаров',
              balloonContentFooter: 'ул.Алибегова д.24'
          }, {
            iconLayout: 'default#image',
            iconImageHref: 'img/locationIcon.png',
            iconImageSize: [84, 43],
            iconImageOffset: [-15, -65]
        });

          remsewMap.geoObjects.add(remsewPlacemark);
      }

    });
})(jQuery);

new WOW().init();