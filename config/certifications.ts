import { Certificate } from "crypto";

export interface CertificationInterface {
  title: string;
  description: string;
  issuer: string;
  date: string;
  logo?: string; // image URL
  link?: string; // Optional link to verification
}

export const certifications: CertificationInterface[] = [
  {
    title: "Fundamentals of Machine Learning",
    description:
      "The course presents foundational machine learning concepts, including linear and logistic regression, neural networks and fine-tuning, decision trees, and ensemble learning.",
    issuer: "Class++",
    date: "May 2025",
  },
  {
    title: "Data Visualization",
    description:
      "The course teaches fundamental data visualization techniques using Python and the Seaborn libraray.",
    issuer: "Kaggle",
    date: "June 2024",
    link: "https://www.kaggle.com/learn/certification/fouadkomeiha/intermediate-machine-learning",
  },
  {
    title: "Data Pre-processing Techniques",
    description:
      "Explains techniques for Handling Missing Values, Categorical Variables, Cross Validation, and Data Leakage Prevention.",
    issuer: "Kaggle",
    date: "May 2024",
    link: "https://www.kaggle.com/learn/certification/fouadkomeiha/intermediate-machine-learning",
  },
  {
    title: "Introduction to Pandas Library",
    description:
      "A practical introduction to using the Pandas library for data manipulation and analysis, covering essential functions and techniques to efficiently handle and analyze structured data in Python.",
    issuer: "Kaggle",
    date: "May 2024",
    link: "https://www.kaggle.com/learn/certification/fouadkomeiha/pandas",
  },
  {
    title: "Supervised Machine Learning",
    description:
      "A hands-on course covering core supervised learning techniques including regression, classification, and evaluation using real-world datasets.",
    issuer: "DeepLearning.AI",
    date: "April 2023",
    link: "https://www.coursera.org/account/accomplishments/certificate/UZ3UNJZ4BXVB",
  },
  {
    title: "Advanced Learning Algorithms",
    description:
      "Focused on building and optimizing neural networks through advanced machine learning techniques including regularization, optimization, and multiclass learning.",
    issuer: "DeepLearning.AI",
    date: "June 2023",
    link: "https://www.coursera.org/account/accomplishments/certificate/BS7UT4Z9DKMF",
  },
  {
    title: "Unsupervised Learning, Recommenders, Reinforcement",
    description:
      "Explored key AI techniques including clustering, recommender systems, and reinforcement learning to build autonomous decision-making solutions.",
    issuer: "DeepLearning.AI",
    date: "September 2023",
    link: "https://www.coursera.org/account/accomplishments/certificate/YDQVSLZZP8H9",
  },
];

export const featuredCertificates = certifications.slice(0, 3);