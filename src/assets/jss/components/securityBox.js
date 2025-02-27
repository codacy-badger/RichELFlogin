import {makeStyles} from "tss-react/mui";
import {dangerColor, grayColor} from "../base/mainStyle.js";
import fonts from "../../images/fonts.png";


const securityBoxStyles = makeStyles()({
  iptWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: 24,
    marginBottom: 6,
    "&.security": {
      marginBottom: 9
    },
    "&.pwd": {
      marginTop: 6,
      justifyContent: "space-evenly"
    },
    "&.progress": {
      display: "initial",
      width: 178,
      margin: "0 auto",
      "& span": {
        borderRadius: 5
      }
    }
  },
  username: {
    position: "relative",
    width: 36,
    height: 14,
    backgroundImage: `url(${fonts})`,
    backgroundRepeat: "no-repeat",
    backgroundPositionX: 0,
    backgroundPositionY: 2
  },
  pwd: {
    position: "relative",
    width: 36,
    height: 14,
    backgroundImage: `url(${fonts})`,
    backgroundRepeat: "no-repeat",
    backgroundPositionX: 0,
    backgroundPositionY: -12
  },
  divider: {
    position: "relative",
    width: 248,
    left: "calc((100% - 248px) / 2)",
    borderColor: `rgba(255, 255, 255, 0.42)`,
  },
  securityTitle: {
    width: 96,
    height: 36,
    backgroundImage: `url(${fonts})`,
    backgroundRepeat: "no-repeat",
    backgroundPositionX: 10,
    backgroundPositionY: -158,
    backgroundSize: "350%",
    margin: "0 auto"
  },
  securityCloseBtn: {
    position: "relative",
    right: 4,
    color: grayColor[4]
  },
  securityIpt: {
    position: "relative",
    top: 1,
    width: 162,
    backgroundColor: `rgba(255, 255, 255, 0.2)`,
    border: `1px solid ${grayColor[6]}`,
    borderRadius: 3,
    "&.captcha": {
      width: 68,
      marginRight: 8
    },
    "& input": {
      color: grayColor[11],
      padding: "4px 6px 3px",
      fontSize: 12,
      lineHeight: "20px",
      fontFamily: "JetBrainsMono"
    },
    "& .MuiFilledInput-root:before, .MuiFilledInput-root:after": {
      borderBottom: "none !important"
    }
  },
  newPwd: {
    position: "relative",
    width: 56,
    height: 14,
    backgroundImage: `url(${fonts})`,
    backgroundRepeat: "no-repeat",
    backgroundPositionX: 0,
    backgroundPositionY: -200
  },
  captcha: {
    position: "relative",
    width: 56,
    height: 14,
    backgroundImage: `url(${fonts})`,
    backgroundRepeat: "no-repeat",
    backgroundPositionX: -54,
    backgroundPositionY: -200
  },
  captchaBtn: {
    position: "relative",
    width: 84,
    minWidth: 84,
    height: 25,
    top: 1,
    backgroundColor: grayColor[20],
    backgroundImage: `url(${fonts})`,
    backgroundRepeat: "no-repeat",
    backgroundPositionX: -168,
    backgroundPositionY: -53,
    borderRadius: 3,
    "&:hover": {
      backgroundColor: grayColor[21],
    }
  },
  pwdBtn: {
    position: "relative",
    width: 78,
    height: 24,
    "&.change": {
      backgroundColor: dangerColor[0],
      backgroundImage: `url(${fonts})`,
      backgroundRepeat: "no-repeat",
      backgroundPositionX: -180,
      backgroundPositionY: -86,
      "&:hover": {
        backgroundColor: dangerColor[1]
      },
    },
    "&.discard": {
      backgroundColor: grayColor[7],
      backgroundImage: `url(${fonts})`,
      backgroundRepeat: "no-repeat",
      backgroundPositionX: -180,
      backgroundPositionY: -118,
      "&:hover": {
        backgroundColor: grayColor[6]
      },
    }
  },
  progressInfo: {
    position: "relative",
    width: 58,
    height: 14,
    backgroundImage: `url(${fonts})`,
    backgroundRepeat: "no-repeat",
    backgroundPositionY: 2,
    margin: "0 auto",
    "&.success": {
      backgroundPositionX: -164,
    },
    "&.error": {
      backgroundPositionX: -104,
    }
  }
});

export default securityBoxStyles;
