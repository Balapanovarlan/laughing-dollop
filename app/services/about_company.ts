import { api } from "../utils/api";

export const getMain = async (language: string = "ru") => {
  const res = await api.get("/about-companies/main", 
    {
      headers: { "Accept-Language": language },
    });
  return res.data.data;
};

export const getDigits = async(language: string = 'ru') =>{
  const res = await api.get('/about-companies/digits',
      {
        headers: {'Accept-Language': language}
      });
  return res.data.data;
}

export const getUniqueSolutions = async (language: string = 'ru') => {
  const res = await api.get('/about-companies/unique-solutions', 
      {
        headers : {'Accept-Language': language}
      });
  return res.data.data;
}

export const AboutCompany = {getMain , getDigits , getUniqueSolutions };