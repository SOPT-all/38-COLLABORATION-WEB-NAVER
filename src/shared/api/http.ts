import {type AxiosInstance} from 'axios';
import {type z} from 'zod';

import {publicInstance} from '@/shared/api/axios';
import {createApiSuccessSchema} from '@/shared/api/reponse-schemas';

export const http = {
  get: async <T>(
    url: string,
    dataSchema: z.ZodType<T>,
    instance: AxiosInstance = publicInstance
  ): Promise<T> => {
    const response = await instance.get(url);
    const result = createApiSuccessSchema(dataSchema).parse(response.data);
    return result.data as T;
  },
};
