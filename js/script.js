document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        en: {
            // Site-wide
            siteTitle: "Blessed Quiz",
            siteSubtitle: "Your go-to destination for fun and engaging Bible quizzes!",
            navHome: "Home",
            navOurMission: "Our Mission",
            navTerms: "Terms of Service",
            navPrivacy: "Privacy Policy",
            contactEmailLink: "<a href=\"mailto:ablessedquiz@gmail.com\">ablessedquiz@gmail.com</a>",

            // index.html
            pageTitleIndex: "Blessed Quiz - Home",
            indexHeader: "Welcome to Blessed Quiz!",
            indexIntro: "Explore your knowledge of the Bible with our engaging quizzes. Select a page from the menu to learn more about us or start your journey!",

            // our-mission.html
            pageTitleOurMission: "Our Mission - Blessed Quiz",
            ourMissionHeader: "Our Mission",
            missionWelcome: "Welcome to Blessed Quiz!",
            missionP1: "Our mission is to provide a fun and enriching experience for everyone who wants to deepen their knowledge of the Bible. We believe that learning about God's Word should be an inspiring and accessible journey for everyone, regardless of where they are in their faith walk.",
            whatMovesUs: "<strong>What moves us:</strong>",
            education: "<strong>Education:</strong> We offer quizzes that educate and challenge, helping you grow in your understanding of the Scriptures.",
            community: "<strong>Community:</strong> We create a space where believers can connect, share, and learn together.",
            inspiration: "<strong>Inspiration:</strong> Our goal is to inspire you to explore the Bible in new and exciting ways, strengthening your faith and knowledge.",
            joinUs: "Join us and be part of our community of learning and spiritual growth!",

            // terms-of-service.html
            pageTitleTerms: "Terms of Service - Blessed Quiz",
            termsHeader: "Terms of Service",
            termsWelcome: "Welcome to Blessed Quiz!",
            termsP1: "By accessing or using our site, you agree to comply with and be bound by the following terms and conditions.",
            termsAcceptanceTitle: "1. Acceptance of Terms",
            termsAcceptanceP: "By using Blessed Quiz, you agree to these Terms of Service. If you do not agree, please do not use our site.",
            termsChangesTitle: "2. Changes to Terms",
            termsChangesP: "We reserve the right to modify these terms at any time. Changes will be posted on this page, and your continued use of the site constitutes acceptance of such changes.",
            termsContentUseTitle: "3. Use of Content",
            termsContentUseP: "All content provided on Blessed Quiz is for educational and entertainment purposes. You may not reproduce, distribute, or use the content for commercial purposes without our written consent.",
            termsUserConductTitle: "4. User Conduct",
            termsUserConductP: "You agree to use Blessed Quiz in a respectful and lawful manner. Any inappropriate or harmful behavior may result in the termination of your access to the site.",
            termsPrivacyTitle: "5. Privacy",
            termsPrivacyP: "Your privacy is important to us. Please review our Privacy Policy to understand how we collect, use, and protect your information.",
            termsDisclaimerTitle: "6. Disclaimer",
            termsDisclaimerP: "Blessed Quiz provides content \"as is,\" without any warranties. We do not guarantee the accuracy or completeness of the content and are not responsible for any errors or omissions.",
            termsContactTitle: "7. Contact Information",
            termsContactP: "If you have any questions or concerns about these Terms of Service, please contact us at ", // Email will be appended

            // privacy-policy.html
            pageTitlePrivacy: "Privacy Policy - Blessed Quiz",
            privacyHeader: "Privacy Policy",
            privacyWelcome: "Welcome to Blessed Quiz!",
            privacyP1: "At Blessed Quiz, we value your privacy and are committed to protecting your personal information. This Privacy Policy describes how we collect, use, and protect your data.",
            privacyInfoCollectionTitle: "1. Information Collection",
            privacyInfoCollectionP: "We collect information you provide directly to us, such as when you sign up for our newsletter or participate in quizzes. This may include your name, email address, and other contact details.",
            privacyInfoUseTitle: "2. Use of Information",
            privacyInfoUseP: "We use the information we collect to provide, maintain, and improve our services, including personalizing your experience on Blessed Quiz. We may also use your information to communicate with you about updates, promotions, and other relevant content.",
            privacyInfoSharingTitle: "3. Information Sharing",
            privacyInfoSharingP: "We do not share your personal information with third parties, except as necessary to provide our services or as required by law. We may share aggregated, non-personal data with partners for analytical purposes.",
            privacyDataSecurityTitle: "4. Data Security",
            privacyDataSecurityP: "We implement appropriate security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.",
            privacyCookiesTitle: "5. Cookies",
            privacyCookiesP: "Blessed Quiz uses cookies to enhance your browsing experience. Cookies are small data files stored on your device that help us understand how you interact with our site. You can manage your cookie preferences through your browser settings.",
            privacyYourRightsTitle: "6. Your Rights",
            privacyYourRightsP: "You have the right to access, update, or delete your personal information. If you wish to exercise these rights, please contact us at ", // Email will be appended
            privacyPolicyChangesTitle: "7. Changes to Privacy Policy",
            privacyPolicyChangesP: "We may update this Privacy Policy from time to time. Any changes will be posted on this page, and your continued use of the site constitutes acceptance of the updated policy.",
            privacyContactTitle: "8. Contact Information",
            privacyContactP: "If you have any questions or concerns about this Privacy Policy, please contact us at ", // Email will be appended
        },
        pt: {
            // Site-wide
            siteTitle: "Blessed Quiz",
            siteSubtitle: "Seu destino para quizzes bíblicos divertidos e envolventes!",
            navHome: "Início",
            navOurMission: "Nossa Missão",
            navTerms: "Termos de Serviço",
            navPrivacy: "Política de Privacidade",
            contactEmailLink: "<a href=\"mailto:ablessedquiz@gmail.com\">ablessedquiz@gmail.com</a>",

            // index.html
            pageTitleIndex: "Blessed Quiz - Início",
            indexHeader: "Bem-vindo ao Blessed Quiz!",
            indexIntro: "Explore seu conhecimento da Bíblia com nossos quizzes envolventes. Selecione uma página no menu para saber mais sobre nós ou iniciar sua jornada!",

            // our-mission.html
            pageTitleOurMission: "Nossa Missão - Blessed Quiz",
            ourMissionHeader: "Nossa Missão",
            missionWelcome: "Bem-vindo ao Blessed Quiz!",
            missionP1: "Nossa missão é fornecer uma experiência divertida e enriquecedora para todos que desejam aprofundar seus conhecimentos sobre a Bíblia. Acreditamos que aprender sobre a Palavra de Deus deve ser uma jornada inspiradora e acessível para todos, independentemente de onde estejam em sua caminhada de fé.",
            whatMovesUs: "<strong>O que nos move:</strong>",
            education: "<strong>Educação:</strong> Oferecemos quizzes que educam e desafiam, ajudando você a crescer em seu entendimento das Escrituras.",
            community: "<strong>Comunidade:</strong> Criamos um espaço onde os crentes podem se conectar, compartilhar e aprender juntos.",
            inspiration: "<strong>Inspiração:</strong> Nosso objetivo é inspirá-lo a explorar a Bíblia de maneiras novas e emocionantes, fortalecendo sua fé e conhecimento.",
            joinUs: "Junte-se a nós e faça parte de nossa comunidade de aprendizado e crescimento espiritual!",

            // terms-of-service.html
            pageTitleTerms: "Termos de Serviço - Blessed Quiz",
            termsHeader: "Termos de Serviço",
            termsWelcome: "Bem-vindo ao Blessed Quiz!",
            termsP1: "Ao acessar ou usar nosso site, você concorda em cumprir e estar vinculado aos seguintes termos e condições.",
            termsAcceptanceTitle: "1. Aceitação dos Termos",
            termsAcceptanceP: "Ao usar o Blessed Quiz, você concorda com estes Termos de Serviço. Se você não concorda, por favor, não use nosso site.",
            termsChangesTitle: "2. Alterações nos Termos",
            termsChangesP: "Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações serão publicadas nesta página, e seu uso continuado do site constitui aceitação de tais alterações.",
            termsContentUseTitle: "3. Uso do Conteúdo",
            termsContentUseP: "Todo o conteúdo fornecido no Blessed Quiz é para fins educacionais e de entretenimento. Você não pode reproduzir, distribuir ou usar o conteúdo para fins comerciais sem nosso consentimento por escrito.",
            termsUserConductTitle: "4. Conduta do Usuário",
            termsUserConductP: "Você concorda em usar o Blessed Quiz de maneira respeitosa e legal. Qualquer comportamento inadequado ou prejudicial pode resultar na rescisão do seu acesso ao site.",
            termsPrivacyTitle: "5. Privacidade",
            termsPrivacyP: "Sua privacidade é importante para nós. Por favor, revise nossa Política de Privacidade para entender como coletamos, usamos e protegemos suas informações.",
            termsDisclaimerTitle: "6. Isenção de Responsabilidade",
            termsDisclaimerP: "O Blessed Quiz fornece conteúdo \"como está\", sem quaisquer garantias. Não garantimos a precisão ou integridade do conteúdo e não somos responsáveis por quaisquer erros ou omissões.",
            termsContactTitle: "7. Informações de Contato",
            termsContactP: "Se você tiver alguma dúvida ou preocupação sobre estes Termos de Serviço, entre em contato conosco em ", // Email will be appended

            // privacy-policy.html
            pageTitlePrivacy: "Política de Privacidade - Blessed Quiz",
            privacyHeader: "Política de Privacidade",
            privacyWelcome: "Bem-vindo ao Blessed Quiz!",
            privacyP1: "No Blessed Quiz, valorizamos sua privacidade e estamos comprometidos em proteger suas informações pessoais. Esta Política de Privacidade descreve como coletamos, usamos e protegemos seus dados.",
            privacyInfoCollectionTitle: "1. Coleta de Informações",
            privacyInfoCollectionP: "Coletamos informações que você nos fornece diretamente, como quando você se inscreve em nosso boletim informativo ou participa de quizzes. Isso pode incluir seu nome, endereço de e-mail e outros detalhes de contato.",
            privacyInfoUseTitle: "2. Uso das Informações",
            privacyInfoUseP: "Usamos as informações que coletamos para fornecer, manter e melhorar nossos serviços, incluindo a personalização de sua experiência no Blessed Quiz. Também podemos usar suas informações para nos comunicarmos com você sobre atualizações, promoções e outros conteúdos relevantes.",
            privacyInfoSharingTitle: "3. Compartilhamento de Informações",
            privacyInfoSharingP: "Não compartilhamos suas informações pessoais com terceiros, exceto conforme necessário para fornecer nossos serviços ou conforme exigido por lei. Podemos compartilhar dados agregados e não pessoais com parceiros para fins analíticos.",
            privacyDataSecurityTitle: "4. Segurança dos Dados",
            privacyDataSecurityP: "Implementamos medidas de segurança apropriadas para proteger suas informações pessoais contra acesso não autorizado, divulgação, alteração ou destruição. No entanto, nenhum método de transmissão pela internet é completamente seguro, e não podemos garantir segurança absoluta.",
            privacyCookiesTitle: "5. Cookies",
            privacyCookiesP: "O Blessed Quiz usa cookies para aprimorar sua experiência de navegação. Cookies são pequenos arquivos de dados armazenados em seu dispositivo que nos ajudam a entender como você interage com nosso site. Você pode gerenciar suas preferências de cookies através das configurações do seu navegador.",
            privacyYourRightsTitle: "6. Seus Direitos",
            privacyYourRightsP: "Você tem o direito de acessar, atualizar ou excluir suas informações pessoais. Se desejar exercer esses direitos, entre em contato conosco em ", // Email will be appended
            privacyPolicyChangesTitle: "7. Alterações na Política de Privacidade",
            privacyPolicyChangesP: "Podemos atualizar esta Política de Privacidade de tempos em tempos. Quaisquer alterações serão publicadas nesta página, e seu uso continuado do site constitui aceitação da política atualizada.",
            privacyContactTitle: "8. Informações de Contato",
            privacyContactP: "Se você tiver alguma dúvida ou preocupação sobre esta Política de Privacidade, entre em contato conosco em ", // Email will be appended
        }
    };

    const languageSelector = document.querySelector('.language-selector');
    let currentLang = localStorage.getItem('lang') || 'en'; // Default to English

    function updateTexts(lang) {
        document.querySelectorAll('[data-translate]').forEach(el => {
            const key = el.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                // For specific elements that need HTML, like contact links
                if (key.endsWith("ContactP") || key === "contactEmailLink") {
                     if (key.endsWith("ContactP") && (translations[lang][key] + translations[lang]["contactEmailLink"])){
                        el.innerHTML = translations[lang][key] + translations[lang]["contactEmailLink"];
                     } else {
                        el.innerHTML = translations[lang][key];
                     }
                } else {
                    el.textContent = translations[lang][key];
                }
            }
        });
        // Update page title
        const pageKey = document.body.getAttribute('data-page-key');
        if (pageKey && translations[lang] && translations[lang][pageKey]) {
            document.title = translations[lang][pageKey];
        }
        // Update lang attribute of html tag
        document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

        // Update active button state
        document.querySelectorAll('.language-selector button').forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            }
        });
    }

    languageSelector.addEventListener('click', (event) => {
        if (event.target.tagName === 'BUTTON') {
            const lang = event.target.getAttribute('data-lang');
            if (lang && lang !== currentLang) {
                currentLang = lang;
                localStorage.setItem('lang', lang);
                updateTexts(lang);
            }
        }
    });

    // Initial text update
    updateTexts(currentLang);
});