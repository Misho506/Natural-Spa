import { Service } from "./types"

const servicesData: Array<Service> = [
  {
    name: "Paquete de Masaje Reductor (10 sesiones) ",
    price: "₡90 000",
    details: {
      howWorksTitle: "¿Cómo funciona?",
      howWorksDetails: `Movimientos intensos y repetitivos: El terapeuta utiliza movimientos rápidos y firmes, como amasamientos, presiones y fricciones, para activar el metabolismo local y favorecer la circulación sanguínea y linfática. Esto ayuda a movilizar la grasa acumulada.\n
Estimulación del drenaje linfático: Al mejorar la circulación linfática, el masaje reductivo promueve la eliminación de toxinas y líquidos retenidos, lo que puede contribuir a una reducción de la hinchazón o el volumen corporal.\n
Activación del metabolismo: Al movilizar la grasa, el masaje ayuda al cuerpo a utilizarla como energía, lo que puede resultar en la reducción de medidas si se complementa con una dieta equilibrada y ejercicio regular.\n
Tonificación de los tejidos: Además de movilizar la grasa, este tipo de masaje puede contribuir a mejorar la firmeza de la piel, ya que estimula la producción de colágeno y elastina.\n`,
      benefitsTitle: `Beneficios del masaje reductivo`,
      benefitsDetails: `Reducción de medidas en zonas específicas. \n
Mejora la circulación sanguínea y linfática.\n
Disminución de la retención de líquidos.\n
Tonificación de la piel.\n
Eliminación de toxinas.\n`,
      considerationsTitle: "Consideraciones",
      considerationsDetails: `Frecuencia: Para ver resultados, se recomienda someterse a varias sesiones, generalmente combinadas con otros hábitos saludables. \n
Complemento: Este tipo de masaje es más efectivo cuando se combina con una dieta equilibrada, ejercicio regular y una adecuada hidratación.\n`,
    },
    showDetails: false,
  },
  {
    name: "Paquete levantamiento de glúteos (10 sesiones) ",
    price: "₡80 000",
    details: {
      howWorksTitle: "¿Cómo funciona?",
      howWorksDetails: `Movimientos ascendentes: El terapeuta realiza movimientos ascendentes y profundos en los glúteos, estimulando la circulación sanguínea y linfática en la zona. Estos movimientos ayudan a mejorar la firmeza y tonicidad de los músculos, proporcionando un efecto de levantamiento.\n
Activación muscular: El masaje trabaja directamente sobre los músculos glúteos mayores, medios y menores, promoviendo su activación. Al estimular los músculos, estos se tonifican y refuerzan, lo que contribuye a dar una apariencia más levantada.\n
Drenaje de líquidos: Además de tonificar los músculos, el masaje de levantamiento de glúteos ayuda a eliminar el exceso de líquidos que pueden contribuir a la hinchazón o retención, mejorando la definición de la zona.\n
Estimulación del colágeno: Al igual que otros tipos de masajes estéticos, esta técnica también ayuda a mejorar la producción de colágeno y elastina en la piel, lo que la vuelve más firme y elástica, evitando la flacidez.\n`,
      benefitsTitle: `Beneficios del masaje de levantamiento de glúteos`,
      benefitsDetails: `Mejora el tono y la firmeza de los músculos glúteos.\n
Proporciona una apariencia más elevada y esculpida.\n
Ayuda a reducir la flacidez y mejora la textura de la piel.\n
Promueve una mejor circulación sanguínea y linfática en la zona.\n
Aumenta la producción de colágeno, mejorando la elasticidad de la piel.\n`,
      considerationsTitle: "Consideraciones",
      considerationsDetails: `Frecuencia: Para obtener resultados visibles, es recomendable asistir a varias sesiones de manera regular. Además, se sugiere combinar el masaje con ejercicios específicos para glúteos.\n
Complemento: Al igual que el masaje reductivo, este tratamiento es más efectivo si se complementa con una rutina de ejercicios, una alimentación balanceada y una adecuada hidratación.\n`,
    },
    showDetails: false,
  },
  {
    name: "Masaje piernas cansadas ",
    price: "₡10 000",
    details: {
      howWorksTitle: "¿Cómo funciona?",
      howWorksDetails: `Movimientos ascendentes y circulares: El terapeuta utiliza movimientos ascendentes desde los tobillos hacia los muslos, combinando técnicas de fricción y amasamiento. Esto ayuda a estimular el flujo sanguíneo y el retorno venoso, aliviando la sensación de pesadez.\n
Drenaje linfático: Mediante movimientos suaves y repetidos, el masaje también estimula el sistema linfático, ayudando a eliminar el exceso de líquidos acumulados en las piernas. Esto reduce la hinchazón y mejora el aspecto general de las piernas.\n
Liberación de tensión muscular: El masaje también está dirigido a relajar los músculos de las piernas, aliviando posibles contracturas o tensiones acumuladas. Esto es especialmente útil para personas que pasan mucho tiempo de pie o que realizan actividades físicas intensas.\n
Mejora de la oxigenación: Al mejorar la circulación, el masaje facilita la llegada de oxígeno y nutrientes a los tejidos, lo que contribuye a una recuperación más rápida y efectiva de la fatiga muscular.\n`,
      benefitsTitle: `Beneficios del masaje de piernas cansadas`,
      benefitsDetails: `Alivio de la sensación de pesadez y fatiga en las piernas.\n
Mejora de la circulación sanguínea y linfática.\n
Reducción de la hinchazón y retención de líquidos.\n
Relajación de los músculos y alivio de posibles contracturas.\n
Sensación de ligereza y descanso en las piernas.\n`,
      considerationsTitle: "Consideraciones",
      considerationsDetails: `Frecuencia: Dependiendo de la intensidad del malestar, este tipo de masaje puede realizarse de manera ocasional o regular, como parte de una rutina de autocuidado para mantener las piernas descansadas y saludables.\n
Complemento: Es recomendable mantener una buena hidratación, elevar las piernas cuando sea posible y realizar ejercicios suaves para favorecer la circulación.\n`,
    },
    showDetails: false,
  },
  {
    name: "Masaje cuello y cervicales ",
    price: "₡8 000",
    details: {
      howWorksTitle: "¿Cómo funciona?",
      howWorksDetails: `Presión sobre puntos clave: El masaje comienza con una presión firme pero controlada en puntos específicos del cuello y los hombros para relajar los músculos y liberar tensiones acumuladas. Esto ayuda a reducir los nudos musculares que suelen formarse en esta zona.\n
Movimientos de amasamiento: El terapeuta utiliza movimientos de amasamiento en el cuello, hombros y parte superior de la espalda para aumentar la circulación sanguínea, lo que facilita la relajación muscular y ayuda a disminuir la rigidez.\n
Estiramientos suaves: En algunos casos, se incorporan estiramientos suaves del cuello y la cabeza para mejorar la flexibilidad de la columna cervical y reducir la rigidez. Esto también puede ayudar a mejorar la postura.\n
Relajación de las cervicales: El masaje en las cervicales implica movimientos suaves que ayudan a aliviar el estrés y la presión sobre las vértebras cervicales, promoviendo una sensación de alivio en toda la zona superior del cuerpo.\n`,
      benefitsTitle: `Beneficios del masaje de cuello y cervicales`,
      benefitsDetails: `Alivio de la tensión muscular en el cuello, hombros y espalda alta.\n
Reducción de dolores de cabeza causados por la tensión muscular.\n
Mejora de la flexibilidad y movilidad del cuello.\n
Alivio del estrés y la ansiedad, promoviendo una sensación de bienestar.\n
Mejora de la circulación sanguínea en la zona, favoreciendo la recuperación muscular.\n`,
      considerationsTitle: "Consideraciones",
      considerationsDetails: `Frecuencia: Este masaje puede realizarse de manera ocasional para aliviar tensiones o como parte de una rutina regular, especialmente para personas que sufren de rigidez o dolor crónico en el cuello y los hombros.\n
Complemento: Se recomienda mantener una buena postura, hacer ejercicios de estiramiento y relajación para el cuello y tomar descansos frecuentes al trabajar sentado o usando dispositivos electrónicos.\n`,
    },
    showDetails: false,
  },
  {
    name: "Masaje Cráneo-facial ",
    price: "₡8 000",
    details: {
      howWorksTitle: "¿Cómo funciona?",
      howWorksDetails: `Movimientos suaves en el rostro: El masaje comienza con movimientos circulares y suaves sobre los músculos faciales, como la frente, las sienes, las mejillas y la mandíbula. Estos movimientos ayudan a relajar los músculos, mejorar la circulación y reducir la tensión en áreas donde solemos acumular estrés, como la mandíbula.\n
Presión en puntos específicos: Se aplican presiones controladas en puntos clave del rostro y cráneo, lo que favorece la liberación de la tensión muscular y mejora el flujo de energía. Esta técnica puede aliviar dolores de cabeza y migrañas causadas por la acumulación de tensión en la cara o el cuero cabelludo.\n
Masaje en el cuero cabelludo: El terapeuta realiza un masaje en el cuero cabelludo utilizando movimientos de fricción suaves. Este paso ayuda a mejorar la circulación sanguínea en la cabeza, lo que favorece la relajación y puede mejorar la salud del cabello al estimular los folículos capilares.\n
Relajación de la mandíbula y el cuello: Se incluyen movimientos en la zona de la mandíbula y el cuello para relajar los músculos que tienden a tensionarse debido al estrés o a malas posturas. Esto también contribuye a la mejora de la postura y el alivio de la tensión acumulada en las cervicales.\n`,
      benefitsTitle: `Beneficios del masaje cráneo-facial`,
      benefitsDetails: `Reducción del estrés y alivio de la tensión acumulada en el rostro, cuero cabelludo y cuello.\n
Alivio de dolores de cabeza, migrañas y tensión en la mandíbula.\n
Mejora de la circulación sanguínea en el rostro, promoviendo una piel más luminosa y saludable.\n
Efecto rejuvenecedor al mejorar la oxigenación y el tono de la piel.\n
Estimulación de los folículos capilares, lo que puede contribuir a la salud del cabello.\n
Relajación profunda y bienestar general.\n`,
      considerationsTitle: "Consideraciones",
      considerationsDetails: `Frecuencia: Este masaje puede realizarse de manera regular como parte de una rutina de autocuidado para reducir el estrés o de forma ocasional cuando se sienta tensión acumulada en la cabeza o rostro.\n
Complemento: Es recomendable acompañar este masaje con una hidratación adecuada del rostro y prácticas de relajación para mantener el equilibrio entre cuerpo y mente.\n`,
    },
    showDetails: false,
  },
];

export default servicesData;
