import { ScullyConfig } from '@scullyio/scully';
import {getFlashPreventionPlugin} from "@scullyio/scully-plugin-flash-prevention";

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'devon-web',
  distFolder: './dist/devon-web',
  outDir: './dist/static', // directory for scully build artifacts
  reloadPort: 1337,
  defaultPostRenderers: [getFlashPreventionPlugin()],
  routes: {

  },
};
