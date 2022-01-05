import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { Animated } from 'react-native';

const Countdown = ({submit}) => {

    return (
            <CountdownCircleTimer
                size={100}
                isPlaying={true}
                duration={60}
                colors={[
                    ['#004777', 0.4],
                    ['#F7B801', 0.4],
                    ['#A30000', 0.2],
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
