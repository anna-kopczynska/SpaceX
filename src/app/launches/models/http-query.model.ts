export interface HttpQueryModel {
  query: QueryModel | {};
  options: OptionModel;
}
export interface OptionModel {
  select?: object | string;
  sort?: { [key: string]: string };
  offset?: number;
  page?: number;
  limit?: number;
  pagination?: boolean;
  populate?: [] | object | string;
}

export interface QueryModel {
  name?: {
    $regex: string;
    $options: string;
  };

  date_utc?: {
    $gte: any;
    $lte: any;
  };
  success?: boolean;
}
