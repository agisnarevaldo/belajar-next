import Link from "next/link"
import Brand from "./brand"

export default function Navbar() {
  return (
    <nav className="flex justify-between py-5 px-10 max-xl items-center">
      <Brand />
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/blog">Blog</Link>
    </nav>
  )
}
