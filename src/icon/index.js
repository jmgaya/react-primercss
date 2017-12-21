import React from "react";
import octicons from "octicons";

const Icon = ({ name, height, width, color = "#000000" }) => {
    if (name in octicons) {
        const svg = octicons[name].toSVG({ name, height, width, fill: color });
        return <span dangerouslySetInnerHTML={{ __html: svg }} />;
    } else {
        throw new Error(`No such octicon: "${name}"!`);
    }
};

export const IcnAlert = ({ width, height, color }) => (
    <Icon name="alert" width={width} height={height} color={color} />
);

export const IcnArrowDown = ({ width, height, color }) => (
    <Icon name="arrow-down" width={width} height={height} color={color} />
);

export const IcnArrowLeft = ({ width, height, color }) => (
    <Icon name="arrow-left" width={width} height={height} color={color} />
);

export const IcnArrowRight = ({ width, height, color }) => (
    <Icon name="arrow-right" width={width} height={height} color={color} />
);

export const IcnArrowSmallDown = ({ width, height, color }) => (
    <Icon name="arrow-small-down" width={width} height={height} color={color} />
);

export const IcnArrowSmallLeft = ({ width, height, color }) => (
    <Icon name="arrow-small-left" width={width} height={height} color={color} />
);

export const IcnArrowSmallRight = ({ width, height, color }) => (
    <Icon
        name="arrow-small-right"
        width={width}
        height={height}
        color={color}
    />
);

export const IcnArrowSmallUp = ({ width, height, color }) => (
    <Icon name="arrow-small-up" width={width} height={height} color={color} />
);

export const IcnArrowUp = ({ width, height, color }) => (
    <Icon name="arrow-up" width={width} height={height} color={color} />
);

export const IcnBeaker = ({ width, height, color }) => (
    <Icon name="beaker" width={width} height={height} color={color} />
);

export const IcnBell = ({ width, height, color }) => (
    <Icon name="bell" width={width} height={height} color={color} />
);

export const IcnBold = ({ width, height, color }) => (
    <Icon name="bold" width={width} height={height} color={color} />
);

export const IcnBook = ({ width, height, color }) => (
    <Icon name="book" width={width} height={height} color={color} />
);

export const IcnBookmark = ({ width, height, color }) => (
    <Icon name="bookmark" width={width} height={height} color={color} />
);

export const IcnBriefcase = ({ width, height, color }) => (
    <Icon name="briefcase" width={width} height={height} color={color} />
);

export const IcnBroadcast = ({ width, height, color }) => (
    <Icon name="broadcast" width={width} height={height} color={color} />
);

export const IcnBrowser = ({ width, height, color }) => (
    <Icon name="browser" width={width} height={height} color={color} />
);

export const IcnBug = ({ width, height, color }) => (
    <Icon name="bug" width={width} height={height} color={color} />
);

export const IcnCalendar = ({ width, height, color }) => (
    <Icon name="calendar" width={width} height={height} color={color} />
);

export const IcnCheck = ({ width, height, color }) => (
    <Icon name="check" width={width} height={height} color={color} />
);

export const IcnChecklist = ({ width, height, color }) => (
    <Icon name="checklist" width={width} height={height} color={color} />
);

export const IcnChevronDown = ({ width, height, color }) => (
    <Icon name="chevron-down" width={width} height={height} color={color} />
);

export const IcnChevronLeft = ({ width, height, color }) => (
    <Icon name="chevron-left" width={width} height={height} color={color} />
);

export const IcnChevronRight = ({ width, height, color }) => (
    <Icon name="chevron-right" width={width} height={height} color={color} />
);

export const IcnChevronUp = ({ width, height, color }) => (
    <Icon name="chevron-up" width={width} height={height} color={color} />
);

export const IcnCircleSlash = ({ width, height, color }) => (
    <Icon name="circle-slash" width={width} height={height} color={color} />
);

export const IcnCircuitBoard = ({ width, height, color }) => (
    <Icon name="circuit-board" width={width} height={height} color={color} />
);

export const IcnClippy = ({ width, height, color }) => (
    <Icon name="clippy" width={width} height={height} color={color} />
);

export const IcnClock = ({ width, height, color }) => (
    <Icon name="clock" width={width} height={height} color={color} />
);

export const IcnCloudDownload = ({ width, height, color }) => (
    <Icon name="cloud-download" width={width} height={height} color={color} />
);

export const IcnCloudUpload = ({ width, height, color }) => (
    <Icon name="cloud-upload" width={width} height={height} color={color} />
);

export const IcnCode = ({ width, height, color }) => (
    <Icon name="code" width={width} height={height} color={color} />
);

