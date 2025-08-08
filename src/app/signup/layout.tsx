import Link from 'next/link';

export default function SignupLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="fixed top-0 left-0 flex h-screen w-full items-center justify-center">
      <main className="flex w-[440px] flex-col gap-10">
        <div className="flex flex-col gap-3">
          <h1 className="text-[28px] font-medium">회원가입</h1>
          <p className="text-gray-700">나만의 캐릭터를 만들고 공유하세요</p>
        </div>
        <section className="flex flex-col gap-10">
          {children}
          <p className="flex w-full justify-center gap-1 text-sm font-medium text-gray-700">
            계정이 있으신가요?
            <Link href="/login">
              <u className="text-black">로그인</u>
            </Link>
          </p>
        </section>
      </main>
    </div>
  );
}
