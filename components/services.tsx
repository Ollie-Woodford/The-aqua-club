import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Users, Calendar, Trophy, Clock, Shield } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: <Users className="h-10 w-10 text-cyan-500" />,
      title: "Private Games",
      description: "Exclusive poker games for you and your friends in a sophisticated environment.",
    },
    {
      icon: <Trophy className="h-10 w-10 text-cyan-500" />,
      title: "Tournaments",
      description: "Elite tournament services and organisation available upon request.",
    },
    {
      icon: <Calendar className="h-10 w-10 text-cyan-500" />,
      title: "Corporate Events",
      description: "Custom poker events for corporate team building and entertainment.",
    },
    {
      icon: <Award className="h-10 w-10 text-cyan-500" />,
      title: "VIP Experiences",
      description: "Premium poker experiences with professional dealers and luxury amenities.",
    },
    {
      icon: <Clock className="h-10 w-10 text-cyan-500" />,
      title: "24/7 Availability",
      description: "Flexible scheduling to accommodate your poker needs any time of day.",
    },
    {
      icon: <Shield className="h-10 w-10 text-cyan-500" />,
      title: "Secure Environment",
      description: "A safe and secure environment for all your poker activities.",
    },
  ]

  return (
    <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              The Aqua Club offers a range of premium poker services tailored to your preferences.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="bg-background/60 backdrop-blur-sm border-cyan-500/20 hover:border-cyan-500/40 transition-colors"
            >
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                {service.icon}
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
