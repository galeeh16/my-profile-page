export const useScrollMeTo = (refName) => {
    const element = document.getElementById(refName);
    window.scrollTo(0, (element.offsetTop - 90));
}