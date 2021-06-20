import { DependencyList } from 'react';
import { useQuery, UseQueryOptions } from 'react-query';

import { apiService } from '@app/frontend/services/api.service';
import { ApiInterface } from '@app/shared/interfaces/api.interface';
import { IMAGE_QUERY } from '@app/frontend/constants/query.constant';

export namespace ImageService {
  export async function create(input: ApiInterface.Image.Input) {
    return apiService.post<string>('images/create', input).then(({ data }) => data);
  }

  interface UseCreateInput {
    input: ApiInterface.Image.Input;
    options?: UseQueryOptions<string, Error>;
  }

  export function useCreate({ input, options }: UseCreateInput, deps: DependencyList = []) {
    return useQuery(
      [IMAGE_QUERY, ...deps],
      () => {
        return create(input);
      },
      options
    );
  }
}
