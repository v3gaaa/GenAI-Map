import MenuBar from "../MenuBar";
import React, { useState } from "react";
import Popup from "./components/Popup";

const LLM = () => {
  const cardData = [
    {
      title: "GPT-4 y GPT-3",
      developer: "OpenAI",
      description:
        "GPT-3 es famoso por su capacidad para generar texto coherente y humano en múltiples idiomas y temas. GPT-4 mejora aún más estas capacidades con mayor precisión y eficiencia.",
      detailedInfo: `
        <p>GPT-3 y GPT-4 son modelos de lenguaje generativos basados en transformadores. GPT-3 cuenta con 175 mil millones de parámetros, lo que le permite generar texto con alta coherencia y contexto en múltiples idiomas.</p>
        <p>GPT-4, aunque sus especificaciones detalladas no han sido completamente reveladas, se espera que tenga aún más parámetros y capacidades mejoradas en comparación con GPT-3. Estos modelos utilizan un mecanismo de atención que les permite comprender y generar texto basado en el contexto de las palabras anteriores.</p>
        <br/><br/><strong>Ejemplos de uso:</strong>
        <ul>
          <li>- ChatGPT: Utiliza GPT-3 y GPT-4 para responder preguntas y mantener conversaciones de manera coherente.</li>
          <li>- Copy.ai: Utiliza GPT-3 para generar contenido de marketing y texto creativo.</li>
          <li>- Jasper.ai: Ayuda a redactar artículos y publicaciones en redes sociales.</li>
        </ul>
        <br/><p>Estos modelos son entrenados en grandes cantidades de texto de internet, lo que les permite aprender patrones de lenguaje natural y generar respuestas que son sorprendentemente humanas.</p>
      `,
    },
    {
      title: "BERT, RoBERTa, DistilBERT",
      developer: "Google",
      description:
        "BERT revolucionó el procesamiento de lenguaje natural al permitir el análisis bidireccional. RoBERTa mejoró la técnica de preentrenamiento de BERT, y DistilBERT es una versión más ligera y eficiente.",
      detailedInfo: `
        <p>BERT (Bidirectional Encoder Representations from Transformers) es un modelo de lenguaje que considera el contexto bidireccional de las palabras, es decir, entiende el significado de una palabra basándose en todas las palabras alrededor de ella en una oración. RoBERTa (Robustly optimized BERT approach) es una versión mejorada de BERT, optimizada con más datos y más tiempo de entrenamiento, lo que le permite ser aún más preciso. DistilBERT es una versión reducida y más eficiente de BERT que mantiene el 97% del rendimiento de BERT original, pero es más rápido y menos costoso de usar.</p>
        <br/><br/><strong>Ejemplos de uso:</strong>
        <ul>
          <li>- Motor de búsqueda de Google: BERT se utiliza para entender mejor las consultas de búsqueda.</li>
          <li>- Herramientas de análisis de sentimiento: RoBERTa se utiliza para analizar sentimientos en texto, como opiniones y comentarios.</li>
          <li>- Chatbots: DistilBERT se utiliza en aplicaciones donde se requiere comprensión rápida y eficiente del lenguaje natural.</li>
        </ul>
        <br/><p>Estos modelos se entrenan con grandes corpus de texto para aprender relaciones y significados complejos en el lenguaje natural.</p>
      `,
    },
    {
      title: "T5",
      developer: "Google",
      description:
        "T5 trata todas las tareas de NLP como un problema de traducción de texto a texto, lo que simplifica y unifica el enfoque para diversas tareas como traducción, resumen y clasificación.",
      detailedInfo: `
        <p>T5 (Text-To-Text Transfer Transformer) es un modelo de lenguaje que convierte todas las tareas de procesamiento de lenguaje natural en problemas de traducción de texto a texto. Este enfoque unifica diferentes tareas como traducción, resumen, y clasificación en una única estructura.</p>
        <br/><br/><strong>Ejemplos de uso:</strong>
        <ul>
          <li>- Google Translate: T5 mejora las traducciones automáticas proporcionando contexto y precisión mejorados.</li>
          <li>- Herramientas de resumen de texto: T5 se utiliza para condensar largos documentos en resúmenes más breves y comprensibles.</li>
          <li>- Clasificación de texto: T5 clasifica texto en categorías específicas basadas en su contenido.</li>
        </ul>
        <br/><p>T5 se entrena en un gran conjunto de datos que incluye múltiples tipos de tareas, lo que le permite aprender a traducir texto de una tarea a otra eficientemente.</p>
      `,
    },
    {
      title: "BLOOM",
      developer: "BigScience",
      description:
        "BLOOM es un modelo multilingüe a gran escala diseñado para la accesibilidad y la transparencia, fomentando la colaboración en la comunidad de IA.",
      detailedInfo: `
        <p>BLOOM (BigScience Large Open-science Open-access Multilingual Model) es un modelo de lenguaje multilingüe de gran escala que se enfoca en la accesibilidad y la transparencia. Está diseñado para apoyar la colaboración abierta en la comunidad de inteligencia artificial.</p>
        <br/><br/><strong>Ejemplos de uso:</strong>
        <ul>
          <li>- Traducción multilingüe: BLOOM puede traducir texto entre múltiples idiomas con alta precisión.</li>
          <li>- Proyectos de investigación colaborativa: Utilizado en estudios que requieren análisis de lenguaje en diferentes idiomas y contextos.</li>
          <li>- Aplicaciones de IA abiertas: BLOOM se usa en aplicaciones que buscan democratizar el acceso a tecnologías avanzadas de procesamiento de lenguaje natural.</li>
        </ul>
        <br/><p>BLOOM se entrena en una amplia variedad de idiomas y dialectos, lo que lo hace especialmente útil para aplicaciones globales.</p>
      `,
    },
    {
      title: "LLaMA",
      developer: "Meta (anteriormente Facebook)",
      description:
        "LLaMA se enfoca en ofrecer un modelo de lenguaje grande que sea eficiente y accesible para la investigación, diseñado para permitir estudios en entornos con recursos limitados.",
      detailedInfo: `
        <p>LLaMA (Large Language Model Meta AI) es un modelo de lenguaje desarrollado por Meta que se enfoca en la eficiencia y accesibilidad para la investigación. Está diseñado para permitir estudios en entornos con recursos computacionales limitados.</p>
        <br/><br/><strong>Ejemplos de uso:</strong>
        <ul>
          <li>- Proyectos de investigación: LLaMA se utiliza en estudios dentro de Meta para mejorar la comprensión y generación de lenguaje natural.</li>
          <li>- Entornos de recursos limitados: Ideal para aplicaciones en áreas donde los recursos computacionales son escasos.</li>
          <li>- Desarrollo de nuevos modelos de IA: LLaMA sirve como base para el desarrollo de nuevos modelos y algoritmos de inteligencia artificial.</li>
        </ul>
        <br/><p>LLaMA está optimizado para ser eficiente en términos de uso de recursos mientras mantiene un alto rendimiento en tareas de lenguaje natural.</p>
      `,
    },
    {
      title: "OPT",
      developer: "Meta AI",
      description:
        "OPT es un modelo preentrenado que facilita la investigación y el desarrollo en IA, ofreciendo un equilibrio entre rendimiento y eficiencia computacional.",
      detailedInfo: `
        <p>OPT (Open Pre-trained Transformer) es un modelo preentrenado desarrollado por Meta AI que está diseñado para equilibrar el rendimiento y la eficiencia computacional.</p>
        <br/><br/><strong>Ejemplos de uso:</strong>
        <ul>
          <li>- Aplicaciones internas de Meta: OPT se utiliza para optimizar procesos de procesamiento de lenguaje natural dentro de Meta.</li>
          <li>- Proyectos colaborativos: Utilizado en colaboración con otras instituciones de investigación para avanzar en el campo de la IA.</li>
          <li>- Desarrollo de herramientas de IA: OPT sirve como base para la creación de nuevas herramientas y aplicaciones de inteligencia artificial.</li>
        </ul>
        <br/><p>OPT se entrena en grandes cantidades de datos para aprender patrones y relaciones en el lenguaje natural, permitiendo su uso en diversas aplicaciones de investigación y desarrollo.</p>
      `,
    },
  ];
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (cardInfo) => {
    setSelectedCard(cardInfo);
  };

  const handleClosePopup = () => {
    setSelectedCard(null);
  };

  return (
    <>
      <MenuBar>
        <div className="w-screen h-screen p-8 overflow-auto">
          <div className="grid grid-cols-2 gap-14 h-full p-20">
            {cardData.map((card, index) => (
              <div
                key={index}
                className="relative rounded-lg transform -skew-x-6 -translate-y-6 hover:-translate-y-1 hover:translate-x-0 hover:skew-x-0 duration-500 w-full h-full p-2 bg-white card-compact hover:bg-purple-600 transition-all duration-200 shadow-xl hover:shadow-lg cursor-pointer"
                onClick={() => handleCardClick(card)}
              >
                <figure className="w-full h-full">
                  <div className="bg-white text-black min-h-full rounded-lg"></div>
                </figure>
                <div className="absolute text-black top-7 left-0 px-4">
                  <span className="font-bold text-2xl">{card.title}</span>
                  <p className="text-sm opacity-60 my-2">
                    <strong>Desarrollador:</strong> {card.developer}
                    <br />
                    <strong>Conocido por:</strong> {card.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Popup cardInfo={selectedCard} onClose={handleClosePopup} />
      </MenuBar>
    </>
  );
};

export default LLM;
