import { createContext, useContext, useEffect, useState } from "react";

const LanguageCtx = createContext();

const translate = {
  español: {
    porque: "Por qué",
    servicios: "Servicios",
    como: "Cómo",
    equipo: "Equipo",
    hablemos: "Hablemos",
    headerTit: "ponemos A lA tecnologiA de tu lAdo",
    headerSubTit:
      "Creando productos digitales que mejoran la forma en que vivimos y trabajamos",
    headerBoton: "¡quiero subir al ARCA!",
    xqTit: "¿POR QUÉ?",
    xqSubTit:
      "Aprovechá la tecnología para llevar a tu empresa al siguiente nivel",
    xqTex:
      "Con más de 25 años en la industria de desarrollo de software, decidimos crear ARCA para ayudar a empresas y emprendedores a generar soluciones digitales para sus negocios, potenciándolos con el uso de los avances tecnológicos.",
    servTit: "SERVICIOS",
    servSubTit: "¿En qué podemos ayudarte?",
    cardFront1: `innov\nAció\nn`,
    cardFront2: `digi\ntA\nl`,
    cardFront3: `c\nAli\ndAd`,
    cardFront4: `e\nqui\npos`,
    cardBack1:
      "Evaluamos tu solución actual en profundidad y nos enfocamos en descubrir áreas de mejora y opciones de modernización. Luego diseñamos y desarrollamos soluciones digitales específicas para actualizar tus negocios.",
    cardBack2:
      "Acompañamos a dar el primer paso hacia la transformación digital a las empresas que aún no tienen soluciones de software implementadas, ayudándolas a tener una presencia en línea y a comenzar a utilizar herramientas digitales para mejorar su eficiencia y productividad.",
    cardBack3:
      "Testeamos tus apps, webs y cualquier producto digital, desarrollado por nosotros o por terceros. Realizamos pruebas de aceptación de usuario, integrales, de rendimiento, entre otras, para asegurar el correcto funcionamiento tu software y detectar errores, mejorando la calidad y confiabilidad del sistema.",
    cardBack4:
      "Integramos a nuestros líderes técnicos, desarrolladores de software, testers y analistas funcionales en tus equipos para ampliar y mejorar su capacidad. Con nuestro servicio, tu empresa puede aprovechar al máximo el potencial de su equipo y lograr un crecimiento sostenible.",
    comoTit: "¿CÓMO?",
    comoSubTit: "Transformación personalizada del principio al fin",
    comoTex:
      "Utilizamos metodologías ágiles para garantizarte la eficiencia y calidad de nuestros servicios. Te ofrecemos soluciones en la nube para mejorar la accesibilidad y escalabilidad de los sistemas. Te ayudamos con la integración de tus sistemas y chatbots para mejorar la experiencia del usuario y el rendimiento del equipo, pudiendo utilizar tecnología de inteligencia artificial para proporcionar soluciones aún más personalizadas.",
    eqTit: "Equipo",
    eqTex:
      "Nos une la pasión por el software y la obsesión por la calidad y los detalles. Con muchos años de experiencia en la industria, nos mantenemos entrenados en las nuevas tecnologías y metodologías para ofrecerte siempre soluciones innovadoras y personalizadas. Nos enorgullece el reconocimiento de nuestros clientes y trabajamos duro para mantener su confianza.",
    contactoTel: "Tel: +54 9 11 5936 7384",
    contactoTit: "hAblemos",
    contactoTex:
      "¡Dejanos tus datos y mensaje y te responderemos a la brevedad!",
    formNom: "Nombre",
    formMail: "Email",
    formTel: "Teléfono/Whatsapp (sin espacios ni guiones)",
    formPais: "País",
    formEmp: "Empresa",
    formPuesto: "Puesto",
    formCons: "Dejanos tu mensaje acá",
    formCampos: "* Campos obligatorios",
    formBtn: "Enviar",
    valiNom: "Nos gustaría saber cómo te llamás",
    valiMail: "Nos gustaría saber a dónde enviarte nuestra respuesta",
    valCons: "Nos gustaría saber con qué podemos ayudarte",
    invNom: "Sólo acepta letras y espacios en blanco",
    invMail: "Email inválido",
    consEnv: "La consulta ha sido enviada!",
    consErr: "No se pudo enviar tu consulta, por favor intenta nuevamente",
  },
  english: {
    porque: "Why",
    servicios: "Services",
    como: "How",
    equipo: "Team",
    hablemos: "Let's talk",
    headerTit: "we put technology on your side",
    headerSubTit:
      "Creating digital products that improve the way we live and work",
    headerBoton: "i want to get on the ARCA!",
    xqTit: "WHY?",
    xqSubTit: "Harness technology to take your business to the next level",
    xqTex:
      "With over 25 years in the software development industry, we decided to create ARCA to help businesses and entrepreneurs generate digital solutions for their ventures, empowering them with the use of technological advancements.",
    servTit: "SERVICES",
    servSubTit: "How can we assist you?",
    cardFront1: `innov\nAtio\nn`,
    cardFront2: `digi\ntA\nl`,
    cardFront3: `q\nuAl\nity`,
    cardFront4: `t\neA\nms`,
    cardBack1:
      "We thoroughly evaluate your current solution and focus on identifying areas for improvement and modernization. Then, we design and develop specific digital solutions to upgrade your businesses.",
    cardBack2:
      "We accompany companies that do not yet have software solutions implemented to take the first step towards digital transformation, helping them to have an online presence and to start using digital tools to improve their efficiency and productivity.",
    cardBack3:
      "We test your apps, websites, and any digital product, whether developed by us or by third parties. We conduct user acceptance tests, comprehensive tests, performance tests, among others, to ensure the proper functioning of your software and detect errors, improving the quality and reliability of the system.",
    cardBack4:
      "We integrate our technical leaders, software developers, testers, and functional analysts into your teams to expand and enhance their capabilities. With our service, your company can leverage the full potential of your team and achieve sustainable growth.",
    comoTit: "HOW?",
    comoSubTit: "Personalized transformation from start to finish",
    comoTex:
      "We use agile methodologies to ensure efficiency and quality in our services. We offer cloud-based solutions to improve system accessibility and scalability. We assist you with system integration and chatbots to enhance user experience and team performance, leveraging artificial intelligence technology to provide even more personalized solutions.",
    eqTit: "Team",
    eqTex:
      "We share a passion for software and an obsession for quality and details. With many years of industry experience, we stay updated on the latest technologies and methodologies to provide you with innovative and personalized solutions. We take pride in the recognition from our clients and work hard to maintain their trust.",
    contactoTel: "Phone: +54 9 11 5936 7384",
    contactoTit: "let´s tAlk",
    contactoTex:
      "Leave us your information and message and we will respond to you shortly!",
    formNom: "Name",
    formMail: "Email",
    formTel: "Phone/Whatsapp (no blanks or hyphens)",
    formPais: "Country",
    formEmp: "Company",
    formPuesto: "Position",
    formCons: "Leave us your message here",
    formCampos: "* Required field",
    formBtn: "Send",
    valiNom: "We would like to know your name",
    valiMail: "We would like to know where to send our response",
    valCons: "We would like to know how we can help you",
    invNom: "Only accepts letters and whitespace",
    invMail: "Invalid email",
    consEnv: "Your message has been successfully sent",
    consErr: "Your message could not be sent, please try again",
  },
  português: {
    porque: "Por quê",
    servicios: "Serviços",
    como: "Como",
    equipo: "Equipe",
    hablemos: "Vamos falar",
    headerTit: "colocAmos A tecnologiA Ao seu lAdo",
    headerSubTit:
      "Criando produtos digitais que melhoram a maneira como vivemos e trabalhamos",
    headerBoton: "eu quero subir no ARCA!",
    xqTit: "POR QUÊ?",
    xqSubTit: "Aproveite a tecnologia para levar sua empresa ao próximo nível",
    xqTex:
      "Com mais de 25 anos na indústria de desenvolvimento de software, decidimos criar a ARCA para ajudar empresas e empreendedores a gerar soluções digitais para seus negócios, potencializando-os com o uso dos avanços tecnológicos.",
    servTit: "SERVIÇOS",
    servSubTit: "Em que podemos ajudálo?",
    cardFront1: `inov\nAÇÃ\no`,
    cardFront2: `digi\ntA\nl`,
    cardFront3: `q\nuAli\ndAde`,
    cardFront4: `e\nqui\npes`,
    cardBack1:
      "Avaliamos minuciosamente a sua solução atual e nos concentramos em identificar áreas de melhoria e opções de modernização. Em seguida, projetamos e desenvolvemos soluções digitais específicas para atualizar seus negócios.",
    cardBack2:
      "Acompanhamos as empresas que ainda não possuem soluções de software implementadas a dar o primeiro passo em direção à transformação digital, ajudando-as a ter uma presença online e a começar a usar ferramentas digitais para melhorar sua eficiência e produtividade.",
    cardBack3:
      "Testamos seus aplicativos, websites e qualquer produto digital, desenvolvido por nós ou por terceiros. Realizamos testes de aceitação do usuário, testes abrangentes, testes de desempenho, entre outros, para garantir o bom funcionamento do seu software e detectar erros, melhorando a qualidade e confiabilidade do sistema.",
    cardBack4:
      "Integramos nossos líderes técnicos, desenvolvedores de software, testadores e analistas funcionais em suas equipes para expandir e aprimorar suas capacidades. Com nosso serviço, sua empresa pode aproveitar todo o potencial de sua equipe e alcançar um crescimento sustentável.",
    comoTit: "COMO?",
    comoSubTit: "Transformação personalizada do início ao fim",
    comoTex:
      "Utilizamos metodologias ágeis para garantir a eficiência e qualidade de nossos serviços. Oferecemos soluções em nuvem para melhorar a acessibilidade e escalabilidade dos sistemas. Auxiliamos na integração de seus sistemas e chatbots para aprimorar a experiência do usuário e o desempenho da equipe, utilizando tecnologia de inteligência artificial para fornecer soluções ainda mais personalizadas.",
    eqTit: "Equipe",
    eqTex:
      "Nos une a paixão pelo software e a obsessão pela qualidade e pelos detalhes. Com muitos anos de experiência na indústria, mantemos nosso treinamento atualizado nas novas tecnologias e metodologias para sempre oferecer soluções inovadoras e personalizadas. Temos orgulho do reconhecimento de nossos clientes e trabalhamos duro para manter sua confiança.",
    contactoTel: "Tel: +54 9 11 5936 7384",
    contactoTit: "vAmos fAlAr",
    contactoTex: "Deixe-nos seus dados e mensagem e responderemos em breve!",
    formNom: "Nome",
    formMail: "E-mail",
    formTel: "Telefone/Whatsapp (sem espaços ou hifens)",
    formPais: "País",
    formEmp: "Empresa",
    formPuesto: "Cargo",
    formCons: "Deixe sua mensagem aqui",
    formCampos: "* Campo obrigatório",
    formBtn: "Enviar",
    valiNom: "Gostaríamos de saber como você se chama",
    valiMail: "Gostaríamos de saber para onde enviar nossa resposta",
    valCons: "Gostaríamos de saber com o que podemos ajudálo",
    invNom: "só aceita letras e espaços em branco",
    invMail: "E-mail inválido",
    consEnv: "Sua mensagem foi enviada com sucesso!",
    consErr: "Sua mensagem não pôde ser enviada, tente novamente",
  },
  italiano: {
    porque: "Perché",
    servicios: "Servizi",
    como: "Come",
    equipo: "Squadra",
    hablemos: "Parliamo",
    headerTit: "mettiAmo lA tecnologiA dAllA tuA pArte",
    headerSubTit:
      "Creiamo prodotti digitali che migliorano il modo in cui viviamo e lavoriamo",
    headerBoton: "voglio sAlire sull'ARCA!",
    xqTit: "PERCHÉ?",
    xqSubTit:
      "Sfrutta la tecnologia per portare la tua azienda al livello successivo",
    xqTex:
      "Con oltre 25 anni nell'industria dello sviluppo software, abbiamo deciso di creare ARCA per aiutare aziende e imprenditori a generare soluzioni digitali per le loro attività, potenziandole con l'uso dei progressi tecnologici.",
    servTit: "SERVIZI",
    servSubTit: "Come possiamo aiutarti?",
    cardFront1: `innov\nAzion\ne`,
    cardFront2: `digi\ntA\nle`,
    cardFront3: `q\nuAl\nitA`,
    cardFront4: `s\nquA\ndre`,
    cardBack1:
      "Valutiamo attentamente la tua attuale soluzione e ci concentriamo nell'individuare aree di miglioramento e opzioni di modernizzazione. Successivamente, progettiamo e sviluppiamo soluzioni digitali specifiche per aggiornare le tue attività.",
    cardBack2:
      "Accompagniamo le aziende che non hanno ancora soluzioni software implementate a fare il primo passo verso la trasformazione digitale, aiutandole a avere una presenza online e a iniziare a utilizzare strumenti digitali per migliorare la loro efficienza e produttività.",
    cardBack3:
      "Testiamo le tue app, siti web e qualsiasi prodotto digitale, sviluppato da noi o da terze parti. Effettuiamo test di accettazione dell'utente, test completi, test di prestazioni, tra gli altri, per garantire il corretto funzionamento del tuo software e rilevare errori, migliorando la qualità e l'affidabilità del sistema.",
    cardBack4:
      "Integriamo i nostri leader tecnici, sviluppatori di software, tester e analisti funzionali nei tuoi team per ampliare e migliorare le loro capacità. Con il nostro servizio, la tua azienda può sfruttare appieno il potenziale del proprio team e ottenere una crescita sostenibile.",
    comoTit: "COME?",
    comoSubTit: "Trasformazione personalizzata dall'inizio alla fine",
    comoTex:
      "Utilizziamo metodologie agili per garantire l'efficienza e la qualità dei nostri servizi. Offriamo soluzioni basate su cloud per migliorare l'accessibilità e la scalabilità dei sistemi. Ti aiutiamo con l'integrazione dei tuoi sistemi e chatbot per migliorare l'esperienza utente e le prestazioni del team, sfruttando la tecnologia dell'intelligenza artificiale per fornire soluzioni ancora più personalizzate.",
    eqTit: "Squadra",
    eqTex:
      "Ci unisce la passione per il software e l'ossessione per la qualità e i dettagli. Con molti anni di esperienza nel settore, ci teniamo aggiornati sulle nuove tecnologie e metodologie per offrirti sempre soluzioni innovative e personalizzate. Siamo orgogliosi del riconoscimento dei nostri clienti e lavoriamo duramente per mantenere la loro fiducia.",
    contactoTel: "Tel: +54 9 11 5936 7384",
    contactoTit: "pArliAmo",
    contactoTex:
      "Lasciaci i tuoi dati e il tuo messaggio e ti risponderemo al più presto!",
    formNom: "Nome",
    formMail: "Email",
    formTel: "Telefono/Whatsapp (niente spazi o trattini)",
    formPais: "Paese",
    formEmp: "Azienda",
    formPuesto: "Posizione",
    formCons: "Lasciaci il tuo messaggio qui",
    formCampos: "* Campo obbligatorio",
    formBtn: "Invia",
    valiNom: "Ci piacerebbe sapere come ti chiami",
    valiMail: "Ci piacerebbe sapere dove inviare la nostra risposta",
    valCons: "Vorremmo sapere con cosa possiamo aiutarti",
    invNom: "accetta solo lettere e spazi bianchi",
    invMail: "Email non valido",
    consEnv: "Il tuo messaggio è stato inviato con successo!",
    consErr: "Non è stato possibile inviare il tuo messaggio, riprova",
  },
};

export const useLanguage = () => {
  const context = useContext(LanguageCtx);
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("español");

  useEffect(() => {
    function getStorage() {
      if (!localStorage.getItem("arcaLang")) {
        localStorage.setItem("arcaLang", "español");
      } else setLanguage(localStorage.getItem("arcaLang"));
    }
    getStorage();
  }, []);

  return (
    <LanguageCtx.Provider value={{ language, setLanguage, translate }}>
      {children}
    </LanguageCtx.Provider>
  );
};
