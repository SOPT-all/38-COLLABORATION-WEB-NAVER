/**
 * Date 객체를 "M월 D일" 형식의 문자열로 변환합니다.
 *
 * @param date - 변환할 Date 객체
 * @returns "M월 D일" 형식의 날짜 문자열 (예: "5월 11일")
 */
export const getFormattedDate = (date: Date) => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${month}월 ${day}일`;
};
