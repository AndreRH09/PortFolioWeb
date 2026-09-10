import Hero from "@/app/sections/hero/page";
import Projects from "@/app/sections/projects/page";
import Skills from "@/app/sections/skills/page";
import Certifications from "@/app/sections/certifications/page";
import Contact from "@/app/sections/contact/page";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Certifications />
      <Contact />
    </>
  );
}