export const IcnComment = ({ width, height, color }) => (
    <Icon name="comment" width={width} height={height} color={color} />
);

export const IcnCommentDiscussion = ({ width, height, color }) => (
    <Icon
        name="comment-discussion"
        width={width}
        height={height}
        color={color}
    />
);

export const IcnCreditCard = ({ width, height, color }) => (
    <Icon name="credit-card" width={width} height={height} color={color} />
);

export const IcnDash = ({ width, height, color }) => (
    <Icon name="dash" width={width} height={height} color={color} />
);

export const IcnDashboard = ({ width, height, color }) => (
    <Icon name="dashboard" width={width} height={height} color={color} />
);

export const IcnDatabase = ({ width, height, color }) => (
    <Icon name="database" width={width} height={height} color={color} />
);

export const IcnDesktopDownload = ({ width, height, color }) => (
    <Icon name="desktop-download" width={width} height={height} color={color} />
);

export const IcnDeviceCamera = ({ width, height, color }) => (
    <Icon name="device-camera" width={width} height={height} color={color} />
);

export const IcnDeviceCameraVideo = ({ width, height, color }) => (
    <Icon
        name="device-camera-video"
        width={width}
        height={height}
        color={color}
    />
);

export const IcnDeviceDesktop = ({ width, height, color }) => (
    <Icon name="device-desktop" width={width} height={height} color={color} />
);

export const IcnDeviceMobile = ({ width, height, color }) => (
    <Icon name="device-mobile" width={width} height={height} color={color} />
);

export const IcnDiff = ({ width, height, color }) => (
    <Icon name="diff" width={width} height={height} color={color} />
);

export const IcnDiffAdded = ({ width, height, color }) => (
    <Icon name="diff-added" width={width} height={height} color={color} />
);

export const IcnDiffIgnored = ({ width, height, color }) => (
    <Icon name="diff-ignored" width={width} height={height} color={color} />
);

export const IcnDiffModified = ({ width, height, color }) => (
    <Icon name="diff-modified" width={width} height={height} color={color} />
);

export const IcnDiffRemoved = ({ width, height, color }) => (
    <Icon name="diff-removed" width={width} height={height} color={color} />
);

export const IcnDiffRenamed = ({ width, height, color }) => (
    <Icon name="diff-renamed" width={width} height={height} color={color} />
);

export const IcnEllipsis = ({ width, height, color }) => (
    <Icon name="ellipsis" width={width} height={height} color={color} />
);

export const IcnEye = ({ width, height, color }) => (
    <Icon name="eye" width={width} height={height} color={color} />
);

export const IcnFile = ({ width, height, color }) => (
    <Icon name="file" width={width} height={height} color={color} />
);

export const IcnFileBinary = ({ width, height, color }) => (
    <Icon name="file-binary" width={width} height={height} color={color} />
);

export const IcnFileCode = ({ width, height, color }) => (
    <Icon name="file-code" width={width} height={height} color={color} />
);

export const IcnFileDirectory = ({ width, height, color }) => (
    <Icon name="file-directory" width={width} height={height} color={color} />
);

export const IcnFileMedia = ({ width, height, color }) => (
    <Icon name="file-media" width={width} height={height} color={color} />
);

export const IcnFilePdf = ({ width, height, color }) => (
    <Icon name="file-pdf" width={width} height={height} color={color} />
);

export const IcnFileSubmodule = ({ width, height, color }) => (
    <Icon name="file-submodule" width={width} height={height} color={color} />
);

export const IcnFileSymlinkDirectory = ({ width, height, color }) => (
    <Icon
        name="file-symlink-directory"
        width={width}
        height={height}
        color={color}
    />
);

export const IcnFileSymlinkFile = ({ width, height, color }) => (
    <Icon
        name="file-symlink-file"
        width={width}
        height={height}
        color={color}
    />
);

export const IcnFileZip = ({ width, height, color }) => (
    <Icon name="file-zip" width={width} height={height} color={color} />
);

export const IcnFlame = ({ width, height, color }) => (
    <Icon name="flame" width={width} height={height} color={color} />
);

export const IcnFold = ({ width, height, color }) => (
    <Icon name="fold" width={width} height={height} color={color} />
);

export const IcnGear = ({ width, height, color }) => (
    <Icon name="gear" width={width} height={height} color={color} />
);

export const IcnGift = ({ width, height, color }) => (
    <Icon name="gift" width={width} height={height} color={color} />
);

export const IcnGist = ({ width, height, color }) => (
    <Icon name="gist" width={width} height={height} color={color} />
);

