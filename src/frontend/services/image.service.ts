import { DependencyList } from 'react';
import { useQuery, UseQueryOptions } from 'react-query';

import { apiService } from '@app/frontend/services/api.service';
import { API } from '@app/shared/interfaces/api.interface';
import { QUOTE_IMAGE_QUERY } from '@app/frontend/constants/query.constant';

export namespace ImageService {
  export async function createQuote(input: API.Image.QuoteInput) {
    return apiService.post<string>('images/create', input).then(({ data }) => data);
  }

  interface UseQuoteInput {
    input: API.Image.QuoteInput;
    options?: UseQueryOptions<string, Error>;
  }

  export function useCreateQuoteQuote({ input, options }: UseQuoteInput, deps: DependencyList = []) {
    return useQuery(
      [QUOTE_IMAGE_QUERY, ...deps],
      () => {
        return createQuote(input);
      },
      options
    );
  }
}
