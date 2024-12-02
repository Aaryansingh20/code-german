import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, GraduationCap, Users } from 'lucide-react'
import Image from 'next/image'

export default function CourseGrid() {
  const courses = [
    {
      title: "Level A1",
      description: "Difficulty: Beginners Level",
      duration: "2 Months",
      level: "Beginner",
      students: "1.5k+",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Level A2",
      description: "Difficulty: Elementary Level",
      duration: "2 Months",
      level: "Elementary",
      students: "1.2k+",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Level B1",
      description: "Difficulty: Intermediate Level",
      duration: "3 Months",
      level: "Intermediate",
      students: "900+",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Level B2",
      description: "Difficulty: Post Intermediate Level",
      duration: "3 Months",
      level: "Advanced",
      students: "750+",
      image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ]

  return (
    <section id="courses" className="py-12 px-4 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto max-w-[87rem] px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-black">
            Language Learning Levels
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose your perfect starting point and advance your language skills
          </p>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
          {courses.map((course, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden border-2 transition-all bg-white"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  width={600}
                  height={400}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="mb-2 bg-blue-100 text-blue-700 hover:bg-blue-200">
                    {course.level}
                  </Badge>
                </div>
                <CardTitle className="text-2xl text-red-700">{course.title}</CardTitle>
                <CardDescription className="text-base">{course.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{course.students} students</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#f2b31e] hover:bg-[#f9d98c] text-white">
                  <GraduationCap className="mr-2 h-4 w-4" />
                  Enroll Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

