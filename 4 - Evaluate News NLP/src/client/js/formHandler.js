import { validateURL } from './URLcheck'

function handleSubmit(event) {
    event.preventDefault();

    // check what text was put into the form field
    let url = document.getElementById('url').value
    if (!validateURL(url)) {
        alert('URL is not valid');
        return;
    }

    console.log("::: Form has been Submitted :::")

    fetch('/submit-url', {
      method: 'POST',
      credentials: "same-origin",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ url })
    })
    .then(res => res.json())
    .then(function(res) {
        /*Find more about sample JSON response parameters at
        https://docs.aylien.com/textapi/endpoints/#sentiment-analysis*/
        document.getElementById('text').innerHTML = res.text;
        document.getElementById('pol').innerHTML = res.polarity;
        document.getElementById('pol_conf').innerHTML = res.polarity_confidence;
        document.getElementById('sub').innerHTML = res.subjectivity;
        document.getElementById('sub_conf').innerHTML = res.subjectivity_confidence;
    })
}

export { handleSubmit }
