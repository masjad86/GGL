import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NotificationType } from '../../models/notification-service.model';

@Injectable({
    providedIn: 'root'
})
export class NotificationService {
	constructor(private toast: ToastrService) { }

	/**
	 * show toast notification.
	 * @param title provide notification title.
	 * @param message notification message.
	 * @param type notification type success, error, warning and information.
	 */
	public show(title: string, message: string, type: NotificationType = NotificationType.Success) {
		switch (type) {
			case NotificationType.Information:
				this.showInformation(title, message);
				break;
			case NotificationType.Error:
				this.showError(title, message);
				break;
			case NotificationType.Success:
				this.showSuccess(title, message);
				break;
			case NotificationType.Warning:
				this.showWarning(title, message);
				break;
			default:
				this.showSuccess(title, message);
				break;
		}
	}

	/**
	 * show message for information.
	 */
	private showInformation(title: string, message: string) {
		this.toast.info(message, title);
	}

	/**
	 * show message for error.
	 * @title: title of the message
	 * @message: message which will be displayed
	 */
	private showError(title: string, message: string) {
		this.toast.error(message, title);
	}

	/**
	 * show message for success.
	 * @title: title of the message
	 * @message: message which will be displayed
	 */
	private showSuccess(title: string, message: string) {
		this.toast.success(message, title);
	}

	/**
	 * show message for warning.
	 * @title: title of the message
	 * @message: message which will be displayed
	 */
	private showWarning(title: string, message: string) {
		this.toast.warning(message, title);
	}
}
