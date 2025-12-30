// 퀵 버튼 목록
export const QUICK_ACTIONS = [
	{
		key: 'schedule',
		label: '학사일정',
		desc: '시험/방학/주요 일정',
		reply: '학사일정은 아래에서 확인할 수 있어요 🙂',
		links: [{ label: '학사일정 바로가기', href: '/schedule' }],
	},
	{
		key: 'sugang',
		label: '수강신청',
		desc: '신청/예비/시간표',
		reply: '수강신청 관련 메뉴로 안내할게요!',
		roles: ['student'],
		links: [
			{ label: '수강신청 바로가기', href: '/sugang' },
			{ label: '예비 수강신청 바로가기', href: '/sugang/pre' },
			{ label: '내 시간표 조회', href: '/sugang/timetable' },
			{ label: '강의 시간표 조회', href: '/sugang/list' },
		],
	},
	{
		key: 'grade',
		label: '성적',
		desc: '이번학기/학기별/누계',
		reply: '성적 메뉴는 아래에서 바로 이동할 수 있어요.',
		roles: ['student'],
		links: [
			{ label: '이번 학기 성적 확인', href: '/grade/current' },
			{ label: '학기별 성적 확인', href: '/grade/semester' },
			{ label: '누계 성적 확인', href: '/grade/total' },
		],
	},
	{
		key: 'break',
		label: '휴학/복학',
		desc: '휴학 신청/내역 확인',
		reply: '휴학 신청 및 내역은 아래 버튼으로 이동해요.',
		roles: ['student'],
		links: [
			{ label: '휴학 신청', href: '/break/application' },
			{ label: '휴학 신청 내역', href: '/break/list' },
		],
	},
	{
		key: 'break',
		label: '휴학 신청 처리',
		desc: '휴학 신청 내역 확인',
		reply: '휴학 신청 내역은 아래 버튼으로 이동해요.',
		roles: ['staff'],
		links: [{ label: '휴학 신청 처리', href: '/break/list/staff' }],
	},
	{
		key: 'notice',
		label: '공지사항',
		desc: '공지 목록/작성',
		reply: '공지사항은 아래에서 확인할 수 있어요.',
		links: [{ label: '공지 바로가기', href: '/notice' }],
	},
];