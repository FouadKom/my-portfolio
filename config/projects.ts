import { ValidCategory, ValidExpType, ValidSkills } from "./constants";

interface PagesInfoInterface {
  title: string;
  imgArr: string[];
  description?: string;
}

interface DescriptionDetailsInterface {
  paragraphs: string[];
  bullets: string[];
}

export interface ProjectInterface {
  id: string;
  type: ValidExpType;
  companyName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "yt-rag",
    companyName: "Youtube Video Summarization & RAG CHatbot",
    type: "Personal",
    category: ["Genarative AI", "Retrieval Augmented Generation"],
    shortDescription:
      "A Retrieval Augmented Generation project that provide answers to user queries based on Arabic docuements",
    websiteLink: "",
    techStack: [
      "LangChain",
      "Google Gemini",
      "HuggingFace",
      "Chroma DB",
      "YouTube Transcript API",
      "Local Embeddings",
      "Python",
    ],
    startDate: new Date("2025-10"),
    endDate: new Date("2025-10"),
    companyLogoImg: "",
    pagesInfoArr: [

    ],
    descriptionDetails: {
      paragraphs: [
        "Undertook this project to gain hands-on experience with RAG pipelines and GenAI workflows, bridging the gap between theoretical knowledge of LLMs and real-world implementation.",
      ],
      bullets: [
            "Developed a Retrieval-Augmented Generation (RAG) pipeline for YouTube videos, retrieving and processing video transcripts using the YouTube Transcript API.",
            "Utilized LangChain to structure the workflow for transcript ingestion, chunking, embedding generation, and context retrieval.",
            "Integrated Gemini as the core LLM for conversational responses, supported by local embedding models for efficient semantic similarity search.",
            "Enhanced the pipeline with a Hugging Face Transformer summarization model to generate concise and coherent summaries of long-form video content.",
            "Implemented chat history tracking to maintain multi-turn conversational context and improve user interaction flow.",
            "Stored and queried embeddings using ChromaDB, optimizing retrieval performance and relevance.",
      ],
    },
  },

  {
    id: "arabic-rag",
    companyName: "RAG-based Arabic AI Chatbot & Public API ",
    type: "Personal",
    category: ["Genarative AI", "Retrieval Augmented Generation"],
    shortDescription:
      "A Retrieval Augmented Generation project that provide answers to user queries based on Arabic documents",
    githubLink: "",
    techStack: [
      "LangChain",
      "Google Gemini",
      "Chroma DB",
      "Local Embeddings",
      "FastAPI",
      "Ngrok",
      "Python",
    ],
    startDate: new Date("2025-09"),
    endDate: new Date("2025-09"),
    companyLogoImg: "",
    pagesInfoArr: [

    ],
    descriptionDetails: {
      paragraphs: [
        "Built this project to gain practical experience in multilingual GenAI applications, specifically handling Arabic text and integrating it with LLMs for contextual question answering.",
      ],
      bullets: [
          "Built an end-to-end Retrieval-Augmented Generation (RAG) pipeline that retrieves and processes online PDFs for contextual question answering in Arabic.",
          "Leveraged LangChain to orchestrate document loading, text chunking, embedding generation, and query retrieval workflows.",
          "Integrated Google Gemini as the LLM for reasoning and response generation, combined with local Arabic embedding models for semantic search.",
          "Used ChromaDB as a vector store to manage embeddings and enable efficient document retrieval.",
          "Developed a FastAPI backend to expose the RAG pipeline as a public API, deployed via ngrok for rapid testing and prototyping.",
          "Created an interactive Next.js frontend with a chat-style interface, enabling real-time communication with the API.",
      ],
    },
  },


  {
    id: "capstone-project",
    companyName: "Energy Consupmtion Prediction Using Machine Learning",
    type: "Professional",
    category: ["Machine Learning", "Data Science"],
    shortDescription:
      "A predictive model using Logistic Regression, Random Forest, and XGBoost to forecast energy consumption in buildings.",
    githubLink: "",
    techStack: ["Scikit-Learn", "TensorFlow", "Pandas", "Numpy", "Python"],
    startDate: new Date("2025-05-01"),
    endDate: new Date("2025-05-01"),
    companyLogoImg: "",
    pagesInfoArr: [

    ],
    descriptionDetails: {
      paragraphs: [
        "Applied theoretical ML knowledge to a real-world problem (energy prediction), bridging coursework with practical AI engineering experience.",
      ],
      bullets: [
        "Developed a predictive model using supervised learning algorithms (Logistic Regression, Random Forest, XGBoost) to predict energy consumption in buildings.",
        "Optimized hyperparameters to enhance predictive accuracy.",
        "This project was a final project submission at the end of an online course for Machine Learning.",
      ],
    },
  },

  {
    id: "lds",
    companyName: "LDS: Java Library for Linked Open Data Based Similarity Measures",
    type: "Professional",
    category: ["Public Tool", "Maven Library"],
    shortDescription:
      "An open-source Java-Maven project implementing important existing semantic similarity measures.",
    githubLink: "https://github.com/FouadKom/lds",
    techStack: ["Java", "Maven"],
    startDate: new Date("2021-07-14"),
    endDate: new Date("2022-07-01"),
    companyLogoImg: "/projects/apex/logo.png",
    pagesInfoArr: [

    ],
    descriptionDetails: {
      paragraphs: [
        "An open-source Java-Maven project implementing important existing semantic similarity measures.",
        "LDS was the work of my research internship with the university of Tours, that we continued developing throughout my PhD work.",
      ],
      bullets: [
          
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
