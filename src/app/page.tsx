import { Button } from "@/components/ui/button"
import { FiDownload } from "react-icons/fi"

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left space-y-4">
            <span className="text-xl">
              Python Developer
            </span>
            <h1 className="h1 mb-6">
              Hi, I'm <br /><span className="text-accent">Rodrigo Negrete</span>
            </h1>
            <p className="max-w-125 mb-9 text-white/80">
              I excel at building efficient and scalable applications, leveraging my expertise in Python to create innovative solutions that drive business success.
            </p>
            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                <span>Download Resume</span>
                <FiDownload className="size-6" />
              </Button>
              <div className="mb-8 xl:mb-0">
              </div>
            </div>
          </div>
          {/* photo */}
          <div>photo</div>
        </div>
      </div>
    </section>
  )
}

export default Home