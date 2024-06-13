const homeStyles = {
  mainContainer: {
    // minHeight: "100vh",
    width: "100%",
    background: "#E7E7E2",
    // display: "flex",
    // flexDirection: "column",
    position: "relative",
    // border: "4px solid red",
    "& .fixed-body": {
      // position: "absolute",
      // top: 0,
      // borderTopLeftRadius: "0px",
      // borderTopRightRadius: "0px",
      // transition: "1s ease all",
    },
    "& .learn-stack": {
      // display: "none",
      // height: 0,
      // transition: "1s ease all",
      // position: "absolute",
      // top: "60px"
      py: "0px",
      transition: "1s ease all",
    },
  },

  stack: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // height: "60px",
    py: "18px",
    transition: "1s ease all",
     border: "4px solid orange",
    // position: "relative",
    // top: 0,
    // zIndex: 99
  },

  learnMore: {
    fontFamily: "Roboto",
    fontSize: "16px",
    color: "#000",
    borderBottom: "1px solid #000",
    display: "inline-block",
    cursor: "pointer",
    lineHeight: "16px",
    transition: "0.5s"
  },

  mainBody: {
    width: "100%",
    flexGrow: 1,
    boxShadow:
      "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
    borderColor: "#D5D5D0",
    borderTopLeftRadius: "12px",
    borderTopRightRadius: "12px",
    background: "#fff",
    transition: "1s ease all",
    position: "relative",
    top: "0px",
  },

  cardsContainer: {
    // mt: "60px",
    display: "grid",
    width: "91%",
    // border: "2px solid green",
    margin: "auto",
    gridTemplateColumns: "repeat(auto-fit, minmax(310px, 1fr))",
    gridGap: "20px",
  },

  pastExperiences: {
    fontFamily: "Roboto",
    fontSize: "35px",
    color: "#000",
    fontWeight: "800",
  },

  footerContainer: {
    background: "#F7F7F7",
    width: "100%",
    height: "auto",
    pt: "50px",
    pb: "17px",
    "& hr": {},
  },

  footerChildContainer: {
    width: "90%",
    margin: "auto",
    // border: "2px solid green",
    display: "flex",
    flexDirection: "column",
    gap: 1.8,
  },

  inspirationText: {
    fontFamily: "Roboto",
    fontSize: "24px",
    color: "#000",
    fontWeight: "800",
  },

  tabsUlContainer: {
    display: "flex",
    alignItems: "center",
    gap: 3,
    borderBottom: "1px solid #C2C2C2",
    p: 0,
    m: 0,
    listStyle: "none",
  },

  tabLiText: {
    fontFamily: "Roboto",
    fontSize: "16px",
    color: "#717171",
    fontWeight: "400",
    display: "inline-block",
    pb: 1.2,
    borderBottom: "2px solid #000",
    cursor: "pointer",
  },

  activeTabLi: {
    fontFamily: "Roboto",
    fontSize: "16px",
    color: "#000",
    fontWeight: "400",
    display: "inline-block",
    borderBottom: "2px solid #000",
    pb: 1.2,
  },

  tabsDataContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gridGap: "20px",
    // border: "1px solid pink",
  },

  tabDataContainer: {
    // border: "1px solid red",
  },

  locationText: {
    fontFamily: "Roboto",
    fontSize: "15px",
    color: "#000",
    fontWeight: "600",
    // border: "1px solid red",
    lineHeight: "15px",
  },

  rentalsText: {
    fontFamily: "Roboto",
    fontSize: "15px",
    color: "#717171",
    fontWeight: "400",
    lineHeight: "16px",
  },

  showMoreContainer: {
    display: "inline-block",
    cursor: "pointer",
    border: 0,
  },

  showMoreStack: {},

  showText: {
    fontFamily: "Roboto",
    fontSize: "15px",
    color: "#000",
    fontWeight: "600",
    border: 0,
    pb: "1px",
    position: "relative",
    width: "auto",
    "&::after": {
      content: '""',
      position: "absolute",
      width: "100%",
      height: "1.8px",
      left: 0,
      bottom: 0,
      background: "#000",
      transform: "scale(0, 1)",
      transition: "transform 0.4s ease",
    },
    "&:hover::after": {
      transform: "scale(1, 0.8)",
    },
    "&:hover + svg": {
      transform: "rotate(90deg)",
    },
  },

  arrowIcon: {
    color: "#000",
    fontSize: "18px",
    transition: "transform 0.4s ease",
  },

  borderContainer: {
    poistion: "relative",
    width: 0,
    left: 0,
    border: 0,
    transition: "0.6s ease all",
  },

  hrEle: {
    width: "100%",
    border: "1px solid #C2C2C2",
    margin: "55px 0px",
  },

  footerChildContainerOne: {
    width: "90%",
    margin: "auto",
    // border: "2px solid green",
    display: "flex",
    flexDirection: "column",
    gap: 0,
    "& hr:nth-child(2)": {
      mt: "50px",
      mb: "20px",
    },
  },

  gridContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
    // border: "2px solid yellow",
  },

  ulContainer: {
    listStyle: "none",
    // border: "1px solid black",
    display: "grid",
    gridGap: "12px",
    p: 0,
    m: 0,
    "& li": {
      fontFamily: "Roboto",
      fontSize: "15px",
      color: "#000",
      fontWeight: "400",
    },
    "& li:nth-of-type(1)": {
      fontWeight: "800",
    },
  },

  footerBottomCont: {
    display: "grid",
    gridTemplateColumns: "repeat(2, auto)",
    // border: "1px solid black",
    justifyContent: "space-between",
  },

  ulContainerOne: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    listStyle: "none",
    p: 0,
    m: 0,
    "& li": {
      fontFamily: "Roboto",
      fontSize: "14px",
      color: "#000",
      fontWeight: "400",
      // border: "4px solid black",
    },
    "& li::before": {
      content: "'•'",
      color: "#000",
      fontSize: "7.5px",
      display: "inline-block",
      width: "1em",
      marginRight: "5px",
    },
    "& li:nth-of-type(1)::before": {
      display: "none",
      content: "''",
      width: 0,
      marginRight: "0px",
    },
    "& li:nth-of-type(1)": {
      fontFamily: "Roboto",
      fontSize: "14px",
      color: "#000",
      fontWeight: "400",
      display: "flex",
      alignItems: "center",
    },
    "& li:nth-of-type(1) > svg": {
      fontSize: "14px",
      color: "#000",
    },
    "& li:nth-of-type(1) > p": {
      fontFamily: "Roboto",
      fontSize: "14px",
      color: "#000",
      fontWeight: "400",
      // border: "4px solid black",
    },
  },

  footerBottomStack: {
    "& svg": {
      fontSize: "15px",
      color: "#000",
    },
    "& p": {
      fontFamily: "Roboto",
      fontSize: "13px",
      color: "#000",
      fontWeight: "700",
    },
    "& div:nth-child(3) svg": {
      fontSize: "20px",
      color: "#000",
    },
  },
};

export default homeStyles;
