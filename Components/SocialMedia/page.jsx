import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function SocialMedia() {
    return (
        <div className="border">
            <h5 className="font-bold tracking-wide my-2 text-center">FOLLOW US</h5>
            <div className="flex justify-around my-4">
                <Link href='https://www.instagram.com/dholepatilganpati/'><FontAwesomeIcon className="h-8" icon={faInstagram} width={40} color="red" /></Link>
                <Link href='https://www.youtube.com/@DholePatilGanpati'><FontAwesomeIcon className="h-8" icon={faYoutube} width={40} color="red" /></Link>
                <Link href='https://www.facebook.com/profile.php?id=61550938731488&mibextid=ZbWKwL'><FontAwesomeIcon className="h-8" icon={faFacebook} width={40} color="blue" /></Link>
            </div>
        </div>
    )
}