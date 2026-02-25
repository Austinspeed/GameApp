import { StyleSheet, View, Dimensions } from "react-native";
import Colors from "../../constants/colors";

const Card = ({ children }) => {
    return <View style={styles.card}>{ children }</View>
};

export default Card

const deviceWidth = Dimensions.get('window').width

const styles = StyleSheet.create({
    card: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 24,
    marginTop: deviceWidth < 380 ? 18: 36,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4, // This will set shadow for android devices
    shadowColor: "black", //Shadow properties are for ios devices
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.25,
    }
})