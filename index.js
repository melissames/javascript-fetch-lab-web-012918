function getIssues() {
  fetch('https://api.github.com/repos/melissames/javascript-fetch-lab/issues', {
    method: 'get',
    headers: {
      Authorization: 'token ${getToken}'
    }
  }).then(res => console.log(res))
}

function showIssues(json) {
}

function createIssue() {
  const title = document.getElementById('title').value;
  const text = document.getElementById('body').value;
  const data = {title: title, text: text}

  fetch('https://api.github.com/repos/melissames/javascript-fetch-lab/issues', {
    method: 'post',
    headers: {
      Authorization: `token ${getToken}`
    },
    body: JSON.stringify(data)
  }).then(resp => getIssues())
}

function showResults(json) {
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab';

  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then(json => console.log(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}
