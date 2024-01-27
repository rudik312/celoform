

		// кнопки выбора продукта
	const cel5 = document.querySelector('._icon-celoform-5');
	const cel15 = document.querySelector('._icon-celoform-15');
	const cel50 = document.querySelector('._icon-celoform-50');

	// все кнопки магазинов
	const markets = document.querySelectorAll('.mix');

	const setListener = (element, type, handler) => {
		if(!element) {
			return; 
		}
		element.addEventListener(type, handler);
		return () => {
			element.removeEventListener(type, handler);
		};
	}

	
	setListener(cel5, 'click', function () {
		
	markets.forEach(item => {
		if (item.classList.contains('category-5')) {

				if (item.classList.contains('button_ozon')) {
					item.setAttribute('href', 'https://www.ozon.ru/product/tseloform-ranozazhivlyayushchee-sredstvo-gemostatik-5-gr-1082907013/?asb=GKfSOeK9sJhydDl89uBkGW1jHUSvKdvJcqZvftlSikk%253D&asb2=uXVMUckDGLrd6R0EFCy5Y9P0rqeveu0qLd_q-5yGE41jr5mVcWyuypgEaC0p56Ld&avtc=1&avte=2&avts=1692026998&keywords=целоформ&sh=RldFU2SoxQ');
				}
				if (item.classList.contains('button_wildberries')) {
					item.setAttribute('href', 'https://www.wildberries.ru/catalog/123404223/detail.aspx?targetUrl=EX');
				}
				if (item.classList.contains('button_yamarket')) {
					item.setAttribute('href', 'https://market.yandex.ru/product--tseloform-ranozazhivliaiushchii-por/1772758505?glfilter=36472990%3A36614773_101852307745&glfilter=14805583%3A1~1_101852307745&glfilter=23674510%3A5~5_101852307745&sku=101852307745&uniqueId=15661726&cpa=1');
				}
				if (item.classList.contains('button_farmlend')) {
					item.setAttribute('href', 'https://farmlend.ru/product/375508');
				}
			}

		});
	});

	setListener(cel15, 'click', function () {
	markets.forEach(item => {
		if (item.classList.contains('category-15')) {

				if (item.classList.contains('button_ozon')) {
					item.setAttribute('href', 'https://www.ozon.ru/product/tseloform-ranozazhivlyayushchee-sredstvo-gemostatik-15-gr-777854676/?asb=GKfSOeK9sJhydDl89uBkGW1jHUSvKdvJcqZvftlSikk%253D&asb2=uXVMUckDGLrd6R0EFCy5Y9P0rqeveu0qLd_q-5yGE41jr5mVcWyuypgEaC0p56Ld&avtc=1&avte=2&avts=1692026998&from_sku=1082907013&from_url=https%253A%252F%252Fwww.ozon.ru%252Fcategory%252Fkremy-lechebnye-31016%252Ftseloform-87297068%252F%253Fcategory_was_predicted%253Dtrue%2526deny_category_prediction%253Dtrue%2526from_global%253Dtrue%2526text%253D%2525D1%252586%2525D0%2525B5%2525D0%2525BB%2525D0%2525BE%2525D1%252584%2525D0%2525BE%2525D1%252580%2525D0%2525BC&keywords=целоформ&oos_search=false&sh=RldFU2SoxQ');
				}
				if (item.classList.contains('button_wildberries')) {
					item.setAttribute('href', 'https://www.wildberries.ru/catalog/133601677/detail.aspx?targetUrl=EX');
				}
				if (item.classList.contains('button_yamarket')) {
					item.setAttribute('href', 'https://market.yandex.ru/product--tseloform-ranozazhivliaiushchii-por/1772758505?glfilter=36472990%3A36614776_101849448730&glfilter=14805583%3A1~1_101849448730&glfilter=23674510%3A15~15_101849448730&sku=101849448730&uniqueId=15661726&cpa=1');
				}
				if (item.classList.contains('button_farmlend')) {
					item.setAttribute('href', 'https://farmlend.ru/kazan/product/375509');
				}
				if (item.classList.contains('button_ali')) {
					item.setAttribute('href', 'https://aliexpress.ru/item/1005005907035330.html?sku_id=12000034795979826&spm=a2g2w.productlist.search_results.8.5d614aa6S6uABu');
				}
			}

		});
	});

	setListener(cel50, 'click', function () {
	markets.forEach(item => {
		if (item.classList.contains('category-50')) {

				if (item.classList.contains('button_ozon')) {
					item.setAttribute('href', 'https://www.ozon.ru/product/tseloform-ranozazhivlyayushchee-sredstvo-gemostatik-50-gr-742609538/?asb=GKfSOeK9sJhydDl89uBkGW1jHUSvKdvJcqZvftlSikk%253D&asb2=uXVMUckDGLrd6R0EFCy5Y9P0rqeveu0qLd_q-5yGE41jr5mVcWyuypgEaC0p56Ld&avtc=1&avte=2&avts=1692026998&from_sku=1082907013&from_url=https%253A%252F%252Fwww.ozon.ru%252Fcategory%252Fkremy-lechebnye-31016%252Ftseloform-87297068%252F%253Fcategory_was_predicted%253Dtrue%2526deny_category_prediction%253Dtrue%2526from_global%253Dtrue%2526text%253D%2525D1%252586%2525D0%2525B5%2525D0%2525BB%2525D0%2525BE%2525D1%252584%2525D0%2525BE%2525D1%252580%2525D0%2525BC&keywords=целоформ&oos_search=false&sh=RldFU2SoxQ');
				}
				if (item.classList.contains('button_wildberries')) {
					item.setAttribute('href', 'https://www.wildberries.ru/catalog/108659341/detail.aspx?targetUrl=EX');
				}
				if (item.classList.contains('button_yamarket')) {
					item.setAttribute('href', 'https://market.yandex.ru/product--tseloform-ranozazhivliaiushchii-por/1772758505?glfilter=36472990%3A36472990_Other_101833337739&glfilter=14805583%3A1~1_101833337739&glfilter=23674510%3A50~50_101833337739&sku=101833337739&uniqueId=15661726&cpa=1');
				}
				if (item.classList.contains('button_ali')) {
					item.setAttribute('href', 'https://aliexpress.ru/item/1005005907243229.html?sku_id=12000034797302962&spm=a2g2w.stores.seller_list.0.157824d5WL4oHb');
				}
			}

		});
	});
