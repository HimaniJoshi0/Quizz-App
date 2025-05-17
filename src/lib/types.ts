export interface Navtypes {
  title: string
  link: string
}



export interface NavLink {
  title: string;
  to: string;
}

export interface NavSection {
  title: string;
  links: NavLink[];
}

export interface CardsType {
  title: string;
  description: string
}

export interface CommonResponse<T=unknown> {
  success: boolean
  message: string
  data?: T
}