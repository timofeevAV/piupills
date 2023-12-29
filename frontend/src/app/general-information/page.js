import { BackBtn } from "@/components/buttons/backBtn"

export const metadata = {
  title: 'Общая информация',
  description: 'Условия доставки, оплаты и заказа товаров',
}

export default function Ship() {
  return (
    <>
      <BackBtn/>
      <div className="w-full px-[20px] absolute top-[120px] text-[#d9d9d9] flex flex-col gap-10 selection:text-[#2b2b2b] selection:bg-[#d9d9d9]">
        <h1 className="text-2xl uppercase font-bold text-[#f5f5f5]">Условия доставки, оплаты и заказа товаров</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mx-[20px]">
          <div>
            <h2 className="text-xl uppercase font-bold text-[#f5f5f5]">Про изделия</h2>
            <ul className="list-disc">
              <li>все мои изделия - это авторская керамика ручной работы</li>
              <li>для создания я использую керамические массы, в составе которых преобладает глина</li>
              <li>каждое изделие покрыто глазурью, которая безопасна для контакта с пищей</li>
              <li>я не использую в своих работах полимерную глину</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl uppercase font-bold text-[#f5f5f5]">На заказ</h2>
            <ul className="list-disc">
              <li>делаю на заказ копии своих изделий, если их нет в наличии</li>
              <li>приступаю к выполнению заказа после предоплаты 50%</li>
              <li>изготовление заказа занимает примерно три недели</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl uppercase font-bold text-[#f5f5f5]">Кастомный заказ</h2>
            <ul className="list-disc">
              <li>не делаю копии других мастеров</li>
              <li>не распечатываю картинки/фотографии на кружках и другой посуде, этим занимаются специальные салоны</li>
              <li>не делаю работы на политические темы</li>
            </ul>
            <h3 className="uppercase font-bold text-[#f5f5f5]">Могу воплотить вашу задумку, если:</h3>
            <ul className="list-disc">
              <li>идея мне понравится</li>
              <li>тематика похожа на мои изделия</li>
              <li>у меня имеются необходимые материалы</li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl uppercase font-bold text-[#f5f5f5]">Доставка</h2>
            <ul className="list-disc">
              <li>отправляю почтой России (либо другими службами по договоренности)</li>
              <li>стоимость рассчитывается согласно тарифам службы доставки</li>
              <li>стоимость зависит от удаленности вашего города и веса посылки</li>
              <li>для жителей Перми возможна личная встреча для передачи заказа</li>
              <li>доставка оплачивается дополнительно (в среднем выходит 300-400₽)</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}