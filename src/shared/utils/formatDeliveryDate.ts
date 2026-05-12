const KOREAN_WEEKDAYS = ['일', '월', '화', '수', '목', '금', '토'];

export const formatKoreanDate = (date: Date) => {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const weekday = KOREAN_WEEKDAYS[date.getDay()];

  return `${month}.${day} (${weekday})`;
};

export const getTomorrowDate = () => {
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);

  return tomorrow;
};

export const getDeliveryDateInfo = () => {
  const tomorrow = getTomorrowDate();

  return {
    arrivalPrefix: '내일',
    arrivalDate: formatKoreanDate(tomorrow),
  };
};
