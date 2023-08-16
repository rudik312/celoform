 


// кнопки выбора продукта
const cel5 = document.querySelector('._icon-celoform-5');
const cel15 = document.querySelector('._icon-celoform-15');
const cel50 = document.querySelector('._icon-celoform-50');

// все кнопки магазинов
const markets = document.querySelectorAll('.mix');


cel5.addEventListener('click', function () {
markets.forEach(item => {
 if (item.classList.contains('category-5')) {

	 if (item.classList.contains('button_ozon')) {
		 item.setAttribute('href', 'https://kurl.ru/qlsUQ');
	 }
	 if (item.classList.contains('button_wildberries')) {
		 item.setAttribute('href', 'https://kurl.ru/vQhoC');
	 }
	 if (item.classList.contains('button_yamarket')) {
		 item.setAttribute('href', 'https://kurl.ru/WPURu');
	 }
	 if (item.classList.contains('button_sbermarket')) {
		 item.setAttribute('href', 'https://kurl.ru/YBIrU');
	 }
 }
 
});
});

cel15.addEventListener('click', function () {
markets.forEach(item => {
 if (item.classList.contains('category-15')) {

	 if (item.classList.contains('button_ozon')) {
		 item.setAttribute('href', 'https://kurl.ru/AfRvV');
	 }
	 if (item.classList.contains('button_wildberries')) {
		 item.setAttribute('href', 'https://kurl.ru/eMHjq');
	 }
	 if (item.classList.contains('button_yamarket')) {
		 item.setAttribute('href', 'https://kurl.ru/ffDpp');
	 }
	 if (item.classList.contains('button_sbermarket')) {
		 item.setAttribute('href', 'https://kurl.ru/IqJJB');
	 }
	 if (item.classList.contains('button_ali')) {
		 item.setAttribute('href', 'https://kurl.ru/KQmPb');
	 }
 }

});
});

cel50.addEventListener('click', function () {
markets.forEach(item => {
 if (item.classList.contains('category-50')) {

	 if (item.classList.contains('button_ozon')) {
		 item.setAttribute('href', 'https://kurl.ru/CHPsz');
	 }
	 if (item.classList.contains('button_wildberries')) {
		 item.setAttribute('href', 'https://kurl.ru/PJwiy');
	 }
	 if (item.classList.contains('button_yamarket')) {
		 item.setAttribute('href', 'https://kurl.ru/ibqqK');
	 }
	 if (item.classList.contains('button_ali')) {
		 item.setAttribute('href', 'https://kurl.ru/UOgak');
	 }
 }

});
});
