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

    });
})(jQuery);