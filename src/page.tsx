import Projects from './sections/projects';
import Hero from './sections/hero';
import cnf from './config';
import { Anchor, AppShell, Center, Container, Text } from '@mantine/core';

const Xavier2pfr = () => (
  <AppShell footer={{ height: 35 }}>
    <AppShell.Main>
      <Container>
        <Hero />
        <Projects projects={cnf.projects} />
      </Container>
    </AppShell.Main>
    <AppShell.Footer>
      <Center>
        <Text c="dimmed">
          <Anchor href="https://github.com/xavier2p/" c="dimmed">
            @Xavier2p
          </Anchor>{' '}
          {new Date().getFullYear()} - All rights reserved -{' '}
          <Anchor href="mailto:contact@xavier2p.fr" c="dimmed">
            contact[at]xavier2p.fr
          </Anchor>
        </Text>
      </Center>
    </AppShell.Footer>
  </AppShell>
);

export default Xavier2pfr;
