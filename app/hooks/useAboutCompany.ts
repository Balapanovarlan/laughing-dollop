import { useQuery } from "@tanstack/react-query"
import { AboutCompany} from "../services/about_company"

export const useMainCompany = (language: string = 'ru') =>{
    return useQuery({
        queryKey: ['about', language],
        queryFn:() => AboutCompany.getMain(language),
    })
}

export const useDigitsCompany = (language: string = 'ru') => {
    return useQuery({
        queryKey: ['digits', language],
        queryFn: () => AboutCompany.getDigits(language),
    });
}

export const useSolutionCompany = (language: string = 'ru') => {
    return useQuery({
        queryKey:['unique-solution', language],
        queryFn: () => AboutCompany.getUniqueSolutions(language),
    })
}