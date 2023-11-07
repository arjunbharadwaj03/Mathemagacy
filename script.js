names = ["Arjun Aditya", "Rishi Guruprasad", "Ruthek Shavi", "Arjun Bharadwaj"].sort(() => Math.random() - 0.5)

const typed = new Typed(".auto-type", {
    strings: names,
    typeSpeed: 120,
    backSpeed: 120,
    backDelay: 500,
    startDelay: 2000,
    loop: true
});