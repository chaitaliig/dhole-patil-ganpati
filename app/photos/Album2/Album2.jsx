"use client";
import { useState } from "react";
import { AlbumImages2 } from "./AlbumImages2";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// import optional lightbox plugins
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/plugins/thumbnails.css";

export default function Album2(){
    const [index, setIndex] = useState(-1);
    return(
        <>
        <PhotoAlbum layout="rows" photos={AlbumImages2} onClick={({ index }) => setIndex(index)} />
                <Lightbox
                    slides={AlbumImages2}
                    open={index >= 0}
                    index={index}
                    close={() => setIndex(-1)}
                    // enable optional lightbox plugins
                    plugins={[Fullscreen, Slideshow, Thumbnails, Zoom]}
                />
        </>
    )
}