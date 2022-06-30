import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ButtonDisabled from "../components/ButtonDisable";

export default {
    title: "Components/UserCard",
    component: ButtonDisabled,
    parameters: {
        layout: "fullscreen",
    },
} as ComponentMeta<typeof ButtonDisabled>;

const Template: ComponentStory<typeof ButtonDisabled> = (args) => <ButtonDisabled {...args} />;

export const Button = Template.bind({});

Button.args = {
    onClick: () => {
        console.log("clicked");
    },
};
