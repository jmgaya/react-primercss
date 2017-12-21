import React, { Component } from "react";
import Button from "./button";
import ButtonLink from "./button-link";
import Blankslate from "./blankslate";
import Alert from "./alert";
import Avatar from "./avatar";
import { IcnAlert, IcnBook, IcnLogoGithub } from "./icon";

class App extends Component {
    render() {
        return (
            <div className="App">
                {/* Icons */}
                <IcnAlert height={16} />
                <IcnBook height={32} color="#28a745" />
                <IcnLogoGithub height={64} />
                {/* Button */}
                <Button.Default text="Default" />
                <Button.Primary text="Primary" />
                <Button.Secondary text="Secondary" />
                <Button.Tertiary text="Tertiary" />
                <Button.Danger text="Danger" />
                <Button.Outline text="Outline" />
                <Button.Primary text="Disabled" disabled />
                <Button.Outline text="Counter" count={12} />
                <Button.Primary text="Small" small />
                <Button.Group>
                    <Button.Default text="This" />
                    <Button.Default text="is" />
                    <Button.Default text="a" />
                    <Button.Default text="Group" />
                </Button.Group>
                {/* Button Links */}
                <ButtonLink.Default text="Default" />
                <ButtonLink.Primary text="Primary" />
                <ButtonLink.Secondary text="Secondary" />
                <ButtonLink.Tertiary text="Tertiary" />
                <ButtonLink.Danger text="Danger" />
                <ButtonLink.Outline text="Outline" />
                <ButtonLink.Primary text="Disabled" disabled />
                <ButtonLink.Outline text="Counter" count={12} />
                <ButtonLink.Primary text="Small" small />
                <ButtonLink.Group>
                    <ButtonLink.Default text="This" />
                    <ButtonLink.Default text="is" />
                    <ButtonLink.Default text="a" />
                    <ButtonLink.Default text="Group" />
                </ButtonLink.Group>
                {/* Blankslates */}
                <Blankslate title="title" description="description" />
                <Blankslate
                    title="Simple 👏"
                    description="blankslate 🕶"
                    simple={true}
                />
                {/* Alerts */}
                <Alert.Success description="This is a success alert!" />
                <Alert.Warning description="This is a warning alert!" />
                <Alert.Error description="This is an error alert!" />
                {/* Avatars */}
                <Avatar.Square
                    src="https://avatars3.githubusercontent.com/u/9919?v=3&s=144"
                    width="42"
                />
                <Avatar.Square
                    src="https://avatars3.githubusercontent.com/u/9919?v=3&s=144"
                    child="https://avatars3.githubusercontent.com/u/9919?v=3&s=40"
                    width="72"
                />
                <Avatar.Group />
            </div>
        );
    }
}

export default App;
