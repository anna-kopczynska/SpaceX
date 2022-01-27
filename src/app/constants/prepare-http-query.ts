import { HttpQueryModel } from '../shared/models/http-query.model';
import { SearchFormModel } from '../shared/models/search-form.model';

export function prepareHttpQuery(
  page: number,
  query?: SearchFormModel
): HttpQueryModel {
  let httpQuery = {
    options: { sort: { date_utc: 'desc' }, limit: 20, page },
    query: {},
  };

  if (query) {
    httpQuery.query = {
      ...(query.name && { name: { $regex: query.name, $options: 'i' } }),
      ...(query.fromDate &&
        query.toDate && {
          date_utc: {
            $gte: query.fromDate,
            $lte: new Date(
              query.toDate.setDate(query.toDate.getDate() + 1)
            ).toISOString(),
          },
        }),
      ...(query.success && { success: query.success }),
    };
  }
  return httpQuery;
}
