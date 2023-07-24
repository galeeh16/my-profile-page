export const useScrollMeTo = (refName) => {
    const element = document.getElementById(refName);
    window.scrollTo(0, (element.offsetTop - 80));

    if (window.innerWidth < 1024) {
        let b = document.getElementById('hamburger')
        b.click()
    }
}