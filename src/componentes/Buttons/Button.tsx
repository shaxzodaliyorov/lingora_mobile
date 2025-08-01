import React, {FC} from 'react';
import {Text, StyleSheet, TextStyle, TouchableOpacity} from 'react-native';

type ButtonStyle = 'outline' | 'filled' | 'link';
type ButtonType = 'primary' | 'neutral' | 'danger' | 'invisible' | 'overlay';
type ButtonState = 'default' | 'disabled' | 'hover' | 'focused';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps {
    size?: ButtonSize;
    type?: ButtonType;
    style?: ButtonStyle;
    state?: ButtonState;
    text: string;
    disabled?: boolean;
    onPress?: () => void;
    textColor?: string;
    iconLeft?: React.ReactNode;
    iconRight?: React.ReactNode;
}


const colors = {
    primary: "#FEF8AD",
    neutral: '#7F2F5F',
    danger: '#FF4B4B',
    invisible: 'transparent',
    overlay: '#00000040',
}

const Button: React.FC<ButtonProps> = ({
    onPress, 
    size = "md", 
    type = 'primary', 
    style = 'filled', 
    state = 'default', 
    disabled = false, 
    iconLeft = null, 
    iconRight = null, 
    text,
    textColor
}) => {

    const getBackgroundColor = () : string => {

        return type === 'invisible' ? colors.invisible : type === 'neutral' ? colors.neutral : type === 'danger' ? colors.danger : type === 'overlay' ? colors.overlay : colors.primary ;
    };

    const getBorderColor = () : string => {
        if (style === 'outline') {
            return type === 'primary' ? '#FFE873' : '#852D91';
        }
        return 'transparent';
    };

    const getButtonSize = () : ButtonSize => {
        if (size === 'sm') {
            return 'sm';
        } else if (size === 'md') {
            return 'md';
        } else {
            return 'lg';
        }
    };

    const getTextColor = () : string => {
        if (style === 'outline') {
            return type === 'primary' ? '#FFE873' : '#852D91';
        }
        return textColor || '#fff';
    };  

    return(
    <TouchableOpacity 
        onPress = {onPress} 
        disabled = {disabled}
        style={[
            styles.button,
            { backgroundColor: getBackgroundColor(), borderColor: getBorderColor(), borderWidth: style === 'outline' ? 2 : 0, opacity: disabled ? 0.6 : 1 },
            getButtonSize() === 'sm' && styles.sm,
            getButtonSize() === 'md' && styles.md,
            getButtonSize() === 'lg' && styles.lg,
        ]}> 
        
        {iconLeft}
        <Text style={[styles.text, {color: getTextColor()}]}> {text}</Text>
        {iconRight}
    </TouchableOpacity >
    )};

    
const styles = StyleSheet.create({
    button: {
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        margin: 8,
    },
    sm: {
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    md: {
        paddingVertical: 12,
        paddingHorizontal: 24,
    },
    lg: {
        paddingVertical: 20,
        paddingHorizontal: 28,
    },
    outline: {
        borderColor: '#FFE873',
    },
    filled: {
        backgroundColor: '#FFE873',
    },
    link: {
        backgroundColor: 'transparent',
    },
    default: {
        opacity: 1,
    },
    disabled: {
        opacity: 0.6,
    },
    hover: {
        opacity: 0.8,
    },
    focused: {
        opacity: 0.8,
    },  
    text: {
        fontWeight: '600',
        fontSize: 16,
        textAlign: 'center',
    },
});

export default Button;
