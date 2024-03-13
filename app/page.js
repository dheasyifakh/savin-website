import Hero from "./_components/Hero";
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Hero/>
      <div className="flex px-40 py-20">
        <div className="grid grid-cols-3 gap-4">
          <div className="mr-28">
            <img src="/assets/img/Logo-TCR.png" alt="" />
            <div className="flex mt-5 gap-4">
              <Link href="#">
                <img src="/assets/img/google-play-store.png"/>
              </Link>
              <Link href="#">
                <img src="/assets/img/apple-store.png"/>
              </Link>
            </div>
          </div>
          <div className="col-span-2">
            <h2 className="text-4xl font-bold mb-8">Teman Curhat Rohani</h2>
            <p className="mb-4 text-xl">Aplikasi Teman Curhat Rohani dirancang oleh Savin Solution sebagai platform anak-anak muda maupun dewasa Kristiani yang memiliki keluh kesah dalam kehidupan sehari-hari, namun tidak mempunyai tempat untuk bercerita.</p>
            <p className="mb-4 text-xl">Aplikasi ini diharapkan dapat menjadi sebuah bentuk dukungan emosional dengan kata-kata semangat melalui ayat-ayat yang berhubungan dengan masalah yang sedang mereka hadapi.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
