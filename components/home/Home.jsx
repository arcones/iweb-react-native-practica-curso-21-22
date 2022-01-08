import { useState } from 'react';
import { Text, Banner, HStack, Button, Avatar, VStack } from "@react-native-material/core";
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
                            <Button variant="text" title={contextValue.dictionary.home_next_quote} onPress={updateQuoteAndIcon} compact />
                        </HStack>
                    }
                />
                <Text variant="subtitle3" style={styles.homeMargin}>{contextValue.dictionary.home_subtitle}</Text>
                <HStack fill center>
                    <PacmanIndicator color={ORANGE} size={100} />
                </HStack>
            </VStack>
        </>
    )
}

export default Home