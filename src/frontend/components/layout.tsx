import { Frame, Button } from '@shopify/polaris';
import { Page as PolarisPage, Layout as PolarisLayout, Card } from '@shopify/polaris';
import React, { ReactNode, useState, useCallback, useRef } from 'react';

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => {
  const skipToContentRef = useRef(null);

  const [mobileNavigationActive, setMobileNavigationActive] = useState(false);

  const toggleMobileNavigationActive = useCallback(
    () => setMobileNavigationActive((mobileNavigationActive) => !mobileNavigationActive),
    []
  );

  const skipToContentTarget = (
    <a id="SkipToContentTarget" ref={skipToContentRef} tabIndex={-1} /> // eslint-disable-line
  );

  return (
    <Frame showMobileNavigation={mobileNavigationActive} onNavigationDismiss={toggleMobileNavigationActive}>
      {skipToContentTarget}
      <PolarisPage title="React Quote Generator">
        <PolarisLayout>
          <PolarisLayout.Section>
            <Card sectioned>{props.children}</Card>
            <Card sectioned>
              <Button url="https://github.com/maxvien/react-quote-generator" fullWidth>
                Source Code
              </Button>
            </Card>
          </PolarisLayout.Section>
        </PolarisLayout>
      </PolarisPage>
    </Frame>
  );
};

export { Layout };
