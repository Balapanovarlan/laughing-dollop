import { api } from "../utils/api";

export const getMain = async (language: string = "ru") => {
  const res = await api.get("/about-companies/main", 
    {
      headers: { "Accept-Language": language },
    });
  return res.data.data;
};

const getDigits = (language: string = 'ru') =>{
    return api.get('/about-companies/digits',
      {
        headers: {'Accept-Language': language}
      })
}

const getUniqueSolutions = (language: string = 'ru') => {
    return api.get('/about-companies/unique-solutions', 
      {
        headers : {'Accept-Language': language}
      }
    )
}

export const AboutCompany = {getMain , getDigits , getUniqueSolutions };