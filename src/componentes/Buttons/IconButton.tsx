import React, { FC } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

type ButtonType = 'primary' | 'outline' | 'danger' | 'invisible' | 'overlay' | 'yellow';
type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

interface ButtonProps {
    size?: ButtonSize;
    type?: ButtonType;
    disabled?: boolean;
    onPress?: () => void;
    icon: (size: number) => React.ReactNode; // <-- icon is a function
    onLayout?: (event: any) => void; // <-- add this
}

const colors = {
    primary: "#7F2F5F",
    outline: '#7F2F5F',
    danger: '#FF4B4B',
    invisible: 'transparent',
    overlay: '#00000040',
    yellow: "#FEF8AD"
};

const getIconSize = (size: ButtonSize): number => {
    switch (size) {
        case 'xs': return 10;
        case 'sm': return 12;
        case 'md': return 14;
        default: return 16; // lg and above
    }
};

const IconButton: React.FC<ButtonProps> = ({
    onPress,
    size = "md",
    type = 'primary',
    disabled = false,
    icon,
    onLayout
}) => {
    const getBackgroundColor = (): string => {
        return type === 'invisible' ? colors.invisible : type === 'outline' ? colors.outline : type === 'danger' ? colors.danger : type === 'overlay' ? colors.overlay : type === 'yellow' ? colors.yellow : colors.primary;
    };

    const getBorderColor = (): string => {
        return type === 'outline' ? '#fff' : type === 'overlay' ? "##00000040" : 'transparent';
    };

    const getButtonSize = (): ButtonSize => {
        return size === 'xs' ? 'xs' : size === 'sm' ? 'sm' : size === 'md' ? 'md' : size === 'lg' ? 'lg' : size === 'xl' ? 'xl' : size === 'xxl' ? 'xxl' : 'md';
    };

    const iconSize = getIconSize(size);

    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled}
            style={[
                styles.button,
                { backgroundColor: getBackgroundColor(), borderColor: getBorderColor() },
                styles[getButtonSize()],
            ]}
            onLayout={onLayout} // <-- add this

        >
            {icon(iconSize)}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        flex: 0,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        margin: 8,
        aspectRatio: 1,
        borderWidth: 1,
    },
    xs: { padding: 8 },
    sm: { padding: 8 },
    md: { padding: 8 },
    lg: { padding: 10 },
    xl: { padding: 12 },
    xxl: { padding: 20 },
    outline: { borderColor: '#FFE873' },
    filled: { backgroundColor: '#FFE873' },
    link: { backgroundColor: 'transparent' },
    default: { opacity: 1 },
    disabled: { opacity: 0.6 },
    hover: { opacity: 0.8 },
    focused: { opacity: 0.8 },
    icon: { color: 'white' },
});

export default IconButton;