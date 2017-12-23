"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.IcnZap = exports.IcnX = exports.IcnWatch = exports.IcnVersions = exports.IcnVerified = exports.IcnUnverified = exports.IcnUnmute = exports.IcnUnfold = exports.IcnTriangleUp = exports.IcnTriangleRight = exports.IcnTriangleLeft = exports.IcnTriangleDown = exports.IcnTrashcan = exports.IcnTools = exports.IcnThumbsup = exports.IcnThumbsdown = exports.IcnThreeBars = exports.IcnTextSize = exports.IcnTerminal = exports.IcnTelescope = exports.IcnTasklist = exports.IcnTag = exports.IcnSync = exports.IcnStop = exports.IcnStar = exports.IcnSquirrel = exports.IcnSmiley = exports.IcnSignOut = exports.IcnSignIn = exports.IcnShield = exports.IcnSettings = exports.IcnServer = exports.IcnSearch = exports.IcnScreenNormal = exports.IcnScreenFull = exports.IcnRuby = exports.IcnRss = exports.IcnRocket = exports.IcnRepoPush = exports.IcnRepoPull = exports.IcnRepoForked = exports.IcnRepoForcePush = exports.IcnRepoClone = exports.IcnRepo = exports.IcnReply = exports.IcnRadioTower = exports.IcnQuote = exports.IcnQuestion = exports.IcnPulse = exports.IcnProject = exports.IcnPrimitiveSquare = exports.IcnPrimitiveDot = exports.IcnPlusSmall = exports.IcnPlus = exports.IcnPlug = exports.IcnPin = exports.IcnPerson = exports.IcnPencil = exports.IcnPaintcan = exports.IcnPackage = exports.IcnOrganization = exports.IcnOctoface = exports.IcnNote = exports.IcnNoNewline = exports.IcnMute = exports.IcnMortarBoard = exports.IcnMirror = exports.IcnMilestone = exports.IcnMention = exports.IcnMegaphone = exports.IcnMarkdown = exports.IcnMarkGithub = exports.IcnMailRead = exports.IcnMail = exports.IcnLogoGithub = undefined;
exports.IcnLogoGist = exports.IcnLock = exports.IcnLocation = exports.IcnListUnordered = exports.IcnListOrdered = exports.IcnLinkExternal = exports.IcnLink = exports.IcnLightBulb = exports.IcnLaw = exports.IcnKeyboard = exports.IcnKey = exports.IcnKebabVertical = exports.IcnKebabHorizontal = exports.IcnJersey = exports.IcnItalic = exports.IcnIssueReopened = exports.IcnIssueOpened = exports.IcnIssueClosed = exports.IcnInfo = exports.IcnInbox = exports.IcnHubot = exports.IcnHorizontalRule = exports.IcnHome = exports.IcnHistory = exports.IcnHeart = exports.IcnGraph = exports.IcnGrabber = exports.IcnGlobe = exports.IcnGitPullRequest = exports.IcnGitMerge = exports.IcnGitCompare = exports.IcnGitCommit = exports.IcnGitBranch = exports.IcnGistSecret = exports.IcnGist = exports.IcnGift = exports.IcnGear = exports.IcnFold = exports.IcnFlame = exports.IcnFileZip = exports.IcnFileSymlinkFile = exports.IcnFileSymlinkDirectory = exports.IcnFileSubmodule = exports.IcnFilePdf = exports.IcnFileMedia = exports.IcnFileDirectory = exports.IcnFileCode = exports.IcnFileBinary = exports.IcnFile = exports.IcnEye = exports.IcnEllipsis = exports.IcnDiffRenamed = exports.IcnDiffRemoved = exports.IcnDiffModified = exports.IcnDiffIgnored = exports.IcnDiffAdded = exports.IcnDiff = exports.IcnDeviceMobile = exports.IcnDeviceDesktop = exports.IcnDeviceCameraVideo = exports.IcnDeviceCamera = exports.IcnDesktopDownload = exports.IcnDatabase = exports.IcnDashboard = exports.IcnDash = exports.IcnCreditCard = exports.IcnCommentDiscussion = exports.IcnComment = exports.IcnCode = exports.IcnCloudUpload = exports.IcnCloudDownload = exports.IcnClock = exports.IcnClippy = exports.IcnCircuitBoard = exports.IcnCircleSlash = exports.IcnChevronUp = exports.IcnChevronRight = exports.IcnChevronLeft = exports.IcnChevronDown = exports.IcnChecklist = exports.IcnCheck = exports.IcnCalendar = exports.IcnBug = exports.IcnBrowser = exports.IcnBroadcast = exports.IcnBriefcase = exports.IcnBookmark = exports.IcnBook = exports.IcnBold = exports.IcnBell = exports.IcnBeaker = exports.IcnArrowUp = exports.IcnArrowSmallUp = exports.IcnArrowSmallRight = exports.IcnArrowSmallLeft = exports.IcnArrowSmallDown = exports.IcnArrowRight = exports.IcnArrowLeft = exports.IcnArrowDown = exports.IcnAlert = undefined;

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _octicons = require("octicons");

