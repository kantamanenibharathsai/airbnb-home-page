const navbarStyles = {
  fixedCont: {
    position: "fixed",
    top: 0,
    zIndex: 99,
    background: "#fff",
    left: 0,
    width: "100%",
    pt: 2,
    pb: 2.5,
    // borderBottom: "1px solid #DDDDDD",
    boxShadow: "0px 15px 8px -15px #000",
  },

  container: {
    width: "100%",
    pt: 2,
    pb: 2.5,
    borderBottom: "1px solid #DDDDDD",
    fontFamily: "Roboto",
    display: { xs: "none", sm: "block" },
    // border: "3px solid green",
  },

  childContainer: {
    display: "flex",
    alignItems: "center",
    width: { xs: "95%", xl: "93%" },
    margin: "auto",
    justifyContent: "space-between",
    height: "inherit",
    // border: "2px solid green",
    position: "relative",
  },

  logo: {
    width: "115px",
    height: "40px",
    cursor: "pointer",
  },

  smallLogo: {
    width: "45px",
    height: "34px",
    cursor: "pointer",
  },

  middleContainer: {
    borderRadius: "35px",
    border: "1px solid #DDDDDD",
    py: "0px",
    pl: "19px",
    pr: "9px",
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  navContainerOne: {
    display: { xs: "none", sm: "flex", lg: "none" },
    alignItems: "center",
    justifyContent: "center",
    // border: "2px solid red",
    width: { xs: "95%", xl: "93%" },
    margin: "auto",
  },

  middleStack: {
    display: { xs: "none", lg: "flex" },
    flexDirection: "row",
    marginLeft: { lg: "200px" },
    alignItems: "center",
    justifyContent: "center",
    gap: { lg: "16px" },
    // border: "2px solid red",
  },

  middleStackOne: {
    display: { xs: "none", sm: "flex", lg: "none" },
  },

  navText: {
    fontSize: { sm: "11px", md: "13px", lg: "16px" },
    fontWeight: "600",
    color: "#222222",
    cursor: "pointer",
    borderRadius: "25px",
    padding: "10px 13px",
    "&:hover": {
      background: "#EDEDED",
    },
  },

  staysText: {
    fontWeight: "600",
    color: "#000",
    "&:hover": {
      background: "#fff",
    },
  },

  colorText: {
    color: "#787878",
    fontWeight: "400",
    "&:hover": {
      background: "#EDEDED",
      color: "#000",
    },
  },

  hrElement: {
    border: "1px solid #DDDDDD",
    height: "32px",
  },

  searchBox: {
    borderRadius: "50%",
    background: "#FF385C",
    width: "30px",
    height: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  searchIcon: {
    color: "#fff",
    width: "21px",
    height: "21px",
  },

  searchIconSmall: {
    color: "#fff",
    width: "14px",
    height: "14px",
  },

  langIconContainer: {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    display: "grid",
    placeItems: "center",
    cursor: "pointer",
    "&:hover": {
      background: "#EDEDED",
    },
  },

  langIcon: {
    color: "#222222",
    // width: "23px",
    // height: "23px",
    cursor: "pointer",
  },

  menuIcon: {
    color: "#222222",
    width: "20px",
    height: "20px",
  },

  rightContainer: {
    display: "flex",
    alignItems: "center",
    gap: { md: "15px", lg: "10px" },
    // border: "2px solid red",
  },

  iconsContainer: {
    cursor: "pointer",
    py: "6px",
    "&:hover": {
      boxShadow: "rgba(99, 99, 99, 0.4) 0px 2px 8px 0px",
    },
  },

  accountIcon: {
    width: "35px",
    height: "35px",
    color: "#222222",
  },

  navContainerTwo: {
    borderRadius: "35px",
    border: "1px solid #DDDDDD",
    py: "0px",
    display: "flex",
    alignItems: "center",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    // gap: "10px",
    cursor: "pointer",
    margin: "auto",
    width: "45%",
    height: "66px",
    position: "relative",
    mt: 1.7,
  },

  navContainerTwoSmall: {
    borderRadius: "35px",
    border: "1px solid #DDDDDD",
    py: "0px",
    display: "none",
    flexDirection: "row",
    alignItems: "center",
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    // gap: "10px",
    cursor: "pointer",
    margin: "auto",
    width: "20%",
    height: "50px",
    position: "relative",
    // marginLeft: { lg: "200px" },
    // mt: 1.7,
    // px: 2,
    left: "100px",
    "& > div:nth-child(3)": {
      borderRight: 0,
    },
  },

  firstContainer: {
    borderRadius: "35px",
    // border: "1px solid #DDDDDD",
    py: "0px",
    display: "flex",
    alignItems: "center",
    // boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    // gap: "10px",
    cursor: "pointer",
    width: "calc(100% - 33.3%)",
    height: "66px",
    position: "relative",
    justifyContent: "flex-start",
  },

  backgroundCont: {
    width: "50%",
    cursor: "pointer",
    borderRadius: "35px",
    height: "64px",
    // background: "#fff",
    display: "flex",
    alignItems: "center",
    // justifyContent: "flex-start",
    pl: "19px",
    position: "relative",
    // pr: "19px",
    "&:hover": {
      background: "#DDDDDD",
      borderRight: 0,
    },
  },

  activeBackgroundCont: {
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
    background: "#fff",
    borderRight: 0,
    "&:hover": {
      background: "#fff",
      borderRight: 0,
    },
  },

  widthCont: {
    width: "33.3%",
  },

  backgroundCont1: {
    width: "50%",
    cursor: "pointer",
    height: "64px",
    // background: "#fff",
    display: "flex",
    alignItems: "center",
  },

  backgroundCont2: {
    width: "50%",
    cursor: "pointer",
    borderRadius: "35px",
    height: "63px",
    // background: "#fff",
    display: "flex",
    alignItems: "center",
    pl: "19px",
    // pr: "19px",
    // borderRight: "1px solid #DDDDDD",
    "&:hover": {
      background: "#DDDDDD",
      borderRight: 0,
      height: "65px",
    },
  },

  activeBackgroundCont2: {
    background: "#EDEDED",
    borderRadius: "35px",
    // height: "63px",
    boxShadow: 0,
    "&:hover": {
      background: "#EDEDED",
      borderRadius: "35px",
      boxShadow: 0,
    },
  },

  contentStack: {
    borderRight: "1px solid #DDDDDD",
    width: "100%",
    // border: "1px solid red",
    "&:hover": {
      // background: "#EDEDED",
      borderRight: 0,
    },
  },

  nav2Head: {
    fontSize: { sm: "11px", md: "13px", lg: "12px" },
    fontWeight: "600",
    color: "#222222",
    cursor: "pointer",
  },

  nav2Text: {
    fontSize: { sm: "11px", md: "13px", lg: "14px" },
    fontWeight: "500",
    color: "#787878",
    cursor: "pointer",
  },

  searchContainer: {
    width: "52px",
    height: "52px",
    background: "#FF385C",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
  },

  regionCard: {
    boxShadow: `rgba(99, 99, 99, 0.2) 0px 2px 8px 0px`,
    borderRadius: "26px",
    height: "400px",
    width: "75%",
    position: "absolute",
    top: "78px",
    left: 0,
    zIndex: 2,
    background: "#fff",
  },

  searchBtn: {
    background: "linear-gradient(to right, #E61E50, #D90865)",
    cursor: "pointer",
    borderRadius: "25px",
    padding: "12px 18px",
    display: "flex",
    alignItems: "center",
    gap: 0.6,
    fontFamily: "Poppins",
    fontSize: "16px",
    fontWeight: "600",
    color: "#fff",
    border: 0,
    outline: "none",
    letterSpacing: 0.4,
  },

  searchBtnSmall: {
    background: "linear-gradient(to right, #E61E50, #D90865)",
    cursor: "pointer",
    borderRadius: "50%",
    // padding: "6px 9px",
    display: "flex",
    alignItems: "center",
    gap: 0.6,
    fontFamily: "Poppins",
    fontSize: "5px",
    fontWeight: "600",
    color: "#fff",
    border: 0,
    outline: "none",
    justifyContent: "center",
    height: "30px",
    width: "30px",
  },

  calendarContainer: {
    boxShadow: `rgba(99, 99, 99, 0.2) 0px 2px 8px 0px`,
    borderRadius: "26px",
    height: "380px",
    width: "100%",
    position: "absolute",
    top: "78px",
    left: 0,
    zIndex: 2,
    background: "#fff",
  },

  addGuestCard: {
    boxShadow: `rgba(99, 99, 99, 0.2) 0px 2px 8px 0px`,
    borderRadius: "26px",
    height: "380px",
    width: "50%",
    position: "absolute",
    top: "78px",
    right: 0,
    zIndex: 2,
    background: "#fff",
    px: "40px",
    py: "13px",
    boxSizing: "border-box",
  },

  addGuestUl: {
    display: "flex",
    flexDirection: "column",
    listStyle: "none",
    p: 0,
    m: 0,
    "& > li:nth-last-of-type(1)": {
      borderBottom: 0,
    },
  },

  addGuestLi: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    py: "20px",
    borderBottom: "1px solid #EBEBEB",
  },

  sizeText: {
    fontSize: { sm: "11px", md: "12px", lg: "15px" },
    p: 0,
  },

  minusBtn: {
    borderRadius: "50%",
    border: "1px solid #EBEBEB",
    display: "grid",
    placeItems: "center",
    width: "35px",
    height: "35px",
    outline: "none",
    cursor: "pointer",
    fontSize: "19px",
    color: "#EBEBEB",
    background: "#fff",
  },

  numText: {
    fontSize: { sm: "11px", md: "12px", lg: "16px" },
    p: 0,
  },

  plusBtn: {
    borderRadius: "50%",
    border: "1px solid #737373",
    display: "grid",
    placeItems: "center",
    width: "35px",
    height: "35px",
    outline: "none",
    cursor: "pointer",
    fontSize: "19px",
    color: "#737373",
  },
};

export default navbarStyles;
