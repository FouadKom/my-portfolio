import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description?: string;
  rating: number;
  icon?: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "Java",
    rating: 5,
    icon: Icons.java,
  },
  {
    name: "Python",
    rating: 4,
    icon: Icons.python,
  },
  {
    name: "Javascript",
    rating: 3,
    icon: Icons.javascript,
  },
  {
    name: "Langchain",
    rating: 4,
    icon: Icons.langchain,
  },
  {
    name: "Hugging Face",
    rating: 4,
    icon: Icons.huggingface,
  },
  {
    name: "Retrieval Augmented Generation (RAG)",
    rating: 4,
    icon: Icons.rag,
  },
  {
    name: "Linear Regression",
    rating: 4,
    icon: Icons.linearreg,
  },
  {
    name: "Logistic Regression",
    rating: 4,
    icon: Icons.logisticreg,
  },
  {
    name: "SQL",
    rating: 5,
    icon: Icons.sql,
  },
  {
    name: "MySQL",
    rating: 4,
    icon: Icons.mysql,
  },
  {
    name: "Scikit-learn",
    rating: 4,
    icon: Icons.scikit,
  },
  {
    name: "TensorFlow",
    rating: 4,
    icon: Icons.tensorflow,
  },
  {
    name: "Pandas",
    rating: 4,
    icon: Icons.pandas,
  },
  {
    name: "Numpy",
    rating: 4,
    icon: Icons.numpy,
  },
    {
    name: "Git",
    rating: 5,
    icon: Icons.git,
  },
  {
    name: "Linux",
    rating: 5,
    icon: Icons.linux,
  },
  {
    name: "Windows",
    rating: 5,
    icon: Icons.windows,
  },

];

export const skills = skillsUnsorted
  .slice()
  {/*.sort((a, b) => b.rating - a.rating);*/}

export const featuredSkills = skills.slice(0, 6);
