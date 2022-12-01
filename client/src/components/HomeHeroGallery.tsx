import GalleryImage1 from '../assets/carousel-1.jpg';
import GalleryImage2 from '../assets/carousel-2.jpg';
import GalleryImage3 from '../assets/carousel-3.jpg';

export const HomeHeroGallery = (): JSX.Element =>
{
  return (
    <>
      <div 
      className="carousel w-full lg:h-[50vh] xl:h-[100vh]"
      >
        <div
        className="carousel-item relative w-full" 
        id="slide1" 
        >
          <img 
          className="w-full"
          src={GalleryImage1} 
          />
          <div 
          className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
          >
            <a
            className="btn btn-circle" 
            href="#slide3" 
            >
              ❮
            </a> 
            <a
            className="btn btn-circle" 
            href="#slide2" 
            >
              ❯
            </a>
          </div>
        </div> 
        <div
        className="carousel-item relative w-full" 
        id="slide2" 
        >
          <img
          className="w-full"  
          src={GalleryImage2}
          />
          <div 
          className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
          >
            <a
            className="btn btn-circle" 
            href="#slide1"
            >
              ❮
            </a> 
            <a
            className="btn btn-circle" 
            href="#slide3" 
            >
              ❯
            </a>
          </div>
        </div> 
        <div
        className="carousel-item relative w-full" 
        id="slide3" 
        >
          <img
          className="w-full"  
          src={GalleryImage3}
          />
          <div 
          className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
          >
            <a
            className="btn btn-circle" 
            href="#slide2"
            >
              ❮
            </a> 
            <a
            className="btn btn-circle" 
            href="#slide1" 
            >
              ❯
            </a>
          </div>
        </div> 
      </div>
    </>
  )
}