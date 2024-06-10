document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e){
        e.preventDefault();
        const target_id = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(target_id);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});

gsap.from("#work1",{
    y:30,
    duration:0.5,
    delay:0.2,
    stagger:0.5,
    opacity:0,
    scrollTrigger: {
        trigger: "#work1",
        scroller: "body",
        start: "top 50%",
        end: "top 40%",
        scrub:4
    }
})

gsap.from("#aboutme_sec",{
    x:300,
    duration:0.3,
    delay:0.2,
    stagger:0.5,
    opacity:0,
    scrollTrigger: {
        trigger: "#aboutme_sec",
        scroller: "body",
        start: "top 50%",
        end: "top 30%",
        scrub:3
    }
})

gsap.from("#skill_sec",{
    x:-300,
    duration:0.5,
    delay:0.2,
    stagger:0.5,
    opacity:0,
    scrollTrigger: {
        trigger: "#skill_sec",
        scroller: "body",
        start: "top 80%",
        end: "top 20%",
        scrub:3
    }
})
