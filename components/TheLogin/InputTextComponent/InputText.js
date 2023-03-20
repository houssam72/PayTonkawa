import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { textinput } from "../../styles/styles";
import { FontAwesome } from "@expo/vector-icons";

// type textProps = {
//   name: string;
//   placeHolder: string;
//   required: boolean;
//   value: string;
//   setValue:React.Dispatch<React.SetStateAction<string>>
// };

const InputText = (props) => {
  const { name, placeHolder, required, value, setValue, secureTextEntry } =
    props;
  return (
    <>
      <View style={textinput.textView}>
        <Text style={textinput.text}>{name}</Text>
        {required && (
          <FontAwesome name="asterisk" size={24} style={textinput.etoile} />
        )}
      </View>
      <View>
        <TextInput
          style={textinput.input}
          placeholder={placeHolder}
          placeholderTextColor="white"
          value={value}
          secureTextEntry={secureTextEntry}
          onChangeText={(val) => {
            {
              setValue ? setValue(val) : null;
            }
          }}
          onBlur={() => {}}
        />
      </View>
    </>
  );
};

export default InputText;
