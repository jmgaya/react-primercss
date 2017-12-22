<p align="center">
<b>react-primercss</b><br/>
React components for primercss.io
</p>

## Live demo

[Storybook 🔎](https://jmgaya.github.io/react-primercss/?selectedKind=Icon&selectedStory=with%20color&full=0&down=1&left=1&panelRight=0&downPanel=storybook%2Factions%2Factions-panel)

## Installment

```
npm install react-primer
```

```
yarn add react-primer
```

## Components

### Icons 😎

`import * as Icons from "react-primercss/icon";`

_[Octicons](https://octicons.github.com/)_

```js
<Icons.IcnLogoGithub height="64" color="#28A745" />;
```

### Navigation 🔮

`import Navigation from "react-primercss/navigation";`

_Menu_

```js
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
</Navigation.Menu>;
```

_Underline_

```js
<Navigation.Underline>
    <Navigation.UnderlineItem href="#">{"This"}</Navigation.UnderlineItem>
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
</Navigation.Underline>;
```

_Tabs_

```js
<Navigation.Tabs>
    <Navigation.TabItem href="#">{"Some"}</Navigation.TabItem>
    <Navigation.TabItem href="#" current>
        {"tabs"}
        <Counter count="6" />
    </Navigation.TabItem>
</Navigation.Tabs>;
```

### Alerts ⚠️

`import Alert from "react-primercss/alert";`

_Success_

```js
<Alert.Success description="This is a success alert!" />;
```

_Warning_

```js
<Alert.Warning description="This is a warning alert!" />;
```

_Error_

```js
<Alert.Error description="This is an error alert!" />;
```

### Avatars 🙋🏻

`import Alert from "react-primercss/avatar";`

_Square_

```js
<Avatar.Square
    src="https://avatars3.githubusercontent.com/u/9919?v=3&s=144"
    width="42"
/>;
```

_Square with Child_

```js
<Avatar.Square
    src="https://avatars3.githubusercontent.com/u/9919?v=3&s=144"
    child="https://avatars3.githubusercontent.com/u/9919?v=3&s=40"
    width="72"
/>;
```

_Group_

```js
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
</Avatar.Group>;
```

### Counters ⏲

`import Counter from "react-primercss/counter";`

```js
<Counter count="6" />;
```

### Blankslates ◻️

`import Blankslate from "react-primercss/blankslate";`

_Default_

```js
<Blankslate title="title" description="description" />;
```

_Simple_

```js
<Blankslate title="Simple 👏" description="blankslate 🕶" simple />;
```

### Buttons 🔘

`import Button from "react-primercss/button";`

_Default_

```js
<Button.Default onClick={() => {}} text="Default" />;
```

_Primary_

```js
<Button.Primary onClick={() => {}} text="Primary" />;
```

_Secondary_

```js
<Button.Secondary onClick={() => {}} text="Secondary" />;
```

_Tertiary_

```js
<Button.Tertiary onClick={() => {}} text="Tertiary" />;
```

_Danger_

```js
<Button.Danger onClick={() => {}} text="Danger" />;
```

_Outline_

```js
<Button.Outline onClick={() => {}} text="Outline" />;
```

_Disabled_

```js
<Button.Primary onClick={() => {}} text="Disabled" disabled />;
```

_With Counter_

```js
<Button.Outline onClick={() => {}} text="Counter" count={12} />;
```

_Small_

```js
<Button.Primary onClick={() => {}} text="Small" small />;
```

_Group_

```js
<Button.Group>
    <Button.Default text="This" />
    <Button.Default text="is" />
    <Button.Default text="a" />
    <Button.Default text="Group" />
</Button.Group>;
```

### Button Links 🔳

`import Button from "react-primercss/button-link";`

_Default_

```js
<ButtonLink.Default text="Default" />;
```

_Primary_

```js
<ButtonLink.Primary text="Primary" />;
```

_Secondary_

```js
<ButtonLink.Secondary text="Secondary" />;
```

_Tertiary_

```js
<ButtonLink.Tertiary text="Tertiary" />;
```

_Danger_

```js
<ButtonLink.Danger text="Danger" />;
```

_Outline_

```js
<ButtonLink.Outline text="Outline" />;
```

_Disabled_

```js
<ButtonLink.Primary text="Disabled" disabled />;
```

_With Counter_

```js
<ButtonLink.Outline text="Counter" count={12} />;
```

_Small_

```js
<ButtonLink.Primary text="Small" small />;
```

_Group_

```js
<ButtonLink.Group>
    <ButtonLink.Default text="This" />
    <ButtonLink.Default text="is" />
    <ButtonLink.Default text="a" />
    <ButtonLink.Default text="Group" />
</ButtonLink.Group>;
```
