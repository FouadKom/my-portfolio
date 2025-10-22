import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "Programming Languages",
    description:
      "Java, Python",
    rating: 5,
    icon: Icons.nextjs,
  },
  {
    name: "LLM & GenAI Toolkits",
    description:
      "LangChain, Hugging Face Transformers, RAG, and Prompt Engineering",
    rating: 4,
    icon: Icons.nextjs,
  },
  {
    name: "ML/DL Frameworks",
    description:
      "Scikit-learn, XGBoost, TensorFlow, Keras",
    rating: 4,
    icon: Icons.react,
  },
  {
    name: "Database Management",
    description:
      "SQL, MySQL",
    rating: 5,
    icon: Icons.nextjs,
  },
  {
    name: "Data Handling",
    description:
      "Pandas, NumPy, Feature Engineering",
    rating: 4,
    icon: Icons.graphql,
  },
  {
    name: "Tools & Platforms",
    description:
      "Git, Jupyter Notebook, VSCode, Linux",
    rating: 4,
    icon: Icons.nestjs,
  },
  {
    name: "Concepts",
    description:
      "Classification, Regression, Cross-Validation, Hyperparameter Tuning",
    rating: 3,
    icon: Icons.express,
  },
];

export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
