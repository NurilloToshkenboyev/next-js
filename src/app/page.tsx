import { Logo } from "./icon/logo";
import { Button } from "@/components/ui/button";
import { Manu } from "./icon/manu"
import { Input } from "@/components/ui/input";
import { Search } from "./icon/search";
import { Like } from "./icon/like";
import { Korzinka } from "./icon/korzinka";
import { User } from "./icon/user";
import { PhoneCatigory } from "./phone-catigory";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <header className="w-[100%] py-7 shadow-lg shadow-gray-300 flex items-center justify-between px-10">
        <Logo />
        <Button startIcon={<Manu />} type="submit" className="w-[130px] h-[50px] bg-yellow-300 flex items-center justify-center" >Каталог</Button>
        <label className=" flex items-center justify-between w-[550px] h-[48px] border-2 border-gray-400 px-5">
          <Input type="text" className="w-[250px] h-[30px] rounded-full px-3 outline-none " placeholder="Поиск" />
          <Search />
        </label>
        <div className="flex items-center justify-center gap-8" >
          <span className="flex flex-col items-center ">
            <User />
            <span className="text-sm mt-2">Войти</span>
          </span>
          <span className="flex flex-col items-center ">
            <Like />
            <span className="text-sm mt-2">Избранное</span>
          </span>
          <span className="flex flex-col items-center ">
            <Korzinka />
            <span className="text-sm mt-2">
              Корзина
            </span>

          </span>
        </div>
      </header>
      <section className="w-[100%] h-[100px] shadow-lg shadow-gray-300 bg-gradient-to-r from-sky-400  to-indigo-400 text-white flex font-bold text-lg items-center justify-center gap-10">
        <Link href={"about"}>About</Link>
        <Link href={"contact"}>Contact</Link>
      </section>
      <section className="  w-[100%] h-[90vh] flex items-center justify-center " >
        <PhoneCatigory/>
      </section>
    </div>
  );
}
