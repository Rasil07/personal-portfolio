import Header from "@/Components/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <div className="font-display text-4xl text-primary-500"> Heading </div>
        <button className="glass-effect px-4 py-2 rounded-lg cursor-pointer ">
          Rasil
        </button>
      </div>
    </main>
  );
}
