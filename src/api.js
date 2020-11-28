

const formData = new FormData();
const fileField = document.querySelector('input[type="file"]');

formData.append('username', 'abc123');
formData.append('avatar', fileField.files[0]);

function inImage(){

    fetch ('https://southcentralus.api.cognitive.microsoft.com/customvision/v3.0/Prediction/0cfacc40-5db4-468e-aa75-ce5c9e5b078c/detect/iterations/Hackathon%20modelo%201/image',{
        method: 'POST',
        headers:{
            'Prediction-Key': 'd5255a630d514403811ceab4988dcc4f',
            'Content-Type ' : 'application/octet-stream',
        },
        body: formData
        
    })
    .then(response => response.json())
    .then(result => {
        console.log('Success:', result);
      })
      .catch(error => {
        console.error('Error:', error);
      });
}

export default {
    inImage
}