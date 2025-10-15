import { Store, type NOTIFICATION_TYPE } from "react-notifications-component";

const addNotification = (
	title: string,
	message: string,
	type: NOTIFICATION_TYPE,
	duration: number
) => {
	Store.addNotification({
		title: title,
		message: message,
		type: type,
		insert: "top",
		container: "top-right",
		animationIn: ["animate__animated", "animate__zoomIn"],
		animationOut: ["animate__animated", "animate__zoomOut"],
		dismiss: {
			duration: duration,
			onScreen: true,
		},
	});
};

export default addNotification;
