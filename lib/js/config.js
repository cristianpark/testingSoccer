/**
 * File to define options for common variables on the app
 *
 * @package 	SoccerDemo
 * @author		Cristian Gómez Alvarez <cristianpark@gmail.com>
 * @date		June 10/2013
 */

//Players
var players=new Array();
players[1]={"id":1, "name":"Christian Vargas", "positions":"gk", "photo":"goalkeeper/christianVargas.png"};
players[2]={"id":2, "name":"David Ospina", "positions":"gk", "photo":"goalkeeper/davidOspina.png"};
players[3]={"id":3, "name":"Nelson Ramos", "positions":"gk", "photo":"goalkeeper/nelsonRamos.png"};
players[4]={"id":4, "name":"Amaranto Perea", "positions":"df", "photo":"defender/amarantoPerea.png"};
players[5]={"id":5, "name":"Camilo Zuñiga", "positions":"df", "photo":"defender/camiloZuniga.png"};
players[6]={"id":6, "name":"Pablo Armero", "positions":"df", "photo":"defender/pabloArmero.png"};
players[7]={"id":7, "name":"Pedro Franco", "positions":"df", "photo":"defender/pedroFranco.png"};
players[8]={"id":8, "name":"Elkin Soto", "positions":"mf", "photo":"midfielder/elkinSoto.png"};
players[9]={"id":9, "name":"Freddy Guarín", "positions":"mf", "photo":"midfielder/freddyGuarin.png"};
players[10]={"id":10, "name":"Giovanni Moreno", "positions":"mf", "photo":"midfielder/giovanniMoreno.png"};
players[11]={"id":11, "name":"Macnelly Torres", "positions":"mf", "photo":"midfielder/macnellyTorres.png"};
players[12]={"id":12, "name":"Falcao García", "positions":"fw", "photo":"forwarder/falcaoGarcia.png"};
players[13]={"id":13, "name":"Hugo Rodallega", "positions":"fw", "photo":"forwarder/hugoRodallega.png"};
players[14]={"id":14, "name":"Jackson Martinez", "positions":"fw", "photo":"forwarder/jacksonMartinez.png"};
players[15]={"id":15, "name":"Leider Preciado", "positions":"fw", "photo":"forwarder/leiderPreciado.png"};

//Formations
//--- Circle size: 2.5em
var formations1=new Array();
formations1[1]={"id":1, "name":"4-2-2-2", "goalkeeper":"14_2", "defenders":["6_8", "11_6", "16_6", "21_8"], "midfielders":["12_12", "16_12", "8_16", "20_16"], "forwarders": ["11_20", "16_20"], "image":"4-2-2-2.png"};
formations1[2]={"id":2, "name":"4-3-1-2", "goalkeeper":"14_2", "defenders":["6_8", "11_6", "16_6", "21_8"], "midfielders":["10_12", "14_10", "18_12", "14_17"], "forwarders": ["9_20", "19_20"], "image":"4-3-1-2.png"};
formations1[3]={"id":3, "name":"3-3-2-2", "goalkeeper":"14_2", "defenders":["8_6", "14_6", "20_6"], "midfielders":["10_11", "14_10", "18_11", "12_16", "16_16"], "forwarders": ["10_20", "18_20"], "image":"3-3-2-2.png"};
formations1[4]={"id":4, "name":"4-4-2", "goalkeeper":"14_2", "defenders":["6_8", "11_6", "16_6", "21_8"], "midfielders":["12_12", "16_12", "8_14", "20_14"], "forwarders": ["11_20", "16_20"], "image":"4-4-2.png"};

//--- Circle size: 4em
var formations2=new Array();
formations2[1]={"id":1, "name":"4-2-2-2", "goalkeeper":"20_4", "defenders":["8_14", "15_10", "25_10", "32_14"], "midfielders":["16_18", "24_18", "10_24", "30_24"], "forwarders": ["17_30", "23_30"], "image":"4-2-2-2.png"};
formations2[2]={"id":2, "name":"4-3-1-2", "goalkeeper":"20_4", "defenders":["8_14", "15_10", "25_10", "32_14"], "midfielders":["15_22", "20_18", "25_22", "20_28"], "forwarders": ["15_33", "25_33"], "image":"4-3-1-2.png"};
formations2[3]={"id":3, "name":"3-3-2-2", "goalkeeper":"20_4", "defenders":["10_12", "20_12", "30_12"], "midfielders":["14_19", "20_18", "26_19", "16_25", "24_25"], "forwarders": ["15_32", "25_32"], "image":"3-3-2-2.png"};
formations2[4]={"id":4, "name":"4-4-2", "goalkeeper":"20_4", "defenders":["8_14", "15_10", "25_10", "32_14"], "midfielders":["16_18", "24_18", "10_22", "30_22"], "forwarders": ["17_28", "23_28"], "image":"4-4-2.png"};

