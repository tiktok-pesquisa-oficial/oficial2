export interface Option {
    emoji: string;
    text: string;
}

export interface Question {
    id: number;
    question: string;
    options: Option[];
}

export const QUESTIONS: Question[] = [
    {
        id: 1,
        question: 'Como você avalia sua experiência geral no TikTok?',
        options: [
            { emoji: '😍', text: 'Excelente' },
            { emoji: '😊', text: 'Boa' },
            { emoji: '😐', text: 'Regular' },
            { emoji: '😒', text: 'Ruim' },
        ],
    },
    {
        id: 2,
        question: 'Qual é o seu formato de vídeo favorito no TikTok?',
        options: [
            { emoji: '🎥', text: 'Vídeo curto' },
            { emoji: '📹', text: 'Vídeo médio' },
            { emoji: '⏳', text: 'Vídeo longo' },
            { emoji: '📺', text: 'Live' },
        ],
    },
    {
        id: 3,
        question: 'Como você descobre novos vídeos no TikTok?',
        options: [
            { emoji: '🎯', text: 'Feed "Para você"' },
            { emoji: '👤', text: 'Seguindo criadores' },
            { emoji: '🔍', text: 'Através de hashtags' },
            { emoji: '📜', text: 'Feed "Seguindo"' },
            { emoji: '💡', text: 'Recomendações' },
        ],
    },
    {
        id: 4,
        question: 'Quantas horas por dia você passa no TikTok?',
        options: [
            { emoji: '⏳', text: 'Menos de 1 hora' },
            { emoji: '⏳', text: '1 a 2 horas' },
            { emoji: '⏳', text: '2 a 4 horas' },
            { emoji: '⏳', text: '4 a 6 horas' },
            { emoji: '⏳', text: 'Mais de 6 horas' },
        ],
    },
    {
        id: 5,
        question: 'O que te faz seguir um criador no TikTok?',
        options: [
            { emoji: '🎉', text: 'Conteúdo divertido' },
            { emoji: '📚', text: 'Conteúdo educativo' },
            { emoji: '🤝', text: 'Conexão pessoal' },
            { emoji: '🔥', text: 'Participação em desafios' },
            { emoji: '📅', text: 'Frequência de postagens' },
        ],
    },
    {
        id: 6,
        question: 'Qual desses temas de conteúdo você mais gosta de assistir no TikTok?',
        options: [
            { emoji: '😂', text: 'Comédia' },
            { emoji: '💃', text: 'Dança' },
            { emoji: 'ℹ️', text: 'Tutoriais e dicas' },
            { emoji: '📹', text: 'Vlogs diários' },
            { emoji: '💄', text: 'Moda e beleza' },
        ],
    },
    {
        id: 7,
        question: 'Qual horário do dia você mais usa o TikTok?',
        options: [
            { emoji: '🌅', text: 'Manhã' },
            { emoji: '🌞', text: 'Tarde' },
            { emoji: '🌜', text: 'Noite' },
            { emoji: '🌙', text: 'Madrugada' },
        ],
    },
    {
        id: 8,
        question: 'Qual seção do TikTok você mais acessa?',
        options: [
            { emoji: '🎯', text: 'Para Você' },
            { emoji: '👥', text: 'Seguindo' },
            { emoji: '📺', text: 'TikTok Live' },
            { emoji: '🔍', text: 'Descobrir' },
            { emoji: '➕', text: 'Outro' },
        ],
    },
    {
        id: 9,
        question: 'Com que frequência você comenta em vídeos do TikTok?',
        options: [
            { emoji: '🔄', text: 'Sempre' },
            { emoji: '📆', text: 'Frequentemente' },
            { emoji: '⏳', text: 'Às vezes' },
            { emoji: '🌧️', text: 'Raramente' },
            { emoji: '🚫', text: 'Nunca' },
        ],
    },
    {
        id: 10,
        question: 'Que tipo de interação você mais faz nos vídeos do TikTok?',
        options: [
            { emoji: '👍', text: 'Curtir' },
            { emoji: '💬', text: 'Comentar' },
            { emoji: '🔄', text: 'Compartilhar' },
            { emoji: '📌', text: 'Salvar' },
            { emoji: '🚫', text: 'Nenhuma' },
        ],
    },
    {
        id: 11,
        question: 'Qual é a sua faixa etária?',
        options: [
            { emoji: '🧑‍🎓', text: '13-17 anos' },
            { emoji: '🎉', text: '18-24 anos' },
            { emoji: '👩‍💼', text: '25-34 anos' },
            { emoji: '👵', text: '35 anos ou mais' },
        ],
    },
];

export const TOTAL_REWARD = 868.75;

export function generateRewards(): number[] {
    const weights = [74.5, 82.3, 76.15, 81.4, 71.85, 84.6, 78.25, 83.1, 77.9, 80.45, 78.25];
    const totalWeight = weights.reduce((acc, w) => acc + w, 0);

    const rawRewards = weights.map((w, index) => {
        if (index === weights.length - 1) {
            const sumOthers = weights
                .slice(0, -1)
                .map((sw) => Math.round((sw / totalWeight) * TOTAL_REWARD * 100) / 100)
                .reduce((acc, r) => acc + r, 0);
            return Math.round((TOTAL_REWARD - sumOthers) * 100) / 100;
        }
        return Math.round((w / totalWeight) * TOTAL_REWARD * 100) / 100;
    });

    const last = rawRewards.pop()!;
    const shuffled = rawRewards.sort(() => Math.random() - 0.5);
    shuffled.push(last);
    return shuffled;
}
