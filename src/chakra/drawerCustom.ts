import {drawerAnatomy} from '@chakra-ui/anatomy';
import {createMultiStyleConfigHelpers} from '@chakra-ui/react';

const {defineMultiStyleConfig} = createMultiStyleConfigHelpers(drawerAnatomy.keys);

export const drawerTheme = defineMultiStyleConfig({
  sizes: {
    mapModal: {
      dialogContainer: {
        width: '100%',
        maxWidth: '45rem',
        minWidth: '36rem',
        left: '50%',
        transform: 'translateX(-50%)',

        overflow: 'clip',
      },
      dialog: {
        width: '100%',
      },
    },
  },
});
