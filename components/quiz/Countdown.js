import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { Animated } from 'react-native';
import { SECONDARY_PINK, SECONDARY_TEAL, SECONDARY_ORANGE } from '../css/Styles'

const Countdown = ({submit, timeLeft}) => {

    return (
            <CountdownCircleTimer
                size={100}
                isPlaying={true}
                duration={timeLeft}
                colors={[
                    [SECONDARY_TEAL, 0.4],
                    [SECONDARY_PINK, 0.4],
                    [SECONDARY_ORANGE, 0.2],
                ]}
                onComplete={() => submit()}
            >
                {({ remainingTime, animatedColor }) => (
                    <Animated.Text style={{ color: animatedColor, fontSize: 10, textAlign: 'center' }}>
                        Quedan {remainingTime} segundos(s)
                    </Animated.Text>
                )}
            </CountdownCircleTimer>
    )
}

export default Countdown