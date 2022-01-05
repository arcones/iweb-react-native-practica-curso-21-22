import { CountdownCircleTimer } from 'react-native-countdown-circle-timer';
import { Animated } from 'react-native';

const Countdown = ({submit}) => {

    return (
            <CountdownCircleTimer
                size={100}
                isPlaying={true}
                duration={5}
                colors={[
                    ['#6200ee', 0.4],
                    ['#FF4081', 0.4],
                    ['#ffc107', 0.2],
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
