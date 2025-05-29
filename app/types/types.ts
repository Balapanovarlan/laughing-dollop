import { ReactNode } from "react";

export interface LayoutProps {
    children : ReactNode;
}

export interface MainInfo{
  description : string;
  image: string;
  title: string;
}

export type  HeaderProps = {
   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export type SidebarProps = {
  isOpen: boolean
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}