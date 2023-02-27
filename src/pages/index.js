import Image from "next/image";
import Link from "next/link";
import { Libre_Baskerville } from "next/font/google";

const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  style: ["italic"],
  subsets: ["latin"],
  variable: "--font-baskerville",
});

export default function Home() {
  return (
    <>
      <main
        className={`${libreBaskerville.variable} uppercase font-bold`}
      >
        <nav className="italic flex justify-between items-center p-5 max-w-7xl w-full mx-auto">
          <Link href="#">
            <Image
              src="img/logo_jp.svg"
              alt="Eastsiders logo"
              width={400}
              height={400}
            />
          </Link>

          <div className="flex gap-3">
            <Link href="#" className="text-white text-lg">
              Sobre nós
            </Link>
            {/* <Link href="#" className="text-white text-lg">
              Teste
            </Link>
            <Link href="#" className="text-white text-lg">
              Teste
            </Link> */}
          </div>
        </nav>

        <section className="h-[600px] bg-cover bg-center bg-red-500 w-full relative bg-[url('../../public/photos/carrousel.png')]">
          <button className="bg-white grid uppercase italic p-3 absolute left-1/2 -translate-x-1/2 top-1/3 -translate-y-1/2">
            <span className="text-xl --font-baskerville">Compre já</span>
            <span>Testeira Eastsiders</span>
          </button>
        </section>
      </main>
    </>
  );
}
