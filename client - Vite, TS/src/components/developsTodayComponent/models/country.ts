export interface ICountry {
  /* FIXED */
  name: { common: string };
  region: string;
  /* FIXED */
  languages?: { [key: string]: string };
  capital?: string;
  /* FIXED */
  flags: { png: string };
}
