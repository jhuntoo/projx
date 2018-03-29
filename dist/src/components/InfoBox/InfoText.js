"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_jss_1 = require("react-jss");
const styles = theme => ({
    text: {
        display: "block",
        fontWeight: 300,
        lineHeight: 1.5,
        fontSize: ".95em",
        textAlign: "left",
        marginBottom: ".8em",
        "& p:first-child": {
            marginTop: 0
        },
        "& p:last-child": {
            marginBottom: 0
        }
    }
});
const InfoText = (props) => {
    const { classes, info } = props;
    const text = info.node.html;
    return react_1.default.createElement("div", { className: classes.text, dangerouslySetInnerHTML: { __html: text } });
};
;
exports.default = react_jss_1.default(styles)(InfoText);
//# sourceMappingURL=InfoText.js.map