import React from "react";
import { Image, SafeAreaView, Text, View } from "react-native";

import Icon from 'react-native-vector-icons/FontAwesome';


export default function denemeScreen() {
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: "white",
        }}>
            <View style={{
                width: "100%",
                backgroundColor: "red",
                height: "25%",
                flexDirection: "row"
            }}>
                <View style={{
                    flex: 1,
                    backgroundColor: "blue",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                    <Image style={{
                        width: "65%",
                        height: "45%",
                        borderRadius: 1000,
                        borderWidth: 2,
                        borderColor: "white"
                    }}
                        source={require("../assests/images/dzeko.png")} />

                </View>

                <View style={{
                    flex: 2,
                    backgroundColor: "white",
                }}>
                    <View style={{
                        flex: 2,
                        backgroundColor: "white",

                    }}>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: "bold",
                            textAlign: "center",
                            color: "black",
                            marginTop: 10,
                        }}>
                            Edin Dzeko sdaasdasdadasd
                            BEni seeeevvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv
                            fenerbahçe
                        </Text>

                    </View>

                    <View style={{
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center",
                    }}>
                        <Text>
                            <Icon name="facebook" size={30} color="blue" />;
                            <Icon name="rocket" size={30} color="yellow" />;
                        </Text>


                    </View>

                </View>

            </View>

        </SafeAreaView>
    )

}