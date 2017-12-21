import React from "react";

import Button from "../dist/button";
import ButtonLink from "../dist/button-link";
import Blankslate from "../dist/blankslate";
import Alert from "../dist/alert";
import Avatar from "../dist/avatar";
import * as Icons from "../dist/icon";

import { storiesOf } from "@storybook/react";

const iconsList = Object.values(Icons);

storiesOf("Icon", module)
    .add("all", () => iconsList.map((I, idx) => <I key={idx} height="32" />))
    .add("with color", () => (
        <Icons.IcnLogoGithub height="64" color="#28A745" />
    ))
    .add("with custom size", () => <Icons.IcnLogoGithub height="256" />);

storiesOf("Button", module)
    .add("default", () => <Button.Default text="Default" />)
    .add("primary", () => <Button.Primary text="Primary" />)
    .add("secondary", () => <Button.Secondary text="Secondary" />)
    .add("tertiary", () => <Button.Tertiary text="Tertiary" />)
    .add("danger", () => <Button.Danger text="Danger" />)
    .add("outline", () => <Button.Outline text="Outline" />)
    .add("disabled", () => <Button.Primary text="Disabled" disabled />)
    .add("with counter", () => <Button.Outline text="Counter" count={12} />)
    .add("small", () => <Button.Primary text="Small" small />)
    .add("group", () => (
        <Button.Group>
            <Button.Default text="This" />
            <Button.Default text="is" />
            <Button.Default text="a" />
            <Button.Default text="Group" />
        </Button.Group>
    ));

storiesOf("Button Link", module)
    .add("default", () => <ButtonLink.Default text="Default" />)
    .add("primary", () => <ButtonLink.Primary text="Primary" />)
    .add("secondary", () => <ButtonLink.Secondary text="Secondary" />)
    .add("tertiary", () => <ButtonLink.Tertiary text="Tertiary" />)
    .add("danger", () => <ButtonLink.Danger text="Danger" />)
    .add("outline", () => <ButtonLink.Outline text="Outline" />)
    .add("disabled", () => <ButtonLink.Primary text="Disabled" disabled />)
    .add("with counter", () => <ButtonLink.Outline text="Counter" count={12} />)
    .add("small", () => <ButtonLink.Primary text="Small" small />)
    .add("group", () => (
        <ButtonLink.Group>
            <ButtonLink.Default text="This" />
            <ButtonLink.Default text="is" />
            <ButtonLink.Default text="a" />
            <ButtonLink.Default text="Group" />
        </ButtonLink.Group>
    ));

storiesOf("Blankslate", module)
    .add("default", () => (
        <Blankslate title="title" description="description" />
    ))
    .add("simple", () => (
        <Blankslate
            title="Simple 👏"
            description="blankslate 🕶"
            simple={true}
        />
    ));

storiesOf("Alert", module)
    .add("success", () => (
        <Alert.Success description="This is a success alert!" />
    ))
    .add("warning", () => (
        <Alert.Warning description="This is a warning alert!" />
    ))
    .add("error", () => <Alert.Error description="This is an error alert!" />);

storiesOf("Avatars", module)
    .add("square", () => (
        <Avatar.Square
            src="https://avatars3.githubusercontent.com/u/9919?v=3&s=144"
            width="42"
        />
    ))
    .add("square with child", () => (
        <Avatar.Square
            src="https://avatars3.githubusercontent.com/u/9919?v=3&s=144"
            child="https://avatars3.githubusercontent.com/u/9919?v=3&s=40"
            width="72"
        />
    ))
    .add("group", () => <Avatar.Group />);
