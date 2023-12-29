'use cleint'
import Link from "next/link";

export default function Notfound () {
    return (
        <div className="fixed inset-0 flex justify-center items-center">
            <p className='text-[#888] text-center select-none'>Страница не найдена. Перейти на <Link className='text-[#f5f5fa]' href={'/'}> главную страницу.</Link></p>
        </div>
    )
}