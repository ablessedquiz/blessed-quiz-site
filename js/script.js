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
            navTikTokOverview: "TikTok Sender Overview",
            navTikTokHowItWorks: "How it Works",
            navTikTokTechConfig: "Tech & Config",
            navTikTokImprovements: "Improvements",
            navTikTokNextSteps: "Next Steps",


            // index.html
            pageTitleIndex: "Blessed Quiz - Home",
            indexHeader: "Welcome to Blessed Quiz!",
            indexIntro: "Explore your knowledge of the Bible with our engaging quizzes. Select a page from the menu to learn more about us or start your journey!",

            // our-mission.html
            pageTitleOurMission: "Our Mission - Blessed Quiz",
            ourMissionHeader: "Our Mission",
            missionWelcome: "Welcome to Blessed Quiz!",
            missionP1: "Our mission is to provide a fun and enriching experience for everyone who wants to deepen their knowledge of the Bible. We believe that learning about God's Word should be an inspiring and accessible journey for everyone, regardless of where they are in their faith walk.",
            whatMovesUsHeading: "What moves us:", // Corrected key
            educationHeading: "Education:", // Corrected key
            educationText: "We offer quizzes that educate and challenge, helping you grow in your understanding of the Scriptures.", // Corrected key
            communityHeading: "Community:", // Corrected key
            communityText: "We create a space where believers can connect, share, and learn together.", // Corrected key
            inspirationHeading: "Inspiration:", // Corrected key
            inspirationText: "Our goal is to inspire you to explore the Bible in new and exciting ways, strengthening your faith and knowledge.", // Corrected key
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

            // TikTok Sender Pages Translations
            pageTitleTikTokOverview: "TikTok Sender Project Overview - Blessed Quiz",
            tiktokOverviewHeader: "Project Overview: BlessedQuizz_TIKTOK_sender_V6.py",
            tiktokOverviewP1: "This project is a web application built with Flask (a Python microframework) whose main objective is to allow video uploads to TikTok. It automates the authentication and video file sending process to the platform.",
            tiktokOverviewFeaturesHeader: "Main Features",
            tiktokOverviewFeaturesIntro: "The project implements the following main features:",
            tiktokOverviewFeatureAuth: "OAuth 2.0 authentication with PKCE to connect with the user's TikTok account.",
            tiktokOverviewFeatureUpload: "Upload of video files to the TikTok inbox (drafts).",
            tiktokOverviewFeatureConfig: "Configuration via variables in the code.",

            pageTitleTikTokHowItWorks: "How it Works - TikTok Sender - Blessed Quiz",
            tiktokHowItWorksHeader: "How it Works",
            tiktokHowItWorksAuthHeader: "OAuth 2.0 Authentication with PKCE",
            tiktokHowItWorksAuthIntro: "The authentication process follows the OAuth 2.0 flow with Proof Key for Code Exchange (PKCE) for security:",
            tiktokHowItWorksAuthStep1: "<strong>Flow Start (/):</strong> Generates a <code>code_verifier</code> and <code>code_challenge</code>, redirects the user to TikTok's authorization page with necessary parameters (CLIENT_KEY, SCOPES, REDIRECT_URI, code_challenge).",
            tiktokHowItWorksAuthStep2: "<strong>Callback (/callback):</strong> Receives the <code>code</code> from TikTok, retrieves the <code>code_verifier</code> from the session. Makes a POST request to TikTok's token endpoint to exchange the <code>code</code> for an <code>access_token</code> and <code>refresh_token</code>, using the <code>code_verifier</code> for validation (PKCE). Stores tokens and <code>open_id</code> in the session.",
            tiktokHowItWorksUploadHeader: "Video Upload (/upload)",
            tiktokHowItWorksUploadIntro: "After authentication, video upload occurs as follows:",
            tiktokHowItWorksUploadStep1: "<strong>Prerequisites:</strong> Requires <code>access_token</code> and <code>open_id</code> in the session. The video file path (<code>VIDEO_FILE_PATH</code>) is hardcoded.",
            tiktokHowItWorksUploadStep2: "<strong>Upload Initialization:</strong> Makes a POST request to <code>/v2/post/publish/inbox/video/init/</code> with the <code>access_token</code> and <code>open_id</code>, providing video information (size, etc.). Receives an <code>upload_url</code> and <code>publish_id</code>.",
            tiktokHowItWorksUploadStep3: "<strong>File Sending:</strong> Makes a PUT request to the <code>upload_url</code> with the binary data of the video file. The video is sent to the user's TikTok inbox/drafts.",
            tiktokHowItWorksUploadStep4: "<strong>Result:</strong> The user needs to access the TikTok app to manually publish the video from drafts.",

            pageTitleTikTokTechConfig: "Technology and Configuration - TikTok Sender - Blessed Quiz",
            tiktokTechConfigHeader: "Technology and Configuration",
            tiktokTechConfigConfigHeader: "Configuration",
            tiktokTechConfigConfigIntro: "Main settings are defined as global variables at the beginning of the script:",
            tiktokTechConfigConfigKey: "<code>CLIENT_KEY</code>, <code>CLIENT_SECRET</code>: TikTok API credentials.",
            tiktokTechConfigConfigUrls: "<code>NGROK_OR_HOST_URL</code>, <code>REDIRECT_URI</code>: URLs for OAuth redirection.",
            tiktokTechConfigConfigScopes: "<code>SCOPES</code>: Requested permissions (e.g., <code>user.info.basic</code>, <code>video.upload</code>).",
            tiktokTechConfigConfigFile: "<code>VIDEO_FILE_PATH</code>: Fixed path to the video file to be uploaded.",
            tiktokTechConfigConfigSession: "Flask session is configured to use the filesystem (<code>flask_session</code>).",
            tiktokTechConfigTechHeader: "Technologies Used",
            tiktokTechConfigTechIntro: "The project uses the following Python technologies and libraries:",
            tiktokTechConfigTechFlask: "<strong>Flask:</strong> Web microframework for the application structure.",
            tiktokTechConfigTechFlaskSession: "<strong>Flask-Session:</strong> Extension for session management.",
            tiktokTechConfigTechRequests: "<strong>Requests:</strong> For making HTTP requests to the TikTok API.",
            tiktokTechConfigTechCrypto: "<strong>hashlib, base64, secrets:</strong> Standard modules for cryptographic operations (PKCE).",
            tiktokTechConfigTechStdlib: "<strong>os, json:</strong> Standard modules for file and JSON manipulation.",

            pageTitleTikTokImprovements: "Points for Improvement - TikTok Sender - Blessed Quiz",
            tiktokImprovementsHeader: "Points for Improvement",
            tiktokImprovementsIntro: "The current version has some points that can be improved to increase flexibility, security, and usability:",
            tiktokImprovementsFile: "<strong>Fixed Video Path:</strong> The <code>VIDEO_FILE_PATH</code> is hardcoded, preventing dynamic selection by the user.",
            tiktokImprovementsUrl: "<strong>Ngrok/Host URL:</strong> The base URL is fixed, which is problematic with dynamic URLs like those from free Ngrok.",
            tiktokImprovementsSecret: "<strong>Credential Security:</strong> The <code>CLIENT_SECRET</code> is directly in the code, which is not secure for production.",
            tiktokImprovementsState: "<strong>OAuth state parameter:</strong> The <code>state</code> parameter is fixed, making the application vulnerable to CSRF.",
            tiktokImprovementsRefresh: "<strong>Use of refresh_token:</strong> The <code>refresh_token</code> is obtained, but there is no logic to use it to renew an expired <code>access_token</code>.",
            tiktokImprovementsUI: "<strong>User Interface (UI):</strong> The interface is very basic (plain text).",
            tiktokImprovementsMetadata: "<strong>Video Metadata:</strong> Title and description are hardcoded.",
            tiktokImprovementsErrors: "<strong>Error Handling:</strong> Simple error messages for the end-user.",
            tiktokImprovementsLogging: "<strong>Logging:</strong> Use of <code>print()</code> instead of the <code>logging</code> module.",
            tiktokImprovementsChunks: "<strong>Chunked Upload:</strong> The video is sent as a single chunk, less robust for large files.",
            tiktokImprovementsConfig: "<strong>Centralized Configuration:</strong> Settings scattered as global variables.",
            tiktokImprovementsPublish: "<strong>Direct Publishing Scope:</strong> Currently only sends to drafts (<code>video.upload</code>), does not publish directly (<code>video.publish</code>).",

            pageTitleTikTokNextSteps: "Next Steps and Future Features - TikTok Sender - Blessed Quiz",
            tiktokNextStepsHeader: "Next Steps and Future Features",
            tiktokNextStepsIntro: "Based on the points for improvement, the following features and UI enhancements are suggested:",
            tiktokNextStepsUIHeader: "User Interface (UI) Improvements",
            tiktokNextStepsUIHome: "<strong>Home Page (/):</strong> Welcome and 'Login with TikTok' button.",
            tiktokNextStepsUIUploadForm: "<strong>Upload Form:</strong> Field to select file, fields for title, description, hashtags, and other settings.",
            tiktokNextStepsUIStatus: "<strong>Feedback/Status Page:</strong> Show upload success/error and publication status (if applicable).",
            tiktokNextStepsUILayout: "<strong>Consistent Layout:</strong> Use Flask templates (Jinja2) for a cohesive look.",
            tiktokNextStepsFeaturesHeader: "New Features",
            tiktokNextStepsFeaturesDynamicFile: "<strong>Dynamic Video Selection:</strong> Allow the user to choose the file.",
            tiktokNextStepsFeaturesMetadataInput: "<strong>User Metadata Input:</strong> Capture title, description, etc., via form.",
            tiktokNextStepsFeaturesRefreshToken: "<strong>refresh_token Implementation:</strong> Automatically renew the <code>access_token</code> when it expires.",
            tiktokNextStepsFeaturesDirectPublish: "<strong>Direct Publishing Option:</strong> Allow choosing between drafts (<code>video.upload</code>) and direct publishing (<code>video.publish</code>), including verification of status.",
            tiktokNextStepsFeaturesConfig: "<strong>Improved Configuration Management:</strong> Read settings from environment variables or <code>.env</code> file.",
            tiktokNextStepsFeaturesHistory: "<strong>Upload History (Advanced):</strong> Store and display history in a database.",
            tiktokNextStepsFeaturesScheduling: "<strong>Post Scheduling (Very Advanced):</strong> Allow scheduling publication for a future date/time.",
            tiktokNextStepsFeaturesMultiAccount: "<strong>Multi-Account Support (Advanced):</strong> Manage multiple TikTok accounts."
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
            navTikTokOverview: "Visão Geral TikTok Sender",
            navTikTokHowItWorks: "Como Funciona",
            navTikTokTechConfig: "Tecnologia e Config.",
            navTikTokImprovements: "Melhorias",
            navTikTokNextSteps: "Próximos Passos",

            // index.html
            pageTitleIndex: "Blessed Quiz - Início",
            indexHeader: "Bem-vindo ao Blessed Quiz!",
            indexIntro: "Explore seu conhecimento da Bíblia com nossos quizzes envolventes. Selecione uma página no menu para saber mais sobre nós ou iniciar sua jornada!",

            // our-mission.html
            pageTitleOurMission: "Nossa Missão - Blessed Quiz",
            ourMissionHeader: "Nossa Missão",
            missionWelcome: "Bem-vindo ao Blessed Quiz!",
            missionP1: "Nossa missão é fornecer uma experiência divertida e enriquecedora para todos que desejam aprofundar seus conhecimentos sobre a Bíblia. Acreditamos que aprender sobre a Palavra de Deus deve ser uma jornada inspiradora e acessível para todos, independentemente de onde estejam em sua caminhada de fé.",
            whatMovesUsHeading: "O que nos move:", // Corrected key
            educationHeading: "Educação:", // Corrected key
            educationText: "Oferecemos quizzes que educam e desafiam, ajudando você a crescer em seu entendimento das Escrituras.", // Corrected key
            communityHeading: "Comunidade:", // Corrected key
            communityText: "Criamos um espaço onde os crentes podem se conectar, compartilhar e aprender juntos.", // Corrected key
            inspirationHeading: "Inspiração:", // Corrected key
            inspirationText: "Nosso objetivo é inspirá-lo a explorar a Bíblia de maneiras novas e emocionantes, fortalecendo sua fé e conhecimento.", // Corrected key
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

            // TikTok Sender Pages Translations
            pageTitleTikTokOverview: "Visão Geral do Projeto TikTok Sender - Blessed Quiz",
            tiktokOverviewHeader: "Visão Geral do Projeto: BlessedQuizz_TIKTOK_sender_V6.py",
            tiktokOverviewP1: "Este projeto é uma aplicação web construída com Flask (um microframework Python) que tem como principal objetivo permitir o upload de vídeos para o TikTok. Ele automatiza o processo de autenticação e envio de arquivos de vídeo para a plataforma.",
            tiktokOverviewFeaturesHeader: "Principais Funcionalidades",
            tiktokOverviewFeaturesIntro: "O projeto implementa as seguintes funcionalidades principais:",
            tiktokOverviewFeatureAuth: "Autenticação OAuth 2.0 com PKCE para conectar com a conta TikTok do usuário.",
            tiktokOverviewFeatureUpload: "Upload de arquivos de vídeo para a caixa de entrada (rascunhos) do TikTok.",
            tiktokOverviewFeatureConfig: "Configuração via variáveis no código.",

            pageTitleTikTokHowItWorks: "Como Funciona - TikTok Sender - Blessed Quiz",
            tiktokHowItWorksHeader: "Como Funciona",
            tiktokHowItWorksAuthHeader: "Autenticação OAuth 2.0 com PKCE",
            tiktokHowItWorksAuthIntro: "O processo de autenticação segue o fluxo OAuth 2.0 com Proof Key for Code Exchange (PKCE) para segurança:",
            tiktokHowItWorksAuthStep1: "<strong>Início do Fluxo (/):</strong> Gera um <code>code_verifier</code> e <code>code_challenge</code>, redireciona o usuário para a página de autorização do TikTok com os parâmetros necessários (CLIENT_KEY, SCOPES, REDIRECT_URI, code_challenge).",
            tiktokHowItWorksAuthStep2: "<strong>Callback (/callback):</strong> Recebe o <code>code</code> do TikTok, recupera o <code>code_verifier</code> da sessão. Faz uma requisição POST para o endpoint de token do TikTok para trocar o <code>code</code> pelo <code>access_token</code> e <code>refresh_token</code>, usando o <code>code_verifier</code> para validação (PKCE). Armazena os tokens e <code>open_id</code> na sessão.",
            tiktokHowItWorksUploadHeader: "Upload de Vídeo (/upload)",
            tiktokHowItWorksUploadIntro: "Após a autenticação, o upload do vídeo ocorre da seguinte forma:",
            tiktokHowItWorksUploadStep1: "<strong>Pré-requisitos:</strong> Requer <code>access_token</code> e <code>open_id</code> na sessão. O caminho do arquivo de vídeo (<code>VIDEO_FILE_PATH</code>) é fixo no código.",
            tiktokHowItWorksUploadStep2: "<strong>Inicialização do Upload:</strong> Faz uma requisição POST para <code>/v2/post/publish/inbox/video/init/</code> com o <code>access_token</code> e <code>open_id</code>, fornecendo informações sobre o vídeo (tamanho, etc.). Recebe uma <code>upload_url</code> e <code>publish_id</code>.",
            tiktokHowItWorksUploadStep3: "<strong>Envio do Arquivo:</strong> Faz uma requisição PUT para a <code>upload_url</code> com os dados binários do arquivo de vídeo. O vídeo é enviado para a caixa de entrada/rascunhos do usuário no TikTok.",
            tiktokHowItWorksUploadStep4: "<strong>Resultado:</strong> O usuário precisa acessar o aplicativo TikTok para publicar o vídeo manualmente a partir dos rascunhos.",

            pageTitleTikTokTechConfig: "Tecnologia e Configuração - TikTok Sender - Blessed Quiz",
            tiktokTechConfigHeader: "Tecnologia e Configuração",
            tiktokTechConfigConfigHeader: "Configuração",
            tiktokTechConfigConfigIntro: "As configurações principais são definidas como variáveis globais no início do script:",
            tiktokTechConfigConfigKey: "<code>CLIENT_KEY</code>, <code>CLIENT_SECRET</code>: Credenciais da API do TikTok.",
            tiktokTechConfigConfigUrls: "<code>NGROK_OR_HOST_URL</code>, <code>REDIRECT_URI</code>: URLs para o redirecionamento OAuth.",
            tiktokTechConfigConfigScopes: "<code>SCOPES</code>: Permissões solicitadas (ex: <code>user.info.basic</code>, <code>video.upload</code>).",
            tiktokTechConfigConfigFile: "<code>VIDEO_FILE_PATH</code>: Caminho fixo para o arquivo de vídeo a ser enviado.",
            tiktokTechConfigConfigSession: "A sessão do Flask é configurada para usar o sistema de arquivos (<code>flask_session</code>).",
            tiktokTechConfigTechHeader: "Tecnologias Utilizadas",
            tiktokTechConfigTechIntro: "O projeto utiliza as seguintes tecnologias e bibliotecas Python:",
            tiktokTechConfigTechFlask: "<strong>Flask:</strong> Microframework web para a estrutura da aplicação.",
            tiktokTechConfigTechFlaskSession: "<strong>Flask-Session:</strong> Extensão para gerenciamento de sessão.",
            tiktokTechConfigTechRequests: "<strong>Requests:</strong> Para fazer requisições HTTP para a API do TikTok.",
            tiktokTechConfigTechCrypto: "<strong>hashlib, base64, secrets:</strong> Módulos padrão para operações criptográficas (PKCE).",
            tiktokTechConfigTechStdlib: "<strong>os, json:</strong> Módulos padrão para manipulação de arquivos e JSON.",

            pageTitleTikTokImprovements: "Pontos de Melhoria - TikTok Sender - Blessed Quiz",
            tiktokImprovementsHeader: "Pontos de Melhoria",
            tiktokImprovementsIntro: "A versão atual possui alguns pontos que podem ser aprimorados para aumentar a flexibilidade, segurança e usabilidade:",
            tiktokImprovementsFile: "<strong>Caminho do Vídeo Fixo:</strong> O <code>VIDEO_FILE_PATH</code> é 'hardcoded', impedindo a seleção dinâmica pelo usuário.",
            tiktokImprovementsUrl: "<strong>URL do Ngrok/Host:</strong> A URL base é fixa, o que é problemático com URLs dinâmicas como as do Ngrok gratuito.",
            tiktokImprovementsSecret: "<strong>Segurança das Credenciais:</strong> O <code>CLIENT_SECRET</code> está diretamente no código, o que não é seguro para produção.",
            tiktokImprovementsState: "<strong>Parâmetro state no OAuth:</strong> O parâmetro <code>state</code> é fixo, tornando a aplicação vulnerável a CSRF.",
            tiktokImprovementsRefresh: "<strong>Uso do refresh_token:</strong> O <code>refresh_token</code> é obtido, mas não há lógica para usá-lo para renovar o <code>access_token</code> expirado.",
            tiktokImprovementsUI: "<strong>Interface do Usuário (UI):</strong> A interface é muito básica (texto simples).",
            tiktokImprovementsMetadata: "<strong>Metadados do Vídeo:</strong> Título e descrição são fixos no código.",
            tiktokImprovementsErrors: "<strong>Tratamento de Erros:</strong> Mensagens de erro simples para o usuário final.",
            tiktokImprovementsLogging: "<strong>Logging:</strong> Uso de <code>print()</code> em vez do módulo <code>logging</code>.",
            tiktokImprovementsChunks: "<strong>Upload em Pedaços:</strong> O vídeo é enviado como um único pedaço, menos robusto para arquivos grandes.",
            tiktokImprovementsConfig: "<strong>Configuração Centralizada:</strong> Configurações espalhadas como variáveis globais.",
            tiktokImprovementsPublish: "<strong>Escopo de Publicação Direta:</strong> Atualmente só envia para rascunhos (<code>video.upload</code>), não publica diretamente (<code>video.publish</code>).",

            pageTitleTikTokNextSteps: "Próximos Passos e Funcionalidades Futuras - TikTok Sender - Blessed Quiz",
            tiktokNextStepsHeader: "Próximos Passos e Funcionalidades Futuras",
            tiktokNextStepsIntro: "Com base nos pontos de melhoria, as seguintes funcionalidades e aprimoramentos de interface são sugeridos:",
            tiktokNextStepsUIHeader: "Melhorias na Interface do Usuário (UI)",
            tiktokNextStepsUIHome: "<strong>Página Inicial (/):</strong> Boas-vindas e botão 'Login com TikTok'.",
            tiktokNextStepsUIUploadForm: "<strong>Formulário de Upload:</strong> Campo para selecionar arquivo, campos para título, descrição, hashtags e outras configurações.",
            tiktokNextStepsUIStatus: "<strong>Página de Feedback/Status:</strong> Mostrar sucesso/erro do upload e status da publicação (se aplicável).",
            tiktokNextStepsUILayout: "<strong>Layout Consistente:</strong> Usar templates Flask (Jinja2) para um visual coeso.",
            tiktokNextStepsFeaturesHeader: "Novas Funcionalidades",
            tiktokNextStepsFeaturesDynamicFile: "<strong>Seleção Dinâmica de Vídeo:</strong> Permitir que o usuário escolha o arquivo.",
            tiktokNextStepsFeaturesMetadataInput: "<strong>Entrada de Metadados pelo Usuário:</strong> Capturar título, descrição, etc., via formulário.",
            tiktokNextStepsFeaturesRefreshToken: "<strong>Implementação do refresh_token:</strong> Renovar o <code>access_token</code> automaticamente quando expirar.",
            tiktokNextStepsFeaturesDirectPublish: "<strong>Opção de Publicação Direta:</strong> Permitir escolher entre rascunhos (<code>video.upload</code>) e publicação direta (<code>video.publish</code>), incluindo verificação de status.",
            tiktokNextStepsFeaturesConfig: "<strong>Gerenciamento de Configurações Melhorado:</strong> Ler configurações de variáveis de ambiente ou arquivo <code>.env</code>.",
            tiktokNextStepsFeaturesHistory: "<strong>Histórico de Uploads (Avançado):</strong> Armazenar e exibir histórico em um banco de dados.",
            tiktokNextStepsFeaturesScheduling: "<strong>Post Agendado (Muito Avançado):</strong> Permitir agendar a publicação para data/hora futura.", // Corrected translation
            tiktokNextStepsFeaturesMultiAccount: "<strong>Suporte a Múltiplas Contas (Avançado):</strong> Gerenciar várias contas TikTok."
        }
    };

    const languageSelector = document.querySelector('.language-selector');
    let currentLang = localStorage.getItem('lang') || 'en'; // Default to English

    function updateTexts(lang) {
        document.querySelectorAll('[data-translate]').forEach(el => {
            const key = el.getAttribute('data-translate');
            if (translations[lang] && translations[lang][key]) {
                let text = translations[lang][key];

                // Special handling for contact paragraphs that append an email link
                if (key.endsWith("ContactP")) {
                    text += translations[lang]["contactEmailLink"]; // Append email link
                    el.innerHTML = text; // Use innerHTML as contactEmailLink is HTML
                }
                // For other keys, check if the translation string itself contains HTML
                // or if the key is known to be HTML (like contactEmailLink itself)
                else if (key === "contactEmailLink" || /<[a-z][\s\S]*>/i.test(text)) {
                    el.innerHTML = text;
                } else {
                    el.textContent = text;
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
