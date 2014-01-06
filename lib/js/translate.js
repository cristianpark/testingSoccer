/**
 * File to define translation functions and terms
 * @package	SoccerDemo
 * @author	Cristian Gómez Alvarez <cristianpark@gmail.com>
 * @date	June 09/2013
 */

//Object to store words translated to spanish
var words={
	//a
	active: 'activo',
	//b
	back: 'volver',
	//c
    cancel: 'cancelar',
    chairs: 'sillas',
	change: 'cambiar',
	coach: 'técnico',    
    //d    
    details: 'detalles',
    done: 'hecho',
    //e
    english: 'inglés',
    enter: "ingresar",
    //f
    formation: 'alineación',
    //l
    language: 'idioma',
    //m
    //p
   	player: 'jugador',
    players: 'jugadores',
    performance: 'desempeño',
    //r
    restore: "reiniciar",
    //s
    send: "enviar",
	spanish: 'español',
    start: 'inicio',
    survey: 'encuesta',
    //t
    tickets: 'abonos'
};
	
//Object to store sentences transaled to spanish (by keywords)
var sentences={
	//a
	acceptt: ['acepto los términos', 'accept terms'],
	//c
	bestc: ['mejor técnico', 'best coach'],
	//f
	formationw: ['no ha seleccionado formación', 'You haven\'t selected formation'],
	//n
	noplayers: ['no ha seleccionado todos los jugadores', 'You haven\'t selected all the players'],
	//r
	restored: ['los datos han sido borrados', 'data has been erased'],
	//t
	termsw: ['debe aceptar los términos para continuar', 'you must accept the terms in order to continue']
};

/**
 * Function to translate a word
 * @param	String word
 * @param	String upper: Determines if the sentence has first upper case, upper (to all the string) or none
 * @param	String language: Language to translate the word to
 * @return 	String translation
 */
function translateWord(word, upper, language){
	word=word.toLowerCase();
	
	var translation=word;
	
	if(language=="es"){
		if(words[word]!=null){
			translation=words[word];
		}
	}
	else{
		for(w in words)
		{
			if(words[w]==word){
				translation=w;
			}
		}
	}
	
	if(upper!=''){
		if(upper=='ucfirst'){
			return ucfirst(translation);
		}
		else{
			return translation.toUpperCase();
		}
	}
	else{
		return translation;
	}
}
//-----------------------------

/**
 * Function to translate a sentence using a key
 * @param	String key: Key of the setence. i.e: title
 * @param	String upper: Determines if the sentence has first upper case, upper (to all the string) or none
 * @param	String language: Language to translate the sentence to
 * @return 	String translation: Sentence translated to spanish/english
 */
function translateSentence(key, upper, language){
	var translation='';
	
	if(sentences[key]==null){
		return '';
	}
	
	if(language=="es"){
		if(sentences[key][0]!=null){
			translation=sentences[key][0];
		}
	}
	else{
		if(sentences[key][1]!=null){
			translation=sentences[key][1];
		}
	}
	
	if(upper!=''){
		if(upper=='ucfirst'){
			return ucfirst(translation);
		}
		else{
			return translation.toUpperCase();
		}
	}
	else{
		return translation;
	}
}
//-----------------------------------------

/**
 * Function to capitalise the first letter of a string 
 * @param {Object} string
 */
function ucfirst(string)
{
	return string.charAt(0).toUpperCase()+string.slice(1);
}
//--------------------------------