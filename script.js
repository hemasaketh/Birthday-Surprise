let currentSection = 1;

const totalSections = 6;

function setActiveSection(sectionNumber) {

    const sections =
        document.querySelectorAll(
            ".story-section"
        );

    sections.forEach((section) => {
        section.classList.remove("active");
    });

    const nextSection =
        document.getElementById(
            `section-${sectionNumber}`
        );

    if (nextSection) {
        nextSection.classList.add("active");
    }

    currentSection = sectionNumber;
}

/* =====================================================
   NEXT SECTION
===================================================== */

function nextSection() {

    if (currentSection >= totalSections) {
        currentSection = totalSections;
        return;
    }

    const current =
        document.getElementById(
            `section-${currentSection}`
        );

    if (current) {
        current.classList.remove("active");
    }

    setActiveSection(
        currentSection + 1
    );

}

setActiveSection(1);


/* =====================================================
   REVEAL NOTICE CARD
===================================================== */

let revealedCards = 0;

function revealCard(card) {

    console.log("Card clicked:", card);

    if (card.classList.contains("revealed")) {
        return;
    }

    card.classList.add("revealed");

    revealedCards++;

    console.log(
        "Revealed cards:",
        revealedCards
    );


    if (revealedCards >= 4) {

        const button =
            document.getElementById(
                "noticeContinue"
            );

        if (button) {

            setTimeout(() => {

                button.classList.add("show");

            }, 400);

        }

    }
}

/* =====================================================
   BACKGROUND PARTICLES
===================================================== */

function createParticles() {

    const container =
        document.getElementById(
            "particles"
        );


    for (let i = 0; i < 30; i++) {

        const particle =
            document.createElement("span");


        particle.classList.add(
            "particle"
        );


        particle.style.left =
            Math.random() * 100 + "%";


        particle.style.top =
            Math.random() * 100 + "%";


        particle.style.animationDuration =
            8 + Math.random() * 10 + "s";


        particle.style.animationDelay =
            Math.random() * 8 + "s";


        container.appendChild(
            particle
        );

    }

}


createParticles();


/* =====================================================
   TEMPORARY ENDING
===================================================== */
/* =====================================================
   STAR MESSAGES
===================================================== */

const loveMessages = {

    1:
        "You’re honestly too easy to like… that’s your biggest problem. 😂",

    2:
        "And yes, I’m going to keep annoying you, so don’t even think you’re getting rid of me that easily. 😌",

    3:
        "Life is definitely more fun with a little rabbit like you around. 😁",

    4:
        "ante website koncham posh ga undhi, so koncham english add chesaa.....",

    5:
        "Please stay exactly like this. I’ve already gotten used to your cute nonsense"

};


let openedStars = 0;


/* =====================================================
   OPEN LOVE STAR
===================================================== */

function openLoveStar(
    star,
    number
) {

    /*
        Prevent opening the
        same star twice.
    */

    if (
        star.classList.contains(
            "opened"
        )
    ) {

        return;

    }


    star.classList.add(
        "opened"
    );


    openedStars++;


    /* =========================
       MESSAGE
    ========================= */

    const messageText =
        document.getElementById(
            "starMessageText"
        );


    const messageLabel =
        document.querySelector(
            ".star-message-number"
        );


    messageText.classList.add(
        "changing"
    );


    setTimeout(() => {

        messageLabel.textContent =
            `THOUGHT ${number}`;


        messageText.textContent =
            loveMessages[number];


        messageText.classList.remove(
            "changing"
        );

    }, 300);


    /* =========================
       PROGRESS DOT
    ========================= */

    const dot =
        document.getElementById(
            `starDot${number}`
        );


    dot.classList.add(
        "found"
    );


    /* =========================
       COUNTER
    ========================= */

    const counter =
        document.getElementById(
            "starCounter"
        );


    counter.textContent =
        `${openedStars} / 5 FOUND`;


    /* =========================
       ALL FOUND
    ========================= */

    if (
        openedStars === 5
    ) {

        completeStarSection();

    }

}


/* =====================================================
   COMPLETE STAR SECTION
===================================================== */

function completeStarSection() {

    setTimeout(() => {

        const button =
            document.getElementById(
                "finalRevealButton"
            );

        if (button) {
            button.classList.add(
                "show"
            );
        }

    }, 700);

}


/* =====================================================
   FINAL REVEAL
===================================================== */

/* =====================================================
   OPEN FINAL SECTION
===================================================== */

function showFinalReveal() {

    const current =
        document.getElementById(
            "section-5"
        );


    const finalSection =
        document.getElementById(
            "section-6"
        );


    /*
        Fade Section 5 away
    */

    current.classList.remove(
        "active"
    );

    document
        .querySelectorAll(
            ".final-step"
        )
        .forEach((step) => {
            step.classList.remove(
                "active-final-step"
            );
        });

    const firstFinalStep =
        document.getElementById(
            "finalStep1"
        );

    if (firstFinalStep) {
        firstFinalStep.classList.add(
            "active-final-step"
        );
    }

    /*
        Slight pause before
        the final screen appears
    */

    setActiveSection(6);

}

/* =====================================================
   FINAL STORY STEPS
===================================================== */

function nextFinalStep(
    currentStep
) {

    const current =
        document.getElementById(
            `finalStep${currentStep}`
        );


    const next =
        document.getElementById(
            `finalStep${currentStep + 1}`
        );


    if (!next) {
        return;
    }


    /*
        Fade current message
    */

    current.classList.remove(
        "active-final-step"
    );


    /*
        Reveal next message
    */

    setTimeout(() => {

        next.classList.add(
            "active-final-step"
        );

    }, 600);

}