export interface ProductData
{
  id: string,
  category: string,
  type: string,
  name: string,
  price: number,
  images: string[],
  sizes: string[] | undefined,
  description: string[] | undefined,
  details: string[] | undefined,
  note: string | undefined
}

export interface ProductCardProps
{
  id: string,
  name: string,
  price: number,
  images: string[]
}

export interface ProductDataJSON
{
  data: ProductData[]
}

