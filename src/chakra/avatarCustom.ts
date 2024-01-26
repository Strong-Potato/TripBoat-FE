import {avatarAnatomy} from '@chakra-ui/anatomy';
import {createMultiStyleConfigHelpers} from '@chakra-ui/react';

const {definePartsStyle, defineMultiStyleConfig} = createMultiStyleConfigHelpers(avatarAnatomy.keys);

const tabsVoteCard = definePartsStyle({
  container: {
    w: '24px',
    h: '24px',
    border: '1px solid #fff',
  },
  excessLabel: {
    w: '39px',
    h: '24px',
    borderRadius: '75px',
    border: '1px solid #2388FF',
    color: '#2388FF',
    bg: '#fff',

    fontSize: 'captionSmall',
    fontWeight: 'captionSmall',
    lineHeight: 'captionSmall',
  },
});

const spaceAvatar = definePartsStyle({
  excessLabel: {
    display: 'none !important',
  },
});

export const avatarTheme = defineMultiStyleConfig({
  variants: {tabsVoteCard, spaceAvatar},
});
