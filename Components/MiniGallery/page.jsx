"use client";
import { useState } from "react";
import { MiniGalleryImages } from "./MiniGalleryImages";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

export default function MiniGallery() {
    const [index, setIndex] = useState(-1);
    return (
        <div className="border mt-5">
            <h5 className="font-bold tracking-wide my-2 text-center">GALLERY</h5>
            <PhotoAlbum layout="rows" photos={MiniGalleryImages} onClick={({ index }) => setIndex(index)} />
            <Lightbox
                slides={MiniGalleryImages}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                // enable optional lightbox plugins
                plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
            />
        </div>
    )
}