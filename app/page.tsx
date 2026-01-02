import Nav from "@/components/Nav"
import { Hero } from "@/components/Hero"
import { PaketHarga } from "@/components/PaketHarga"
import { Portfolio } from "@/components/Portfolio"
import { Customer } from "@/components/Customer"
import { Footer } from "@/components/Footer"
export default function Home() {
  return (
<>
<Nav />
<Hero />
<PaketHarga />
<Portfolio />
<Customer />
<Footer />
</>
  );
}
