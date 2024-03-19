import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center border-white/15 border border-solid rounded-lg text-white mt-6 ml-5 mr-5 h-16 backdrop-blur-lg bg-white/10 ">
        <div className="justify-self-start ml-9">Hello</div>
      <nav className="flex-grow items-center justify-center hidden lg:flex gap-x-9">
        <Link href="/catalogue" className="text-white hover:text-gray-300">Catalogue</Link>
        <Link href="/about"className="text-white hover:text-gray-300">About</Link>
        <Link href="/location" className="text-white hover:text-gray-300">Location</Link>
        <Link href="/our-team"className="text-white hover:text-gray-300">Our Team</Link>
      </nav>
      <button className="items-center justify-self-end border-2 border-btn_border mr-9 rounded-lg p-1 px-1.5 hover:border-green-500">Contact Us</button>
    </header>
  );
}
