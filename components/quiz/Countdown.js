import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { Animated } from 'react-native';
import { PINK, TEAL, ORANGE, styles } from '../css/Styles'

const Countdown = ({ submit, timeLeft }) => {

    return (
        <CountdownCircleTimer size={100} isPlaying={true} duration={timeLeft}
            colors={[
                [TEAL, 0.4],
                [PINK, 0.4],
                [ORANGE, 0.2],
            ]}
            onComplete={() => submit()}
        >
            {({ remainingTime, animatedColor }) => (
                <Animated.Text style={[styles.quizCountdown, { color: animatedColor }]}>
                    Quedan {remainingTime} segundos(s)
                </Animated.Text>
            )}
        </CountdownCircleTimer>
    )
}

export default Countdown
