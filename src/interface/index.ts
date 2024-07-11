export interface StoreType {
  id: number
  phone?: string | null
  storeType?: string | null
  category?: string | null
  name?: string | null
  lat?: string | null
  lng?: string | null
  address?: string | null
  foodCertifyName?: string | null
}

export interface StoreApiResponse {
  data: StoreType[]
  totalPage?: number
  totalCount?: number
  page?: number
}
