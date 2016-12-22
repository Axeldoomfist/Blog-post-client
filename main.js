var handler = (form) => {
    getFormData(form)
    .then(sendFormData(form))
    .then((response) => {
        document.getElementById('uid').innerHTML = response.uid
        alert('Account creation success')
        return false
    })
    .catch((error) => {
        return false
    })
}

function sendFormData (form) {
    return new Promise((resolve, reject) => {
        fetch('http://127.0.0.1:5000/usr', {
            method: 'PUT',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })
            .then((response) => {
                return response.json()
            })
            .then((response) => {
                if (response.success === false) {
                    throw new Error({message: 'Account was not successfully created'})
                } else {
                    resolve(response)
                }
            })
    })
}

function getFormData (submitData) {
    return new Promise((resolve, reject) => {
        if (!submitData) reject('No form data received.')
        data = {}
        for (element in submitData) {
            data[`${element.id}`] = element.value
        }
        resolve(data)
    })
}
