import { Frame } from '@shopify/polaris';
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
      <PolarisPage title="React Developer - Coding Skills Assessment">
        <PolarisLayout>
          <PolarisLayout.Section>
            <Card sectioned>{props.children}</Card>
          </PolarisLayout.Section>
        </PolarisLayout>
      </PolarisPage>
    </Frame>
  );
};

export { Layout };
