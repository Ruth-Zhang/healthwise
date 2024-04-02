import {SafeAreaView,TouchableOpacity,StyleSheet,View,Container,Row, Col} from "react-native-web";
  import { MdArrowBack } from "react-icons/md";
  
export default function SuggestChange({ onBackPress }) {
    return (
      <SafeAreaView>
        <TouchableOpacity onPress={onBackPress}>
          <View style={[styles.rowIcon, { backgroundColor: "white" }]}>
            <MdArrowBack color="grey" name="at-sign" size={20} />
          </View>
        </TouchableOpacity>
        <ContactUs />
      </SafeAreaView>
    );
}
  
const styles = StyleSheet.create({
    rowIcon: {
      width: 32,
      height: 32,
      borderRadius: 9999,
      marginRight: 12,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
});
  
export function ContactUs() {
    return (
      <View>
        <form className="contact__form w-100">
          <input
            className="form-control"
            id="name"
            name="name"
            placeholder="Name"
            type="text"
            required
          />
          <input
            className="form-control rounded-0"
            id="email"
            name="email"
            placeholder="Email"
            type="email"
            required
          />
          <textarea
            className="form-control rounded-0"
            id="message"
            name="message"
            placeholder="Message"
            rows="5"
            required
          ></textarea>
          <button className="btn ac_btn" type="submit">
            Send
          </button>
        </form>
      </View>
    );
}
  