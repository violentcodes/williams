export interface WilliamsEra {
    id: string;
    title: string;
    years: string;
    description: string;
    highlight: string;
    image: string;
}

export const williamsEras: WilliamsEra[] = [
    {
        id: 'origins',
        title: 'The Beginning',
        years: '1977–1979',
        description: 'Founded by Sir Frank Williams, driven by independence and belief.',
        highlight: 'Privateer Spirit',
        image: '/assets/ezgif-frame-010.jpg'
    },
    {
        id: 'golden-era',
        title: 'The Golden Era',
        years: '1980s–1990s',
        description: 'Nine constructors’ championships through pure engineering excellence.',
        highlight: 'Engineering Dominance',
        image: '/assets/ezgif-frame-045.jpg'
    },
    {
        id: 'resilience',
        title: 'Resilience',
        years: '2000s–2010s',
        description: 'Changing regulations, rising competition — Williams endured.',
        highlight: 'Never Left the Grid',
        image: '/assets/ezgif-frame-080.jpg'
    },
    {
        id: 'modern',
        title: 'The Rebuild',
        years: 'Today',
        description: 'A modern reset. A long-term vision. Racing forward.',
        highlight: 'Future Focused',
        image: '/assets/ezgif-frame-120.jpg'
    }
];
