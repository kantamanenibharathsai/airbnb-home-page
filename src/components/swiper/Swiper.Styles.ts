export const styles = {
  mainContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    mt: "30px",
    // border: "1px solid red",
  },

  childContainer: {
    width: "90%",
    display: "flex",
    alignItems: "flex-start",
    gap: "14px",
    // border: "1px solid red",
  },

  cardContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "76%",
    position: "relative",
    // border: "1px solid red",
  },

  ulContainer: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    gap: "40px",
    listStyle: "none",
    p: 0,
    m: 0,
    overflow: "scroll",
    scrollBehavior: "smooth",
    // border: "1px solid yellow",
    "&&::-webkit-scrollbar": {
      display: "none",
    },
  },

  listContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    boxSizing: "border-box",
    pb: 0.8,
    borderBottom: "2px solid #989898",
    gap: "6px",
    cursor: "pointer",
    "&:hover": {
      borderBottom: "2px solid #989898",
      "& p": {
        color: "#000",
      },
      "& .MuiSvgIcon-root": {
        color: "#000",
      },
    },
  },

  IconImage: {
    width: "26px",
    height: "26px",
    color: "#989898",
  },

  text: {
    fontFamily: "Poppins",
    fontSize: "13px",
    color: "#989898",
    fontWeight: "700",
    textWrap: "nowrap",
  },

  image1Txt: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    textWrap: "nowrap",
    color: "#232323",
  },
  //   textcontainer: {
  //     textDecoration: "underline",
  //     textUnderlineOffset: "10px",
  //     textDecorationColor: "#cccccc",
  //     textDecorationThickness: "2px",
  //   },

  imageText: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    color: "#878787",
    textWrap: "nowrap",
    textDecoration: "underline",
    textUnderlineOffset: "10px",
    textDecorationColor: "#232323",
    "&:hover": {
      textDecoration: "underline",
      textUnderlineOffset: "10px",
      textDecorationColor: "#cccccc",
      textDecorationThickness: "2px",
    },
  },

  filterStack: {
    border: "1px solid #DDDDDD",
    borderRadius: "10px",
    py: "4px",
    cursor: "pointer",
    px: "14px",
    height: "50px",
    ml: "15px",
    "& svg": {
      fontSize: "17px",
      color: "#000",
      "& + p": {
        fontFamily: "Roboto",
        fontSize: "14px",
        color: "#000",
        fontWeight: "300",
      },
    },
    "& p": {
      fontFamily: "Roboto",
      fontSize: "14px",
      color: "#000",
      fontWeight: "300",
      // border: "3px solid red",
      textWrap: "no-wrap"
    },
    "&:hover": {
      border: "1px solid #000",
    },
  },

  leftButtonIcon: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: "12px",
    width: "27px",
    height: "27px",
    left: -14,
    pl: 1.7,
    bgcolor: "#ffffff",
    zIndex: 2,
    textAlign: "center",
    border: "1px solid #cccccc",
    borderRadius: "50%",
    "&:hover": {
      bgcolor: "#ffffff",
      width: "29px",
      height: "29px",
      zIndex: 2,
      border: "1px solid #cccccc",
    },
  },
  arrowIcon: {
    width: "12px",
    height: "12px",
    fontSize: "16px",
    textAlign: "center",
    color: "#000",
    fontWeight: "800",
    "&:hover": {
      fontSize: "17px",
    },
  },

  rightButtonIcon: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    width: "27px",
    height: "27px",
    top: "12px",
    right: -15,
    bgcolor: "#ffffff",
    zIndex: 5,
    border: "1px solid #cccccc",
    borderRadius: "50%",
    "&:hover": {
      bgcolor: "#ffffff",
      width: "29px",
      height: "29px",
      zIndex: 2,
      border: "1px solid #cccccc",
    },
  },
};
