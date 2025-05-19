// import { Footer } from '@/components/Footer'
import Header from "@/Components/Header";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full">
      <Header />
      <main className="flex-auto ">{children}</main>
      {/* <Footer /> */}
    </div>
  );
}
