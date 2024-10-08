import useSWR from "swr";
import { LeaderboardResponse, QuestionsResponse, TopicReport, TopicsResponse } from "@/models";

const fetcher = (url: string) => fetch(url).then((res) => res.json());


export const useTopics = () => {
  const { data, error, isLoading, mutate } = useSWR<
    TopicsResponse
  >(`/api/v1/topics`, fetcher);
  return {
    topics: data?.topics,
    count: data?.count,
    isLoading,
    isError: error,
    mutate,
  };
};

export const useTopicById = (id: number) => {
  const { data, error, isLoading } = useSWR<
    QuestionsResponse
  >(`/api/v1/topics/${id}`, fetcher);
  return {
    questions: data?.questions,
    topic: data?.topic,
    isLoading,
    isError: error,
  };
};

export const useReport = () => {
  const { data, error, isLoading } = useSWR<
    LeaderboardResponse
  >(`/api/v1/report`, fetcher);
  return {
    report: data?.data,
    count: data?.count,
    isLoading,
    isError: error,
  };
};

export const useReportById = (id: number) => {
  const { data, error, isLoading } = useSWR<
    LeaderboardResponse
  >(`/api/v1/report/${id}`, fetcher);
  return {
    report: data?.data,
    count: data?.count,
    isLoading,
    isError: error,
  };
};


export const useTopicReports = () => {
  const { data, error, isLoading } = useSWR<
    TopicReport[]
    >(`/api/v1/topics/stats2/1`, fetcher);
  return {
    topicReports: data,
    isLoading,
    isError: error,
  };
};