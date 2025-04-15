import { Card, CardContent } from "@/components/ui/card"

export default function Introduction() {
  return (
    <section className="w-full py-12 md:py-16 bg-background">
      <div className="container px-4 md:px-6">
        <Card className="bg-background/60 backdrop-blur-sm border-cyan-500/20">
          <CardContent className="p-6 md:p-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">Welcome to The Aqua Club</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  At The Aqua Club, we specialize in delivering luxury poker experiences tailored to your needs. Our
                  comprehensive service portfolio includes high quality poker equipment, playing cards and chips, as
                  well as high-skilled, professional dealers to enhance your venue, corporate event, private celebration
                  or home game.
                </p>
                <p>
                  We are committed to designing customized solutions that align with your requirements and budget.
                  Contact us today to plan an unforgettable poker experience!
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
