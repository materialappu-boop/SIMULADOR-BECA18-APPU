// Banco de preguntas por defecto para el Simulador Beca 18 APPU
function generateBecaQuestions() {
  const q = [];

  // --- COMPETENCIA MATEMÁTICA (30 Preguntas) ---
  const mathTopics = [
    {
      q: "Calcule el valor de la expresión cuadrática $x^2 - 6x + 9$ cuando $x = 5$.",
      o: ["$4$", "$16$", "$25$", "$9$", "$0$"],
      c: 0,
      s: "Reemplazando $x = 5$ en la expresión:\\n$5^2 - 6(5) + 9 = 25 - 30 + 9 = 4$.\\nTambién se puede ver como binomio al cuadrado: $(x - 3)^2 = (5-3)^2 = 4$."
    },
    {
      q: "Si la ecuación cuadrática $x^2 - 8x + k = 0$ tiene una raíz igual a $3$, determine el valor de la otra raíz.",
      o: ["$2$", "$3$", "$4$", "$5$", "$6$"],
      c: 3,
      s: "Por propiedades de las raíces de una ecuación cuadrática de la forma $x^2 - Sx + P = 0$, la suma de las raíces es $S = x_1 + x_2 = 8$.\\nSi $x_1 = 3$, entonces $3 + x_2 = 8 \\implies x_2 = 5$."
    },
    {
      q: "En una progresión aritmética, el quinto término ($a_5$) es $19$ y el décimo ($a_{10}$) es $39$. Halle la diferencia común ($d$).",
      o: ["$2$", "$4$", "$5$", "$3$", "$1$"],
      c: 1,
      s: "Fórmula de término general: $a_n = a_1 + (n-1)d$.\\n$a_{10} - a_5 = (10-5)d \\implies 39 - 19 = 5d \\implies 20 = 5d \\implies d = 4$."
    },
    {
      q: "Halle el área de una región sombreada en un círculo de radio $r = 6\\text{ cm}$ si el ángulo del sector circular es de $60^\\circ$.",
      o: ["$2\\pi\\text{ cm}^2$", "$4\\pi\\text{ cm}^2$", "$6\\pi\\text{ cm}^2$", "$8\\pi\\text{ cm}^2$", "$12\\pi\\text{ cm}^2$"],
      c: 2,
      s: "El área de un sector circular se calcula como: $A = \\frac{\\theta}{360^\\circ} \\pi r^2$.\\nSustituyendo los valores: $A = \\frac{60^\\circ}{360^\\circ} \\pi (6)^2 = \\frac{1}{6} \\pi (36) = 6\\pi\\text{ cm}^2$."
    },
    {
      q: "Resuelva el sistema de ecuaciones lineales:\\n$$\\begin{cases} 2x + y = 12 \\\\ x - y = 3 \\end{cases}$$\\nDetermine el valor de la multiplicación de las incógnitas $x \\cdot y$.",
      o: ["$10$", "$15$", "$12$", "$8$", "$6$"],
      c: 0,
      s: "Sumando ambas ecuaciones:\\n$(2x + y) + (x - y) = 12 + 3 \\implies 3x = 15 \\implies x = 5$.\\nReemplazando $x = 5$ en la segunda ecuación:\\n$5 - y = 3 \\implies y = 2$.\\nPor lo tanto, $x \\cdot y = 5 \\cdot 2 = 10$."
    },
    {
      q: "Si la tangente de un ángulo agudo $\\theta$ es $\\tan(\\theta) = \\frac{3}{4}$, calcule el valor de $E = \\operatorname{sen}(\\theta) + \\cos(\\theta)$.",
      o: ["$\\frac{7}{5}$", "$\\frac{5}{7}$", "$1$", "$\\frac{6}{5}$", "$\\frac{4}{5}$"],
      c: 0,
      s: "En un triángulo rectángulo notable con catetos opuestos y adyacentes proporcionales a $3$ y $4$, la hipotenusa será $5$.\\nPor definición, $\\operatorname{sen}(\\theta) = \\frac{3}{5}$ y $\\cos(\\theta) = \\frac{4}{5}$.\\nLuego, $E = \\frac{3}{5} + \\frac{4}{5} = \\frac{7}{5}$."
    },
    {
      q: "Un grifo llena una piscina en $3$ horas y un sumidero la vacía en $5$ horas. Estando la piscina vacía, si se abren ambos a la vez, ¿en cuánto tiempo se llenará la piscina?",
      o: ["$4\\text{ horas}$", "$6.5\\text{ horas}$", "$8\\text{ horas}$", "$7.5\\text{ horas}$", "$5\\text{ horas}$"],
      c: 3,
      s: "En $1$ hora el grifo avanza $\\frac{1}{3}$ y el sumidero resta $\\frac{1}{5}$.\\nJuntos avanzan: $\\frac{1}{3} - \\frac{1}{5} = \\frac{5 - 3}{15} = \\frac{2}{15}$ de la piscina por hora.\\nEl tiempo total requerido será la inversa: $\\frac{15}{2} = 7.5\\text{ horas}$."
    },
    {
      q: "Halle el límite de la suma de la siguiente serie geométrica infinita decreciente:\\n$$S = 8 + 4 + 2 + 1 + \\frac{1}{2} + \\dots$$",
      o: ["$12$", "$14$", "$16$", "$18$", "$20$"],
      c: 2,
      s: "Es una serie geométrica con primer término $t_1 = 8$ y razón común $r = \\frac{1}{2}$.\\nLa suma infinita es: $S = \\frac{t_1}{1 - r} = \\frac{8}{1 - 1/2} = \\frac{8}{1/2} = 16$."
    },
    {
      q: "Se lanza un dado normal de seis caras. ¿Cuál es la probabilidad de obtener un número primo menor que $5$?",
      o: ["$\\frac{1}{6}$", "$\\frac{1}{3}$", "$\\frac{1}{2}$", "$\\frac{2}{3}$", "$\\frac{5}{6}$"],
      c: 1,
      s: "Los números primos en un dado de 6 caras son $\\{2, 3, 5\\}$. Los primos menores que $5$ son únicamente $\\{2, 3\\}$ (dos casos favorables).\\nCasos totales: $6$.\\nProbabilidad = $\\frac{2}{6} = \\frac{1}{3}$."
    },
    {
      q: "Halle la suma de los $20$ primeros términos de la progresión aritmética:\\n$$5, 10, 15, 20, \\dots$$",
      o: ["$1000$", "$1050$", "$1100$", "$1150$", "$1200$"],
      c: 1,
      s: "El primer término es $a_1 = 5$ y la diferencia común es $d = 5$.\\nEl término $a_{20} = a_1 + 19d = 5 + 19(5) = 100$.\\nLa suma es: $S_{20} = \\frac{(a_1 + a_{20}) \\cdot 20}{2} = (5 + 100) \\cdot 10 = 1050$."
    },
    {
      q: "Determine el valor mínimo de la función cuadrática $f(x) = x^2 - 4x + 7$.",
      o: ["$1$", "$2$", "$3$", "$4$", "$5$"],
      c: 2,
      s: "La coordenada $x$ del vértice es $h = -\\frac{b}{2a} = -\\frac{-4}{2(1)} = 2$.\\nSustituyendo en la función para hallar el mínimo $k = f(2) = 2^2 - 4(2) + 7 = 4 - 8 + 7 = 3$."
    },
    {
      q: "Halle el dominio de definición de la función de variable real: $f(x) = \\sqrt{x - 8}$.",
      o: ["$x < 8$", "$x \\le 8$", "$x > 8$", "$x \\ge 8$", "$\\mathbb{R}$"],
      c: 3,
      s: "Para que una raíz cuadrada con índice par esté definida en los reales, el radicando debe ser no negativo:\\n$x - 8 \\ge 0 \\implies x \\ge 8$."
    },
    {
      q: "Simplifique al máximo la expresión con exponentes:\\n$$E = \\frac{2^{a+3} \\cdot 4^{a-1}}{8^a}$$",
      o: ["$1$", "$2$", "$4$", "$8$", "$2^a$"],
      c: 1,
      s: "Expresando todo en base 2:\\n$E = \\frac{2^{a+3} \\cdot (2^2)^{a-1}}{(2^3)^a} = \\frac{2^{a+3} \\cdot 2^{2a-2}}{2^{3a}} = \\frac{2^{3a+1}}{2^{3a}} = 2^{1} = 2$."
    },
    {
      q: "Si en un triángulo rectángulo los catetos miden $9\\text{ m}$ y $12\\text{ m}$, calcule la longitud de la altura relativa a la hipotenusa.",
      o: ["$7.2\\text{ m}$", "$6.8\\text{ m}$", "$8.0\\text{ m}$", "$7.5\\text{ m}$", "$6.5\\text{ m}$"],
      c: 0,
      s: "Por Pitágoras, la hipotenusa es $c = \\sqrt{9^2 + 12^2} = \\sqrt{81 + 144} = \\sqrt{225} = 15\\text{ m}$.\\nEl área se calcula como $\\frac{a \\cdot b}{2} = \\frac{c \\cdot h}{2} \\implies 9 \\cdot 12 = 15 \\cdot h \\implies h = \\frac{108}{15} = 7.2\\text{ m}$."
    },
    {
      q: "Calcule la media aritmética de los siguientes números: $12, 15, 18, 21, 24$.",
      o: ["$16$", "$17$", "$18$", "$19$", "$20$"],
      c: 2,
      s: "La suma de los 5 números es: $12 + 15 + 18 + 21 + 24 = 90$.\\nLa media aritmética es: $\\frac{90}{5} = 18$."
    },
    {
      q: "Halle la suma de todos los coeficientes del polinomio desarrollado:\\n$$P(x) = (3x^2 - 2x + 1)^3$$",
      o: ["$1$", "$4$", "$8$", "$16$", "$27$"],
      c: 2,
      s: "La suma de coeficientes de un polinomio $P(x)$ se obtiene evaluando $P(1)$:\\n$P(1) = (3(1)^2 - 2(1) + 1)^3 = (3 - 2 + 1)^3 = 2^3 = 8$."
    },
    {
      q: "Si el conjunto $A$ tiene $5$ elementos y el conjunto $B$ tiene $7$ elementos, además se sabe que $A \\cap B$ tiene $3$ elementos. ¿Cuántos elementos posee $A \\cup B$?",
      o: ["$12$", "$9$", "$10$", "$8$", "$11$"],
      c: 1,
      s: "Por principio de adición de conjuntos:\\n$n(A \\cup B) = n(A) + n(B) - n(A \\cap B) = 5 + 7 - 3 = 9$."
    },
    {
      q: "¿De cuántas formas distintas se pueden ordenar $4$ personas en una fila de $4$ asientos?",
      o: ["$12$", "$16$", "$24$", "$8$", "$6$"],
      c: 2,
      s: "Se trata de una permutación lineal simple de 4 elementos:\\n$P_4 = 4! = 4 \\cdot 3 \\cdot 2 \\cdot 1 = 24$."
    },
    {
      q: "En una caja hay $6$ esferas rojas, $4$ azules y $5$ verdes. ¿Cuántas esferas se deben extraer al azar y como mínimo para tener la certeza de haber obtenido una esfera verde?",
      o: ["$11$", "$12$", "$5$", "$6$", "$1$"],
      c: 0,
      s: "Para tener certeza, nos ponemos en el peor de los casos (sacar todas las de otros colores primero).\\nExtraemos todas las rojas ($6$) y todas las azules ($4$), lo que da $10$ extracciones. La siguiente esfera ($10 + 1 = 11$) será con absoluta certeza una verde."
    },
    {
      q: "Simplifique la siguiente fracción algebraica de manera óptima:\\n$$F = \\frac{x^2 - 16}{x - 4}$$",
      o: ["$x - 4$", "$x + 4$", "$x + 2$", "$x - 2$", "$x^2 + 16$"],
      c: 1,
      s: "El numerador es una diferencia de cuadrados: $x^2 - 16 = (x - 4)(x + 4)$.\\nSustituyendo: $F = \\frac{(x - 4)(x + 4)}{x - 4} = x + 4$ (para $x \\neq 4$)."
    },
    {
      q: "Determine el valor de $x$ que satisface la siguiente igualdad logarítmica:\\n$$\\log_3(x - 2) = 2$$",
      o: ["$9$", "$11$", "$7$", "$8$", "$10$"],
      c: 1,
      s: "Por la definición fundamental del logaritmo: $\\log_b(a) = c \\iff b^c = a$.\\n$3^2 = x - 2 \\implies 9 = x - 2 \\implies x = 11$."
    },
    {
      q: "Halle el término número $15$ en la sucesión geométrica definida por:\\n$$3, 6, 12, 24, \\dots$$",
      o: ["$3 \\cdot 2^{14}$", "$3 \\cdot 2^{15}$", "$2 \\cdot 3^{14}$", "$6 \\cdot 2^{15}$", "$3^{14}$"],
      c: 0,
      s: "Es una progresión geométrica con primer término $g_1 = 3$ y razón $r = 2$.\\nLa fórmula es $g_n = g_1 \\cdot r^{n-1}$.\\nPara $n=15$: $g_{15} = 3 \\cdot 2^{14}$."
    },
    {
      q: "Si la base de un rectángulo aumenta en $20\\%$ y la altura disminuye en $10\\%$, ¿en qué porcentaje varía su área original?",
      o: ["Aumenta en $10\\%$", "Disminuye en $8\\%$", "Aumenta en $8\\%$", "No varía", "Disminuye en $10\\%$"],
      c: 2,
      s: "Área inicial = $100\\% \\times 100\\% = 1.00$.\\nÁrea final = $(1.20) \\times (0.90) = 1.08$.\\nPor tanto, el área aumenta en $1.08 - 1.00 = 0.08$, es decir, un $8\\%$."
    },
    {
      q: "Calcule la distancia entre los puntos $A(2, 3)$ y $B(8, 11)$ en el plano cartesiano de dos dimensiones.",
      o: ["$8$", "$9$", "$10$", "$11$", "$12$"],
      c: 2,
      s: "Fórmula de distancia entre dos puntos: $d = \\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}$.\\n$d = \\sqrt{(8-2)^2 + (11-3)^2} = \\sqrt{6^2 + 8^2} = \\sqrt{36 + 64} = \\sqrt{100} = 10$."
    },
    {
      q: "Determine el máximo común divisor (MCD) de los siguientes números: $48$, $72$ y $120$.",
      o: ["$12$", "$16$", "$18$", "$24$", "$36$"],
      c: 3,
      s: "Descomposición factorial:\\n$48 = 2^4 \\cdot 3$\\n$72 = 2^3 \\cdot 3^2$\\n$120 = 2^3 \\cdot 3 \\cdot 5$\\nEl MCD toma los factores comunes con menor exponente: $2^3 \\cdot 3 = 8 \\cdot 3 = 24$."
    },
    {
      q: "Un automóvil recorre una distancia de $180\\text{ km}$ a velocidad constante en $3\\text{ horas}$. ¿Cuántas horas tardará en recorrer $300\\text{ km}$ con la misma velocidad?",
      o: ["$4\\text{ horas}$", "$4.5\\text{ horas}$", "$5\\text{ horas}$", "$5.5\\text{ horas}$", "$6\\text{ horas}$"],
      c: 2,
      s: "La velocidad es $v = \\frac{180\\text{ km}}{3\\text{ h}} = 60\\text{ km/h}$.\\nPara recorrer $300\\text{ km}$: $t = \\frac{300\\text{ km}}{60\\text{ km/h}} = 5\\text{ horas}$."
    },
    {
      q: "Determine la ecuación de la recta de pendiente $m = 3$ y que pasa por el punto $P(2, 5)$ en el plano cartesiano.",
      o: ["$y = 3x + 1$", "$y = 3x - 1$", "$y = 3x + 2$", "$y = 3x - 2$", "$y = 3x$"],
      c: 1,
      s: "Ecuación punto-pendiente: $y - y_1 = m(x - x_1) \\implies y - 5 = 3(x - 2) \\implies y - 5 = 3x - 6 \\implies y = 3x - 1$."
    },
    {
      q: "Un artículo que costaba $150\\text{ soles}$ se vende con un descuento del $30\\%$. ¿Cuál es el precio final de venta?",
      o: ["$105\\text{ soles}$", "$110\\text{ soles}$", "$115\\text{ soles}$", "$120\\text{ soles}$", "$95\\text{ soles}$"],
      c: 0,
      s: "El precio con descuento corresponde al $70\\%$ del precio original:\\n$150 \\times 0.70 = 105\\text{ soles}$."
    },
    {
      q: "Calcule el volumen de una esfera cuyo radio mide $3\\text{ m}$. (Considere la fórmula clásica $V = \\frac{4}{3}\\pi r^3$)",
      o: ["$12\\pi\\text{ m}^3$", "$24\\pi\\text{ m}^3$", "$36\\pi\\text{ m}^3$", "$48\\pi\\text{ m}^3$", "$18\\pi\\text{ m}^3$"],
      c: 2,
      s: "Reemplazando en la fórmula: $V = \\frac{4}{3} \\pi (3)^3 = \\frac{4}{3} \\pi (27) = 4 \\pi (9) = 36\\pi\\text{ m}^3$."
    },
    {
      q: "En un salón de clases, la relación de aprobados a desaprobados es de $5$ a $2$. Si hay $14$ alumnos desaprobados, ¿cuántos alumnos hay en total en el salón?",
      o: ["$49$", "$35$", "$42$", "$28$", "$56$"],
      c: 0,
      s: "La proporción es $\\frac{A}{D} = \\frac{5k}{2k}$.\\nSe sabe que $2k = 14 \\implies k = 7$.\\nLos aprobados son $5k = 5(7) = 35$.\\nEl total de estudiantes es: $35 + 14 = 49$."
    }
  ];

  // --- COMPETENCIA LECTORA (30 Preguntas) ---
  const readingTopics = [
    {
      text: "TEXTO I\\nEl cerebro humano es un órgano asombrosamente complejo y eficiente. A pesar de representar solo alrededor del 2% del peso corporal total de un adulto, consume aproximadamente el 20% de la energía y el oxígeno que el cuerpo requiere. Esta enorme demanda metabólica se debe a la constante actividad de sus cerca de 86 mil millones de neuronas, que transmiten información mediante señales químicas y eléctricas a velocidades de hasta 430 kilómetros por hora. No obstante, una de las propiedades más extraordinarias descubiertas en las últimas décadas es la neuroplasticidad: la capacidad del cerebro para reorganizarse, formar nuevas conexiones neuronales e incluso adaptarse tras sufrir lesiones o cambios drásticos en el entorno.",
      q: "De acuerdo con el TEXTO I, ¿qué porcentaje de energía corporal consume el cerebro humano?",
      o: ["2%", "10%", "20%", "43%", "86%"],
      c: 2,
      s: "El texto señala explícitamente: 'consume aproximadamente el 20% de la energía y el oxígeno que el cuerpo requiere'."
    },
    {
      text: "TEXTO I\\n...",
      q: "En el TEXTO I, el término 'neuroplasticidad' se refiere fundamentalmente a la:",
      o: ["Rigidez del cerebro.", "Transmisión a alta velocidad.", "Capacidad adaptativa del cerebro.", "Producción masiva de oxígeno.", "Pérdida de neuronas."],
      c: 2,
      s: "La neuroplasticidad se define en el texto como 'la capacidad del cerebro para reorganizarse, formar nuevas conexiones neuronales e incluso adaptarse'."
    },
    {
      text: "TEXTO I\\n...",
      q: "Se infiere del TEXTO I que el cerebro humano es un órgano:",
      o: ["Poco relevante por su peso.", "Metabólicamente muy activo.", "Incapaz de recuperarse de daños.", "Lento en el procesamiento de estímulos.", "Independiente del consumo de oxígeno."],
      c: 1,
      s: "Consumir el 20% de la energía corporal pesando solo el 2% demuestra una alta actividad metabólica."
    },
    {
      text: "TEXTO I\\n...",
      q: "Una idea compatible con el contenido del TEXTO I es que:",
      o: ["Las conexiones neuronales son inmutables.", "La velocidad neuronal no supera los 100 km/h.", "El cerebro adulto promedio pesa la mitad del cuerpo.", "El cerebro puede reestructurarse ante cambios ambientales.", "La energía del cerebro es menor que la de los músculos."],
      c: 3,
      s: "El texto afirma que la neuroplasticidad le permite al cerebro adaptarse ante cambios drásticos en el entorno."
    },
    {
      text: "TEXTO II\\nEl cambio climático es uno de los mayores desafíos del siglo XXI. El aumento acelerado de los gases de efecto invernadero debido a la quema de combustibles fósiles, la deforestación y la industrialización está provocando el derretimiento de glaciares, la acidificación de los océanos y fenómenos meteorológicos extremos. Los científicos sostienen que para evitar consecuencias catastróficas irreversibles, la temperatura media global no debe superar los 1.5 grados Celsius sobre los niveles preindustriales. Lograr esta meta requiere una transición rápida hacia matrices energéticas limpias y renovables, como la energía solar y eólica.",
      q: "Según el TEXTO II, el derretimiento de glaciares es consecuencia directa de:",
      o: ["El enfriamiento de los mares.", "El incremento de los gases de efecto invernadero.", "La transición hacia energías eólicas.", "La regulación de la temperatura global a 1.5 grados.", "La disminución del consumo de combustibles fósiles."],
      c: 1,
      s: "El texto asocia el aumento acelerado de gases de efecto invernadero a la quema de combustibles fósiles, causante del derretimiento glaciar."
    },
    {
      text: "TEXTO II\\n...",
      q: "Con respecto a los combustibles fósiles, se deduce del TEXTO II que:",
      o: ["Son beneficiosos a largo plazo.", "Favorecen la biodiversidad de los océanos.", "Su quema intensifica la problemática climática.", "Son indispensables para evitar las consecuencias catastróficas.", "Ayudan a reducir la temperatura global."],
      c: 2,
      s: "Su quema genera gases de efecto invernadero, causantes directos del calentamiento global."
    },
    {
      text: "TEXTO II\\n...",
      q: "El objetivo de establecer un límite de 1.5 grados Celsius es:",
      o: ["Detener el desarrollo industrial del siglo XXI.", "Reducir la dependencia de paneles solares.", "Evitar consecuencias ambientales irreversibles.", "Generar mayor acidificación oceánica.", "Aumentar la producción de combustibles fósiles."],
      c: 2,
      s: "El texto menciona explícitamente: 'para evitar consecuencias catastróficas irreversibles, la temperatura media global no debe superar los 1.5 grados Celsius'."
    },
    {
      text: "TEXTO II\\n...",
      q: "Para contrarrestar la crisis climática, el autor sugiere principalmente:",
      o: ["Adoptar fuentes de energía limpia y renovable.", "Detener toda actividad económica e industrial.", "Concentrar esfuerzos solo en zonas con glaciares.", "Fomentar una mayor quema de combustibles.", "Acidificar de manera artificial los océanos."],
      c: 0,
      s: "El texto concluye que la meta requiere una transición rápida hacia energías limpias (solar y eólica)."
    },
    {
      text: "ANALOGÍAS",
      q: "Determine el par análogo que reproduce la relación lógica de:\\nPENICILINA : BACTERIA ::",
      o: ["Vacuna : Prevención", "Insecticida : Insecto", "Agua : Sed", "Medicina : Paciente", "Anestesia : Dolor"],
      c: 1,
      s: "La penicilina es un agente específico que elimina o destruye la bacteria, así como el insecticida elimina el insecto."
    },
    {
      text: "ANALOGÍAS",
      q: "Identifique la analogía de:\\nLLAVE : CANDADO ::",
      o: ["Libro : Lector", "Clave : Caja Fuerte", "Tarjeta : Cajero", "Destornillador : Tornillo", "Moneda : Compra"],
      c: 3,
      s: "La llave es la herramienta específica diseñada para operar o acoplarse con el candado, de la misma forma que el destornillador opera sobre el tornillo."
    },
    {
      text: "ANALOGÍAS",
      q: "Identifique la analogía de:\\nPINTOR : PINCEL ::",
      o: ["Escultor : Cincel", "Médico : Estetoscopio", "Escritor : Pluma", "Carpintero : Madera", "Profesor : Alumno"],
      c: 0,
      s: "El pintor usa como instrumento principal el pincel para modelar su obra artística, así como el escultor emplea el cincel."
    },
    {
      text: "SINÓNIMOS EN CONTEXTO",
      q: "Señale el sinónimo de la palabra en mayúsculas:\\nEl juez dictó un fallo EQUITATIVO para ambas partes.",
      o: ["Parcial", "Arbitrario", "Justo", "Favorable", "Indulgente"],
      c: 2,
      s: "'Equitativo' hace referencia a lo que posee justicia e imparcialidad, por lo que su sinónimo idóneo es 'Justo'."
    },
    {
      text: "SINÓNIMOS EN CONTEXTO",
      q: "Señale el sinónimo de la palabra en mayúsculas:\\nLa paciencia es una virtud indispensable para mitigar las dificultades.",
      o: ["Aumentar", "Disminuir", "Provocar", "Olvidar", "Ignorar"],
      c: 1,
      s: "Mitigar significa moderar, aplacar o disminuir la intensidad de algo negativo."
    },
    {
      text: "SINÓNIMOS EN CONTEXTO",
      q: "Señale el sinónimo de la palabra en mayúsculas:\\nSu conducta ALTRUISTA conmovió a toda la comunidad.",
      o: ["Egoísta", "Desinteresada", "Soberbia", "Apática", "Tacaña"],
      c: 1,
      s: "Una conducta altruista se enfoca en procurar el bien ajeno de manera desinteresada."
    },
    {
      text: "ANTÓNIMOS EN CONTEXTO",
      q: "Señale el antónimo de la palabra en mayúsculas:\\nSu discurso fue EFÍMERO y no logró convencer al jurado.",
      o: ["Breve", "Pasajero", "Duradero", "Sencillo", "Elocuente"],
      c: 2,
      s: "'Efímero' es de muy corta duración. Lo opuesto (antónimo) es 'Duradero'."
    },
    {
      text: "ANTÓNIMOS EN CONTEXTO",
      q: "Señale el antónimo de la palabra en mayúsculas:\\nEl científico mostró una actitud ESCÉPTICA ante la nueva teoría.",
      o: ["Dudosa", "Creyente", "Desconfiada", "Indiferente", "Atea"],
      c: 1,
      s: "Una persona escéptica duda o no cree. El antónimo idóneo en el contexto de aceptación científica es 'Creyente' o convencido."
    },
    {
      text: "ANTÓNIMOS EN CONTEXTO",
      q: "Señale el antónimo de la palabra en mayúsculas:\\nLa delegación mantuvo una postura HOSTIL durante la negociación.",
      o: ["Amistosa", "Agresiva", "Indiferente", "Neutro", "Tensa"],
      c: 0,
      s: "Hostil implica enemistad o agresión; su antónimo directo es 'Amistosa'."
    },
    {
      text: "ORACIONES INCOMPLETAS",
      q: "Complete la oración con los conectores adecuados:\\nA pesar de las dificultades económicas, el estudiante _______ perseveró en sus estudios _______ logró graduarse con honores.",
      o: ["no - pero", "siempre - y", "no obstante - si bien", "aun así - mas", "aunque - o"],
      c: 1,
      s: "La estructura requiere conectores que mantengan la continuidad positiva y de logro: 'siempre perseveró... y logró graduarse'."
    },
    {
      text: "ORACIONES INCOMPLETAS",
      q: "La tecnología avanza a pasos _______; por ello, los profesionales deben mantenerse en constante _______.",
      o: ["lentos - retroceso", "gigantescos - actualización", "moderados - descanso", "impredecibles - apatía", "nulos - estudio"],
      c: 1,
      s: "El conector de consecuencia 'por ello' exige coherencia con la velocidad del avance y el deber profesional: 'gigantescos' y 'actualización'."
    },
    {
      text: "ORACIONES INCOMPLETAS",
      q: "El conocimiento científico no es _______, sino que está en constante _______.",
      o: ["útil - debate", "estático - evolución", "dinámico - pausa", "complejo - desuso", "falso - progreso"],
      c: 1,
      s: "La ciencia evoluciona y se corrige; por lo tanto, no es fija o 'estática' sino que está en constante 'evolución'."
    },
    {
      text: "COMPRENSIÓN LECTORA",
      q: "Determine el tema principal de un texto que argumenta que la lectura digital fomenta la inmediatez, pero reduce la concentración profunda del lector:",
      o: ["La invención de los libros digitales.", "El impacto cognitivo de la lectura en pantallas.", "La desparición del papel.", "La importancia de la concentración.", "El aumento de lectores en el siglo XXI."],
      c: 1,
      s: "El enfoque se centra en cómo la modalildad digital afecta el procesamiento cognitivo y la atención profunda del usuario."
    },
    {
      text: "COMPRENSIÓN LECTORA",
      q: "Si un texto describe los aportes de Marie Curie a la física moderna, se puede afirmar que el texto es de tipo:",
      o: ["Narrativo literario", "Argumentativo político", "Expositivo científico-histórico", "Descriptivo publicitario", "Instructivo formal"],
      c: 2,
      s: "Al exponer objetivamente hechos científicos e hitos históricos de un personaje, corresponde a un texto expositivo."
    },
    {
      text: "ANALOGÍAS",
      q: "ORADOR : ELOCUENCIA ::",
      o: ["Militar : Rigor", "Juez : Imparcialidad", "Científico : Laboratorio", "Poeta : Verso", "Médico : Receta"],
      c: 1,
      s: "La elocuencia es la cualidad definitoria deseada en un buen orador, de la misma forma que la imparcialidad es la cualidad definitoria de un juez justo."
    },
    {
      text: "SINÓNIMOS EN CONTEXTO",
      q: "Identifique el sinónimo de la palabra en mayúsculas:\\nFue un hecho FORTUITO encontrarte en esa cafetería remota.",
      o: ["Planeado", "Casual", "Trágico", "Incomprensible", "Común"],
      c: 1,
      s: "Fortuito se refiere a un suceso imprevisto o inesperado; por lo tanto, es sinónimo de 'Casual'."
    },
    {
      text: "ANTÓNIMOS EN CONTEXTO",
      q: "Identifique el antónimo de la palabra en mayúsculas:\\nLa administración mostró un manejo NEGLIGENTE de los recursos públicos.",
      o: ["Descuidado", "Diligente", "Ilegal", "Inapropiado", "Corrupto"],
      c: 1,
      s: "Negligente implica descuido o falta de aplicación. Lo opuesto es ser cuidadoso y eficiente, es decir, 'Diligente'."
    },
    {
      text: "ORACIONES INCOMPLETAS",
      q: "El comportamiento _______ del sospechoso hizo que la policía _______ de inmediato.",
      o: ["tranquilo - huyera", "sospechoso - interviniera", "alegre - llorara", "común - dudara", "violento - durmiera"],
      c: 1,
      s: "Por precisión léxica y causalidad, un comportamiento 'sospechoso' motiva una acción de la fuerza pública, en este caso 'interviniera'."
    },
    {
      text: "COMPRENSIÓN LECTORA",
      q: "Indique la alternativa que presenta una redacción coherente y libre de redundancias:",
      o: ["Voy a subir arriba a buscar mi libro nuevo de matemática.", "La conclusión final del estudio arrojó resultados positivos.", "El estudiante ingresó a la universidad con gran esfuerzo.", "Llovía mucho agua de las nubes del cielo grisáceo.", "Volver a repetir de nuevo el simulacro de examen."],
      c: 2,
      s: "La opción C no tiene redundancias léxicas obvias (como subir arriba, conclusión final, llover agua o repetir de nuevo)."
    },
    {
      text: "COMPRENSIÓN LECTORA",
      q: "Señale la palabra que está correctamente escrita según la Real Academia Española:",
      o: ["Exhorbitante", "Hectárea", "Preveer", "Exhuberante", "Sinnúmero"],
      c: 1,
      s: "'Hectárea' lleva tilde en la 'a' por ser esdrújula y está correctamente escrita con h. (Exorbitante, prever y exuberante se escriben sin la h o e extra)."
    },
    {
      text: "ORACIONES INCOMPLETAS",
      q: "La música es un lenguaje _______ que permite expresar emociones sin necesidad de recurrir a las _______.",
      o: ["universal - palabras", "local - notas", "abstracto - partituras", "complejo - melodías", "sencillo - ideas"],
      c: 0,
      s: "La música trasciende fronteras (universal) y transmite sentimientos sin utilizar la comunicación verbal (palabras)."
    },
    {
      text: "COMPRENSIÓN LECTORA",
      q: "Si en un texto argumentativo el autor concluye que la educación es el pilar de la libertad, su intención es principalmente:",
      o: ["Explicar el funcionamiento de una escuela.", "Persuadir al lector sobre la relevancia de educar.", "Contar una historia real de un estudiante.", "Describir el aula de clases moderna.", "Promocionar un curso virtual específico."],
      c: 1,
      s: "La conclusión de un texto argumentativo busca reforzar la tesis para persuadir e influir en la mentalidad del lector."
    }
  ];

  // Convertir las preguntas de matemáticas a objetos finales
  mathTopics.forEach((item, index) => {
    q.push({
      id: `q_math_${index + 1}`,
      category: "Competencia Matemática",
      question: item.q,
      questionImg: "",
      options: item.o,
      optionImages: ["", "", "", "", ""],
      correctAnswer: item.c,
      solutionText: item.s,
      solutionImg: ""
    });
  });

  // Convertir las preguntas de comprensión lectora a objetos finales
  readingTopics.forEach((item, index) => {
    q.push({
      id: `q_read_${index + 1}`,
      category: "Competencia Lectora",
      question: item.text !== "TEXTO I\\n..." && item.text !== "TEXTO II\\n..." && item.text !== "ANALOGÍAS" && item.text !== "SINÓNIMOS EN CONTEXTO" && item.text !== "ANTÓNIMOS EN CONTEXTO" && item.text !== "ORACIONES INCOMPLETAS" && item.text !== "COMPRENSIÓN LECTORA"
        ? `${item.text}\\n\\nPREGUNTA:\\n${item.q}`
        : item.q,
      questionImg: "",
      options: item.o,
      optionImages: ["", "", "", "", ""],
      correctAnswer: item.c,
      solutionText: item.s,
      solutionImg: ""
    });
  });

  return q;
}
// Sincronización activa con GitHub - simulador APPU
