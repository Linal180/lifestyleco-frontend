import type { DefaultToastOptions } from "react-hot-toast";

export const toastStyle: DefaultToastOptions = {
	// Toast default styles
	style: {
		// fontFamily: `Roboto`,
		fontSize: `16px`,
		fontWeight: 700,
		marginTop: '70px',
		color: `rgba(22, 79, 102, 1)`,
		backgroundColor: `rgba(255, 148, 0, 0.9)`,
		textAlign: `center`,
		minWidth: 'fit-content'
	},
	// For error toasts
	error: {
		style: {
			backgroundColor: `rgba(222, 18, 49, 0.9)`,
			color: `rgba(255, 255, 255, 1)`,
		},
		iconTheme: {
			primary: `#FFF`,
			secondary: `rgba(222, 18, 49, 1)`,
		},
	},
	// For success toasts
	success: {
		style: {
			backgroundColor: `rgba(53, 128, 0, 0.9)`,
			color: `rgba(255, 255, 255, 1)`,
		},
		iconTheme: {
			primary: `#FFF`,
			secondary: `rgba(53, 128, 0, 1)`,
		},
	},
	// Aria props
	ariaProps: {
		"role": `status`,
		"aria-live": `polite`,
	},
};
