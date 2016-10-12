quotes = [
	'"É na arte que o homem se ultrapassa definitivamente." - Simone de Beauvoir',
	'"O fim da arte inferior é agradar, o fim da arte média é elevar, o fim da arte superior é libertar." - Fernando Pessoa',
	'"Temos a arte para não morrer da verdade." - Friedrich Nietzsche',
	'"Não devemos ter medo de inventar seja o que for. Tudo o que existe em nós existe também na natureza, pois fazemos parte dela." - Pablo Picasso',
	'"A autêntica intuição artística vai além do que percebem os sentidos e, penetrando a realidade, tenta interpretar seu mistério escondido." - João Paulo II',
	'"Todos discutem minha arte e fingem compreender, como se fosse necessário compreendê-la, quando é simplesmente necesssário amar." - Claude Monet',
	//'"No fundo não sou literato, sou pintor. Nasci pintor, mas como nunca peguei nos pincéis a sério, arranjei, sem nenhuma premeditação, este derivativo de literatura, e nada mais tenho feito senão pintar com palavras." - Monteiro Lobato',
	'"As cores são minha obsessão, meu divertimento e meu tormento de todos os dias." - Claude Monet',
	'"O Surrealismo é destrutivo, mas ele destrói somente o que acha que limita nossa visão." - Salvador Dali'

];

window.onload = function load() {
	document.getElementById("subtitle").textContent = quotes[Math.floor(Math.random() * quotes.length)];
}