export const IcnGistSecret = ({ width, height, color }) => (
    <Icon name="gist-secret" width={width} height={height} color={color} />
);

export const IcnGitBranch = ({ width, height, color }) => (
    <Icon name="git-branch" width={width} height={height} color={color} />
);

export const IcnGitCommit = ({ width, height, color }) => (
    <Icon name="git-commit" width={width} height={height} color={color} />
);

export const IcnGitCompare = ({ width, height, color }) => (
    <Icon name="git-compare" width={width} height={height} color={color} />
);

export const IcnGitMerge = ({ width, height, color }) => (
    <Icon name="git-merge" width={width} height={height} color={color} />
);

export const IcnGitPullRequest = ({ width, height, color }) => (
    <Icon name="git-pull-request" width={width} height={height} color={color} />
);

export const IcnGlobe = ({ width, height, color }) => (
    <Icon name="globe" width={width} height={height} color={color} />
);

export const IcnGrabber = ({ width, height, color }) => (
    <Icon name="grabber" width={width} height={height} color={color} />
);

export const IcnGraph = ({ width, height, color }) => (
    <Icon name="graph" width={width} height={height} color={color} />
);

export const IcnHeart = ({ width, height, color }) => (
    <Icon name="heart" width={width} height={height} color={color} />
);

export const IcnHistory = ({ width, height, color }) => (
    <Icon name="history" width={width} height={height} color={color} />
);

export const IcnHome = ({ width, height, color }) => (
    <Icon name="home" width={width} height={height} color={color} />
);

export const IcnHorizontalRule = ({ width, height, color }) => (
    <Icon name="horizontal-rule" width={width} height={height} color={color} />
);

export const IcnHubot = ({ width, height, color }) => (
    <Icon name="hubot" width={width} height={height} color={color} />
);

export const IcnInbox = ({ width, height, color }) => (
    <Icon name="inbox" width={width} height={height} color={color} />
);

export const IcnInfo = ({ width, height, color }) => (
    <Icon name="info" width={width} height={height} color={color} />
);

export const IcnIssueClosed = ({ width, height, color }) => (
    <Icon name="issue-closed" width={width} height={height} color={color} />
);

export const IcnIssueOpened = ({ width, height, color }) => (
    <Icon name="issue-opened" width={width} height={height} color={color} />
);

export const IcnIssueReopened = ({ width, height, color }) => (
    <Icon name="issue-reopened" width={width} height={height} color={color} />
);

export const IcnItalic = ({ width, height, color }) => (
    <Icon name="italic" width={width} height={height} color={color} />
);

export const IcnJersey = ({ width, height, color }) => (
    <Icon name="jersey" width={width} height={height} color={color} />
);

export const IcnKebabHorizontal = ({ width, height, color }) => (
    <Icon name="kebab-horizontal" width={width} height={height} color={color} />
);

export const IcnKebabVertical = ({ width, height, color }) => (
    <Icon name="kebab-vertical" width={width} height={height} color={color} />
);

export const IcnKey = ({ width, height, color }) => (
    <Icon name="key" width={width} height={height} color={color} />
);

export const IcnKeyboard = ({ width, height, color }) => (
    <Icon name="keyboard" width={width} height={height} color={color} />
);

export const IcnLaw = ({ width, height, color }) => (
    <Icon name="law" width={width} height={height} color={color} />
);

export const IcnLightBulb = ({ width, height, color }) => (
    <Icon name="light-bulb" width={width} height={height} color={color} />
);

export const IcnLink = ({ width, height, color }) => (
    <Icon name="link" width={width} height={height} color={color} />
);

export const IcnLinkExternal = ({ width, height, color }) => (
    <Icon name="link-external" width={width} height={height} color={color} />
);

export const IcnListOrdered = ({ width, height, color }) => (
    <Icon name="list-ordered" width={width} height={height} color={color} />
);

export const IcnListUnordered = ({ width, height, color }) => (
    <Icon name="list-unordered" width={width} height={height} color={color} />
);

export const IcnLocation = ({ width, height, color }) => (
    <Icon name="location" width={width} height={height} color={color} />
);

export const IcnLock = ({ width, height, color }) => (
    <Icon name="lock" width={width} height={height} color={color} />
);

export const IcnLogoGist = ({ width, height, color }) => (
    <Icon name="logo-gist" width={width} height={height} color={color} />
);

export const IcnLogoGithub = ({ width, height, color }) => (
    <Icon name="logo-github" width={width} height={height} color={color} />
);

export const IcnMail = ({ width, height, color }) => (
    <Icon name="mail" width={width} height={height} color={color} />
);

