
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
    `
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
    `
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
    `
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
    `
}

function showSpill() {
    blankAll();
    document.getElementById('boksSpill') .innerHTML = /*html*/ `
    <div class="tekst">
                    Fun things to come
                </div>
    `
}

function blankAll() {
    document.getElementById('boksThief') .innerHTML = '';
    document.getElementById('boksMage') .innerHTML = '';
    document.getElementById('boksWarrior') .innerHTML = '';
    document.getElementById('boksPUNCHCAT') .innerHTML = '';
    document.getElementById('boksSpill') .innerHTML = '';
}