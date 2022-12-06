// export const cardsDate = document.getElementById('card__created');

export function utcDate(date) {
    // const isoTime = new Intl.DateTimeFormat('default');
    const convertTime = new Intl.DateTimeFormat('default', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
    }).format(date);
    console.log('tid fra utcDate', convertTime);
    return convertTime;
}
// second: 'numeric' | '2-digit',
// timeZoneName: 'short' | 'long',

const timeFormatter = new Intl.DateTimeFormat('default', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
});

export function formatTimeline(date) {
    return timeFormatter.format(date);
}
