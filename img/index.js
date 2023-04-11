const response = await fetch('mail.ru/autors');
const blob = await response.blob();
const num = toNumber(blob.text.length);

