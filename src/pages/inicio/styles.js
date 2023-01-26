import { StyleSheet } from "react-native";
const Styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
  },

  gravar: {
    fontFamily: "Sofia Sans",
    fontSize: 17,
    color: "#3B3355",
    fontWeight: "500",
  },
  ouvir: {
    fontFamily: "Sofia Sans",
    fontSize: 17,
    color: "#3B3355",
    fontWeight: "500",
  },
  dois: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 70,
  },

  icon: {
    borderRadius: 100,
    height: 90,
    width: 90,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    bottom: 40,
  },
  texto2: {
    fontWeight: "400",
    fontSize: 20,
    textAlign: "center",
    color: "#3B3355",
    opacity: 0.5,
  },
  timer: {
    textAlign: "center",
    fontWeight: "400",
    fontSize: 50,
    color: "#3B3355",
  },
  aa: {
    flex: 2,
    justifyContent: "center",
  },
  text2: {
    color: "#3B3355",
    fontWeight: "500",
    fontSize: 17,
  },

  text3: {
    color: "#3B3355",
    opacity: 0.5,
    fontSize: 17,
    fontWeight: "500",
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  centeredView3: {
    flex: 1,
    width: 330,
    height: 310,
    justifyContent: "center",
    alignItems: "center",
  },
  centeredView2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },

  modalView: {
    backgroundColor: "white",
    borderRadius: 5,
    padding: 20,
    alignItems: "center",
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    elevation: 2,
    width: 160,
    height: 42,
  },
  textStyle1: {
    color: "white",
    textAlign: "center",
    fontWeight: "700",
    fontSize: 20,
    top: 5,
  },
  textStyle2: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    textAlign: "center",
    color: "black",
    fontWeight: "700",
    fontSize: 20,
    marginBottom: 20,
  },
  salvar: {
    width: 160,
    height: 42,
    borderRadius: 6,
    marginRight: 10,
  },
  cancelar: {
    width: 92,
    height: 42,
    borderRadius: 6,
  },
  alinhar: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  input: {
    width: 262,
    height: 47,
    borderWidth: 1,
    borderColor: "#3B3355",
    color: "black",
    borderRadius: 7,
    marginBottom: 30,
  },
  dropdown1BtnStyle: {
    width: 262,
    height: 47,
    backgroundColor: "#FFF",
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "#3B3355",
    marginBottom: 30,
  },
  dropdown1BtnTxtStyle: { color: "#444", textAlign: "left" },
  dropdown1RowStyle: {
    backgroundColor: "#EFEFEF",
  },
  dropdown1RowTxtStyle: { color: "#444", textAlign: "left" },
  corLinha: {
    backgroundColor: "#fff",
    borderBottomColor: "transparent",
  },

  corTextLinha: {
    color: "#000000",
    textAlign: "left",
    marginLeft: "4%",
    fontSize: 16,
    fontWeight: "400",
  },
  textStyle: {
    textAlign: "center",
    fontSize: 23,
    color: "#000",
    marginTop: 15,
  },
  buttonStyle: {
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 30,
    padding: 15,
    backgroundColor: "#8ad24e",
  },
  buttonTextStyle: {
    color: "#fff",
    textAlign: "center",
  },
  ratingBarStyle: {
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 30,
  },
  starImageStyle: {
    width: 40,
    height: 40,
    resizeMode: "cover",
  },
});
export default Styles;
