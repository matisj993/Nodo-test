import { useState, useEffect } from 'react';

interface DeviceState {
    isMobile: boolean;   // < 768px
    isTablet: boolean;   // 768px - 1299px
    isDesktop: boolean;  // >= 1300px
}

export const useBreakpoints = () => {
    const [screens, setScreens] = useState<DeviceState>({
        isMobile: false,
        isTablet: false,
        isDesktop: false,
    });

    useEffect(() => {
        // Definimos los Media Query Lists
        const mobileMql = window.matchMedia('(max-width: 767px)');
        const tabletMql = window.matchMedia('(min-width: 768px) and (max-width: 1299px)');
        const desktopMql = window.matchMedia('(min-width: 1300px)');

        const updateScreens = () => {
            setScreens({
                isMobile: mobileMql.matches,
                isTablet: tabletMql.matches,
                isDesktop: desktopMql.matches,
            });
        };

        // Escuchar cambios en cada uno
        mobileMql.addEventListener('change', updateScreens);
        tabletMql.addEventListener('change', updateScreens);
        desktopMql.addEventListener('change', updateScreens);

        // Estado inicial
        updateScreens();

        return () => {
            mobileMql.removeEventListener('change', updateScreens);
            tabletMql.removeEventListener('change', updateScreens);
            desktopMql.removeEventListener('change', updateScreens);
        };
    }, []);

    return screens;
};