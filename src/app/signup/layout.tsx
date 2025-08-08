import Link from "next/link"

export default function SignupLayout({children}: {children: React.ReactNode}) {
    return ( 
    <div className="w-full h-screen fixed top-0 left-0 flex justify-center items-center">
      <main className="flex flex-col w-[440px] gap-10">
        <div className="flex flex-col gap-3">
          <h1 className="font-medium text-[28px]">회원가입</h1>
          <p className="text-gray-700">나만의 캐릭터를 만들고 공유하세요</p>
        </div>
        <section className="flex flex-col gap-10">
            {children}
            <p className="flex justify-center w-full gap-1">
              계정이 있으신가요?
              <Link href="/login">
                <u>로그인</u>
              </Link>
            </p>
        </section>
      </main>
    </div>
    )
}