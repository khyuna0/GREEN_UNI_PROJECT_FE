import { getMonday, getWeekDates } from './DateTimeUtil';

/**
 * 한국 시간(KST) 기준으로 현재 시간을 가져오는 함수
 */
export const getKSTNow = () => {
	const now = new Date();
	const utc = now.getTime() + now.getTimezoneOffset() * 60 * 1000;
	return new Date(utc + 9 * 60 * 60 * 1000);
};

/**
 * 지난 시간인지 체크 (한국 시간 기준)
 */
export const isPastSlot = (date, startTime) => {
	// 슬롯 시간을 Date 객체로 생성 (YYYY-MM-DDTHH:00:00)
	const slotTime = new Date(`${date}T${String(startTime).padStart(2, '0')}:00:00`);

	// 한국 현재 시간과 비교
	return slotTime <= getKSTNow();
};

/**
 * 오늘 날짜 기준으로 이번 주 월요일(weekStartDate) 계산 (한국 시간 기준)
 */
export const getThisAndNextWeekStartDates = () => {
	const kstNow = getKSTNow();
	const thisMonday = getMonday(kstNow);
	const weekDates = getWeekDates(thisMonday);
	return weekDates[0]; // 이번 주 월요일 YYYY-MM-DD
};
