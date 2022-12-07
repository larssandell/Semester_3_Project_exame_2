export function timeDateConv(data, t) {
    const apiDate = new Date(`${data[t].endsAt}`);
    // const currentTime = new Date().getTime();
    const convDate = Intl.DateTimeFormat('default', {
        dateStyle: 'short',
        timeStyle: 'short',
    }).format(apiDate);
    const converted = convDate;
    console.log('timeDateConv', convDate);
    return converted;
}
export function timeDateConvI(data) {
    const apiDate = new Date(`${data.endsAt}`);
    // const currentTime = new Date().getTime();
    const convDate = Intl.DateTimeFormat('default', {
        dateStyle: 'short',
        timeStyle: 'short',
    }).format(apiDate);
    const converted = convDate;
    console.log('timeDateConv', convDate);
    return converted;
}
// const timelineFormatter = new Intl.DateTimeFormat('fr-FR', {
//     dateStyle: 'medium',
//     timeStyle: 'short',
// });

// export function formatTimelineStamp(ele) {
//     return timelineFormatter.format(ele);
// }
