//Handle Changing Password Check and Logic
$('#change-pass').submit((e) => {
    e.preventDefault();
    if ($('#new1').val() === $('#new2').val()) {
        $.ajax({
            type: 'put',
            url: `../api/changepass`,
            headers: {
                'Authorization': `bearer ${localStorage.getItem('ezPortal')}`
            },
            data: {
                password: $('#new1').val(),
                old_pass: $('#old').val()

            }
        }).then(async (result) => {
            if (result.msg == "failed to update, wrong old password") {
                alertify.alert('Password Change Error', 'Wrong Old Password!');
            } else {
                await alertify.alert('Password Change Success', 'Password Changed Succesfully', function () {
                    location.assign('/')
                })


            }
        })
    } else {
        alertify.alert('Password Change Error', 'Passwords mismatch!');

    }
})