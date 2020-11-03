import React from 'react';

import { SampleComponent } from './sample.component';

export default {
  title: 'Example/Sample Component',
  component: SampleComponent,
};

const Template = (args) => <SampleComponent {...args} />;

export const Default = Template.bind({});
Default.args = {
  text: "বর্গমূল"
};

export const Red = Template.bind({});
Red.args = {
  text: "বর্গমূল",
  backgroundColor: '#B64352'
};

