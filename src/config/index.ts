type TSection = {
  id: string;
  label: string;
  icon?: React.ReactNode;
  url?: string;
};

export const SECTIONS: TSection[] = [
  { id: "intro", label: "Introduction", url: "/" },
  { id: "career", label: "Career", url: "/career" },
  { id: "skill", label: "Skills", url: "/skills" },
  // { id: "about", label: "About Me", url: "/about" },
  { id: "contact", label: "Contact", url: "/contact" },
];
