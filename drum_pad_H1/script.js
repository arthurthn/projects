// Keyboard

window.addEventListener('keydown', function(keys)
{
    const audio = document.querySelector(`audio[data-key="${keys.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${keys.keyCode}"]`)
    if(!audio) return
    else
    {
        audio.currentTime = 0 // restart sound at every click
        audio.play() 
        key.classList.add("playing") // transition
        audio.volume = 0.3

            // MICDROP sound way louder than the others (so adjustment)
            var mic = document.getElementById('micDrop')
            mic.volume = 0.2
    }
// transition over

    setTimeout(function() {
        key.classList.remove("playing");
    }, 70);

})


// Click


function playSample(sampleName)
{
    var audio = document.getElementById(sampleName)
    const key = document.querySelector(`.${sampleName}`)
    audio.currentTime = 0 // restart sound at every click
    audio.play() 
    key.classList.add("playing") // transition
    audio.volume = 0.3

    // MICDROP sound way louder than the others (so adjustment)

    var mic = document.getElementById('micDrop')
    mic.volume = 0.2

    

    // transition over
    setTimeout(function() {
        key.classList.remove("playing");
    }, 70);
}


