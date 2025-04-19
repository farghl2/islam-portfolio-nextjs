export type Service = {
  title: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  description: string;
};

export type Project = {
  img: string;
  title: string;
  description: string;
  link: string;
  tools:string[]
};
