export const cardsDate = document.getElementById('card__created');

export function utcDate() {
    let dtFormat = new Intl.DateTimeFormat('default');
    let date = new date();
    cardsDate.innerHTML = dtFormat.format(date);
}
