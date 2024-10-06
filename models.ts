// Database model for Topic
export interface Topic  {
    id?: number | null; // Optional
    name: string;
    description: string;
    source?: string | null; // Optional
    reward: string;
    email: string;
    questions: Question[]; // Related questions
}

// Database model for Question
export interface Question {
    id?: number | null; // Optional
    question: string;
    answer: string;
    options: string[]; // List of options
    topic_id: number; // Required
    topic: Topic; // Related topic
}

// Structure for multiple topics
export interface TopicsResponse {
    topics: Topic[];
    count: number;
}

// Structure for multiple questions
export interface QuestionsResponse {
    questions: Question[];
    topic: Topic,
}

// Email score structure
export interface EmailScore {
    email: string;
    score: number;
}

// Structure for Leaderboard
export interface LeaderboardResponse {
    data: EmailScore[];
    count: number;
}

export interface ResultResponse {
    topic_id: number;
    score: number;
    email: string;
}

export interface TopicReport {
    top: string;
    bottom: string;
    team_name: string;
}