//--- Circle size: 5em
var formations3=new Array();
formations3[1]={"id":1, "name":"4-2-2-2", "goalkeeper":"35_5", "defenders":["20_20", "30_16", "40_16", "50_20"], "midfielders":["30_28", "38_28", "22_34", "46_34"], "forwarders": ["30_42", "40_42"], "image":"4-2-2-2.png"};
formations3[2]={"id":2, "name":"4-3-1-2", "goalkeeper":"35_5", "defenders":["20_20", "30_16", "40_16", "50_20"], "midfielders":["35_24", "26_28", "44_28", "35_34"], "forwarders": ["25_42", "45_42"], "image":"4-3-1-2.png"};
formations3[3]={"id":3, "name":"3-3-2-2", "goalkeeper":"35_5", "defenders":["20_17", "34_15", "48_17"], "midfielders":["34_24", "26_26", "42_26", "30_34", "38_34"], "forwarders": ["26_42", "42_42"], "image":"3-3-2-2.png"};
formations3[4]={"id":4, "name":"4-4-2", "goalkeeper":"35_5", "defenders":["20_20", "30_16", "40_16", "50_20"], "midfielders":["30_28", "38_28", "22_32", "46_32"], "forwarders": ["30_40", "40_40"], "image":"4-4-2.png"};

/* Default
formations[1]={"id":1, "name":"4-2-2-2", "defenders":["8_8", "13_6", "18_6", "23_8"], "midfielders":["13_12", "18_12", "10_16", "20_16"], "forwarders": ["13_20", "18_20"], "image":"4-2-2-2.png"};
formations[2]={"id":2, "name":"4-3-1-2", "defenders":["8_8", "13_6", "18_6", "23_8"], "midfielders":["15_10", "12_12", "18_12", "15_16"], "forwarders": ["12_19", "18_19"], "image":"4-3-1-2.png"};
formations[3]={"id":3, "name":"3-3-2-2", "defenders":["10_6", "15_6", "20_6"], "midfielders":["12_10", "15_10", "18_10", "13_14", "17_14"], "forwarders": ["12_18", "18_18"], "image":"3-3-2-2.png"};
formations[4]={"id":4, "name":"4-4-2", "defenders":["8_8", "13_6", "18_6", "23_8"], "midfielders":["10_15", "13_12", "17_12", "20_15"], "forwarders": ["13_20", "18_20"], "image":"4-4-2.png"};
*/

