import { HSBAColor } from '@shopify/polaris';

export namespace API {
  export namespace Image {
    export interface QuoteInput {
      text: string;
      color: HSBAColor;
    }

    export type QuoteOutput = string;
  }
}
