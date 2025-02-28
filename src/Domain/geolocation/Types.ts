interface Location {
  city: string;
}

export type GetLocationDbType = () => Promise<Location>;
export type ReverseGeocodingType = (
  latitude: string,
  longitude: string
) => Promise<Location>;

export type Coordinates = {
  latitude?: number,
  longitude?: number
}

export type GeoLocationTypes = GetLocationDbType | ReverseGeocodingType;
