import Hero from "@/components/hero"
import Introduction from "@/components/introduction"
import Services from "@/components/services"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Introduction />
      <Services />
      <Contact />
      <Footer />
    </main>
  )
}
