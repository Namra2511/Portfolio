import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Services from "@/components/main/Services";
import Contact from "@/components/main/Contact";
import Certifications from "@/components/main/Certifications";

export default function Home() {
    return (
        <main className="h-full w-full">
			<div className="flex flex-col gap-20">
				<Hero />
				<Skills />
				<Services />
				<Projects />
				<Certifications />
				<Contact />
			</div>
        </main>
    );
}  