import NavBar from "../components/NavBar";
import Link from "next/link";

export default function Country(){
    return(
        <div>
            <NavBar />
            <h1>Country List</h1>
            
            <ul>
                <li>
                    <Link href="/country/pakistan">Pakistan</Link>
                    <br/>
                    <Link href="/country/china">China</Link>
                    <br/>
                    <Link href="/country/india">India</Link>
                    <br/>
                    <Link href="/country/usa">USA</Link>
                    <br/>
                    <Link href="/country/turkey">Turkey</Link>
                    <br/>
                    <Link href="/country/bangladesh">Bangladesh</Link>
                </li>
            </ul>
        </div>
    )
}