const userUrl = fetch('https://jsonplaceholder.typicode.com/users');
const dataContainer = document.querySelector('#data-container');

function usersNameHTML (users) {
  const liHtml = document.createElement('li');
  const aHtml = document.createElement('a');
    aHtml.href = '#';
    aHtml.textContent = users;
    liHtml.append(aHtml);
    return liHtml
}

function tooggleLoader(){
  const loaderHtml = document.querySelector('#loader');
  const isHidden = loaderHtml.hasAttribute('hidden')
  if(isHidden){
    loaderHtml.removeAttribute('hidden');
  }else{
    loaderHtml.setAttribute('hidden','');
  }
}


userUrl
    .then((response) => {
      tooggleLoader();
      if(!response.ok){
        throw new Error ('Ошибка')
      }
      return response.json();
    })
    .then((data) => {
      data.forEach(name => {
        const nameHtml = usersNameHTML(name.name);
        dataContainer.append(nameHtml);
      });
    })
    .catch((error) => {
      console.error(error)
    })
    .finally(() => {
      tooggleLoader()
    })
   