function convertTime(timeinmillisseconds, type){
	if(!isNaN(timeinmillisseconds)){

		const FatoresDeConversao = {
			'Segundos': 1,
			'Minutos': 60,
			'Horas': 3600
		}

		const FatorDeConversao = FatoresDeConversao[type];
		if(FatorDeConversao !== undefined){
			return timeinmillisseconds / 1000 / FatorDeConversao;
		}else{
			console.log("Tipo inválido de conversão");
		}
	}else{
		console.log("A referência não é um número!!");
	}
}


module.exports = {
	convertTime
}