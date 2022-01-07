import { useState } from 'react';
import { Text, Banner, HStack, Button, Avatar, Divider, VStack } from "@react-native-material/core";
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'react-native';
import { PacmanIndicator } from 'react-native-indicators'
import { ORANGE, styles } from '../Styles';
import { useContext } from 'react';
import { LangContext } from '../../App'

const Home = () => {

    const contextValue = useContext(LangContext);

    const ICONS = ["happy", "heart-circle", "home", "hourglass", "ice-cream", "images", "infinite", "layers", "leaf", "library-sharp", "lock-open", "male-female"]

    const [quoteIndex, setQuoteIndex] = useState(0);
    const [icon, setIcon] = useState(ICONS[Math.floor(Math.random() * ICONS.length)]);

    const updateQuoteAndIcon = () => {
        setQuoteIndex((quoteIndex + 1) % contextValue.dictionary.home_quotes.length)
        setIcon(ICONS[Math.floor(Math.random() * ICONS.length)])
    }

    return (
        <>
            <VStack fill>
                <HStack>
                    <Image style={styles.homeGraffiti} source={require('./img/logo.jpg')} />
                </HStack>
                <Divider />
                <Text variant="subtitle1" style={styles.homeMargin}>Te damos la bienvenida a la aplicación</Text>
                <Text variant="subtitle2" style={styles.homeMargin}>Pulsa las pestañas para moverte por los juegos</Text>
                <Divider />
                <Banner
                    illustration={props => (
                        <Avatar
                            color="primary"
                            icon={props => <Ionicons name={icon} {...props} />}
                            {...props}
                        />
                    )}
                    text={contextValue.dictionary.home_quotes[quoteIndex]}
                    buttons={
                        <HStack>
                            <Button variant="text" title="Siguiente cita" onPress={updateQuoteAndIcon} compact />
                        </HStack>
                    }
                />
                <HStack fill center>
                    <PacmanIndicator color={ORANGE} size={120} />
                </HStack>
            </VStack>
        </>
    )
}

export default Home