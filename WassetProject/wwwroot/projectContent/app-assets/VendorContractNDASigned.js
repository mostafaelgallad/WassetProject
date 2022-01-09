
//toastr.options = {
//    "closeButton": false,
//    "debug": false,
//    "newestOnTop": false,
//    "progressBar": false,
//    "positionClass": "toast-top-right",
//    "preventDuplicates": false,
//    "onclick": null,
//    "showDuration": "300",
//    "hideDuration": "1000",
//    "timeOut": "5000",
//    "extendedTimeOut": "1000",
//    "showEasing": "swing",
//    "hideEasing": "linear",
//    "showMethod": "fadeIn",
//    "hideMethod": "fadeOut"
//}

function NDASigned() {
    //debugger;
    var vendorID = $('#MasterVendID').val();
    var notes = $('#NDASignednotes').val();
    Swal.fire({
        title: 'Confirm the NDA is signed',
        showDenyButton: true,
        showCancelButton: false,
        confirmButtonText: `Confirm`,
        denyButtonText: `Cancel`,
        showLoaderOnConfirm: true,
        allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Updating the NDA status',
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
                        url: '/Vendor/UpdateMasterVendorNDASignedFlag',
                        data: { 'vendorID': vendorID, 'notes': notes },
                        type: "Post",
                        success: function (data) {
                            if (data.success == 'success') {
                                const content2 = Swal.getContent()
                                if (content2) {
                                    const b2 = content2.querySelector('b')
                                    if (b2) {
                                        b2.textContent = 'Refreshing the list'
                                    }
                                }
                                $('#NDASignedModal').modal('hide');
                                $.ajax({
                                    url: '/VendorContracts/GetContractsListPartial',
                                    type: "Get",
                                    success: function (data) {
                                        var millisecondsToWait = 2000;
                                        setTimeout(function () {
                                            $('#contractsTable').html(data);
                                            Swal.fire('The NDA status updated successfully', '', 'success');
                                            toastr.success('The NDA status updated successfully');
                                        }, millisecondsToWait);
                                       
                                    },
                                    complete: function () {
                                    }
                                });
                            }
                        },
                        error: function () {
                            $('#NDASignedModal').modal('hide');
                            Swal.fire('Error occurred while updating the profile', '', 'error');
                            toastr.error('Error occurred while updating the profile');
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

$(document).ready(function () {
    $('#VendorContractsList').DataTable({
        "order": [[0, "desc"]]
    });
});