export const IcnMailRead = ({ width, height, color }) => (
    <Icon name="mail-read" width={width} height={height} color={color} />
);

export const IcnMarkGithub = ({ width, height, color }) => (
    <Icon name="mark-github" width={width} height={height} color={color} />
);

export const IcnMarkdown = ({ width, height, color }) => (
    <Icon name="markdown" width={width} height={height} color={color} />
);

export const IcnMegaphone = ({ width, height, color }) => (
    <Icon name="megaphone" width={width} height={height} color={color} />
);

export const IcnMention = ({ width, height, color }) => (
    <Icon name="mention" width={width} height={height} color={color} />
);

export const IcnMilestone = ({ width, height, color }) => (
    <Icon name="milestone" width={width} height={height} color={color} />
);

export const IcnMirror = ({ width, height, color }) => (
    <Icon name="mirror" width={width} height={height} color={color} />
);

export const IcnMortarBoard = ({ width, height, color }) => (
    <Icon name="mortar-board" width={width} height={height} color={color} />
);

export const IcnMute = ({ width, height, color }) => (
    <Icon name="mute" width={width} height={height} color={color} />
);

export const IcnNoNewline = ({ width, height, color }) => (
    <Icon name="no-newline" width={width} height={height} color={color} />
);

export const IcnNote = ({ width, height, color }) => (
    <Icon name="note" width={width} height={height} color={color} />
);

export const IcnOctoface = ({ width, height, color }) => (
    <Icon name="octoface" width={width} height={height} color={color} />
);

export const IcnOrganization = ({ width, height, color }) => (
    <Icon name="organization" width={width} height={height} color={color} />
);

export const IcnPackage = ({ width, height, color }) => (
    <Icon name="package" width={width} height={height} color={color} />
);

export const IcnPaintcan = ({ width, height, color }) => (
    <Icon name="paintcan" width={width} height={height} color={color} />
);

export const IcnPencil = ({ width, height, color }) => (
    <Icon name="pencil" width={width} height={height} color={color} />
);

export const IcnPerson = ({ width, height, color }) => (
    <Icon name="person" width={width} height={height} color={color} />
);

export const IcnPin = ({ width, height, color }) => (
    <Icon name="pin" width={width} height={height} color={color} />
);

export const IcnPlug = ({ width, height, color }) => (
    <Icon name="plug" width={width} height={height} color={color} />
);

export const IcnPlus = ({ width, height, color }) => (
    <Icon name="plus" width={width} height={height} color={color} />
);

export const IcnPlusSmall = ({ width, height, color }) => (
    <Icon name="plus-small" width={width} height={height} color={color} />
);

export const IcnPrimitiveDot = ({ width, height, color }) => (
    <Icon name="primitive-dot" width={width} height={height} color={color} />
);

export const IcnPrimitiveSquare = ({ width, height, color }) => (
    <Icon name="primitive-square" width={width} height={height} color={color} />
);

export const IcnProject = ({ width, height, color }) => (
    <Icon name="project" width={width} height={height} color={color} />
);

export const IcnPulse = ({ width, height, color }) => (
    <Icon name="pulse" width={width} height={height} color={color} />
);

export const IcnQuestion = ({ width, height, color }) => (
    <Icon name="question" width={width} height={height} color={color} />
);

export const IcnQuote = ({ width, height, color }) => (
    <Icon name="quote" width={width} height={height} color={color} />
);

export const IcnRadioTower = ({ width, height, color }) => (
    <Icon name="radio-tower" width={width} height={height} color={color} />
);

export const IcnReply = ({ width, height, color }) => (
    <Icon name="reply" width={width} height={height} color={color} />
);

export const IcnRepo = ({ width, height, color }) => (
    <Icon name="repo" width={width} height={height} color={color} />
);

export const IcnRepoClone = ({ width, height, color }) => (
    <Icon name="repo-clone" width={width} height={height} color={color} />
);

export const IcnRepoForcePush = ({ width, height, color }) => (
    <Icon name="repo-force-push" width={width} height={height} color={color} />
);

export const IcnRepoForked = ({ width, height, color }) => (
    <Icon name="repo-forked" width={width} height={height} color={color} />
);

export const IcnRepoPull = ({ width, height, color }) => (
    <Icon name="repo-pull" width={width} height={height} color={color} />
);

export const IcnRepoPush = ({ width, height, color }) => (
    <Icon name="repo-push" width={width} height={height} color={color} />
);

export const IcnRocket = ({ width, height, color }) => (
    <Icon name="rocket" width={width} height={height} color={color} />
);

