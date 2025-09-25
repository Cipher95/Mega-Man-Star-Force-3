document.addEventListener('DOMContentLoaded', () => {

        // --- DATA STORE ---
        // All content for the website is stored here.
        const pageData = {
            story: {
                title: "The Story of the Stars",
                image: "https://static.wikia.nocookie.net/capcomdatabase/images/3/3e/StarForce3Art.png", // Image URL for Story
                content: `
                    <p>Mega Man Star Force 3 takes place a few months after the previous game. A massive meteor, labeled "Meteor G," is on a collision course with Earth. Inside this meteor is a gigantic source of "Noise" and a powerful, corrupt EM-being named Crimson.</p>
                    <p>The Satella Police and their advanced branch, the WAZA, are working to stop the meteor. Geo Stelar and his partner Omega-Xis (as Mega Man) find themselves at the center of the conflict, battling Noise-changed viruses and rogue Wizards. Geo must master the power of Noise to confront Crimson and save the planet from annihilation.</p>
                `
            },
            characters: {
                title: "Key Characters",
                image: "https://wallpapercave.com/wp/H4GpEiP.jpg", // Image URL for Characters
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
                image: "https://static.wikitide.net/megamanwiki/b/b6/Cygnus_Noise_Meteor_Light_Barrage.png", // Image URL for Gameplay
                content: `
                    <p>The game retains the fast-paced, 3x5 grid battle system from its predecessors. The most significant new feature is the "Noise Change" system. As Mega Man fights, his Noise percentage increases.</p>
                    <p>At 50% Noise, he can randomly undergo a Noise Change, fusing with the data of a defeated FM-ian boss. This grants him new elemental abilities, a unique charged shot, and access to powerful "Noise Force Big Bang" attacks. There are over 10 different Noise Forms to discover, adding immense strategic depth and replayability.</p>
                `
            },
            versions: {
                title: "Black Ace & Red Joker",
                image: "https://upload.wikimedia.org/wikipedia/fr/6/67/Mega_Man_Star_Force_3_Logo.png", // Image URL for Versions
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

        // --- ELEMENT SELECTORS ---
        const contentArea = document.getElementById('content-area');
        const navLinks = document.querySelectorAll('.nav-link');
        const clockElement = document.getElementById('clock');
        const dateDayElement = document.getElementById('date-day');

        // --- FUNCTIONS ---

        /**
         * Switches the content displayed in the main area.
         * @param {string} pageKey - The key corresponding to the data in pageData.
         */
        function switchContent(pageKey) {
            const data = pageData[pageKey];
            if (!data) return;

            // Add a class to fade out the content
            contentArea.classList.add('fade-out');

            // Wait for the fade-out transition to finish before changing the content
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
                // Remove the class to fade the new content in
                contentArea.classList.remove('fade-out');
            }, 300); // This duration should match the CSS transition duration
        }

        /**
         * Updates the clock and date display.
         */
        function updateClock() {
            const now = new Date();
            const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true };
            const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            
            const timeString = now.toLocaleTimeString('en-US', timeOptions);
            const dateDayString = now.toLocaleDateString('en-US', dateOptions);

            clockElement.textContent = timeString;
            dateDayElement.textContent = dateDayString;
        }

        // --- EVENT LISTENERS & INITIALIZATION ---

        // Set up navigation link clicks
        navLinks.forEach(link => {
            link.addEventListener('click', (event) => {
                event.preventDefault(); // Prevent default link behavior

                // Update active class
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
                
                // Switch content
                const page = link.getAttribute('data-page');
                switchContent(page);
            });
        });

        // --- INITIAL PAGE LOAD ---
        
        // Load the default page content ('story')
        switchContent('story');

        // Update the clock immediately and then every second
        updateClock();
        setInterval(updateClock, 1000);

    });