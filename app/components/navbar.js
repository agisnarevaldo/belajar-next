import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="flex justify-between p-10">
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/blog">Blog</Link>
    </nav>
  )
}
