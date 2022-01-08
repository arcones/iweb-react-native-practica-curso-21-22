import { useState } from 'react';
import { Text, Banner, HStack, Button, Avatar, VStack, Stack } from "@react-native-material/core";
import { Ionicons } from '@expo/vector-icons';
import { Image, Platform } from 'react-native';
import { PacmanIndicator } from 'react-native-indicators'
import { ORANGE, styles } from '../Styles';

const Home = () => {

    const ICONS = ["happy", "heart-circle", "home", "hourglass", "ice-cream", "images", "infinite", "layers", "leaf", "library-sharp", "lock-open", "male-female"]
    const QUOTES = [
        "Un gen del cuerpo humano fue bautizado como 'Sonic HedgeHog (SHH)' en honor al erizo de Sega. SHH es fundamental para el crecimiento de las falanges",
        "En la edición Roja & Azul de Pokémon, los tres Pokémon legendarios tienen numeración en español en sus nombres: ArcticUNO, ZapDOS y MolTRES",
        "Algunos estudios indican que profesionales de la cirujía que juegan regularmente a video juegos cometen 37% menos errores y operan un 27% más rápido",
        "Las críticas negaticas del videojuego Grand Theft Auto fueron financiadas por la empresa desarrolladora, Rockstar",
        "Solo 2 de las 10 personas que componían el equipo de desarrollo del super exitoso GoldenEye 007 tenían experiencia previa programando videojuegos",
        "En Corea del Sur la 'Ley Cenicienta' prohibe a los menores de 16 años jugar online a partir de medianoche",
        "Las jugadoras del videojuego online Foldit descifraron la estructura de un virus usando un puzzle que había estado sin resolver 15 años",
        "El creador de Game boy trabajaba como conserje en Nintendo hasta que la creación de un brazo extensible para matar el aburrimiento llamó la atención del presidente de Nintendo",
        "Una jugadora creó la ciudad perfecta, llamada ‘Magnasanti’ en Sim City 3000. La ciudad alberga el máximo de población (6 millones) sin crímenes ni contaminación. Tardó 3 años en construirla",
        "El juego de arcade Space Invaders fue tan popular en Japón que causó desabastecimiento de monedas de 100 yenes",
        "El nombre de Donkey Kong se debió a que Shigeru Miyamoto creía que “donkey” significaba “estúpido” en inglés",
        "Blizzard ganó 88 millones de dólares al ganar el juicio a un jugador que operaba su propio servidor de World of Warcraft donde vendía objetos del juego",
        "Starcraft fue el primer videojuego con ambientación en el espacio. La tripulación de la misión espacial STS-96 de 1999 se llevó una copia de Starcraft al espacio",
        "'Guitar Hero: Aerosmith' ha otorgado más ganancias a la banda Aerosmith que la venta de cualquiera de sus discos musicales",
        "Final Fantasy VII iba a ser lanzado exclusivamente para Nintendo 64, pero su tamaño era tan grande que habrían hecho falta 11 - 15 cartuchos así que eventualmente se porto al formato de la PlayStation",
        "Dragon Quest es tan popular en Japón que es ilegal lanzar versiones del juego en días laborables porque un enorme porcentaje de adultos y niños cogen bajas de enfermedad para jugar",
        "El creador de Pokémon se inspiró para crear los Pokémons en su experiencia cuidando gusanos de seda que después se convertirían en mariposas",
        "La Xbox se llamaba originalmente DirectX Box en referencia al API de gráficos de Microsoft, DirectX"
    ]

    const [quoteIndex, setQuoteIndex] = useState(0);
    const [icon, setIcon] = useState(ICONS[Math.floor(Math.random() * ICONS.length)]);

    const updateQuoteAndIcon = () => {
        setQuoteIndex((quoteIndex + 1) % QUOTES.length)
        setIcon(ICONS[Math.floor(Math.random() * ICONS.length)])
    }

    return (
        <Stack fill center>
            <VStack fill>
                <HStack>
                    <Image style={styles.homeGraffiti} source={require('./img/logo.jpg')} />
                </HStack>
                <VStack fill>
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
                </VStack>
                <Text variant={Platform.OS === 'ios' ? "h5" : "subtitle1"} style={styles.homeMargin}>Pulse las pestañas para jugar al juego que más le apetezca</Text>
                <PacmanIndicator color={ORANGE} size={Platform.OS === 'ios' ? 250 : 200} />
            </VStack>
        </Stack>
    )
}

export default Home