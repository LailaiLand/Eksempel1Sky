
function showThief() {
    blankAll();
    document.getElementById('boksThief') .innerHTML = /*html*/ `
    <div class="tekst">
    Skills:
    <div class="list">
            <ul>
                <li>
                    <a href="https://elderscrolls.fandom.com/wiki/Light_Armor_(Skyrim)" target="_new">Light
                        Armor</a>
                </li>
                <li>
                    <a href="https://elderscrolls.fandom.com/wiki/Sneak_(Skyrim)" target="_new">Sneak</a>
                </li>
                <li>
                    <a href="https://elderscrolls.fandom.com/wiki/Lockpicking_(Skyrim)"
                        target="_new">Lockpicking</a>
                </li>
                <li>
                    <a href="https://elderscrolls.fandom.com/wiki/Pickpocket" target="_new">Pickpocket</a>
                </li>
                <li>
                    <a href="https://elderscrolls.fandom.com/wiki/Speech" target="_new">Speech</a>
                </li>
                <li>
                    <a href="https://elderscrolls.fandom.com/wiki/Alchemy_(Skyrim)">Alchemy</a>
                </li>
            </ul>
        </div>
    </div>
    `;
}

function showMage() {
    blankAll();
    document.getElementById('boksMage') .innerHTML = /*html*/ `
    <div class="tekst">
                    Skills:
                    <div class="list">
                        <ul>
                            <li>
                                <a href="https://elderscrolls.fandom.com/wiki/Illusion_(Skyrim)"
                                    target="_new">Illusion</a>
                            </li>
                            <li>
                                <a href="https://elderscrolls.fandom.com/wiki/Conjuration_(Skyrim)"
                                    target="_new">Conjuration</a>
                            </li>
                            <li>
                                <a href="https://elderscrolls.fandom.com/wiki/Destruction_(Skyrim)"
                                    target="_new">Destruction</a>
                            </li>
                            <li>
                                <a href="https://elderscrolls.fandom.com/wiki/Restoration_(Skyrim)"
                                    target="_new">Restoration</a>
                            </li>
                            <li>
                                <a href="https://elderscrolls.fandom.com/wiki/Alteration_(Skyrim)"
                                    target="_new">Alteration</a>
                            </li>
                            <li>
                                <a href="https://elderscrolls.fandom.com/wiki/Enchanting_(Skyrim)"
                                    target="_new">Enchanting</a>
                            </li>
                        </ul>
                    </div>
                </div>
    `;
}

function showWarrior () {
    blankAll();
    document.getElementById('boksWarrior') .innerHTML = /*html*/ `
    <div class="tekst">
                    Skills:
                    <div class="list">
                        <ul>
                            <li>
                                <a href="https://elderscrolls.fandom.com/wiki/Smithing_(Skyrim)"
                                    target="_new">Smithing</a>
                            </li>
                            <li>
                                <a href="https://elderscrolls.fandom.com/wiki/Heavy_Armor_(Skyrim)" target="_new">Heavy
                                    Armor</a>
                            </li>
                            <li>
                                <a href="https://elderscrolls.fandom.com/wiki/Block_(Skyrim)" target="_new">Block</a>
                            </li>
                            <li>
                                <a href="https://elderscrolls.fandom.com/wiki/Two-Handed_(Skyrim)"
                                    target="_new">Two-Handed</a>
                            </li>
                            <li>
                                <a href="https://elderscrolls.fandom.com/wiki/One-Handed_(Skyrim)"
                                    target="_new">One-Handed</a>
                            </li>
                            <li>
                                <a href="https://elderscrolls.fandom.com/wiki/Archery_(Skyrim)"
                                    target="_new">Archery</a>
                            </li>
                        </ul>
                    </div>
                </div>
    `;
}

function showPUNCHCAT() {
    blankAll();
    document.getElementById('boksPUNCHCAT') .innerHTML = /*html*/ `
    <div class="tekst">
                    Skills:
                    <div class="list">
                        <a
                            href="https://www.reddit.com/r/skyrim/comments/mmu6f/the_tale_of_punchcat_the_punching_khajiit/">PUNCHING!</a>
                    </div>
                </div>
    `;
}

function showSpill() {
    blankAll();
    document.getElementById('boksSpill') .innerHTML = /*html*/ `
        <div id="top" class="signs"></div>
        <div id="mid" class="signs"></div>
        <div id="bun" class="signs"></div>
    `;
    selectTop1();
    selectMid1();
    selectBun1();
    
}

function selectTop1() {
    document.getElementById('top') .innerHTML = /*html*/ `
        <button onclick="selectTop4()">↢</button>
            <img src="img/thief1.png" />
        <button onclick="selectTop2()">↣</button>
        `;
}
function selectTop2() {
    document.getElementById('top') .innerHTML = /*html*/ `
        <button onclick="selectTop1()">↢</button>
            <img src="img/mage1.png" />
        <button onclick="selectTop3()">↣</button>
        `;
}
function selectTop3() {
    document.getElementById('top') .innerHTML = /*html*/ `
        <button onclick="selectTop2()">↢</button>
            <img src="img/warrior1.png" />
        <button onclick="selectTop4()">↣</button>
        `;
}
function selectTop4() {
    document.getElementById('top') .innerHTML = /*html*/ `
        <button onclick="selectTop3()">↢</button>
            <img src="img/punch1.png" />
        <button onclick="selectTop1()">↣</button>
        `;
}


function selectMid1() {
    document.getElementById('mid') .innerHTML = /*html*/ `
        <button onclick="selectMid4()">↢</button>
            <img src="img/thief2.png" />
        <button onclick="selectMid2()">↣</button>
        `;
}
function selectMid2() {
    document.getElementById('mid') .innerHTML = /*html*/ `
        <button onclick="selectMid1()">↢</button>
            <img src="img/mage2.png" />
        <button onclick="selectMid3()">↣</button>
        `;
}
function selectMid3() {
    document.getElementById('mid') .innerHTML = /*html*/ `
        <button onclick="selectMid2()">↢</button>
            <img src="img/warrior2.png" />
        <button onclick="selectMid4()">↣</button>
        `;
}
function selectMid4() {
    document.getElementById('mid') .innerHTML = /*html*/ `
        <button onclick="selectMid3()">↢</button>
            <img src="img/punch2.png" />
        <button onclick="selectMid1()">↣</button>
        `;
}

function selectBun1() {
    document.getElementById('bun') .innerHTML = /*html*/ `
        <button onclick="selectBun4()">↢</button>
            <img src="img/thief3.png" />
        <button onclick="selectBun2()">↣</button>
        `;
}
function selectBun2() {
    document.getElementById('bun') .innerHTML = /*html*/ `
        <button onclick="selectBun1()">↢</button>
            <img src="img/mage3.png" />
        <button onclick="selectBun3()">↣</button>
        `;
}
function selectBun3() {
    document.getElementById('bun') .innerHTML = /*html*/ `
        <button onclick="selectBun2()">↢</button>
            <img src="img/warrior3.png" />
        <button onclick="selectBun4()">↣</button>
        `;
}
function selectBun4() {
    document.getElementById('bun') .innerHTML = /*html*/ `
        <button onclick="selectBun3()">↢</button>
            <img src="img/punch3.png" />
        <button onclick="selectBun1()">↣</button>
        `;
}

function blankAll() {
    document.getElementById('boksThief') .innerHTML = '';
    document.getElementById('boksMage') .innerHTML = '';
    document.getElementById('boksWarrior') .innerHTML = '';
    document.getElementById('boksPUNCHCAT') .innerHTML = '';
    document.getElementById('boksSpill') .innerHTML = '';
}