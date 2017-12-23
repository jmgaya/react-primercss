import React from "react";
import "./styles/navigation.css";

export const NavigationMenu = ({ ariaLabel = "Navigation", children }) => (
    <nav className="menu" aria-label={ariaLabel}>
        {children}
    </nav>
);

export const NavigationMenuItem = ({ children, href, current = false }) => (
    <a
        className={`menu-item ${current ? "selected" : ""}`}
        href={href}
        aria-current={`${current ? "page" : ""}`}
    >
        {children}
    </a>
);

export const NavigationUnderline = ({
    ariaLabel = "Navigation",
    children,
    alignRight = false
}) => (
    <nav
        className={`UnderlineNav ${alignRight ? "UnderlineNav--right" : ""}`}
        aria-label={ariaLabel}
    >
        <div className="UnderlineNav-body">{children}</div>
    </nav>
);

export const NavigationUnderlineItem = ({
    title,
    children,
    href,
    current = false
}) => (
    <a
        className={`UnderlineNav-item ${current ? "selected" : ""}`}
        href={href}
        role="tab"
        title={title}
    >
        {children}
    </a>
);

export const NavigationUnderlineActionGroup = ({ children }) => (
    <div className="UnderlineNav-actions">{children}</div>
);

export const NavigationTabs = ({ children, ariaLabel = "Navigation" }) => (
    <div className="tabnav">
        <nav className="tabnav-tabs" aria-label={ariaLabel}>
            {children}
        </nav>
    </div>
);

export const NavigationTabItem = ({ children, href, current = false }) => (
    <a
        href={href}
        className="tabnav-tab selected"
        aria-current={`${current ? "page" : ""}`}
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
