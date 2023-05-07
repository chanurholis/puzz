import Container from '@mui/material/Container';

import Header from '@components/Header';
import Footer from '@components/Footer';

import sections from '@constants/sections.json';
import { ReactElement } from 'react';

interface DefaultLayoutProps {
  children: ReactElement | ReactElement[];
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <>
      <Container maxWidth="lg">
        <Header title="Puzz News" sections={sections} />
        <main>
          {children}
        </main>
      </Container>
      <Footer
        title="Puzz News"
        description="Lorem ipsum sit amet"
      />
    </>
  );
}

export default DefaultLayout;
