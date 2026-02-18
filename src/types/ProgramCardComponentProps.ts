export interface ProgramCardProps {
  img: string;
  title: string;
  ageRange: string;
  description: string;
  skills: string[];
  onClick?: () => void;
  buttonText?: string;
  className?: string;
}