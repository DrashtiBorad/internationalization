export const AllTranslation = ["common", "about-us"];

export enum ALLNameSpaces {
  COMMON = "common",
  AboutUs = "about-us",
}
export const nameSpaces: ALLNameSpaces[] = Object.values(ALLNameSpaces);

export enum languages {
  EN = "en",
  FR = "fr",  
}
export const locales: languages[] = Object.values(languages);
export const defaultNS = ALLNameSpaces.COMMON;
export const defaultLNG = languages.EN;
