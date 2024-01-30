let center = [55.755864, 37.617698];

function init() {
	let map = new ymaps.Map('map-test', {
		center: center,
		zoom: 10
	});
    let placemark = new ymaps.Placemark([55.755864, 37.617698], {}, {
		iconLayout: 'default#image',
		iconImageHref: 'public/map.svg',
		iconImageSize: [40, 40],
		iconImageOffset: [-19, -44]
	});
    let placemark2 = new ymaps.Placemark([55.798955, 37.378446], {}, {
		iconLayout: 'default#image',
		iconImageHref: 'public/map.svg',
		iconImageSize: [40, 40],
		iconImageOffset: [-19, -44]
	});
	map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол правил
  map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
  map.geoObjects.add(placemark);
  map.geoObjects.add(placemark2);
}

ymaps.ready(init);

