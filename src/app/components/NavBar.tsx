import Link from "next/link";

export default function NavBar(){
    return(
        <nav>
            <Link href="/">Home</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
            <Link href="/aboutus">About Us</Link>&nbsp;|&nbsp;&nbsp;
            <Link href="/contactus">Contact Us</Link>&nbsp;|&nbsp;&nbsp;
            <Link href="/country">Country</Link>
        </nav>
    );
}