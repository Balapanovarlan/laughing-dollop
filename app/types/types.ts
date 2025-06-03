import { ReactNode } from "react";

export interface LayoutProps {
    children : ReactNode;
}

export interface MainInfo{
  description : string;
  image: string;
  title: string;
}

export interface testData {
  id: number;
  title: string;
  text: string;
  photo: string;
  date: string;
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
}

export type  HeaderProps = {
   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export type SidebarProps = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export interface IFormData  {
  name: string,
  email: string,
  phone_number: string,
}