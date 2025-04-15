import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="w-full py-24 md:py-32 lg:py-40 bg-gradient-to-b from-background to-background/80">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Experience Premium Poker at The Aqua Club
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Join us for sophisticated poker games, tournaments, and events in an exclusive environment.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600"
              >
                <Link href="#contact">Book a Game</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="#services">Our Services</Link>
              </Button>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-[350px] w-full overflow-hidden rounded-xl bg-gradient-to-b from-cyan-900/80 to-teal-900/80 p-1">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-3 grid-rows-3 gap-4 p-6">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div
                      key={i}
                      className="h-16 w-12 md:h-20 md:w-16 rounded-md bg-gradient-to-br from-cyan-500/20 to-teal-500/20 backdrop-blur-sm border border-white/10 flex items-center justify-center"
                    >
                      {i % 4 === 0 && <span className="text-2xl font-bold text-white/80">A♠</span>}
                      {i % 4 === 1 && <span className="text-2xl font-bold text-red-500/80">K♥</span>}
                      {i % 4 === 2 && <span className="text-2xl font-bold text-white/80">Q♣</span>}
                      {i % 4 === 3 && <span className="text-2xl font-bold text-red-500/80">J♦</span>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
