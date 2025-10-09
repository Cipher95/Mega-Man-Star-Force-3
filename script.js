document.addEventListener('DOMContentLoaded', () => {

    // --- DATA STORE (ENGLISH) ---
    const pageDataEN = {
        story: {
            title: "The Story of the Stars",
            image: "https://static.wikia.nocookie.net/capcomdatabase/images/3/3e/StarForce3Art.png",
            content: `
                <p>Mega Man Star Force 3 takes place a few months after the previous game. A massive meteor, labeled "Meteor G," is on a collision course with Earth. Inside this meteor is a gigantic source of "Noise" and a powerful, corrupt EM-being named Crimson.</p>
                <p>The Satella Police and their advanced branch, the WAZA, are working to stop the meteor. Geo Stelar and his partner Omega-Xis (as Mega Man) find themselves at the center of the conflict, battling Noise-changed viruses and rogue Wizards. Geo must master the power of Noise to confront Crimson and save the planet from annihilation.</p>
            `
        },
        characters: {
            title: "Key Characters",
            image: "https://wallpapercave.com/wp/H4GpEiP.jpg",
            content: `
                <ul>
                    <li><b>Geo Stelar & Omega-Xis:</b> The main protagonist. A kind-hearted boy who can EM-Wave Change with the AM-ian Omega-Xis to become the hero Mega Man.</li>
                    <li><b>Sonia Strumm & Lyra:</b> A famous pop idol and Geo's close friend. She can transform into Harp Note.</li>
                    <li><b>Luna Platz & Vogue:</b> The class president who often pushes Geo to be more social. She can later transform into Queen Ophiuca.</li>
                    <li><b>Bud Bison & Taurus:</b> A strong but gentle giant, one of Geo's loyal friends. Transforms into Taurus Fire.</li>
                    <li><b>Solo:</b> The last survivor of the lost continent of Mu. A powerful and stoic rival to Mega Man who can transform into Rogue.</li>
                    <li><b>Zack Temple & Pedia:</b> A know-it-all classmate of Geo's who is obsessed with being the first to know everything.</li>
                    <li><b>Arthur C. Eos & Acid:</b> An elite member of the WAZA who can EM-Wave Change into Acid Ace. He is initially distrustful of Geo.</li>
                </ul>
            `
        },
        gameplay: {
            title: "Gameplay & Noise Change",
            image: "https://static.wikitide.net/megamanwiki/b/b6/Cygnus_Noise_Meteor_Light_Barrage.png",
            content: `
                <p>The game retains the fast-paced, 3x5 grid battle system from its predecessors. The most significant new feature is the "Noise Change" system. As Mega Man fights, his Noise percentage increases.</p>
                <p>At 50% Noise, he can randomly undergo a Noise Change, fusing with the data of a defeated FM-ian boss. This grants him new elemental abilities, a unique charged shot, and access to powerful "Noise Force Big Bang" attacks. There are over 10 different Noise Forms to discover, adding immense strategic depth and replayability.</p>
            `
        },
        versions: {
            title: "Black Ace & Red Joker",
            image: "https://upload.wikimedia.org/wikipedia/fr/6/67/Mega_Man_Star_Force_3_Logo.png",
            content: `
                <p>Like many Mega Man games, Star Force 3 was released in two versions: <b>Black Ace</b> and <b>Red Joker</b>.</p>
                <ul>
                    <li>Each version offers exclusive Giga-class Battle Cards.</li>
                    <li>The final transformation Mega Man can achieve is different in each game. In Black Ace, he can become the swift and precise Black Ace form. In Red Joker, he can access the destructive and powerful Red Joker form.</li>
                    <li>Certain Noise Change forms are also exclusive to each version, encouraging players to trade and battle with friends to complete their library.</li>
                </ul>
            `
        }
    };

    // --- DATA STORE (JAPANESE) ---
    const pageDataJP = {
        story: {
            title: "星々の物語",
            image: "https://static.wikia.nocookie.net/capcomdatabase/images/3/3e/StarForce3Art.png",
            content: `
                <p>『流星のロックマン3』は、前作から数ヶ月後の物語。巨大な隕石「メテオG」が地球との衝突コースにある。この隕石の内部には、巨大な「ノイズ」の源と、強力で邪悪な電波体「クリムゾン」が存在する。</p>
                <p>サテラポリスとその先進部隊であるWAZAは、隕石を止めるために活動している。星河スバルと彼のパートナー、ウォーロック（ロックマンとして）は、ノイズに変化したウイルスや不正なウィザードとの戦いの中心に身を置くことになる。スバルはノイズの力をマスターし、クリムゾンに立ち向かい、地球を壊滅から救わなければならない。</p>
            `
        },
        characters: {
            title: "主なキャラクター",
            image: "https://wallpapercave.com/wp/H4GpEiP.jpg",
            content: `
                <ul>
                    <li><b>星河スバル & ウォーロック:</b> 主人公。心優しい少年で、AM星人ウォーロックと電波変換してヒーロー「ロックマン」になる。</li>
                    <li><b>響ミソラ & ハープ:</b> 有名なポップアイドルで、スバルの親友。ハープ・ノートに変身できる。</li>
                    <li><b>白金ルナ & オヒュクス:</b> クラス委員長で、スバルをもっと社交的にしようとよく働きかける。後にクイーン・オヒューカに変身できる。</li>
                    <li><b>牛島ゴン太 & タウルス:</b> 力持ちで心優しい大男、スバルの忠実な友人の一人。タウルス・ファイアに変身する。</li>
                    <li><b>ソロ:</b> 失われたムー大陸の最後の生き残り。ロックマンの強力で孤高のライバルで、ブライに変身できる。</li>
                    <li><b>宇田海深佑 & ペディア:</b> スバルのクラスメートで、何でも一番に知りたがる物知り。</li>
                    <li><b>アーサー・C・エオス & アシッド:</b> WAZAのエリートメンバーで、アシッド・エースに電波変換できる。当初はスバルを信用していない。</li>
                </ul>
            `
        },
        gameplay: {
            title: "ゲームプレイとノイズチェンジ",
            image: "https://static.wikitide.net/megamanwiki/b/b6/Cygnus_Noise_Meteor_Light_Barrage.png",
            content: `
                <p>本作は、前作から引き継がれたスピーディーな3x5グリッドのバトルシステムを維持しています。最も重要な新機能は「ノイズチェンジ」システムです。ロックマンが戦うにつれて、彼のノイズ率が増加します。</p>
                <p>ノイズ率が50%になると、彼はランダムにノイズチェンジを行い、倒したFM星人のボスのデータと融合します。これにより、新たな属性能力、ユニークなチャージショット、そして強力な「ノイズフォースビッグバン」攻撃が使用可能になります。10種類以上の異なるノイズフォルムを発見でき、戦略的な深みとリプレイ性を大幅に高めています。</p>
            `
        },
        versions: {
            title: "ブラックエースとレッドジョーカー",
            image: "https://upload.wikimedia.org/wikipedia/fr/6/67/Mega_Man_Star_Force_3_Logo.png",
            content: `
                <p>多くのロックマンゲームと同様に、『流星のロックマン3』は<b>ブラックエース</b>と<b>レッドジョーカー</b>の2つのバージョンでリリースされました。</p>
                <ul>
                    <li>各バージョンには、専用のギガクラスバトルカードが用意されています。</li>
                    <li>ロックマンが達成できる最終変身形態は、各ゲームで異なります。『ブラックエース』では、迅速かつ精密なブラックエース形態になることができます。『レッドジョーカー』では、破壊的で強力なレッドジョーカー形態にアクセスできます。</li>
                    <li>特定のノイズチェンジ形態も各バージョン専用であり、プレイヤーがライブラリを完成させるために友達とトレードやバトルをすることを奨励しています。</li>
                </ul>
            `
        }
    };
    
    // --- UI TEXT ---
    const uiText = {
        en: {
            mainTitle: "Mega Man Star Force 3",
            navStory: "Story",
            navCharacters: "Characters",
            navGameplay: "Gameplay",
            navVersions: "Versions",
            footerText: "Website created for demonstration purposes. Mega Man Star Force is a property of Capcom."
        },
        jp: {
            mainTitle: "流星のロックマン3",
            navStory: "ストーリー",
            navCharacters: "キャラクター",
            navGameplay: "ゲームプレイ",
            navVersions: "バージョン",
            footerText: "このウェブサイトはデモンストレーション目的で作成されました。『流星のロックマン』は株式会社カプコンの登録商標です。"
        }
    }

    // --- GLOBAL STATE ---
    let currentLang = 'en';
    let pageData = pageDataEN;

    // --- ELEMENT SELECTORS ---
    const contentArea = document.getElementById('content-area');
    const navLinks = document.querySelectorAll('.nav-link');
    const clockElement = document.getElementById('clock');
    const dateDayElement = document.getElementById('date-day');
    const langSelector = document.getElementById('lang-selector');
    const mainContainer = document.getElementById('main-container');
    const langButtons = document.querySelectorAll('.lang-btn');

    // --- FUNCTIONS ---

    /**
     * Updates all static UI text to the selected language.
     */
    function updateUIText() {
        const texts = uiText[currentLang];
        document.getElementById('main-title').textContent = texts.mainTitle;
        document.getElementById('nav-story').textContent = texts.navStory;
        document.getElementById('nav-characters').textContent = texts.navCharacters;
        document.getElementById('nav-gameplay').textContent = texts.navGameplay;
        document.getElementById('nav-versions').textContent = texts.navVersions;
        document.getElementById('footer-text').textContent = texts.footerText;
    }

    /**
     * Switches the content displayed in the main area.
     * @param {string} pageKey - The key corresponding to the data in pageData.
     */
    function switchContent(pageKey) {
        const data = pageData[pageKey];
        if (!data) return;

        contentArea.classList.add('fade-out');

        setTimeout(() => {
            const html = `
                <div class="content-wrapper">
                    <div class="content-image">
                        <img src="${data.image}" alt="${data.title}">
                    </div>
                    <div class="content-text">
                        <h2>${data.title}</h2>
                        ${data.content}
                    </div>
                </div>
            `;
            contentArea.innerHTML = html;
            contentArea.classList.remove('fade-out');
        }, 300);
    }

    /**
     * Updates the clock and date display with localization.
     */
    function updateClock() {
        const now = new Date();
        const locale = currentLang === 'jp' ? 'ja-JP' : 'en-US';

        const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: locale === 'en-US' };
        const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        
        const timeString = now.toLocaleTimeString(locale, timeOptions);
        const dateDayString = now.toLocaleDateString(locale, dateOptions);

        clockElement.textContent = timeString;
        dateDayElement.textContent = dateDayString;
    }
    
    /**
     * Initializes the main application after language selection.
     */
    function initialize() {
        // Hide language selector and show main content
        langSelector.style.display = 'none';
        mainContainer.style.display = 'block';

        // Set the correct data object
        pageData = currentLang === 'jp' ? pageDataJP : pageDataEN;

        // Update all UI text elements
        updateUIText();

        // Load the default page content ('story')
        switchContent('story');

        // Update the clock immediately and then every second
        updateClock();
        setInterval(updateClock, 1000);

        // Attempt to play audio on load
        playAudio();
    }

    // --- EVENT LISTENERS & INITIALIZATION ---

    // Set up language selection button clicks
    langButtons.forEach(button => {
        button.addEventListener('click', () => {
            currentLang = button.getAttribute('data-lang');
            // If Japanese is selected, switch the title on the language selection screen itself
            if (currentLang === 'jp') {
                document.getElementById('lang-choose-title').textContent = '言語を選択してください';
            }
            initialize();
        });
    });

    // Set up navigation link clicks
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            const page = link.getAttribute('data-page');
            switchContent(page);
        });
    });

    // --- BACKGROUND MUSIC HANDLER ---
    const backgroundMusic = document.getElementById('bg-music');
    
    function playAudio() {
        if (backgroundMusic && backgroundMusic.paused) {
            backgroundMusic.play().catch(error => {
                console.log("Autoplay was blocked by the browser. A user interaction is required to play audio.");
                document.body.addEventListener('click', playAudio, { once: true });
            });
        }
    }
});