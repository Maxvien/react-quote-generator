import { DependencyList } from 'react';
import { useQuery, UseQueryOptions } from 'react-query';

import { apiService } from '@app/frontend/services/api.service';
import { QuoteImageInput } from '@app/shared/interfaces/api.interface';
import { QUOTE_IMAGE_QUERY } from '@app/frontend/constants/query.constant';

export namespace ImageService {
  export async function getQuote(input: QuoteImageInput) {
    return apiService.post<string>('quote-image', input).then(({ data }) => data);
  }

  interface UseListInput {
    input: QuoteImageInput;
    options?: UseQueryOptions<string, Error>;
  }

  export function useQuote({ input, options }: UseListInput, deps: DependencyList = []) {
    return useQuery(
      [QUOTE_IMAGE_QUERY, ...deps],
      () => {
        return getQuote(input);
      },
      options
    );
  }
}
