import {HomeHeroGallery} from '../components/HomeHeroGallery';
import {ProductCardGrid} from '../components/ProductCardGrid';
import NRGProductData from '../json/NRGProduct.json';

export const Home = (): JSX.Element =>
{
  console.log(NRGProductData);
  return  (
    <>
      <div 
      className="w-full"
      id="page"
      >
        <HomeHeroGallery />
        <div 
        className="w-full px-[5vw] pt-6"
        id="header"
        >
          <p
          className="w-full text-center text-black text-2xl font-black lg:text-3xl xl:text-4xl"
          >
            NRG x UFC GYM: TRAIN DIFFERENT
          </p>
          <p
          className="w-full text-center text-slate-400 text-sm font-black lg:text-md xl:text-lg"
          >
            EACH ORDER INCLUDES 1 FREE MONTH MEMBERSHIP AT UFC GYM
          </p>
        </div>
        <div
        className="grid grid-cols-2 gap-y-2 mt-4" 
        id="ufc-grid"
        >
          <ProductCardGrid 
          id={NRGProductData[0].id}
          images={NRGProductData[0].images}
          name={NRGProductData[0].name}
          price={NRGProductData[0].price}
          />
          <ProductCardGrid 
          id={NRGProductData[1].id}
          images={NRGProductData[1].images}
          name={NRGProductData[1].name}
          price={NRGProductData[1].price}
          />
          <ProductCardGrid 
          id={NRGProductData[2].id}
          images={NRGProductData[2].images}
          name={NRGProductData[2].name}
          price={NRGProductData[2].price}
          />
          <ProductCardGrid 
          id={NRGProductData[3].id}
          images={NRGProductData[3].images}
          name={NRGProductData[3].name}
          price={NRGProductData[3].price}
          />
        </div>
      </div>
    </>
  )
}