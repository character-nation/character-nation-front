import { Input } from "@/components/input"
import Button from "@/components/button"

export default function SignupNicknamePage () {
    return (
        <>
            <div className="flex flex-col gap-7">
                <div className="flex flex-col gap-2">
                    <Input label="닉네임" required placeholder="닉네임" fullWidth/>
                    <p className="text-[12px] text-[#6c6c6c]">1~20자 이내, 특수문자 제외</p>
                </div>
                <div className="flex gap-2">
                    <Input type="checkbox" className="h-fit"/>
                    <p className="text-[12px]">[필수] <u>서비스 이용 약관</u>에 동의합니다.</p>
                </div>
            </div>
            <Button>
              다음
            </Button>
        </>
    )
}