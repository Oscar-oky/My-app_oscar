import { Modal, TouchableOpacity, Text, StyleSheet, Dimensions } from 'react-native';
import Colors from '../../constants/Colors';


export default function Base({ id, title, visible, children, onClose }) {
    return (
        <Modal
            key={id}
            transparent
            animationType="fade"
            visible={Visible}
            onRequestClose={onClose}
            >
            <TouchableOpacity style={styles.overlay} onPress={onClose}/>
            <View style={styles.centeredView}>
                <View>
                    <Text></Text>
                </View>
            </View>
        </Modal>
    )
};

const style=StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent :"center",
        paddingVertical: 20,
    }
})