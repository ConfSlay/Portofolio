import Swal from "sweetalert2";
 
export default function ToastDisplayer(isError, message) {

	if (isError === true) { // Error Alert

		Swal.fire({
			position: 'center',
			icon: 'error',
			title: message,
			iconColor : 'rgb(232,16,41)',
			background: 'rgb(33,33,33)',
			color : 'rgb(200,200,200)',
			toast : true,
			showConfirmButton: false,
	        showCancelButton: false,
			timer: 2000
		}); // disparait 2 sec apres instanciation

	}
	else { //Success Alert

		Swal.fire({
            position: 'center',
            icon: 'success',
            title: message, 
            iconColor : '#3A4EB3',
            background: 'rgb(33,33,33)',
            color : 'rgb(200,200,200)',
            toast : true,
            showConfirmButton: false,
            showCancelButton: false,
            timer: 2000
        }); // disparait 2 sec apres instanciation

	}

}