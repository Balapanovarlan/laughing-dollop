import { useQuery } from "@tanstack/react-query"
import { AboutCompany} from "../services/about_company"

export const useMainCompany = (language: string = 'ru') =>{
    return useQuery({
        queryKey: ['about company', language],
        queryFn:() => AboutCompany.getMain(language),
    })
}