//Terms of agreement
var terms='<strong>Modelo de Términos y Condiciones Aplicación SoccerDemo</strong>'+
'<p>Gracias por visitar esta página web. Por favor, lee atentamente los Términos y Condiciones contenidos en este documento, ya que cada vez que se usa esta página web se están aceptando los Términos y Condiciones que aquí se exponen. '+
'En toda esta página, los términos "nosotros", "nos", "nuestro" "DIRECTV" y "Grupo DIRECTV" se refieren a DIRECTV S.A. y cualquiera de sus filiales, y se usan de la forma más apropiada según el contexto. “Tú” se refiere a cualquier persona que accede y/o utiliza esta página web.</p>'+
'<strong>Política de Privacidad de la página web</strong>'+
'<p>Cualquier material o dato personal enviado a las páginas web del Grupo DIRECTV queda amparado por la política de privacidad de dicho Grupo y por la protección de datos personales expuesta en el Comunicado de Privacidad que se encuentra en esta misma página web.'+
'Exactitud, carácter completo y puntualidad de la información'+
'Aunque usamos todos los medios a nuestro alcance para asegurar la exactitud y el carácter completo de la información contenida en esta página web. No asumimos responsabilidad alguna en el caso de que la información que se encuentra disponible en la misma no sea exacta o completa. Cualquier modificación que hagas sobre el material disponible en esta página web se realizará por tu cuenta y riesgo. Asimismo, aceptas que será responsabilidad tuya comprobar los eventuales cambios que se puedan producir.</p>'+
'<strong>Transmisión</strong>'+
'<p>Cualquier material o comunicación no personal que transmitas a esta página web por e-mail o cualquier otro medio, incluyendo datos, preguntas, comentarios, sugerencias o similares, es y será tratada como no confidencial y sin derechos de propiedad. Cualquier cosa que transmitas o que coloques en la página pasa a ser propiedad del Grupo DIRECTV y se puede utilizar para cualquier finalidad, incluyendo, sin carácter limitativo, la reproducción, acceso, transmisión, publicación, emisión y colocación de contenidos en la web. Aún más, el Grupo DIRECTV es totalmente libre de usar, para cualquier finalidad que estime oportuna (incluyendo, sin carácter limitativo, el desarrollo, fabricación, publicidad y marketing de productos), las ideas, material gráfico, invenciones, desarrollos, sugerencias o conceptos en general contenidos en cualquier comunicación que envíes a esta página web. Dicho uso no tendrá compensación para la parte que ha facilitado la información. Facilitando información, también estás garantizando que eres el propietario del material/contenido proporcionado, que no es de carácter difamatorio y que su uso por parte del Grupo DIRECTV no violará derechos de terceras personas ni comportará un incumplimiento por nuestra parte de la legislación aplicable. El Grupo DIRECTV no tiene ninguna obligación de utilizar la información facilitada.</p>'+
'<strong>Derechos de propiedad intelectual</strong>'+
'<strong>Ò Marca registrada por  DIRECTV S.A. Todos los derechos reservados.</strong>'+
'<p>Todos los derechos de autor y demás derechos de propiedad intelectual referentes a los textos, imágenes y materiales en general contenidos en esta página web son propiedad del Grupo DIRECTV o han sido incluidos con la autorización de su correspondiente propietario.'+
'Puedes navegar por esta página web, reproducir extractos por medio de impresión y realizar descargas a un disco duro o a los efectos de distribución a otras personas físicas. Todo esto se puede realizar únicamente bajo la condición de mantener intactas todas las notas relativas a derechos de autor y a la propiedad de la página y que la mención mostrada anteriormente de marca registrada aparezca en tales reproducciones. No se debe vender o distribuir ninguna reproducción de parte alguna de esta página web con fines de lucro comercial, ni tampoco podrá ser modificada o incorporada a ningún otro trabajo, publicación o página web.'+
'Las marcas registradas, logotipos, caracteres y marcas de servicio (todo ello denominado, en conjunto, “marcas registradas”) incorporadas en esta página web pertenecen a la  DIRECTV S.A., que forma parte del Grupo DIRECTV. No se debe interpretar, en ningún caso, que alguno de los contenidos de esta página web pueda significar la concesión de alguna autorización o derecho a utilizar alguna de las marcas comerciales incorporadas en la página. El uso o el abuso de las marcas registradas mostradas tanto en esta página web como en cualquier otro contenido de la misma, salvo lo previsto en estos Términos y Condiciones, queda estrictamente prohibido. Asimismo, advertimos que el Grupo DIRECTV defenderá sus derechos de propiedad intelectual con el máximo rigor que permita la ley.</p>'+
'<strong>Enlaces con otras páginas web</strong>'+
'<p>Los enlaces existentes en las páginas web del Grupo DIRECTV te pueden llevar fuera de la red  y sistemas del Grupo. En ese caso, el Grupo DIRECTV no aceptará ninguna responsabilidad en relación al contenido, exactitud y funcionamiento de las páginas web de terceras personas. Los enlaces se proporcionan de buena fe y el Grupo DIRECTV no puede ser responsable por las modificaciones que posteriormente se produzcan en páginas web de terceros para las cuales proporcionamos un enlace. La inclusión de un enlace para conectarse con otras páginas web no implica asunción de responsabilidades en relación a esas páginas por parte del Grupo DIRECTV. Te recomendamos encarecidamente que estés informado y que leas atentamente las notas legales y de privacidad de todas las páginas web que visites.</p>'+
'<strong>Garantías y exenciones de responsabilidad</strong>'+
'<p>El uso de esta página web es exclusivamente de tu cuenta y riesgo.</p>'+
'<strong>Garantías</strong>'+
'<p>Esta página web se ofrece “cuando es posible” y “tal cual está” y, por tanto, el Grupo DIRECTV no da garantías de ningún tipo, ya sean explícitas, implícitas, legales o de otro tipo (incluso las garantías implícitas de comerciabilidad o satisfacción del nivel de calidad y de adecuación a un propósito particular), incluyendo garantías o compromisos en relación a que el material de esta página web será completo, exacto, fiable, puesto al día, respetuoso con los derechos de terceros, que el acceso a esta página web no sufrirá interrupciones, no presentará errores y estará exento de virus, que esta página web será segura y que cualquier opinión o consejo del Grupo DIRECTV obtenido a través de esta página web será exacto o fiable, por todo lo cual se indica expresamente que no se asumirá ningún compromiso o garantía sobre los aspectos enumerados.'+
'Por favor, ten en cuenta que, en algunas jurisdicciones, es posible que no se permita la exclusión de garantías implícitas, por lo que algunas de estas exclusiones pueden no ser de aplicación para ti. Por ello, te rogamos que consultes la legislación local.'+
'Nos reservamos el derecho de restringir, suspender o cancelar, sin previo aviso y en cualquier momento, tu acceso a esta página web o a una parte de la misma y a cualquier funcionalidad incorporada en la página.</p>'+
'<strong>Responsabilidad</strong>'+
'<p>Tanto el Grupo DIRECTV como cualquier tercero implicado en la creación, producción o distribución de esta página web en nuestro nombre no tendrán ningún tipo de responsabilidad, en ningún caso, por daños directos, fortuitos, consecutivos, indirectos, especiales o punitivos ni por costes, pérdidas o responsabilidades, cualquiera que sea la forma en que se deriven de tu acceso, uso o incapacidad de uso, del cambio en el contenido de esta página web, de cualquier otra página web a la que accediste por medio de un enlace proporcionado en esta página o de la máxima amplitud permitida por la legislación aplicable, motivados por cualquier medida que nosotros tomamos o dejamos de tomar como resultado de algún mensaje que nos enviaste por e-mail.'+
'Tanto el Grupo DIRECTV como cualquier tercero implicado en la creación, producción o distribución de esta página web no tendrán ninguna responsabilidad derivada de mantener el material y los servicios que se encuentran disponibles en esta página o de realizar correcciones, actualizaciones o eliminaciones de los mismos. Cualquier material contenido en esta página web está sujeto a cambios sin previo aviso.'+
'Aún más, el Grupo DIRECTV no tendrá ningún tipo de responsabilidad, en ningún caso, por cualquier daño sufrido a consecuencia de algún virus que pueda haber infectado tu ordenador u otros aparatos de tu propiedad por causa de tu acceso, uso o descargas de cualquier material de esta página web. Si optas por descargar material desde esta página web, esa acción se realiza por tu exclusiva cuenta y riesgo.'+
'Con la máxima amplitud permitida por la legislación aplicable, declaras renunciar expresamente a efectuar cualquier reclamación contra el Grupo DIRECTV y sus responsables, directores, empleados, proveedores y programadores que se pueda derivar de tu uso o acceso a esta página web.</p>'+
'<strong>Actividades prohibidas</strong>'+
'<p>Tienes prohibido realizar cualquier acto que, a juicio del Grupo DIRECTV, se pueda considerar inapropiado y/o llegar a considerarse como un acto ilegal o que esté prohibido de acuerdo con la legislación aplicable a esta página web, incluyendo, sin carácter limitativo, los siguientes:'+
'Cualquier acto que constituiría un incumplimiento de la privacidad (incluyendo transferencias a la página web de información privada sin la autorización de la persona afectada) o de cualquier otro de los derechos legales de las personas físicas;'+
'Usar esta página web para difamar o calumniar al Grupo DIRECTV, sus empleados u otras personas físicas, o actuar de tal manera que se desacredite el buen nombre del Grupo DIRECTV;'+
'Transferir a la página web archivos que contengan virus que puedan causar daños a la propiedad del Grupo DIRECTV o a la propiedad de personas físicas; y'+
'Colocar o transmitir a esta página web cualquier material no autorizado, incluyendo, sin carácter limitativo, material que probablemente cause, a juicio nuestro, molestias o perjuicios, o bien, violando los sistemas o la seguridad de la red del Grupo DIRECTV o de terceras personas, material que sea difamatorio, racista, obsceno, amenazador, de contenido pornográfico o que presente cualquier forma de ilegalidad en general.</p>'+
'<strong>Jurisdicción y legislación aplicable</strong>'+
'<p><strong>PARA PÁGINAS WEB NACIONALES ESPECÍFICAS</strong></p>'+
'<p><i>Para páginas web que ofrecen productos</i></p>'+
'<p>Los productos, materiales, ofertas e información del Grupo DIRECTV que aparecen en esta página web están pensados únicamente para los usuarios y/o clientes de [introducir un país]. El Grupo DIRECTV no se compromete a que los productos y el contenido de esta página web sean apropiados o se encuentren disponibles en zonas distintas a [introducir un país]. Por favor, ponte en contacto con nuestro distribuidor local para conseguir más información sobre cuál es la disponibilidad de productos en tu país. Los productos que aparecen en esta página web son meras representaciones visuales y, por consiguiente, no aparecen a tamaño real ni con los colores exactos de sus envases, etc.'+
'El usuario de esta página web y el Grupo DIRECTV aceptan que cualquier controversia o reclamación derivada o referente al uso de esta página web se resolverá según las leyes de [introducir un país] y se someterá exclusivamente a la jurisdicción de los Juzgados y Tribunales de [introducir una ciudad] [introducir un país].</p>'+
'<p><i>Para páginas web informativas</i></p>'+
'<p>El material y la información del Grupo DIRECTV que aparecen en esta página web han sido incluidos únicamente para los usuarios de [introducir un país]. El Grupo DIRECTV no asume ningún compromiso en relación a que el material y la información de esta página web sean apropiados o se encuentren disponibles en zonas distintas a [introducir un país].'+
'El usuario de esta página web y el Grupo DIRECTV aceptan que cualquier controversia o reclamación derivada o referente al uso de esta página web se resolverá según las leyes de [introducir un país] y se someterá exclusivamente a la jurisdicción de los Juzgados y Tribunales de [introducir una ciudad] [introducir un país].</p>'+
'<strong>PARA PÁGINAS WEB GLOBALES</strong>'+
'<p><i>Para páginas web que ofrecen productos</i></p>'+
'<p>El Grupo DIRECTV no asume ningún compromiso en relación a que los productos y el contenido de esta página web sean apropiados o se encuentren disponibles en todos los países desde los cuales se puede acceder a esta página web. Por favor, ponte en contacto con nuestro distribuidor local para conseguir más información sobre cuál es la disponibilidad de productos en tu país. Los productos que aparecen en esta página web son meras representaciones visuales y, por consiguiente, no son un reflejo exacto de su tamaño real ni de los colores de sus envases, etc.'+
'El usuario de esta página web y el Grupo DIRECTV aceptan que cualquier controversia o reclamación derivada o referente al uso de esta página web se resolverá con la máxima amplitud posible según las leyes suizas y se someterá exclusivamente a la jurisdicción de los Juzgados y Tribunales de Suiza.</p>'+
'<i>Para páginas web informativas</i>'+
'<p>El Grupo DIRECTV no asume ningún compromiso en relación a que el material y la información contenidos en esta página web sean apropiados o se encuentren disponibles en todas las zonas o lenguas nacionales.'+
'El usuario de esta página web y el Grupo DIRECTV aceptan que cualquier controversia o reclamación derivada o referente al uso de esta página web se resolverá según las leyes suizas y se someterá exclusivamente a la jurisdicción de los Juzgados y Tribunales de Suiza.</p>'+
'<strong>Cookies</strong>'+
'<p>DIRECTV utiliza la tecnología tracking ("cookies"). La política del Grupo DIRECTV en relación al uso de cookies se expone en el documento de política de privacidad y datos personales del Grupo DIRECTV disponible en esta página web.</p>'+
'<strong>Actualización de notas legales</strong>'+
'<p>Nos reservamos el derecho de realizar cambios y correcciones en esta nota. Por favor, consulta esta página de vez en cuando para revisar estas y nuevas informaciones adicionales.</p>'+
'<p><strong>Copyright ©</strong> DIRECTV S.A. 2004</p>';
