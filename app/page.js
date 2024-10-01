import Script from 'next/script';
import Navbar from '@/Components/Navbar/Navbar';
import styles from './page.module.css'
import welcomeImage from '@/public/home-page/welcome-image.jpg'
import Image from 'next/image';
import Link from 'next/link';
import DailyAbhishek from '@/public/home-page/daily-abhishek.jpg'
import EDonation from '@/public/home-page/e-donation.jpg'
import SocialInitiative from '@/public/home-page/social-initiative.jpg'
import Gallery from './Gallery';
import Wallpapers from '@/Components/Wallpapers/page';
import Footer from '@/Components/Footer/Footer';

export const metadata = {
  title: "Dhole Patil Ganpati - Pune, Maharashtra, India",
  description: "Dhole Patil Ganpati Mandir is a famous temple located in Pune, Maharashtra, India. It is dedicated to Lord Ganesha, who is worshipped as the primary deity in the temple. The temple is located in the heart of Pune city and is a popular destination for locals and tourists alike.",
  keywords: ['Dhole Patil Ganpati','Dhole Patil','Pune', 'Kharadi', 'Ganpati','donate','dhole patil ganpati mandir'],
  openGraph: {
    title: 'Dhole Patil Ganpati - Pune, Maharashtra, India',
    description: 'Dhole Patil Ganpati Mandir is a famous temple located in Pune, Maharashtra, India. It is dedicated to Lord Ganesha, who is worshipped as the primary deity in the temple. The temple is located in the heart of Pune city and is a popular destination for locals and tourists alike.',
    url: 'https://dholepatilganpati.com',
  }
}

export default function Home() {
  return (
    <main>
      <div>
        <div className={styles.SlideDiv}>
          <Navbar />
          <div className={styles.Slider}>
          </div>
        </div>
      </div>

      <div className='px-7 container mx-auto my-8 text-center'>
        <div className='row'>
          <div className='col-lg-6 mb-5'>
            <h1 className='font-bold'>WELCOME</h1>
            <p className='mt-3 font-medium tracking-wide'>Dhole Patil Ganpati is a deeply cherished deity among devotees. It symbolizes pride and honor for the city of Pune, drawing devotees from all over India and the world to pray to Lord Ganesha each year.
              The Dhole Patil Ganpati Temple is not just a revered place of worship but also an institution actively involved in social welfare and cultural development through the Dhole Patil Charitable Trust.
              The temple has a rich and illustrious history. The Ganpati festival has been celebrated with great faith and enthusiasm, not only by Dhole Patil's family but also by the entire neighborhood.</p>
            <Link href='/about'><button className='rounded-3 bg-[#42032c] text-white  px-4 py-2 mt-2'>ABOUT</button></Link>
          </div>
          <div className='col-lg-6 d-flex justify-content-center align-items-center'>
            <Image className='rounded-3 md:h-80' src={welcomeImage} width={500} />
          </div>
        </div>
      </div>

      <div className='px-7 container mx-auto my-5'>
        <h3 className='text-center tracking-wider mb-4 font-bold'>SCHEDULE</h3>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">DAILY SCHEDULE</th>
              <th scope="col">UPCOMING SCHEDULE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="w-50"><strong>Daily Temple Timing - </strong>6:00 AM to 11:00 PM (Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, and Sunday)</td>
              <td><strong>9th April 2024, Tuesday -</strong> Gudi Padwa</td>
            </tr>
            <tr>
              <td><strong>Morning Aarti -</strong> 07:30 AM to 07:45 AM</td>
              <td><strong>12th April 2024, Friday -</strong>Vinayaka Chaturthi</td>
            </tr>
            <tr>
              <td><strong>Evening Aarti -</strong> 07:30 PM to 07:45 PM</td>
              <td><strong>27th April 2024, Saturday -</strong> Vikata Sankashti Chaturthi; Moonrise at 09:23 PM</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className='px-7 container mx-auto pt-5'>
        <div className='row'>

          <div className='col-6 col-lg-4 lg:px-12 mb-5'>
            <div className='flex justify-center'>
              <Image src={EDonation} className="w-full h-48 md:h-80 rounded-3" alt="..." />
            </div>
            <p className='text-2xl text-center tracking-wider my-4 font-bold'>E-DONATION</p>
            <div className='text-center'>
              <Link href="/edonation"><button className='rounded-3 bg-[#42032c] text-white  px-4 py-2'>DONATE NOW</button></Link>
            </div>
          </div>
          <div className='col-6 col-lg-4 lg:px-12 mb-5'>
            <div className='flex justify-center'>
              <Image src={SocialInitiative} className="w-full h-48 md:h-80 rounded-3" alt="..." />
            </div>
            <p className='text-2xl text-center tracking-wider my-4 font-bold'>SOCIAL INITIATIVES</p>
            {/* <div className='text-center'>
              <Link href="/social"><button className='rounded-3 bg-[#42032c] text-white  px-4 py-2'>BOOK NOW</button></Link>
            </div> */}
          </div>
          <div className='col-6 col-lg-4 lg:px-16 mb-5 '>
            <div className='flex justify-center'>
              <Image src={DailyAbhishek} className="w-80 md:w-full h-48 md:h-80 rounded-3" alt="..." />
            </div>
            <p className='text-2xl text-center tracking-wider my-4 font-bold'>E-SEVA</p>
            <div className='text-center'>
              <Link href="/eseva"><button className='rounded-3 bg-[#42032c] text-white  px-4 py-2'>BOOK NOW</button></Link>
            </div>
          </div>
        </div>
      </div>

      <div className='my-3'>
        <h3 className='text-center tracking-wider mb-4 font-bold'>GALLERY</h3>
        <Gallery />
      </div>
      <Wallpapers />
      <Footer />
    </main>
  );
}
