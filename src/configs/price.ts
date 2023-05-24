export const price = {
	header: [
		{
			id: 'empty',
			title: '',
		},
		{
			id: 'price-before-january',
			title: 'Стоимость ДО 1 января',
		},
		{
			id: 'price-after-january',
			title: 'Стоимость ПОСЛЕ 1 января',
		},
	],
	body: [
		{
			id: 'double-room',
			cell: [
				{
					id: 'title',
					title: 'С проживанием в 2-местном номере',
				},
				{
					id: 'price-before-january',
					title: '30 000 ₽',
				},
				{
					id: 'price-after-january',
					title: '35 000 ₽',
				},
			],
		},
		{
      id: 'single-room',
			cell: [
				{
					id: 'title',
					title: 'Доплата за 1-местное проживание',
				},
				{
					id: 'price-before-january',
					title: '500 ₽',
				},
				{
					id: 'price-after-january',
					title: '1 500 ₽',
				},
			],
		},
	],
};
