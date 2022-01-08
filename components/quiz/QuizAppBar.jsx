import { AppBar, Avatar, VStack } from "@react-native-material/core";
import { PURPLE, PALE_PINK, styles } from '../Styles';
import Emoji from 'react-native-emoji';
import { useState, useEffect } from "react";
import { getNextEmojiIfLastWasPresentOrFallback } from './util/EmojiManagement';

const QuizAppBar = ({barTitle, onWhat: reRenderOnChangeOf}) => {

    const [appBarEmoji, setAppBarEmoji] = useState("coffee");

    useEffect(() => {
        getNextEmojiIfLastWasPresentOrFallback()
            .then(emoji => setAppBarEmoji(emoji))
    }, [reRenderOnChangeOf]);

    return (
        <AppBar color={PURPLE} tintColor="white"
            title={barTitle}
            trailing={
                <VStack style={styles.quizAvatarContainer}>
                    <Avatar style={styles.quizAvatar} size={35} icon={<Emoji name={appBarEmoji} style={styles.emoji} />} color={PALE_PINK} />
                </VStack>}
        />
    )
}

export default QuizAppBar
