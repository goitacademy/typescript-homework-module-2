/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum dayWeek {
	MONDAY,
	TUESDAY,
	WEDNESDAY,
	THURSDAY,
	FRIDAY,
	SATURDAY,
	SUNDAY,
}

function isWeekend(todayDay: dayWeek): boolean {
	return dayWeek.SATURDAY === todayDay || dayWeek.SUNDAY === todayDay;
}
