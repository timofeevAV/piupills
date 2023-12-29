import { BackBtn } from "@/components/buttons/backBtn";
import { formattedPrice } from "@/utils";

export const metadata = {
  title: 'Мастер-классы',
}

const getMasterClasses = async () =>{
  const res = await fetch(`${process.env.BASE_URL}/master-classes/`, { next: { revalidate: process.env.PRODUCTS_REVALIDATE } });
  if (!res.ok) {
    console.error('Ошибка загрузки товаров');
  }
  return res.json()
}

export default async function MasterClasses() {
  const masterClasses = await getMasterClasses();

  return (
    <>
      <BackBtn/>
      <section id='master-classes-schedule'
               className="mt-[65px] h-[calc(100vh-65px)] px-[20px] flex flex-col items-start md:flex-row gap-5
                          selection:text-[#2b2b2b] selection:bg-[#d9d9d9]">
          <div>
            <h1 className="text-[calc(100vw*0.065)] font-bold text-[#d9d9d9]/50">
              Расписание
            </h1>
          </div>
        {
          masterClasses && (
            <div className="w-full">
              <ul className="list-none divide-y">
                {
                  masterClasses.map((item, idx) => (
                    <li key={idx} className="flex flex-col-reverse sm:flex-row items-start justify-between text-xl text-[#d9d9d9]
                                             py-5">
                      <div className="flex flex-col text-bold">
                      <small className="text-xl">
                          {item.date}
                        </small>
                        <small className="ext-xl">
                          {formattedPrice(item.price)}
                        </small>
                      </div>
                      <h2 className="text-3xl">{item.theme.name}</h2>
                    </li>
                  ))
                }
              </ul>
            </div>
          )
        }
        
      </section>
    </>
  )
}