var _octicons2 = _interopRequireDefault(_octicons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Icon = function Icon(_ref) {
    var name = _ref.name,
        _ref$height = _ref.height,
        height = _ref$height === undefined ? "16" : _ref$height,
        _ref$width = _ref.width,
        width = _ref$width === undefined ? height : _ref$width,
        _ref$color = _ref.color,
        color = _ref$color === undefined ? "#000000" : _ref$color;

    if (name in _octicons2.default) {
        var svg = _octicons2.default[name].toSVG({ name: name, height: height, width: width, fill: color });
        return _react2.default.createElement("span", { dangerouslySetInnerHTML: { __html: svg } });
    } else {
        throw new Error("No such octicon: \"" + name + "\"!");
    }
};

var IcnAlert = exports.IcnAlert = function IcnAlert(_ref2) {
    var width = _ref2.width,
        height = _ref2.height,
        color = _ref2.color;
    return _react2.default.createElement(Icon, { name: "alert", width: width, height: height, color: color });
};

var IcnArrowDown = exports.IcnArrowDown = function IcnArrowDown(_ref3) {
    var width = _ref3.width,
        height = _ref3.height,
        color = _ref3.color;
    return _react2.default.createElement(Icon, { name: "arrow-down", width: width, height: height, color: color });
};

var IcnArrowLeft = exports.IcnArrowLeft = function IcnArrowLeft(_ref4) {
    var width = _ref4.width,
        height = _ref4.height,
        color = _ref4.color;
    return _react2.default.createElement(Icon, { name: "arrow-left", width: width, height: height, color: color });
};

var IcnArrowRight = exports.IcnArrowRight = function IcnArrowRight(_ref5) {
    var width = _ref5.width,
        height = _ref5.height,
        color = _ref5.color;
    return _react2.default.createElement(Icon, { name: "arrow-right", width: width, height: height, color: color });
};

var IcnArrowSmallDown = exports.IcnArrowSmallDown = function IcnArrowSmallDown(_ref6) {
    var width = _ref6.width,
        height = _ref6.height,
        color = _ref6.color;
    return _react2.default.createElement(Icon, { name: "arrow-small-down", width: width, height: height, color: color });
};

var IcnArrowSmallLeft = exports.IcnArrowSmallLeft = function IcnArrowSmallLeft(_ref7) {
    var width = _ref7.width,
        height = _ref7.height,
        color = _ref7.color;
    return _react2.default.createElement(Icon, { name: "arrow-small-left", width: width, height: height, color: color });
};

var IcnArrowSmallRight = exports.IcnArrowSmallRight = function IcnArrowSmallRight(_ref8) {
    var width = _ref8.width,
        height = _ref8.height,
        color = _ref8.color;
    return _react2.default.createElement(Icon, {
        name: "arrow-small-right",
        width: width,
        height: height,
        color: color
    });
};

var IcnArrowSmallUp = exports.IcnArrowSmallUp = function IcnArrowSmallUp(_ref9) {
    var width = _ref9.width,
        height = _ref9.height,
        color = _ref9.color;
    return _react2.default.createElement(Icon, { name: "arrow-small-up", width: width, height: height, color: color });
};

var IcnArrowUp = exports.IcnArrowUp = function IcnArrowUp(_ref10) {
    var width = _ref10.width,
        height = _ref10.height,
        color = _ref10.color;
    return _react2.default.createElement(Icon, { name: "arrow-up", width: width, height: height, color: color });
};

var IcnBeaker = exports.IcnBeaker = function IcnBeaker(_ref11) {
    var width = _ref11.width,
        height = _ref11.height,
        color = _ref11.color;
    return _react2.default.createElement(Icon, { name: "beaker", width: width, height: height, color: color });
};

var IcnBell = exports.IcnBell = function IcnBell(_ref12) {
    var width = _ref12.width,
        height = _ref12.height,
        color = _ref12.color;
    return _react2.default.createElement(Icon, { name: "bell", width: width, height: height, color: color });
};

var IcnBold = exports.IcnBold = function IcnBold(_ref13) {
    var width = _ref13.width,
        height = _ref13.height,
        color = _ref13.color;
    return _react2.default.createElement(Icon, { name: "bold", width: width, height: height, color: color });
};

var IcnBook = exports.IcnBook = function IcnBook(_ref14) {
    var width = _ref14.width,
        height = _ref14.height,
        color = _ref14.color;
    return _react2.default.createElement(Icon, { name: "book", width: width, height: height, color: color });
};

var IcnBookmark = exports.IcnBookmark = function IcnBookmark(_ref15) {
    var width = _ref15.width,
        height = _ref15.height,
        color = _ref15.color;
    return _react2.default.createElement(Icon, { name: "bookmark", width: width, height: height, color: color });
};

var IcnBriefcase = exports.IcnBriefcase = function IcnBriefcase(_ref16) {
    var width = _ref16.width,
        height = _ref16.height,
        color = _ref16.color;
    return _react2.default.createElement(Icon, { name: "briefcase", width: width, height: height, color: color });
};

var IcnBroadcast = exports.IcnBroadcast = function IcnBroadcast(_ref17) {
    var width = _ref17.width,
        height = _ref17.height,
        color = _ref17.color;
    return _react2.default.createElement(Icon, { name: "broadcast", width: width, height: height, color: color });
};

var IcnBrowser = exports.IcnBrowser = function IcnBrowser(_ref18) {
    var width = _ref18.width,
        height = _ref18.height,
        color = _ref18.color;
    return _react2.default.createElement(Icon, { name: "browser", width: width, height: height, color: color });
};

var IcnBug = exports.IcnBug = function IcnBug(_ref19) {
    var width = _ref19.width,
        height = _ref19.height,
        color = _ref19.color;
    return _react2.default.createElement(Icon, { name: "bug", width: width, height: height, color: color });
};

var IcnCalendar = exports.IcnCalendar = function IcnCalendar(_ref20) {
    var width = _ref20.width,
        height = _ref20.height,
        color = _ref20.color;
    return _react2.default.createElement(Icon, { name: "calendar", width: width, height: height, color: color });
};

var IcnCheck = exports.IcnCheck = function IcnCheck(_ref21) {
    var width = _ref21.width,
        height = _ref21.height,
        color = _ref21.color;
    return _react2.default.createElement(Icon, { name: "check", width: width, height: height, color: color });
};

var IcnChecklist = exports.IcnChecklist = function IcnChecklist(_ref22) {
    var width = _ref22.width,
        height = _ref22.height,
        color = _ref22.color;
    return _react2.default.createElement(Icon, { name: "checklist", width: width, height: height, color: color });
};

var IcnChevronDown = exports.IcnChevronDown = function IcnChevronDown(_ref23) {
    var width = _ref23.width,
        height = _ref23.height,
        color = _ref23.color;
    return _react2.default.createElement(Icon, { name: "chevron-down", width: width, height: height, color: color });
};

var IcnChevronLeft = exports.IcnChevronLeft = function IcnChevronLeft(_ref24) {
    var width = _ref24.width,
        height = _ref24.height,
        color = _ref24.color;
    return _react2.default.createElement(Icon, { name: "chevron-left", width: width, height: height, color: color });
};

var IcnChevronRight = exports.IcnChevronRight = function IcnChevronRight(_ref25) {
    var width = _ref25.width,
        height = _ref25.height,
        color = _ref25.color;
    return _react2.default.createElement(Icon, { name: "chevron-right", width: width, height: height, color: color });
};

var IcnChevronUp = exports.IcnChevronUp = function IcnChevronUp(_ref26) {
    var width = _ref26.width,
        height = _ref26.height,
        color = _ref26.color;
    return _react2.default.createElement(Icon, { name: "chevron-up", width: width, height: height, color: color });
};

var IcnCircleSlash = exports.IcnCircleSlash = function IcnCircleSlash(_ref27) {
    var width = _ref27.width,
        height = _ref27.height,
        color = _ref27.color;
    return _react2.default.createElement(Icon, { name: "circle-slash", width: width, height: height, color: color });
};

var IcnCircuitBoard = exports.IcnCircuitBoard = function IcnCircuitBoard(_ref28) {
    var width = _ref28.width,
        height = _ref28.height,
        color = _ref28.color;
    return _react2.default.createElement(Icon, { name: "circuit-board", width: width, height: height, color: color });
};

var IcnClippy = exports.IcnClippy = function IcnClippy(_ref29) {
    var width = _ref29.width,
        height = _ref29.height,
        color = _ref29.color;
    return _react2.default.createElement(Icon, { name: "clippy", width: width, height: height, color: color });
};

var IcnClock = exports.IcnClock = function IcnClock(_ref30) {
    var width = _ref30.width,
        height = _ref30.height,
        color = _ref30.color;
    return _react2.default.createElement(Icon, { name: "clock", width: width, height: height, color: color });
};

var IcnCloudDownload = exports.IcnCloudDownload = function IcnCloudDownload(_ref31) {
    var width = _ref31.width,
        height = _ref31.height,
        color = _ref31.color;
    return _react2.default.createElement(Icon, { name: "cloud-download", width: width, height: height, color: color });
};

var IcnCloudUpload = exports.IcnCloudUpload = function IcnCloudUpload(_ref32) {
    var width = _ref32.width,
        height = _ref32.height,
        color = _ref32.color;
    return _react2.default.createElement(Icon, { name: "cloud-upload", width: width, height: height, color: color });
};

var IcnCode = exports.IcnCode = function IcnCode(_ref33) {
    var width = _ref33.width,
        height = _ref33.height,
        color = _ref33.color;
    return _react2.default.createElement(Icon, { name: "code", width: width, height: height, color: color });
};

var IcnComment = exports.IcnComment = function IcnComment(_ref34) {
    var width = _ref34.width,
        height = _ref34.height,
        color = _ref34.color;
    return _react2.default.createElement(Icon, { name: "comment", width: width, height: height, color: color });
};

var IcnCommentDiscussion = exports.IcnCommentDiscussion = function IcnCommentDiscussion(_ref35) {
    var width = _ref35.width,
        height = _ref35.height,
        color = _ref35.color;
    return _react2.default.createElement(Icon, {
        name: "comment-discussion",
        width: width,
        height: height,
        color: color
    });
};

var IcnCreditCard = exports.IcnCreditCard = function IcnCreditCard(_ref36) {
    var width = _ref36.width,
        height = _ref36.height,
        color = _ref36.color;
    return _react2.default.createElement(Icon, { name: "credit-card", width: width, height: height, color: color });
};

var IcnDash = exports.IcnDash = function IcnDash(_ref37) {
    var width = _ref37.width,
        height = _ref37.height,
        color = _ref37.color;
    return _react2.default.createElement(Icon, { name: "dash", width: width, height: height, color: color });
};

var IcnDashboard = exports.IcnDashboard = function IcnDashboard(_ref38) {
    var width = _ref38.width,
        height = _ref38.height,
        color = _ref38.color;
    return _react2.default.createElement(Icon, { name: "dashboard", width: width, height: height, color: color });
};

var IcnDatabase = exports.IcnDatabase = function IcnDatabase(_ref39) {
    var width = _ref39.width,
        height = _ref39.height,
        color = _ref39.color;
    return _react2.default.createElement(Icon, { name: "database", width: width, height: height, color: color });
};

var IcnDesktopDownload = exports.IcnDesktopDownload = function IcnDesktopDownload(_ref40) {
    var width = _ref40.width,
        height = _ref40.height,
        color = _ref40.color;
    return _react2.default.createElement(Icon, { name: "desktop-download", width: width, height: height, color: color });
};

var IcnDeviceCamera = exports.IcnDeviceCamera = function IcnDeviceCamera(_ref41) {
    var width = _ref41.width,
        height = _ref41.height,
        color = _ref41.color;
    return _react2.default.createElement(Icon, { name: "device-camera", width: width, height: height, color: color });
};

var IcnDeviceCameraVideo = exports.IcnDeviceCameraVideo = function IcnDeviceCameraVideo(_ref42) {
    var width = _ref42.width,
        height = _ref42.height,
        color = _ref42.color;
    return _react2.default.createElement(Icon, {
        name: "device-camera-video",
        width: width,
        height: height,
        color: color
    });
};

var IcnDeviceDesktop = exports.IcnDeviceDesktop = function IcnDeviceDesktop(_ref43) {
    var width = _ref43.width,
        height = _ref43.height,
        color = _ref43.color;
    return _react2.default.createElement(Icon, { name: "device-desktop", width: width, height: height, color: color });
};

var IcnDeviceMobile = exports.IcnDeviceMobile = function IcnDeviceMobile(_ref44) {
    var width = _ref44.width,
        height = _ref44.height,
        color = _ref44.color;
    return _react2.default.createElement(Icon, { name: "device-mobile", width: width, height: height, color: color });
};

var IcnDiff = exports.IcnDiff = function IcnDiff(_ref45) {
    var width = _ref45.width,
        height = _ref45.height,
        color = _ref45.color;
    return _react2.default.createElement(Icon, { name: "diff", width: width, height: height, color: color });
};

var IcnDiffAdded = exports.IcnDiffAdded = function IcnDiffAdded(_ref46) {
    var width = _ref46.width,
        height = _ref46.height,
        color = _ref46.color;
    return _react2.default.createElement(Icon, { name: "diff-added", width: width, height: height, color: color });
};

var IcnDiffIgnored = exports.IcnDiffIgnored = function IcnDiffIgnored(_ref47) {
    var width = _ref47.width,
        height = _ref47.height,
        color = _ref47.color;
    return _react2.default.createElement(Icon, { name: "diff-ignored", width: width, height: height, color: color });
};

var IcnDiffModified = exports.IcnDiffModified = function IcnDiffModified(_ref48) {
    var width = _ref48.width,
        height = _ref48.height,
        color = _ref48.color;
    return _react2.default.createElement(Icon, { name: "diff-modified", width: width, height: height, color: color });
};

var IcnDiffRemoved = exports.IcnDiffRemoved = function IcnDiffRemoved(_ref49) {
    var width = _ref49.width,
        height = _ref49.height,
        color = _ref49.color;
    return _react2.default.createElement(Icon, { name: "diff-removed", width: width, height: height, color: color });
};

var IcnDiffRenamed = exports.IcnDiffRenamed = function IcnDiffRenamed(_ref50) {
    var width = _ref50.width,
        height = _ref50.height,
        color = _ref50.color;
    return _react2.default.createElement(Icon, { name: "diff-renamed", width: width, height: height, color: color });
};

var IcnEllipsis = exports.IcnEllipsis = function IcnEllipsis(_ref51) {
    var width = _ref51.width,
        height = _ref51.height,
        color = _ref51.color;
    return _react2.default.createElement(Icon, { name: "ellipsis", width: width, height: height, color: color });
};

var IcnEye = exports.IcnEye = function IcnEye(_ref52) {
    var width = _ref52.width,
        height = _ref52.height,
        color = _ref52.color;
    return _react2.default.createElement(Icon, { name: "eye", width: width, height: height, color: color });
};

var IcnFile = exports.IcnFile = function IcnFile(_ref53) {
    var width = _ref53.width,
        height = _ref53.height,
        color = _ref53.color;
    return _react2.default.createElement(Icon, { name: "file", width: width, height: height, color: color });
};

var IcnFileBinary = exports.IcnFileBinary = function IcnFileBinary(_ref54) {
    var width = _ref54.width,
        height = _ref54.height,
        color = _ref54.color;
    return _react2.default.createElement(Icon, { name: "file-binary", width: width, height: height, color: color });
};

var IcnFileCode = exports.IcnFileCode = function IcnFileCode(_ref55) {
    var width = _ref55.width,
        height = _ref55.height,
        color = _ref55.color;
    return _react2.default.createElement(Icon, { name: "file-code", width: width, height: height, color: color });
};

var IcnFileDirectory = exports.IcnFileDirectory = function IcnFileDirectory(_ref56) {
    var width = _ref56.width,
        height = _ref56.height,
        color = _ref56.color;
    return _react2.default.createElement(Icon, { name: "file-directory", width: width, height: height, color: color });
};

var IcnFileMedia = exports.IcnFileMedia = function IcnFileMedia(_ref57) {
    var width = _ref57.width,
        height = _ref57.height,
        color = _ref57.color;
    return _react2.default.createElement(Icon, { name: "file-media", width: width, height: height, color: color });
};

var IcnFilePdf = exports.IcnFilePdf = function IcnFilePdf(_ref58) {
    var width = _ref58.width,
        height = _ref58.height,
        color = _ref58.color;
    return _react2.default.createElement(Icon, { name: "file-pdf", width: width, height: height, color: color });
};

var IcnFileSubmodule = exports.IcnFileSubmodule = function IcnFileSubmodule(_ref59) {
    var width = _ref59.width,
        height = _ref59.height,
        color = _ref59.color;
    return _react2.default.createElement(Icon, { name: "file-submodule", width: width, height: height, color: color });
};

var IcnFileSymlinkDirectory = exports.IcnFileSymlinkDirectory = function IcnFileSymlinkDirectory(_ref60) {
    var width = _ref60.width,
        height = _ref60.height,
        color = _ref60.color;
    return _react2.default.createElement(Icon, {
        name: "file-symlink-directory",
        width: width,
        height: height,
        color: color
    });
};

var IcnFileSymlinkFile = exports.IcnFileSymlinkFile = function IcnFileSymlinkFile(_ref61) {
    var width = _ref61.width,
        height = _ref61.height,
        color = _ref61.color;
    return _react2.default.createElement(Icon, {
        name: "file-symlink-file",
        width: width,
        height: height,
        color: color
    });
};

var IcnFileZip = exports.IcnFileZip = function IcnFileZip(_ref62) {
    var width = _ref62.width,
        height = _ref62.height,
        color = _ref62.color;
    return _react2.default.createElement(Icon, { name: "file-zip", width: width, height: height, color: color });
};

var IcnFlame = exports.IcnFlame = function IcnFlame(_ref63) {
    var width = _ref63.width,
        height = _ref63.height,
        color = _ref63.color;
    return _react2.default.createElement(Icon, { name: "flame", width: width, height: height, color: color });
};

var IcnFold = exports.IcnFold = function IcnFold(_ref64) {
    var width = _ref64.width,
        height = _ref64.height,
        color = _ref64.color;
    return _react2.default.createElement(Icon, { name: "fold", width: width, height: height, color: color });
};

var IcnGear = exports.IcnGear = function IcnGear(_ref65) {
    var width = _ref65.width,
        height = _ref65.height,
        color = _ref65.color;
    return _react2.default.createElement(Icon, { name: "gear", width: width, height: height, color: color });
};

var IcnGift = exports.IcnGift = function IcnGift(_ref66) {
    var width = _ref66.width,
        height = _ref66.height,
        color = _ref66.color;
    return _react2.default.createElement(Icon, { name: "gift", width: width, height: height, color: color });
};

var IcnGist = exports.IcnGist = function IcnGist(_ref67) {
    var width = _ref67.width,
        height = _ref67.height,
        color = _ref67.color;
    return _react2.default.createElement(Icon, { name: "gist", width: width, height: height, color: color });
};

var IcnGistSecret = exports.IcnGistSecret = function IcnGistSecret(_ref68) {
    var width = _ref68.width,
        height = _ref68.height,
        color = _ref68.color;
    return _react2.default.createElement(Icon, { name: "gist-secret", width: width, height: height, color: color });
};

var IcnGitBranch = exports.IcnGitBranch = function IcnGitBranch(_ref69) {
    var width = _ref69.width,
        height = _ref69.height,
        color = _ref69.color;
    return _react2.default.createElement(Icon, { name: "git-branch", width: width, height: height, color: color });
};

var IcnGitCommit = exports.IcnGitCommit = function IcnGitCommit(_ref70) {
    var width = _ref70.width,
        height = _ref70.height,
        color = _ref70.color;
    return _react2.default.createElement(Icon, { name: "git-commit", width: width, height: height, color: color });
};

var IcnGitCompare = exports.IcnGitCompare = function IcnGitCompare(_ref71) {
    var width = _ref71.width,
        height = _ref71.height,
        color = _ref71.color;
    return _react2.default.createElement(Icon, { name: "git-compare", width: width, height: height, color: color });
};

var IcnGitMerge = exports.IcnGitMerge = function IcnGitMerge(_ref72) {
    var width = _ref72.width,
        height = _ref72.height,
        color = _ref72.color;
    return _react2.default.createElement(Icon, { name: "git-merge", width: width, height: height, color: color });
};

var IcnGitPullRequest = exports.IcnGitPullRequest = function IcnGitPullRequest(_ref73) {
    var width = _ref73.width,
        height = _ref73.height,
        color = _ref73.color;
    return _react2.default.createElement(Icon, { name: "git-pull-request", width: width, height: height, color: color });
};

var IcnGlobe = exports.IcnGlobe = function IcnGlobe(_ref74) {
    var width = _ref74.width,
        height = _ref74.height,
        color = _ref74.color;
    return _react2.default.createElement(Icon, { name: "globe", width: width, height: height, color: color });
};

var IcnGrabber = exports.IcnGrabber = function IcnGrabber(_ref75) {
    var width = _ref75.width,
        height = _ref75.height,
        color = _ref75.color;
    return _react2.default.createElement(Icon, { name: "grabber", width: width, height: height, color: color });
};

var IcnGraph = exports.IcnGraph = function IcnGraph(_ref76) {
    var width = _ref76.width,
        height = _ref76.height,
        color = _ref76.color;
    return _react2.default.createElement(Icon, { name: "graph", width: width, height: height, color: color });
};

var IcnHeart = exports.IcnHeart = function IcnHeart(_ref77) {
    var width = _ref77.width,
        height = _ref77.height,
        color = _ref77.color;
    return _react2.default.createElement(Icon, { name: "heart", width: width, height: height, color: color });
};

var IcnHistory = exports.IcnHistory = function IcnHistory(_ref78) {
    var width = _ref78.width,
        height = _ref78.height,
        color = _ref78.color;
    return _react2.default.createElement(Icon, { name: "history", width: width, height: height, color: color });
};

var IcnHome = exports.IcnHome = function IcnHome(_ref79) {
    var width = _ref79.width,
        height = _ref79.height,
        color = _ref79.color;
    return _react2.default.createElement(Icon, { name: "home", width: width, height: height, color: color });
};

var IcnHorizontalRule = exports.IcnHorizontalRule = function IcnHorizontalRule(_ref80) {
    var width = _ref80.width,
        height = _ref80.height,
        color = _ref80.color;
    return _react2.default.createElement(Icon, { name: "horizontal-rule", width: width, height: height, color: color });
};

var IcnHubot = exports.IcnHubot = function IcnHubot(_ref81) {
    var width = _ref81.width,
        height = _ref81.height,
        color = _ref81.color;
    return _react2.default.createElement(Icon, { name: "hubot", width: width, height: height, color: color });
};

var IcnInbox = exports.IcnInbox = function IcnInbox(_ref82) {
    var width = _ref82.width,
        height = _ref82.height,
        color = _ref82.color;
    return _react2.default.createElement(Icon, { name: "inbox", width: width, height: height, color: color });
};

var IcnInfo = exports.IcnInfo = function IcnInfo(_ref83) {
    var width = _ref83.width,
        height = _ref83.height,
        color = _ref83.color;
    return _react2.default.createElement(Icon, { name: "info", width: width, height: height, color: color });
};

var IcnIssueClosed = exports.IcnIssueClosed = function IcnIssueClosed(_ref84) {
    var width = _ref84.width,
        height = _ref84.height,
        color = _ref84.color;
    return _react2.default.createElement(Icon, { name: "issue-closed", width: width, height: height, color: color });
};

var IcnIssueOpened = exports.IcnIssueOpened = function IcnIssueOpened(_ref85) {
    var width = _ref85.width,
        height = _ref85.height,
        color = _ref85.color;
    return _react2.default.createElement(Icon, { name: "issue-opened", width: width, height: height, color: color });
};

var IcnIssueReopened = exports.IcnIssueReopened = function IcnIssueReopened(_ref86) {
    var width = _ref86.width,
        height = _ref86.height,
        color = _ref86.color;
    return _react2.default.createElement(Icon, { name: "issue-reopened", width: width, height: height, color: color });
};

var IcnItalic = exports.IcnItalic = function IcnItalic(_ref87) {
    var width = _ref87.width,
        height = _ref87.height,
        color = _ref87.color;
    return _react2.default.createElement(Icon, { name: "italic", width: width, height: height, color: color });
};

var IcnJersey = exports.IcnJersey = function IcnJersey(_ref88) {
    var width = _ref88.width,
        height = _ref88.height,
        color = _ref88.color;
    return _react2.default.createElement(Icon, { name: "jersey", width: width, height: height, color: color });
};

var IcnKebabHorizontal = exports.IcnKebabHorizontal = function IcnKebabHorizontal(_ref89) {
    var width = _ref89.width,
        height = _ref89.height,
        color = _ref89.color;
    return _react2.default.createElement(Icon, { name: "kebab-horizontal", width: width, height: height, color: color });
};

var IcnKebabVertical = exports.IcnKebabVertical = function IcnKebabVertical(_ref90) {
    var width = _ref90.width,
        height = _ref90.height,
        color = _ref90.color;
    return _react2.default.createElement(Icon, { name: "kebab-vertical", width: width, height: height, color: color });
};

var IcnKey = exports.IcnKey = function IcnKey(_ref91) {
    var width = _ref91.width,
        height = _ref91.height,
        color = _ref91.color;
    return _react2.default.createElement(Icon, { name: "key", width: width, height: height, color: color });
};

var IcnKeyboard = exports.IcnKeyboard = function IcnKeyboard(_ref92) {
    var width = _ref92.width,
        height = _ref92.height,
        color = _ref92.color;
    return _react2.default.createElement(Icon, { name: "keyboard", width: width, height: height, color: color });
};

var IcnLaw = exports.IcnLaw = function IcnLaw(_ref93) {
    var width = _ref93.width,
        height = _ref93.height,
        color = _ref93.color;
    return _react2.default.createElement(Icon, { name: "law", width: width, height: height, color: color });
};

var IcnLightBulb = exports.IcnLightBulb = function IcnLightBulb(_ref94) {
    var width = _ref94.width,
        height = _ref94.height,
        color = _ref94.color;
    return _react2.default.createElement(Icon, { name: "light-bulb", width: width, height: height, color: color });
};

var IcnLink = exports.IcnLink = function IcnLink(_ref95) {
    var width = _ref95.width,
        height = _ref95.height,
        color = _ref95.color;
    return _react2.default.createElement(Icon, { name: "link", width: width, height: height, color: color });
};

var IcnLinkExternal = exports.IcnLinkExternal = function IcnLinkExternal(_ref96) {
    var width = _ref96.width,
        height = _ref96.height,
        color = _ref96.color;
    return _react2.default.createElement(Icon, { name: "link-external", width: width, height: height, color: color });
};

var IcnListOrdered = exports.IcnListOrdered = function IcnListOrdered(_ref97) {
    var width = _ref97.width,
        height = _ref97.height,
        color = _ref97.color;
    return _react2.default.createElement(Icon, { name: "list-ordered", width: width, height: height, color: color });
};

var IcnListUnordered = exports.IcnListUnordered = function IcnListUnordered(_ref98) {
    var width = _ref98.width,
        height = _ref98.height,
        color = _ref98.color;
    return _react2.default.createElement(Icon, { name: "list-unordered", width: width, height: height, color: color });
};

var IcnLocation = exports.IcnLocation = function IcnLocation(_ref99) {
    var width = _ref99.width,
        height = _ref99.height,
        color = _ref99.color;
    return _react2.default.createElement(Icon, { name: "location", width: width, height: height, color: color });
};

var IcnLock = exports.IcnLock = function IcnLock(_ref100) {
    var width = _ref100.width,
        height = _ref100.height,
        color = _ref100.color;
    return _react2.default.createElement(Icon, { name: "lock", width: width, height: height, color: color });
};

var IcnLogoGist = exports.IcnLogoGist = function IcnLogoGist(_ref101) {
    var width = _ref101.width,
        height = _ref101.height,
        color = _ref101.color;
    return _react2.default.createElement(Icon, { name: "logo-gist", width: width, height: height, color: color });
};

var IcnLogoGithub = exports.IcnLogoGithub = function IcnLogoGithub(_ref102) {
    var width = _ref102.width,
        height = _ref102.height,
        color = _ref102.color;
    return _react2.default.createElement(Icon, { name: "logo-github", width: width, height: height, color: color });
};

var IcnMail = exports.IcnMail = function IcnMail(_ref103) {
    var width = _ref103.width,
        height = _ref103.height,
        color = _ref103.color;
    return _react2.default.createElement(Icon, { name: "mail", width: width, height: height, color: color });
};

var IcnMailRead = exports.IcnMailRead = function IcnMailRead(_ref104) {
    var width = _ref104.width,
        height = _ref104.height,
        color = _ref104.color;
    return _react2.default.createElement(Icon, { name: "mail-read", width: width, height: height, color: color });
};

var IcnMarkGithub = exports.IcnMarkGithub = function IcnMarkGithub(_ref105) {
    var width = _ref105.width,
        height = _ref105.height,
        color = _ref105.color;
    return _react2.default.createElement(Icon, { name: "mark-github", width: width, height: height, color: color });
};

var IcnMarkdown = exports.IcnMarkdown = function IcnMarkdown(_ref106) {
    var width = _ref106.width,
        height = _ref106.height,
        color = _ref106.color;
    return _react2.default.createElement(Icon, { name: "markdown", width: width, height: height, color: color });
};

var IcnMegaphone = exports.IcnMegaphone = function IcnMegaphone(_ref107) {
    var width = _ref107.width,
        height = _ref107.height,
        color = _ref107.color;
    return _react2.default.createElement(Icon, { name: "megaphone", width: width, height: height, color: color });
};

var IcnMention = exports.IcnMention = function IcnMention(_ref108) {
    var width = _ref108.width,
        height = _ref108.height,
        color = _ref108.color;
    return _react2.default.createElement(Icon, { name: "mention", width: width, height: height, color: color });
};

var IcnMilestone = exports.IcnMilestone = function IcnMilestone(_ref109) {
    var width = _ref109.width,
        height = _ref109.height,
        color = _ref109.color;
    return _react2.default.createElement(Icon, { name: "milestone", width: width, height: height, color: color });
};

var IcnMirror = exports.IcnMirror = function IcnMirror(_ref110) {
    var width = _ref110.width,
        height = _ref110.height,
        color = _ref110.color;
    return _react2.default.createElement(Icon, { name: "mirror", width: width, height: height, color: color });
};

var IcnMortarBoard = exports.IcnMortarBoard = function IcnMortarBoard(_ref111) {
    var width = _ref111.width,
        height = _ref111.height,
        color = _ref111.color;
    return _react2.default.createElement(Icon, { name: "mortar-board", width: width, height: height, color: color });
};

var IcnMute = exports.IcnMute = function IcnMute(_ref112) {
    var width = _ref112.width,
        height = _ref112.height,
        color = _ref112.color;
    return _react2.default.createElement(Icon, { name: "mute", width: width, height: height, color: color });
};

var IcnNoNewline = exports.IcnNoNewline = function IcnNoNewline(_ref113) {
    var width = _ref113.width,
        height = _ref113.height,
        color = _ref113.color;
    return _react2.default.createElement(Icon, { name: "no-newline", width: width, height: height, color: color });
};

var IcnNote = exports.IcnNote = function IcnNote(_ref114) {
    var width = _ref114.width,
        height = _ref114.height,
        color = _ref114.color;
    return _react2.default.createElement(Icon, { name: "note", width: width, height: height, color: color });
};

var IcnOctoface = exports.IcnOctoface = function IcnOctoface(_ref115) {
    var width = _ref115.width,
        height = _ref115.height,
        color = _ref115.color;
    return _react2.default.createElement(Icon, { name: "octoface", width: width, height: height, color: color });
};

var IcnOrganization = exports.IcnOrganization = function IcnOrganization(_ref116) {
    var width = _ref116.width,
        height = _ref116.height,
        color = _ref116.color;
    return _react2.default.createElement(Icon, { name: "organization", width: width, height: height, color: color });
};

var IcnPackage = exports.IcnPackage = function IcnPackage(_ref117) {
    var width = _ref117.width,
        height = _ref117.height,
        color = _ref117.color;
    return _react2.default.createElement(Icon, { name: "package", width: width, height: height, color: color });
};

var IcnPaintcan = exports.IcnPaintcan = function IcnPaintcan(_ref118) {
    var width = _ref118.width,
        height = _ref118.height,
        color = _ref118.color;
    return _react2.default.createElement(Icon, { name: "paintcan", width: width, height: height, color: color });
};

var IcnPencil = exports.IcnPencil = function IcnPencil(_ref119) {
    var width = _ref119.width,
        height = _ref119.height,
        color = _ref119.color;
    return _react2.default.createElement(Icon, { name: "pencil", width: width, height: height, color: color });
};

var IcnPerson = exports.IcnPerson = function IcnPerson(_ref120) {
    var width = _ref120.width,
        height = _ref120.height,
        color = _ref120.color;
    return _react2.default.createElement(Icon, { name: "person", width: width, height: height, color: color });
};

var IcnPin = exports.IcnPin = function IcnPin(_ref121) {
    var width = _ref121.width,
        height = _ref121.height,
        color = _ref121.color;
    return _react2.default.createElement(Icon, { name: "pin", width: width, height: height, color: color });
};

var IcnPlug = exports.IcnPlug = function IcnPlug(_ref122) {
    var width = _ref122.width,
        height = _ref122.height,
        color = _ref122.color;
    return _react2.default.createElement(Icon, { name: "plug", width: width, height: height, color: color });
};

var IcnPlus = exports.IcnPlus = function IcnPlus(_ref123) {
    var width = _ref123.width,
        height = _ref123.height,
        color = _ref123.color;
    return _react2.default.createElement(Icon, { name: "plus", width: width, height: height, color: color });
};

var IcnPlusSmall = exports.IcnPlusSmall = function IcnPlusSmall(_ref124) {
    var width = _ref124.width,
        height = _ref124.height,
        color = _ref124.color;
    return _react2.default.createElement(Icon, { name: "plus-small", width: width, height: height, color: color });
};

var IcnPrimitiveDot = exports.IcnPrimitiveDot = function IcnPrimitiveDot(_ref125) {
    var width = _ref125.width,
        height = _ref125.height,
        color = _ref125.color;
    return _react2.default.createElement(Icon, { name: "primitive-dot", width: width, height: height, color: color });
};

var IcnPrimitiveSquare = exports.IcnPrimitiveSquare = function IcnPrimitiveSquare(_ref126) {
    var width = _ref126.width,
        height = _ref126.height,
        color = _ref126.color;
    return _react2.default.createElement(Icon, { name: "primitive-square", width: width, height: height, color: color });
};

var IcnProject = exports.IcnProject = function IcnProject(_ref127) {
    var width = _ref127.width,
        height = _ref127.height,
        color = _ref127.color;
    return _react2.default.createElement(Icon, { name: "project", width: width, height: height, color: color });
};

var IcnPulse = exports.IcnPulse = function IcnPulse(_ref128) {
    var width = _ref128.width,
        height = _ref128.height,
        color = _ref128.color;
    return _react2.default.createElement(Icon, { name: "pulse", width: width, height: height, color: color });
};

var IcnQuestion = exports.IcnQuestion = function IcnQuestion(_ref129) {
    var width = _ref129.width,
        height = _ref129.height,
        color = _ref129.color;
    return _react2.default.createElement(Icon, { name: "question", width: width, height: height, color: color });
};

var IcnQuote = exports.IcnQuote = function IcnQuote(_ref130) {
    var width = _ref130.width,
        height = _ref130.height,
        color = _ref130.color;
    return _react2.default.createElement(Icon, { name: "quote", width: width, height: height, color: color });
};

var IcnRadioTower = exports.IcnRadioTower = function IcnRadioTower(_ref131) {
    var width = _ref131.width,
        height = _ref131.height,
        color = _ref131.color;
    return _react2.default.createElement(Icon, { name: "radio-tower", width: width, height: height, color: color });
};

var IcnReply = exports.IcnReply = function IcnReply(_ref132) {
    var width = _ref132.width,
        height = _ref132.height,
        color = _ref132.color;
    return _react2.default.createElement(Icon, { name: "reply", width: width, height: height, color: color });
};

var IcnRepo = exports.IcnRepo = function IcnRepo(_ref133) {
    var width = _ref133.width,
        height = _ref133.height,
        color = _ref133.color;
    return _react2.default.createElement(Icon, { name: "repo", width: width, height: height, color: color });
};

var IcnRepoClone = exports.IcnRepoClone = function IcnRepoClone(_ref134) {
    var width = _ref134.width,
        height = _ref134.height,
        color = _ref134.color;
    return _react2.default.createElement(Icon, { name: "repo-clone", width: width, height: height, color: color });
};

var IcnRepoForcePush = exports.IcnRepoForcePush = function IcnRepoForcePush(_ref135) {
    var width = _ref135.width,
        height = _ref135.height,
        color = _ref135.color;
    return _react2.default.createElement(Icon, { name: "repo-force-push", width: width, height: height, color: color });
};

var IcnRepoForked = exports.IcnRepoForked = function IcnRepoForked(_ref136) {
    var width = _ref136.width,
        height = _ref136.height,
        color = _ref136.color;
    return _react2.default.createElement(Icon, { name: "repo-forked", width: width, height: height, color: color });
};

var IcnRepoPull = exports.IcnRepoPull = function IcnRepoPull(_ref137) {
    var width = _ref137.width,
        height = _ref137.height,
        color = _ref137.color;
    return _react2.default.createElement(Icon, { name: "repo-pull", width: width, height: height, color: color });
};

var IcnRepoPush = exports.IcnRepoPush = function IcnRepoPush(_ref138) {
    var width = _ref138.width,
        height = _ref138.height,
        color = _ref138.color;
    return _react2.default.createElement(Icon, { name: "repo-push", width: width, height: height, color: color });
};

var IcnRocket = exports.IcnRocket = function IcnRocket(_ref139) {
    var width = _ref139.width,
        height = _ref139.height,
        color = _ref139.color;
    return _react2.default.createElement(Icon, { name: "rocket", width: width, height: height, color: color });
};

var IcnRss = exports.IcnRss = function IcnRss(_ref140) {
    var width = _ref140.width,
        height = _ref140.height,
        color = _ref140.color;
    return _react2.default.createElement(Icon, { name: "rss", width: width, height: height, color: color });
};

var IcnRuby = exports.IcnRuby = function IcnRuby(_ref141) {
    var width = _ref141.width,
        height = _ref141.height,
        color = _ref141.color;
    return _react2.default.createElement(Icon, { name: "ruby", width: width, height: height, color: color });
};

var IcnScreenFull = exports.IcnScreenFull = function IcnScreenFull(_ref142) {
    var width = _ref142.width,
        height = _ref142.height,
        color = _ref142.color;
    return _react2.default.createElement(Icon, { name: "screen-full", width: width, height: height, color: color });
};

var IcnScreenNormal = exports.IcnScreenNormal = function IcnScreenNormal(_ref143) {
    var width = _ref143.width,
        height = _ref143.height,
        color = _ref143.color;
    return _react2.default.createElement(Icon, { name: "screen-normal", width: width, height: height, color: color });
};

var IcnSearch = exports.IcnSearch = function IcnSearch(_ref144) {
    var width = _ref144.width,
        height = _ref144.height,
        color = _ref144.color;
    return _react2.default.createElement(Icon, { name: "search", width: width, height: height, color: color });
};

var IcnServer = exports.IcnServer = function IcnServer(_ref145) {
    var width = _ref145.width,
        height = _ref145.height,
        color = _ref145.color;
    return _react2.default.createElement(Icon, { name: "server", width: width, height: height, color: color });
};

var IcnSettings = exports.IcnSettings = function IcnSettings(_ref146) {
    var width = _ref146.width,
        height = _ref146.height,
        color = _ref146.color;
    return _react2.default.createElement(Icon, { name: "settings", width: width, height: height, color: color });
};

var IcnShield = exports.IcnShield = function IcnShield(_ref147) {
    var width = _ref147.width,
        height = _ref147.height,
        color = _ref147.color;
    return _react2.default.createElement(Icon, { name: "shield", width: width, height: height, color: color });
};

var IcnSignIn = exports.IcnSignIn = function IcnSignIn(_ref148) {
    var width = _ref148.width,
        height = _ref148.height,
        color = _ref148.color;
    return _react2.default.createElement(Icon, { name: "sign-in", width: width, height: height, color: color });
};

var IcnSignOut = exports.IcnSignOut = function IcnSignOut(_ref149) {
    var width = _ref149.width,
        height = _ref149.height,
        color = _ref149.color;
    return _react2.default.createElement(Icon, { name: "sign-out", width: width, height: height, color: color });
};

var IcnSmiley = exports.IcnSmiley = function IcnSmiley(_ref150) {
    var width = _ref150.width,
        height = _ref150.height,
        color = _ref150.color;
    return _react2.default.createElement(Icon, { name: "smiley", width: width, height: height, color: color });
};

var IcnSquirrel = exports.IcnSquirrel = function IcnSquirrel(_ref151) {
    var width = _ref151.width,
        height = _ref151.height,
        color = _ref151.color;
    return _react2.default.createElement(Icon, { name: "squirrel", width: width, height: height, color: color });
};

var IcnStar = exports.IcnStar = function IcnStar(_ref152) {
    var width = _ref152.width,
        height = _ref152.height,
        color = _ref152.color;
    return _react2.default.createElement(Icon, { name: "star", width: width, height: height, color: color });
};

var IcnStop = exports.IcnStop = function IcnStop(_ref153) {
    var width = _ref153.width,
        height = _ref153.height,
        color = _ref153.color;
    return _react2.default.createElement(Icon, { name: "stop", width: width, height: height, color: color });
};

var IcnSync = exports.IcnSync = function IcnSync(_ref154) {
    var width = _ref154.width,
        height = _ref154.height,
        color = _ref154.color;
    return _react2.default.createElement(Icon, { name: "sync", width: width, height: height, color: color });
};

var IcnTag = exports.IcnTag = function IcnTag(_ref155) {
    var width = _ref155.width,
        height = _ref155.height,
        color = _ref155.color;
    return _react2.default.createElement(Icon, { name: "tag", width: width, height: height, color: color });
};

var IcnTasklist = exports.IcnTasklist = function IcnTasklist(_ref156) {
    var width = _ref156.width,
        height = _ref156.height,
        color = _ref156.color;
    return _react2.default.createElement(Icon, { name: "tasklist", width: width, height: height, color: color });
};

var IcnTelescope = exports.IcnTelescope = function IcnTelescope(_ref157) {
    var width = _ref157.width,
        height = _ref157.height,
        color = _ref157.color;
    return _react2.default.createElement(Icon, { name: "telescope", width: width, height: height, color: color });
};

var IcnTerminal = exports.IcnTerminal = function IcnTerminal(_ref158) {
    var width = _ref158.width,
        height = _ref158.height,
        color = _ref158.color;
    return _react2.default.createElement(Icon, { name: "terminal", width: width, height: height, color: color });
};

var IcnTextSize = exports.IcnTextSize = function IcnTextSize(_ref159) {
    var width = _ref159.width,
        height = _ref159.height,
        color = _ref159.color;
    return _react2.default.createElement(Icon, { name: "text-size", width: width, height: height, color: color });
};

var IcnThreeBars = exports.IcnThreeBars = function IcnThreeBars(_ref160) {
    var width = _ref160.width,
        height = _ref160.height,
        color = _ref160.color;
    return _react2.default.createElement(Icon, { name: "three-bars", width: width, height: height, color: color });
};

var IcnThumbsdown = exports.IcnThumbsdown = function IcnThumbsdown(_ref161) {
    var width = _ref161.width,
        height = _ref161.height,
        color = _ref161.color;
    return _react2.default.createElement(Icon, { name: "thumbsdown", width: width, height: height, color: color });
};

var IcnThumbsup = exports.IcnThumbsup = function IcnThumbsup(_ref162) {
    var width = _ref162.width,
        height = _ref162.height,
        color = _ref162.color;
    return _react2.default.createElement(Icon, { name: "thumbsup", width: width, height: height, color: color });
};

var IcnTools = exports.IcnTools = function IcnTools(_ref163) {
    var width = _ref163.width,
        height = _ref163.height,
        color = _ref163.color;
    return _react2.default.createElement(Icon, { name: "tools", width: width, height: height, color: color });
};

var IcnTrashcan = exports.IcnTrashcan = function IcnTrashcan(_ref164) {
    var width = _ref164.width,
        height = _ref164.height,
        color = _ref164.color;
    return _react2.default.createElement(Icon, { name: "trashcan", width: width, height: height, color: color });
};

var IcnTriangleDown = exports.IcnTriangleDown = function IcnTriangleDown(_ref165) {
    var width = _ref165.width,
        height = _ref165.height,
        color = _ref165.color;
    return _react2.default.createElement(Icon, { name: "triangle-down", width: width, height: height, color: color });
};

var IcnTriangleLeft = exports.IcnTriangleLeft = function IcnTriangleLeft(_ref166) {
    var width = _ref166.width,
        height = _ref166.height,
        color = _ref166.color;
    return _react2.default.createElement(Icon, { name: "triangle-left", width: width, height: height, color: color });
};

var IcnTriangleRight = exports.IcnTriangleRight = function IcnTriangleRight(_ref167) {
    var width = _ref167.width,
        height = _ref167.height,
        color = _ref167.color;
    return _react2.default.createElement(Icon, { name: "triangle-right", width: width, height: height, color: color });
};

var IcnTriangleUp = exports.IcnTriangleUp = function IcnTriangleUp(_ref168) {
    var width = _ref168.width,
        height = _ref168.height,
        color = _ref168.color;
    return _react2.default.createElement(Icon, { name: "triangle-up", width: width, height: height, color: color });
};

var IcnUnfold = exports.IcnUnfold = function IcnUnfold(_ref169) {
    var width = _ref169.width,
        height = _ref169.height,
        color = _ref169.color;
    return _react2.default.createElement(Icon, { name: "unfold", width: width, height: height, color: color });
};

var IcnUnmute = exports.IcnUnmute = function IcnUnmute(_ref170) {
    var width = _ref170.width,
        height = _ref170.height,
        color = _ref170.color;
    return _react2.default.createElement(Icon, { name: "unmute", width: width, height: height, color: color });
};

var IcnUnverified = exports.IcnUnverified = function IcnUnverified(_ref171) {
    var width = _ref171.width,
        height = _ref171.height,
        color = _ref171.color;
    return _react2.default.createElement(Icon, { name: "unverified", width: width, height: height, color: color });
};

var IcnVerified = exports.IcnVerified = function IcnVerified(_ref172) {
    var width = _ref172.width,
        height = _ref172.height,
        color = _ref172.color;
    return _react2.default.createElement(Icon, { name: "verified", width: width, height: height, color: color });
};

var IcnVersions = exports.IcnVersions = function IcnVersions(_ref173) {
    var width = _ref173.width,
        height = _ref173.height,
        color = _ref173.color;
    return _react2.default.createElement(Icon, { name: "versions", width: width, height: height, color: color });
};

var IcnWatch = exports.IcnWatch = function IcnWatch(_ref174) {
    var width = _ref174.width,
        height = _ref174.height,
        color = _ref174.color;
    return _react2.default.createElement(Icon, { name: "watch", width: width, height: height, color: color });
};

var IcnX = exports.IcnX = function IcnX(_ref175) {
    var width = _ref175.width,
        height = _ref175.height,
        color = _ref175.color;
    return _react2.default.createElement(Icon, { name: "x", width: width, height: height, color: color });
};

var IcnZap = exports.IcnZap = function IcnZap(_ref176) {
    var width = _ref176.width,
        height = _ref176.height,
        color = _ref176.color;
    return _react2.default.createElement(Icon, { name: "zap", width: width, height: height, color: color });
};