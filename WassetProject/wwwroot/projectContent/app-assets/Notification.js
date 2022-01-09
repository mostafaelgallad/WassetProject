var notisId = [];

toastr.options = {
    "closeButton": false,
    "debug": false,
    "newestOnTop": false,
    "progressBar": false,
    "positionClass": "toast-top-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "5000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}

function MarkNotiAsRead(notificatonID) {
    Swal.fire({
        title: 'Are you sure you want to mark this notification as read ?',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: `Mark as Read`,
        denyButtonText: `Cancel`,
        showLoaderOnConfirm: true,
        allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Send Update Request..',
                html: 'Process <b></b> ....',
                //timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading();
                    const content = Swal.getContent()
                    if (content) {
                        const b = content.querySelector('b')
                        if (b) {
                            b.textContent = 'Updating the status'
                        }
                    }
                    $.ajax({
                        url: "/Notification/MarkNotificationAsRead",
                        //contentType: 'application/json; charset=utf-8',
                        type: 'Post',
                        data: { 'notificatonID': notificatonID },
                        success: function (data) {
                            if (data.success == 'success') {
                                $.ajax({
                                    url: "/Notification/PartialNotificationsList",
                                    type: 'Get',
                                    success: function (data) {
                                        var millisecondsToWait = 2000;
                                        setTimeout(function () {
                                            $('#NotificationList').empty();
                                            $('#NotificationList').html(data);
                                            $('#TableWithCheckbox').DataTable({
                                                'columnDefs': [
                                                    {
                                                        'targets': 0,
                                                        'checkboxes': {
                                                            'selectRow': true
                                                        }
                                                    }
                                                ],
                                                'select': {
                                                    'style': 'multi'
                                                },
                                                'order': [[2, 'des']]
                                            });
                                            Swal.fire('Notification status updated successfully', '', 'success');
                                            toastr["success"]("Notification status updated successfully")
                                        }, millisecondsToWait);
                                    },
                                    error: function () {
                                        Swal.fire('Error occurred while updating the status', '', 'error');
                                        toastr["error"]("Error occurred while updating the status")
                                    }
                                });
                            }
                        },
                        error: function () {
                            Swal.fire('Error occurred while updating the status', '', 'error');
                            toastr["error"]("Error occurred while updating the status")
                        }
                    });
                },
                willClose: () => {
                    swal.stopLoading();
                }
            })
        }
    });
}

function MarkNotificationsAsRead() {
    if (notisId.length > 0) {
        Swal.fire({
            title: 'Are you sure you want to mark all notificatins as read ?',
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: `Mark as Read`,
            denyButtonText: `Cancel`,
            showLoaderOnConfirm: true,
            allowOutsideClick: () => !Swal.isLoading()
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: 'Send Update Request..',
                    html: 'Process <b></b> ....',
                    //timer: 2000,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading();
                        const content = Swal.getContent()
                        if (content) {
                            const b = content.querySelector('b')
                            if (b) {
                                b.textContent = 'Updating the status'
                            }
                        }
                        $.ajax({
                            url: "/Notification/MarkNotificationsAsRead",
                            data: { 'selectedNotifications': notisId },
                            //contentType: 'application/json; charset=utf-8',
                            type: 'Post',
                            success: function (data) {
                                if (data.success == 'success') {
                                    $.ajax({
                                        url: "/Notification/PartialNotificationsList",
                                        type: 'Get',
                                        success: function (data) {
                                            var millisecondsToWait = 2000;
                                            setTimeout(function () {
                                                $('#NotificationList').empty();
                                                $('#NotificationList').html(data);
                                                $('#TableWithCheckbox').DataTable({
                                                    'columnDefs': [
                                                        {
                                                            'targets': 0,
                                                            'checkboxes': {
                                                                'selectRow': true
                                                            }
                                                        }
                                                    ],
                                                    'select': {
                                                        'style': 'multi'
                                                    },
                                                    'order': [[2, 'des']]
                                                });
                                                Swal.fire('Notification status updated successfully', '', 'success');
                                                toastr["success"]("Notification status updated successfully")
                                            }, millisecondsToWait);
                                        },
                                        error: function () {
                                            Swal.fire('Error occurred while updating the status', '', 'error');
                                            toastr["error"]("Error occurred while updating the status")
                                        }
                                    });
                                }
                            },
                            error: function () {
                                Swal.fire('Error occurred while updating the status', '', 'error');
                                toastr["error"]("Error occurred while updating the status")
                            }
                        });
                    },
                    willClose: () => {
                        swal.stopLoading();
                    }
                })
            }
        });
    }
    else {
        toastr["error"]("Select the notiications you want to mark as read first")
    }
}
Array.prototype.remove = function () {
    var what, a = arguments, L = a.length, ax;
    while (L && this.length) {
        what = a[--L];
        while ((ax = this.indexOf(what)) !== -1) {
            this.splice(ax, 1);
        }
    }
    return this;
};

function SelectNotificationToMarkAsRead(id) {
    if (notisId.includes(id)) {
        notisId.remove(id);
    }
    else {
        notisId.push(id);
    }
}

$(document).ready(function () {
    var table = $('#TableWithCheckbox').DataTable({
        'columnDefs': [
            {
                'targets': 0,
                'checkboxes': {
                    'selectRow': true
                }
            }
        ],
        'select': {
            'style': 'multi'
        },
        'order': [[2, 'des']]
    });
});