async function idCheckRequestAsync(id){
    return $.ajax({
        url: `/account/${id}`,
        method: 'GET',
        dataType: 'json'
    });
}


async function signupAsync(data){
    return $.ajax({
        url: '/account/member',
        method: 'POST',
//        headers: {
//            "X-XSRF-TOKEN": csrfToken
//        },
        contentType: 'application/json',
        dataType: 'json',
        data: JSON.stringify(data)
    })
}