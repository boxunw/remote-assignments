const welcomem = document.getElementById('headline');
const sub = document.getElementById('subscribe');


welcomem.addEventListener('click', () => {
    welcomem.textContent = "Have a Good Time";
});

sub.addEventListener('click', () => {
    const hideblock = document.getElementById('hideblock');
    hideblock.style.display = 'flex';
    hideblock.scrollIntoView({behavior:"smooth", block:"end"});
});