import React from "react";
import "./styles/navigation.css";

export const NavigationMenu = ({
    ariaLabel = "Navigation",
    children,
    ...rest
}) => (
    <nav className="menu" aria-label={ariaLabel} {...rest}>
        {children}
    </nav>
);

export const NavigationMenuItem = ({
    children,
    href,
    current = false,
    ...rest
}) => (
    <a
        className={`menu-item ${current ? "selected" : ""}`}
        href={href}
        aria-current={`${current ? "page" : ""}`}
        {...rest}
    >
        {children}
    </a>
);

export const NavigationUnderline = ({
    ariaLabel = "Navigation",
    children,
    alignRight = false,
    ...rest
}) => (
    <nav
        className={`UnderlineNav ${alignRight ? "UnderlineNav--right" : ""}`}
        aria-label={ariaLabel}
        {...rest}
    >
        <div className="UnderlineNav-body">{children}</div>
    </nav>
);

export const NavigationUnderlineItem = ({
    title,
    children,
    href,
    current = false,
    ...rest
}) => (
    <a
        className={`UnderlineNav-item ${current ? "selected" : ""}`}
        href={href}
        role="tab"
        title={title}
        {...rest}
    >
        {children}
    </a>
);

export const NavigationUnderlineActionGroup = ({ children, ...rest }) => (
    <div className="UnderlineNav-actions" {...rest}>
        {children}
    </div>
);

export const NavigationTabs = ({
    children,
    ariaLabel = "Navigation",
    ...rest
}) => (
    <div className="tabnav" {...rest}>
        <nav className="tabnav-tabs" aria-label={ariaLabel}>
            {children}
        </nav>
    </div>
);

export const NavigationTabItem = ({
    children,
    href,
    current = false,
    ...rest
}) => (
    <a
        href={href}
        className="tabnav-tab selected"
        aria-current={`${current ? "page" : ""}`}
        {...rest}
    >
        {children}
    </a>
);

export default {
    Menu: NavigationMenu,
    MenuItem: NavigationMenuItem,
    Underline: NavigationUnderline,
    UnderlineItem: NavigationUnderlineItem,
    UnderlineActionGroup: NavigationUnderlineActionGroup,
    Tabs: NavigationTabs,
    TabItem: NavigationTabItem
};
