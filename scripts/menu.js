function removeAttr(a, b) {
    itemRemove = document.getElementsByClassName('filter-left-item');

    itemRemove[a].removeAttribute('open');
    itemRemove[b].removeAttribute('open');
}