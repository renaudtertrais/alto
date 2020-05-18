import React from 'react';
import { configure, addDecorator, setAddon, addParameters } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import JSXAddon from 'storybook-addon-jsx';
//import { withInfo, setDefaults } from '@storybook/addon-info';
import { withA11y } from '@storybook/addon-a11y';

import Root from './Root';

setAddon(JSXAddon);

// Console error: The pseudo class ":first-child" is potentially unsafe when doing server-side rendering. Try changing it to ":first-of-type".
// https://github.com/storybookjs/storybook/issues/6998

addParameters({
  options: {
    showPanel: true,
    panelPosition: 'right',
    showNav: true,
    isToolshown: false,
  },
});

/*
setDefaults({
  header: false, // Toggles display of header with component name and description
  source: false, // Displays the source of story Component
  styles: s => Object.assign({}, s, {
    infoBody: {},
    infoContent: {},
    infoStory: {},
    jsxInfoContent: {},
    header: {
      h1: {},
      h2: {},
      body: {},
    },
    source: {
      h1: {},
    },
    propTableHead: {},
  })
});
*/

addDecorator(withA11y);

// addDecorator((story, context) => withInfo('')(story)(context));

// addDecorator(fixAddonInfo);
addDecorator(withKnobs);

addDecorator((story) => <Root>{story()}</Root>);

function loadStories() {
  require('../src/Actions/story');
  require('../src/Alert/story');
  require('../src/Aside/story');
  require('../src/Avatar/story');
  require('../src/Badge/story');
  require('../src/Breadcrumb/story');
  require('../src/Button/story');
  require('../src/ButtonGroup/story');
  require('../src/Card/story');
  require('../src/CloseButton/story');
  require('../src/ContentEditable/story');
  require('../src/CopyToClipboard/story');
  require('../src/Datagrid/story');
  require('../src/Dialog/story');
  require('../src/Dropdown/story');
  require('../src/Form/story');
  require('../src/Header/story');
  require('../src/HTMLBlock/story');
  require('../src/Icons/story');
  require('../src/Input/story');
  require('../src/Line/story');
  require('../src/List/story');
  require('../src/Media/story');
  require('../src/MenuList/story');
  require('../src/Pagination/story');
  require('../src/Popover/story');
  require('../src/ProgressBar/story');
  require('../src/ProgressCircle/story');
  require('../src/RelativeBox/story');
  require('../src/ShowMore/story');
  require('../src/SideNav/story');
  require('../src/Sortable/story');
  require('../src/Spinner/story');
  require('../src/Table/story');
  require('../src/Tabs/story');
  require('../src/Tag/story');
  require('../src/Tooltip/story');
  require('../src/Tree/story');
}

configure(loadStories, module);
