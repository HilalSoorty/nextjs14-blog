import Link from "next/link";
import { ModeToggle } from "./Modetoggle";

export default function NavBar (){
    return(
        <nav className="w-full  relative flex items-center justify-between max-w-2xl mx-auto px-4 py-5">
        <Link className="font-bold text-3xl" href='/'>
            Hilal<span className="text-primary">Blog</span>
        </Link>
        <ModeToggle/>
        </nav>
    )
}
