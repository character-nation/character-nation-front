import Button from '@/components/button';
import { Input } from '@/components/input';
import Link from 'next/link';

export default function SignUpUserInfoPage() {
  return (
    <>
      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <Input placeholder="2000" label="생년" required fullWidth />
          <p className="text-xs font-medium text-[#6c6c6c]">정확한 나이를 입력해주세요</p>
        </div>
        <div className="flex flex-col">
          <label className="mb-2 block text-sm font-medium text-gray-800">
            성별
            <span className="ml-1 text-green-500">*</span>
          </label>
          <form className="flex gap-2">
            <label className="w-full">
              <input type="radio" name="gender" value="남성" className="peer hidden" />
              <div className="flex h-[50px] w-full cursor-pointer items-center justify-center rounded-md border border-gray-200 p-4 font-medium text-gray-500 peer-checked:border-green-500 peer-checked:bg-green-50 peer-checked:text-green-500">
                남성
              </div>
            </label>
            <label className="w-full">
              <input type="radio" name="gender" value="여성" className="peer hidden" />
              <div className="flex h-[50px] w-full cursor-pointer items-center justify-center rounded-md border border-gray-200 p-4 font-medium text-gray-500 peer-checked:border-green-500 peer-checked:bg-green-50 peer-checked:text-green-500">
                여성
              </div>
            </label>
          </form>
        </div>
      </section>
      <Link href={'./category'}>
        <Button fullWidth>다음</Button>
      </Link>
    </>
  );
}
