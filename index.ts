export type AsyncTaskModel<R = any, E = any> = {
  isInit?: boolean;
  isLoading?: boolean;
  result?: R;
  error?: E;
  lastRequestDate?: Date;
  lastResponseDate?: Date;
};
