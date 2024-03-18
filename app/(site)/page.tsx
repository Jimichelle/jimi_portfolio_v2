import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col p-5 text-right text-white z-10">
      <video className="absolute inset-0 object-cover w-full h-full z-0" autoPlay loop muted >
          <source src="background.mp4" type="video/mp4" />
        </video>
            <h1 className="font-bold text-xl py-1 z-10">
                Welcome to my portfolio
            </h1>
            <p className="text-sm py-1 z-10">
                I&apos;m a junior developer with a passion for web development. I&apos;m currently learning Next.js and other web technologies
            </p>
            <p className="text-sm py-1 z-10">
                I&apos;m from France and I&apos;m studying Computer Science
            </p>
    </main>
  );
}
