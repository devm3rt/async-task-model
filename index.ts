export type MyModel = {
  ads: string;
};

export const MyFunc = (asd: string) => {
  return 'asd';
};
export type AsyncTaskModel<R = any, E = any> = {
  isInit?: boolean; // Indicates whether the task is ever initialized
  isLoading?: boolean; // Indicates whether the task is currently loading
  result?: R; // Holds the result of the asynchronous task
  error?: E; // Holds any error encountered during the task
  lastRequestDate?: Date; // Timestamp for the last request date
  lastResponseDate?: Date; // Timestamp for the last response date
};
