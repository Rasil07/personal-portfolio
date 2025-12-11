export interface Role {
  company: string;
  role: string;
  location: string;
  dates: string;
  description: string[];
  skills?: string[];
}

export interface Education {
  institution: string;
  degree: string;
  location: string;
  dates: string;
  details: string;
}

export interface Publication {
  title: string;
  authors: string[];
  conference: string; // or 'journal' / 'source'
  date: string;
  url: string;
}

export interface ResumeData {
  roles: Role[];
  education: Education[];
  publications: Publication[];
}
