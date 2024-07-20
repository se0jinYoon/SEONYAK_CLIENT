// 오늘의 선약, 확정 대기, 예정 약속, 지난 약속 조회
// 200(OK): 성공

export const PENDING_SCH_PAST_LIST = {
  myNickname: '김창균',
  pending: [
    {
      appointmentId: 1,
      appointmentStatus: 'PENDING',
      seniorId: 18,
      nickname: '조승희',
      image: 'https://example.com/senior1.jpg',
      field: '공학계열',
      company: 'SOPT Makers',
      position: '개발',
      detailPosition: 'FE챕터장',
      level: '2년 차',
    },
  ],
  scheduled: [
    {
      appointmentId: 2,
      appointmentStatus: 'SCHEDULED',
      seniorId: 18,
      nickname: '홍석범',
      image: 'https://example.com/senior2.jpg',
      field: '공학계열',
      company: '다이닝코드',
      position: '개발',
      detailPosition: 'BE Developer',
      level: '5년 차',
      date: '2024.08.05',
      startTime: '14:30',
      endTime: '15:00',
    },
  ],
  past: [
    {
      appointmentId: 3,
      appointmentStatus: 'PAST',
      seniorId: 18,
      nickname: '오훈',
      image: 'https://example.com/senior3.jpg',
      field: '예체능계열',
      company: '선약',
      position: '디자인',
      detailPosition: 'UX 디자이너',
      level: '8년 차',
      date: '2024.07.05',
      startTime: '14:00',
      endTime: '14:30',
    },
    {
      appointmentId: 4,
      appointmentStatus: 'REJECTED',
      seniorId: 18,
      nickname: '백예린',
      image: 'https://example.com/senior4.jpg',
      field: '예체능계열',
      company: '선약',
      position: '디자인',
      detailPosition: 'UI 디자이너',
      level: '11년 차',
    },
  ],
};
