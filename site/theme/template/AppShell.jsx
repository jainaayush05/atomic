/**
 * Empty component for app shell
 * See https://github.com/NekR/offline-plugin/blob/master/docs/app-shell.md
 */
import React from 'react';
import {
  LiveProvider,
  LiveEditor,
  LiveError,
  LivePreview
} from 'react-live'

import * as All from 'antd';

const scope = { All };

const code = `
  <All.Button> Live edit </All.Button>
`


const AppShell = () => <div>
<LiveProvider code={code} scope={scope}>
  <LiveEditor />
  <LiveError />
  <LivePreview />
</LiveProvider>
  </div>;

export default AppShell;
