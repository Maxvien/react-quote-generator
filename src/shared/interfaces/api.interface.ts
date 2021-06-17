import { HSBAColor } from '@shopify/polaris';

export namespace API {
  export namespace Image {
    export interface Input {
      text: string;
      color: HSBAColor;
    }

    export type Output = string;
  }
}
