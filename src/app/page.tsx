'use client';

import { Filter, Plus, Search } from '@/assets';
import Button from '@/components/button';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { FormEvent, useState, useRef, useEffect } from 'react';

// 상수 정의
const BANNER_WIDTH = 580;
const BANNER_GAP = 24;
const BANNER_TOTAL_WIDTH = BANNER_WIDTH + BANNER_GAP;
const VISIBLE_BANNER_COUNT = 3;
const AUTO_PLAY_INTERVAL = 4000; // 4초

export default function Home() {
  const sp = useSearchParams();
  const [query, setQuery] = useState(sp.get('query') ?? '');
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const autoPlayTimerRef = useRef<NodeJS.Timeout | null>(null);
  const router = useRouter();

  // 배너 데이터 (실제로는 API에서 가져올 수 있음)
  const originalBanners = [
    { id: 1, title: '배너 1' },
    { id: 2, title: '배너 2' },
    { id: 3, title: '배너 3' },
    { id: 4, title: '배너 4' },
  ];

  // 가상 배너 오프셋을 배너 개수에 따라 동적으로 계산
  const VIRTUAL_BANNER_OFFSET = originalBanners.length - 1;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.replace(`.${query ? `?query=${query}` : ''}`);
  };

  // 스크롤 이벤트 핸들러
  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      // 가상 배너를 고려하여 실제 배너 인덱스 계산
      // VIRTUAL_BANNER_OFFSET을 빼서 가상 배너 오프셋을 보정
      const index = Math.round(scrollLeft / BANNER_TOTAL_WIDTH - VIRTUAL_BANNER_OFFSET);
      // 0~(배너개수-1) 범위로 제한
      const actualIndex =
        ((index % originalBanners.length) + originalBanners.length) % originalBanners.length;
      setCurrentBannerIndex(actualIndex);

      // 사용자가 직접 스크롤한 경우 자동 재생 일시 중지
      if (isAutoPlaying) {
        handleUserInteraction();
      }
    }
  };

  // 특정 배너로 스크롤하는 함수
  const scrollToBanner = (index: number) => {
    if (scrollContainerRef.current) {
      // 가상 배너를 포함한 실제 스크롤 위치 계산
      // 첫 번째 배너가 가운데에 오도록 VIRTUAL_BANNER_OFFSET을 더함
      const scrollPosition = (index + VIRTUAL_BANNER_OFFSET) * BANNER_TOTAL_WIDTH;
      scrollContainerRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });
    }
  };

  // 다음 배너로 자동 전환하는 함수
  const goToNextBanner = () => {
    const nextIndex = (currentBannerIndex + 1) % originalBanners.length;
    scrollToBanner(nextIndex);
  };

  // 자동 재생 시작
  const startAutoPlay = () => {
    if (autoPlayTimerRef.current) {
      clearInterval(autoPlayTimerRef.current);
    }
    autoPlayTimerRef.current = setInterval(() => {
      if (isAutoPlaying) {
        goToNextBanner();
      }
    }, AUTO_PLAY_INTERVAL);
  };

  // 자동 재생 중지
  const stopAutoPlay = () => {
    if (autoPlayTimerRef.current) {
      clearInterval(autoPlayTimerRef.current);
      autoPlayTimerRef.current = null;
    }
  };

  // 사용자 상호작용 시 자동 재생 일시 중지
  const handleUserInteraction = () => {
    setIsAutoPlaying(false);
    stopAutoPlay();

    // 3초 후 자동 재생 재개
    setTimeout(() => {
      setIsAutoPlaying(true);
      startAutoPlay();
    }, 3000);
  };

  // 무한 스크롤을 위해 앞뒤로 배너 복제
  const banners = [
    ...originalBanners, // 원본 배너들
    ...originalBanners, // 복제된 배너들 (무한 스크롤용)
    ...originalBanners, // 추가 복제
  ];

  // 초기 스크롤 위치 설정 및 자동 재생 시작
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = VIRTUAL_BANNER_OFFSET * BANNER_TOTAL_WIDTH;
    }

    // 자동 재생 시작
    startAutoPlay();

    // 컴포넌트 언마운트 시 타이머 정리
    return () => {
      stopAutoPlay();
    };
  }, []);

  // currentBannerIndex가 변경될 때마다 자동 재생 재시작
  useEffect(() => {
    if (isAutoPlaying) {
      startAutoPlay();
    }
  }, [currentBannerIndex, isAutoPlaying]);

  return (
    <main className="mb-2 flex flex-col items-center gap-12 pt-6">
      <div className="flex h-12 w-160 gap-2.5 rounded-lg border border-gray-100 bg-gray-50 px-4 py-2.5">
        <Search />
        <form onSubmit={handleSubmit}>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full outline-none"
            placeholder="키워드나 제목을 입력해보세요"
          />
        </form>
      </div>
      <section className="flex w-full flex-col items-center justify-center gap-2 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_50%,transparent)]">
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          onMouseEnter={handleUserInteraction}
          onMouseLeave={handleUserInteraction}
          className="flex snap-x snap-mandatory justify-start gap-6 overflow-x-hidden scroll-smooth px-4"
          style={{
            width: '100%',
            maxWidth: `calc(${BANNER_WIDTH}px * ${VISIBLE_BANNER_COUNT} + ${BANNER_GAP}px * ${VISIBLE_BANNER_COUNT - 1} + 32px)`, // 3개 배너 + gap + padding
          }}
        >
          {banners.map((banner, index) => (
            <div
              key={`${banner.id}-${index}`}
              onClick={() => {
                handleUserInteraction();
                scrollToBanner(banner.id - 1);
              }}
              className={`flex h-[310px] w-[580px] flex-shrink-0 basis-[580px] items-center justify-center rounded-3xl rounded-br-[60px] bg-gray-100 text-gray-500`}
            >
              {banner.title}
            </div>
          ))}
        </div>
        <div className="flex gap-2 p-2.5">
          {originalBanners.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                handleUserInteraction();
                scrollToBanner(index);
              }}
              className={`h-1.5 w-1.5 rounded-full transition-colors duration-200 ${
                index === currentBannerIndex ? 'bg-green-400' : 'bg-gray-100'
              }`}
            />
          ))}
        </div>
      </section>
      <section className="flex w-320 flex-col gap-6">
        <div className="flex w-full flex-col gap-6">
          <h1 className="text-2xl font-medium">
            내가 참여중인 커뮤 <span className="font-semibold text-green-500">3</span>
          </h1>
          <div className="flex gap-3">
            <Button size="sm">커뮤 만들기</Button>
            <div className="flex h-9 w-90 items-center gap-2.5 rounded-lg border border-gray-100 bg-gray-50 px-2.5 py-2">
              <Search size={20} />
              <input className="w-full outline-none" placeholder="키워드나 제목을 입력해보세요" />
            </div>
            <div className="flex items-center justify-center rounded-md border border-dashed border-gray-200 p-1.5">
              <Filter />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-5 grid-rows-1 gap-2.5">
          <div className="flex h-[300px] w-full flex-col items-center justify-center gap-6 rounded-xl border border-gray-100">
            <div className="flex items-center justify-center rounded-[100px] bg-gray-50 p-5">
              <Plus />
            </div>
            <p className="text-xl font-medium">커뮤 만들기</p>
          </div>
          <div className="flex h-[300px] w-full flex-col items-center rounded-xl border border-gray-100">
            <Image src={''} alt="" className="h-45 w-full" />
            <div className="flex w-full flex-col gap-3 px-4 py-5">
              <div className="flex flex-col gap-2">
                <h1 className="text-lg font-semibold">우리들의 마지막 여름</h1>
                <p className="text-sm text-gray-500">참여 인원 2명 · 하루 전 활동</p>
              </div>
              <div className="inline-flex h-5 w-fit items-center justify-start gap-1.5 rounded-full bg-gray-100 py-1.5 pr-2.5 pl-2">
                <div className="h-[5px] w-[5px] rounded-full bg-gray-500"></div>
                <div className="text-center text-xs font-medium text-gray-500">완료</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="flex w-320 flex-col items-start justify-start gap-6">
        <div className="justify-start text-2xl font-medium text-black">이런 커뮤가 있어요</div>
        <div className="grid w-full grid-cols-2 gap-x-2 gap-y-2">
          <div className="flex w-full">
            <div className="flex items-center justify-center">
              <Image src={''} alt="" className="h-33.5 w-55 rounded-lg" />
            </div>
            <div className="bg-White inline-flex flex-col items-start justify-start gap-2 self-stretch overflow-hidden p-5">
              <div className="flex flex-col items-start justify-start gap-2">
                <div className="justify-start font-['Pretendard'] text-lg font-semibold text-black">
                  우리들의 마지막 여름
                </div>
                <div className="justify-start font-['Pretendard'] text-sm font-normal text-neutral-400">
                  참여 인원 2명 · 마지막 활동: 2025.07.25
                </div>
              </div>
              <div className="justify-start font-['Pretendard'] text-xs leading-none font-medium text-zinc-500">
                #약시리 #청춘 #고등학교
              </div>
              <div className="inline-flex h-5 items-center justify-start gap-1.5 rounded-full bg-green-100 py-1.5 pr-2.5 pl-2">
                <div className="h-[5px] w-[5px] rounded-full bg-green-500"></div>
                <div className="justify-start text-center font-['Pretendard'] text-xs leading-none font-medium text-green-500">
                  진행 중
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full">
            <div className="flex items-center justify-center">
              <Image src={''} alt="" className="h-33.5 w-55 rounded-lg" />
            </div>
            <div className="bg-White inline-flex flex-col items-start justify-start gap-2 self-stretch overflow-hidden p-5">
              <div className="flex flex-col items-start justify-start gap-2">
                <div className="justify-start font-['Pretendard'] text-lg font-semibold text-black">
                  우리들의 마지막 여름
                </div>
                <div className="justify-start font-['Pretendard'] text-sm font-normal text-neutral-400">
                  참여 인원 2명 · 마지막 활동: 2025.07.25
                </div>
              </div>
              <div className="justify-start font-['Pretendard'] text-xs leading-none font-medium text-zinc-500">
                #약시리 #청춘 #고등학교
              </div>
              <div className="inline-flex h-5 items-center justify-start gap-1.5 rounded-full bg-green-100 py-1.5 pr-2.5 pl-2">
                <div className="h-[5px] w-[5px] rounded-full bg-green-500"></div>
                <div className="justify-start text-center font-['Pretendard'] text-xs leading-none font-medium text-green-500">
                  진행 중
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
