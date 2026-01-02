import Nav from "@/components/Nav"
import { Hero } from "@/components/Hero"
import { PaketHarga } from "@/components/PaketHarga"
import { Portfolio } from "@/components/Portfolio"
import { Customer } from "@/components/Customer"
export default function Home() {
  return (
<>
<Nav />
<Hero />
<PaketHarga />
<Portfolio />
<Customer />
</>
  );
}
