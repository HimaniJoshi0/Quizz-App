export interface Navtypes {
    title: string
    link: string
}

export interface Buttontypes{
    title:string
    onclick: () => void;
    classes:string
}

export interface NavLink {
    title: string;
    to: string;
  }
  
export  interface NavSection {
    title: string;
    links: NavLink[];
  }