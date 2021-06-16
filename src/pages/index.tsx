import { Page as PolarisPage, Layout, Card } from '@shopify/polaris';
import { DefaultLayout } from '@app/components/layouts/default-layout';

interface Props {}

Page.getInitialProps = async (): Promise<Props> => {
  return {};
};

export default function Page({}: Props) {
  return (
    <DefaultLayout>
      <PolarisPage title="AppAttic React Developer - Coding Skills Assessment">
        <Layout>
          <Layout.Section>
            <Card sectioned>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis quas assumenda magnam recusandae, nemo
              temporibus adipisci debitis provident necessitatibus illum expedita facere vel ratione dolorem eum atque
              tenetur blanditiis reiciendis?
            </Card>
          </Layout.Section>
        </Layout>
      </PolarisPage>
    </DefaultLayout>
  );
}
