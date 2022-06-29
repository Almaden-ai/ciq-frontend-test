import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { UserCard } from '../components/user_card';

export default {
  title: 'Components/UserCard',
  component: UserCard,
  parameters: {
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof UserCard>;

const Template: ComponentStory<typeof UserCard> = (args) => <UserCard {...args} />;

export const Gabriel = Template.bind({});

Gabriel.args = {

    username: "Gabriel Hoppe",
    userEmail: "gabrielh2c@hotmail.com",
    userGroup: "User"
}