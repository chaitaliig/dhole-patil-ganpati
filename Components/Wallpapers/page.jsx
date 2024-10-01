import Image from "next/image";
import Script from "next/script";
import slideShowImage1 from '@/public/home-page/slideshow/slideshow1.jpg'
import slideShowImage2 from '@/public/home-page/slideshow/slideshow2.jpg'
import slideShowImage3 from '@/public/home-page/slideshow/slideshow3.jpg'
import slideShowImage4 from '@/public/home-page/slideshow/slideshow4.jpg'
import slideShowImage5 from '@/public/home-page/slideshow/slideshow5.jpg'
import slideShowImage6 from '@/public/home-page/slideshow/slideshow6.jpg'


export default function Wallpapers(){
    return(
        <div className='my-5'>
                <h3 className='text-center tracking-wider font-bold'>WALLPAPERS</h3>
                <div className='md:px-14 mt-4'>
                    <swiper-container className="w-100 h-100" slides-per-view="3" mousewheel-force-to-axis="true" navigation="true" space-between="30"
                        centered-slides="true" autoplay-delay="2500" speed="2000" autoplay-disable-on-interaction="false" loop="true">
                        <swiper-slide><Image className="w-100" src={slideShowImage1} alt="SlideShow1" /></swiper-slide>
                        <swiper-slide><Image className="w-100" src={slideShowImage2} alt="SlideShow2" /></swiper-slide>
                        <swiper-slide><Image className="w-100" src={slideShowImage3} alt="SlideShow3" /></swiper-slide>
                        <swiper-slide><Image className="w-100" src={slideShowImage4} alt="SlideShow4" /></swiper-slide>
                        <swiper-slide><Image className="w-100" src={slideShowImage5} alt="SlideShow5" /></swiper-slide>
                        <swiper-slide><Image className="w-100" src={slideShowImage6} alt="SlideShow6" /></swiper-slide>
                    </swiper-container>

                    <Script src='https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js'></Script>
                </div>
            </div>
    )
}