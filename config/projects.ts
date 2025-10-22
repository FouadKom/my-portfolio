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
  projectName: string;
  category: ValidCategory[];
  shortDescription: string;
  websiteLink?: string;
  githubLink?: string;
  techStack: ValidSkills[];
  startDate: Date;
  endDate: Date;
  companyLogoImg?: any;
  descriptionDetails: DescriptionDetailsInterface;
  pagesInfoArr?: PagesInfoInterface[];
}

export const Projects: ProjectInterface[] = [
  {
    id: "yt-rag",
    projectName: "Youtube Video Summarization & RAG CHatbot",
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
    projectName: "RAG-based Arabic AI Chatbot & Public API ",
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
    projectName: "Energy Consupmtion Prediction Using Machine Learning",
    type: "Professional",
    category: ["Machine Learning", "Data Science"],
    shortDescription:
      "A predictive model using Logistic Regression, Random Forest, and XGBoost to forecast energy consumption in buildings.",
    githubLink: "",
    techStack: ["Scikit-Learn", "TensorFlow", "Pandas", "Numpy", "Python"],
    startDate: new Date("2025-05-01"),
    endDate: new Date("2025-05-01"),
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
    projectName: "LDS: Java Library for Linked Open Data Based Similarity Measures",
    type: "Professional",
    category: ["Public Tool", "Maven Library", "Semantic Measures Library", "Linked Open Data"],
    shortDescription:
      "LDS (Linked Data Similarity) is a Java library developed as the main project of my PhD research, designed to calculate semantic similarity over Linked Open Data (LOD). It implements a range of measures to quantify similarity between RDF resources, enabling research and applications in semantic web, recommendation systems, and knowledge graph analysis.",
    githubLink: "https://github.com/FouadKom/lds",
    techStack: ["Java", "Apache Maven", "Apache Jena", "MapDB", "SPARQL"],
    startDate: new Date("2021-07-14"),
    endDate: new Date("2022-07-01"),
    descriptionDetails: {
      paragraphs: [
        "LDS (Linked Data Similarity) is a Java library developed as the main project of my PhD research, designed to calculate semantic similarity over Linked Open Data (LOD).", 
        "It implements a range of measures to quantify similarity between RDF resources, enabling research and applications in semantic web, recommendation systems, and knowledge graph analysis.",
      ],
      bullets: [
        "Implements multiple semantic similarity measures for Linked Open Data, including LDSD, Resim, LODS, and PICSS.",
        "Supports advanced extensions such as typeless and weighted variants (e.g., TLDSD, WLDSD, WTLDSD, TResim, WResim, WTResim).",
        "Integrates with Apache Jena and the Semantic Measures Library for RDF-based similarity computation.",
        "Provides both Maven dependency integration and standalone usage, with built-in unit tests for all implemented measures.",
        "Enables researchers to compute correlation metrics using LdBenchmark and extend the library with custom similarity measures.",
        "Focuses on scalable, efficient semantic similarity calculation for large linked datasets."
          ],
    },
  },

  {
    id: "graphman",
    projectName: "GraphManager for RDF Graphs",
    type: "Professional",
    category: ["Public Tool"],
    shortDescription:
      "An open-source Java-based library for creating, traversing, and managing semantic graphs.",
    githubLink: "https://github.com/FouadKom/GraphManager",
    techStack: ["Java", "Apache Jena", "MapDB", "SPARQL"],
    startDate: new Date("2018-07-13"),
    endDate: new Date("2018-07-13"),
    descriptionDetails: {
      paragraphs: [
        "GraphManager is a Java-based library for building and analyzing semantic graphs.", 
        "It was developed as part of my PhD research to facilitate exploration, traversal, and management of linked data and knowledge graphs.",
      ],
      bullets: [
          "Generates semantic graphs using the Semantic Measures Library (SLIB).",
          "Supports both ingoing and outgoing edge traversal with filtering by predicates.",
          "Integrates with Apache Jena for SPARQL querying of RDF datasets (e.g., DBpedia).",
          "Provides recursive resource traversal up to a configurable depth (level).",
          "Includes utilities for inspecting, printing, and removing vertices and edges.",
          "Prevents redundant traversal via a set of tracked resources.",
          "Designed for research and analysis of linked data and semantic relationships."
      ],
    },
  },
];

export const featuredProjects = Projects.slice(0, 3);
