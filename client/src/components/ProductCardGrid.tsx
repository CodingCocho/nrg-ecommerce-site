import {ProductCardProps} from '../interfaces/Props'

export const ProductCardGrid = (props: ProductCardProps): JSX.Element =>
{
  const {id, name, price, images,} = props;

  return (
    <>
      <div 
      className="w-[42.5vw] text-center lg:w-[20vw] mx-auto"
      id="card"
      >
        <img 
        alt="product" 
        className="w-full h-[200px]"
        src={images[0]} 
        />
        <p 
        className="text-black text-sm"
        >
          {name}
        </p>
        <p
        className="text-black text-md"
        >
          ${price}
        </p>
      </div>
    </>
  )
}