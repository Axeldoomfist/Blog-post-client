var handler = (form) => {
    fetch('/usr', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })
        .then((response) => {
            if (!response.success) {
                throw 'It broke'
            }
        })
    return false;
}