import { useState } from 'react';
import { Text, Banner, HStack, Button, Avatar, Divider, VStack } from "@react-native-material/core";
import { Ionicons } from '@expo/vector-icons';
import { Image } from 'react-native';
import { PacmanIndicator } from 'react-native-indicators'
import { ORANGE, styles } from '../css/Styles';

const Home = () => {

    const QUOTES = [
        'The game Sonic Hedgehog has inspired a gene in the human body called SHH (sonic Hedgehog). It is responsible for ensuring all our limbs and organs grow where they are supposed to',
        'In Pokemon Red & Blue, the three renowned legendary Pokemon, Arcticuno, Zapdos and Moltres actually comes from “One Two Three” in Spanish. Artic-UNO, Zap-DOS, Mol-TRES',
        'Studies indicate that surgeons who regularly play video games make 37% fewer mistakes and operate 27% faster than their peers',
        'If you ever pitied Rockstar’s GTA for getting all the negative reviews, you can save your pity. Because Rockstar games paid to get negative press for its GTA series',
        'Only 8 out of 10 of the developers of the highly successful FPS GoldenEye 007 worked previously in video games',
        'Robin Willams was so big fan of video games that he named his kids after the main characters of popular video games "The legend of Zelda" and "Final Fight"',
        'South Korea has a rule called ‘Cinderella law’ which disallows under-16 gamers to play online video games after midnight',
        'Players of online video game Foldit decoded the crystal structure of an AIDS using a puzzle that had remain unsolved for over 15 years',
        'The creator of the Game boy, worked as Janitor in Nintendo. An extending arm made by him to get rid of the boredom caught the eye of Nintendo’s president and finally became a super successful toy maker',
        'A player created a perfect city called ‘Magnasanti’ using Sim City 3000. The city boasts of game’s maximum population of 6 million with no crime or pollution. It took three years to complete it',
        'Arcade game Space Invaders was so successful in Japan that rumors have it that it caused a shortage of 100-yen coins',
        'Donkey Kong got the name because Miyamoto thought “donkey” meant “stupid” in English',
        'Blizzard was awarded $88 million in a judgment passed against a player who operated her own WoW server to sell WoW items',
        'Starcraft is so famous in South Korea that the top gamers receive huge salary and prizes to play the game at various competitions',
        'Starcraft is the first game to been played in space. Astronauts took a copy of the game on the Space Shuttle mission STS-96 in 1999',
        '"Guitar Hero: Aerosmith" has made more money for the Aerosmith band than the sale of any of their previous albums',
        'Final Fantasy VII was supposed to be exclusively released for Nintendo 64, but it was too big that it would have required 11 to 15 catridges. Eventually, it was ported on PlayStation format',
        'Dragon Quest is so popular in japan, that it is unlawful to release the game on weekdays because that resulted in children and adults taking sick leaves to play it',
        'The creator of Pokemon, got the idea for super successful game after collecting caterpillars as a child and watching them change into butterflies',
        'Xbox was originally named as DirectX Box as a reference to Microsoft’s graphics API, DirectX'
    ]

    const ICONS = ["happy", "heart-circle", "home", "hourglass", "ice-cream", "images", "infinite", "layers", "leaf", "library-sharp", "lock-open", "male-female"]

    const [quoteIndex, setQuoteIndex] = useState(0);
    const [icon, setIcon] = useState(ICONS[Math.floor(Math.random() * ICONS.length)]);

    const updateQuoteAndIcon = () => {
        setQuoteIndex((quoteIndex + 1) % QUOTES.length)
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
                    text={QUOTES[quoteIndex]}
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