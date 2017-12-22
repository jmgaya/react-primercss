import React from "react";

import Counter from "../src/counter";
import Button from "../src/button";
import ButtonLink from "../src/button-link";
import Blankslate from "../src/blankslate";
import Alert from "../src/alert";
import Avatar from "../src/avatar";
import Navigation from "../src/navigation";
import * as Icons from "../src/icon";

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
        <Blankslate title="Simple 👏" description="blankslate 🕶" simple />
    ));

storiesOf("Alert", module)
    .add("success", () => (
        <Alert.Success description="This is a success alert!" />
    ))
    .add("warning", () => (
        <Alert.Warning description="This is a warning alert!" />
    ))
    .add("error", () => <Alert.Error description="This is an error alert!" />);

storiesOf("Navigation", module)
    .add("menu", () => (
        <Navigation.Menu>
            <Navigation.MenuItem href="#">
                <Icons.IcnCalendar />
                {"This"}
            </Navigation.MenuItem>
            <Navigation.MenuItem href="#">{"is"}</Navigation.MenuItem>
            <Navigation.MenuItem href="#">
                <Icons.IcnCode />
                {"a"}
            </Navigation.MenuItem>
            <Navigation.MenuItem href="#" current>
                <Icons.IcnCloudDownload />
                {"menu"}
            </Navigation.MenuItem>
        </Navigation.Menu>
    ))
    .add("underline", () => (
        <Navigation.Underline>
            <Navigation.UnderlineItem href="#">
                {"This"}
            </Navigation.UnderlineItem>
            <Navigation.UnderlineItem href="#">{"is"}</Navigation.UnderlineItem>
            <Navigation.UnderlineItem href="#">{"an"}</Navigation.UnderlineItem>
            <Navigation.UnderlineItem href="#" current>
                <Icons.IcnCode height="14" />
                {"underline"}
                <Counter count="13" />
            </Navigation.UnderlineItem>
            <Navigation.UnderlineActionGroup>
                <ButtonLink.Default text="Action" />
            </Navigation.UnderlineActionGroup>
        </Navigation.Underline>
    ))
    .add("underline right", () => (
        <Navigation.Underline alignRight>
            <Navigation.UnderlineItem href="#">
                {"This"}
            </Navigation.UnderlineItem>
            <Navigation.UnderlineItem href="#">{"is"}</Navigation.UnderlineItem>
            <Navigation.UnderlineItem href="#">{"an"}</Navigation.UnderlineItem>
            <Navigation.UnderlineItem href="#" current>
                {"underline"}
            </Navigation.UnderlineItem>
        </Navigation.Underline>
    ))
    .add("tabs", () => (
        <Navigation.Tabs>
            <Navigation.TabItem href="#">{"Some"}</Navigation.TabItem>
            <Navigation.TabItem href="#" current>
                {"tabs"}
                <Counter count="6" />
            </Navigation.TabItem>
        </Navigation.Tabs>
    ));

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
    .add("group", () => (
        <Avatar.Group>
            <Avatar.GroupItem
                src="https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png"
                alt="@octocat"
            />
            <Avatar.GroupItem
                src="https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png"
                alt="@octocat"
            />
            <Avatar.GroupItem
                src="https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png"
                alt="@octocat"
            />
        </Avatar.Group>
    ));
