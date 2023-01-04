simplyCountdown('#cuenta', {
	year: 2023,
	month: 2,
	day: 4,
	hours: 18, 
	minutes: 0, 
	seconds: 0, 
	words: { 
		days: 'Día',
		hours: 'Hora',
		minutes: 'Minuto',
		seconds: 'Segundo',
		pluralLetter: 's'
	},
	plural: true, 
	inline: false, 
	inlineClass: 'simply-countdown-inline', 

	enableUtc: true, 
	refresh: 1000, 
	sectionClass: 'simply-section', 
	amountClass: 'simply-amount', 
	wordClass: 'simply-word', 
	zeroPad: false,
	countUp: false
});