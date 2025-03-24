import { sizes, typography } from "@shared/styles";

export const lightTheme = {
    colors: {
        primary: "#22C55E", // Основной акцент (зелёный)
        primaryHover: "#16A34A", // Тёмно-зелёный (hover)
        secondary: "#10B981", // Дополнительный акцент (бирюзово-зелёный)
        background: "#F9FAFB", // Основной фон (почти белый)
        widgetBackground: "#E2E8F0", // Фон виджетов (светло-серый)
        textPrimary: "#1E293B", // Основной текст (тёмно-синий)
        textSecondary: "#475569", // Вторичный текст (серо-синий)
        textOnDark: "#F8FAFC", // Текст на тёмном фоне (светлый)
        border: "#CBD5E1", // Разделители и границы
    },
    gradients: {
        green: "linear-gradient(135deg, #A7F3D0, #34D399)", // Светло-зелёный градиент
        blue: "linear-gradient(135deg, #60A5FA, #2563EB)", // Технологичный синий градиент
    },
    shadows: {
        soft: "0 4px 12px rgba(0, 0, 0, 0.05)", // Мягкая тень для карточек
    },
    sizes,
    typography,
};

export const darkTheme = {
    colors: {
        primary: "#16A34A", // Основной акцент (тёмно-зелёный)
        primaryHover: "#15803D", // Акцент при наведении
        secondary: "#0F766E", // Дополнительный акцент (тёмно-бирюзовый)
        background: "#1E1E2E", // Фон (тёмный)
        widgetBackground: "#2A2A40", // Фон виджетов (темно-серый)
        textPrimary: "#E5E7EB", // Основной текст (светло-серый)
        textSecondary: "#9CA3AF", // Вторичный текст (серый)
        textOnDark: "#FFFFFF", // Текст на очень тёмном фоне (белый)
        border: "#3F3F58", // Разделители и границы
    },
    gradients: {
        green: "linear-gradient(135deg, #14532D, #16A34A)", // Тёмно-зелёный градиент
        blue: "linear-gradient(135deg, #1E3A8A, #1D4ED8)", // Глубокий синий градиент
    },
    shadows: {
        soft: "0 4px 12px rgba(0, 0, 0, 0.3)", // Мягкая тень на тёмном фоне
    },
    sizes,
    typography,
};


