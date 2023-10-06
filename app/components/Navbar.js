import Link from "next/link"

export default function Navbar() {
  return (
    <header class="text-gray-600 body-font">
    <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
      <Link href={'/'} class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span class="ml-3 text-xl">Home</span>
      </Link>
      <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
        <Link href={"/about"} class="mr-5 hover:text-gray-900">About</Link>
        <Link href={"/contact"} class="mr-5 hover:text-gray-900">Contact</Link>
        <Link href={"/alltodos"} class="mr-5 hover:text-gray-900">All Todos</Link>
        <Link href={"/yourtodos"} class="mr-5 hover:text-gray-900">Your Todos</Link>
      </nav>
      <Link href={'/authentication/signup'} class="me-3 inline-flex items-center bg-purple-500 border-0 py-1 px-3 focus:outline-none hover:bg-purple-200 rounded text-base mt-4 md:mt-0 text-white">Signup
      </Link>
      
    </div>
  </header>
  )
}
