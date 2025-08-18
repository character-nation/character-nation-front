import Button from '@/components/button';

export default function NoticePage() {
  const NoticeList = () => {
    return (
      <div className="flex w-full gap-6 border-b border-b-gray-50 px-2 py-6">
        <div className="flex w-full flex-col gap-2">
          <p>공지사항 설정</p>
          <p className="text-gray-500">규칙과 수위표, 이벤트 날짜 등을 설정해요</p>
        </div>
        <p className="whitespace-nowrap text-gray-200">1분 전</p>
      </div>
    );
  };

  return (
    <div className="flex h-screen w-full justify-center">
      <div className="min-h-screen w-full max-w-7xl">
        {/* 내비게이션 바 */}
        <div className="flex min-h-screen w-full gap-4">
          <div className="flex min-h-screen w-full flex-col gap-6 border-r border-gray-100">
            <div className="flex w-full items-end justify-between gap-6 border-b border-gray-100 p-6">
              <div className="flex flex-col gap-7">
                <p className="">공지사항</p>
                <p className="">나만의 고유한 세계관을 만들고 사람들과 공유해요</p>
              </div>
              <div className="flex gap-2">
                <Button size="sm" variant="ghost">
                  프로필 조건 설정
                </Button>
                <Button size="sm">공지 작성</Button>
              </div>
            </div>
            <div className="flex flex-col gap-6 p-6">
              {/* 메인 공지 */}
              <div className="flex w-full gap-6 rounded-xl border border-gray-100 px-5 py-6">
                <div className="flex w-full flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <div className="flex rounded-sm bg-green-200 px-2 py-0.5">
                      <p className="text-green-700">필독</p>
                    </div>
                    <p>우리들의 마지막 여름 커뮤 공지사항</p>
                  </div>
                  <p className="text-gray-500">
                    본 커뮤는 일상힐링 반막커뮤입니다. 심한 막커 분위기와 일상힐링에 맞지 않는 과한
                    불행서사, 우울한 분위기를 지양합니다.
                  </p>
                </div>
                <p className="text-gray-200">2025.08.01</p>
              </div>
              {/* 공지 목록 */}
              <div className="w-full rounded-xl border border-gray-100 px-4 py-2">
                {Array(3)
                  .fill(0)
                  .map((_, i) => (
                    <NoticeList key={i} />
                  ))}
              </div>
            </div>
          </div>
          {/* 커뮤 정보 */}
        </div>
      </div>
    </div>
  );
}
