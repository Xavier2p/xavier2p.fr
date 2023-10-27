import { ActionIcon, Affix, Transition, rem } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import { IconArrowUp } from '@tabler/icons-react';

const GoToUp = () => {
  const [scroll, scrollTo] = useWindowScroll();
  return (
    <Affix position={{ bottom: rem(30), right: rem(30) }}>
      <Transition transition="slide-up" mounted={scroll.y > 0}>
        {(transitionStyles) => (
          <ActionIcon
            style={transitionStyles}
            size="xl"
            color="blue"
            variant="subtle"
            radius="xl"
            onClick={() => scrollTo({ y: 0 })}
          >
            <IconArrowUp />
          </ActionIcon>
        )}
      </Transition>
    </Affix>
  );
};

export default GoToUp;