export const IcnRss = ({ width, height, color }) => (
    <Icon name="rss" width={width} height={height} color={color} />
);

export const IcnRuby = ({ width, height, color }) => (
    <Icon name="ruby" width={width} height={height} color={color} />
);

export const IcnScreenFull = ({ width, height, color }) => (
    <Icon name="screen-full" width={width} height={height} color={color} />
);

export const IcnScreenNormal = ({ width, height, color }) => (
    <Icon name="screen-normal" width={width} height={height} color={color} />
);

export const IcnSearch = ({ width, height, color }) => (
    <Icon name="search" width={width} height={height} color={color} />
);

export const IcnServer = ({ width, height, color }) => (
    <Icon name="server" width={width} height={height} color={color} />
);

export const IcnSettings = ({ width, height, color }) => (
    <Icon name="settings" width={width} height={height} color={color} />
);

export const IcnShield = ({ width, height, color }) => (
    <Icon name="shield" width={width} height={height} color={color} />
);

export const IcnSignIn = ({ width, height, color }) => (
    <Icon name="sign-in" width={width} height={height} color={color} />
);

export const IcnSignOut = ({ width, height, color }) => (
    <Icon name="sign-out" width={width} height={height} color={color} />
);

export const IcnSmiley = ({ width, height, color }) => (
    <Icon name="smiley" width={width} height={height} color={color} />
);

export const IcnSquirrel = ({ width, height, color }) => (
    <Icon name="squirrel" width={width} height={height} color={color} />
);

export const IcnStar = ({ width, height, color }) => (
    <Icon name="star" width={width} height={height} color={color} />
);

export const IcnStop = ({ width, height, color }) => (
    <Icon name="stop" width={width} height={height} color={color} />
);

export const IcnSync = ({ width, height, color }) => (
    <Icon name="sync" width={width} height={height} color={color} />
);

export const IcnTag = ({ width, height, color }) => (
    <Icon name="tag" width={width} height={height} color={color} />
);

export const IcnTasklist = ({ width, height, color }) => (
    <Icon name="tasklist" width={width} height={height} color={color} />
);

export const IcnTelescope = ({ width, height, color }) => (
    <Icon name="telescope" width={width} height={height} color={color} />
);

export const IcnTerminal = ({ width, height, color }) => (
    <Icon name="terminal" width={width} height={height} color={color} />
);

export const IcnTextSize = ({ width, height, color }) => (
    <Icon name="text-size" width={width} height={height} color={color} />
);

export const IcnThreeBars = ({ width, height, color }) => (
    <Icon name="three-bars" width={width} height={height} color={color} />
);

export const IcnThumbsdown = ({ width, height, color }) => (
    <Icon name="thumbsdown" width={width} height={height} color={color} />
);

export const IcnThumbsup = ({ width, height, color }) => (
    <Icon name="thumbsup" width={width} height={height} color={color} />
);

export const IcnTools = ({ width, height, color }) => (
    <Icon name="tools" width={width} height={height} color={color} />
);

export const IcnTrashcan = ({ width, height, color }) => (
    <Icon name="trashcan" width={width} height={height} color={color} />
);

export const IcnTriangleDown = ({ width, height, color }) => (
    <Icon name="triangle-down" width={width} height={height} color={color} />
);

export const IcnTriangleLeft = ({ width, height, color }) => (
    <Icon name="triangle-left" width={width} height={height} color={color} />
);

export const IcnTriangleRight = ({ width, height, color }) => (
    <Icon name="triangle-right" width={width} height={height} color={color} />
);

export const IcnTriangleUp = ({ width, height, color }) => (
    <Icon name="triangle-up" width={width} height={height} color={color} />
);

export const IcnUnfold = ({ width, height, color }) => (
    <Icon name="unfold" width={width} height={height} color={color} />
);

export const IcnUnmute = ({ width, height, color }) => (
    <Icon name="unmute" width={width} height={height} color={color} />
);

export const IcnUnverified = ({ width, height, color }) => (
    <Icon name="unverified" width={width} height={height} color={color} />
);

export const IcnVerified = ({ width, height, color }) => (
    <Icon name="verified" width={width} height={height} color={color} />
);

export const IcnVersions = ({ width, height, color }) => (
    <Icon name="versions" width={width} height={height} color={color} />
);

export const IcnWatch = ({ width, height, color }) => (
    <Icon name="watch" width={width} height={height} color={color} />
);

export const IcnX = ({ width, height, color }) => (
    <Icon name="x" width={width} height={height} color={color} />
);

export const IcnZap = ({ width, height, color }) => (
    <Icon name="zap" width={width} height={height} color={color} />
);
