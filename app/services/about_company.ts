import { api } from "../utils/api";

const getMain = async (language: string = "ru") => {
  const res = await api.get("/about-companies/main", 
    {
      headers: { "Accept-Language": language },
    });
  return res.data.data;
};

const getDigits = async(language: string = 'ru') =>{
  const res = await api.get('/about-companies/digits',
      {
        headers: {'Accept-Language': language}
      });
  return res.data.data;
}

const getUniqueSolutions = async (language: string = 'ru') => {
  const res = await api.get('/about-companies/unique-solutions', 
      {
        headers : {'Accept-Language': language}
      });
  return res.data.data;
}

export const AboutCompany = {getMain , getDigits , getUniqueSolutions };