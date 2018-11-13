const tellerHomePage = () => {
    const li = mainBranchInputMenu();
    const listItem = branchInputMenu(li);
    const ul = listItem.getElementsByTagName('ul')[0];
    listItem.getElementsByTagName('li')[2].getElementsByTagName('a')[0].click();
}

const mainBranchInputMenu = () => {
    const ul = document.getElementsByClassName('menuMargin')[0];
    const li = ul.getElementsByClassName('clsHasKids')[0];
    li.getElementsByTagName('span')[0].click();
    return li;
}

const branchInputMenu = (li) => {
    const ul = li.getElementsByTagName('ul')[0];
    const listItem = ul.getElementsByClassName('clsHasKids')[1];
    listItem.getElementsByTagName('span')[0].click();
    return listItem;
}