import { useImmer } from 'use-immer';
import { Spinner, Banner } from '@shopify/polaris';
import { Layout } from '@app/frontend/components/layout';
import { Form } from '@app/frontend/components/form';
import { ImageService } from '@app/frontend/services/image.service';
import { QuoteImageOutput, QuoteImageInput } from '@app/shared/interfaces/api.interface';

interface Props {
  initialData: QuoteImageOutput;
}

interface State extends QuoteImageInput {}

const initialState: State = {
  text: 'Hello World!',
  color: {
    hue: 1,
    saturation: 0,
    brightness: 1,
    alpha: 1,
  },
};

Page.getInitialProps = async (): Promise<Props> => {
  return { initialData: await ImageService.getQuote(initialState) };
};

export default function Page({ initialData }: Props) {
  const [state, setState] = useImmer<State>(initialState);

  const { isFetching, isError, data, error } = ImageService.useQuote(
    { input: state, options: { initialData, refetchOnMount: false } },
    [state]
  );

  return (
    <Layout>
      <Form defaultData={state} onSubmit={(data) => setState(data)} />
      <br />
      {(() => {
        if (isFetching) {
          return (
            <div style={{ textAlign: 'center' }}>
              <Spinner accessibilityLabel="Loading..." size="small" />
            </div>
          );
        }

        if (isError) {
          return <Banner title="Error">{error.message}</Banner>;
        }

        return <img src={data} alt="" width="100%" />;
      })()}
    </Layout>
  );
}
