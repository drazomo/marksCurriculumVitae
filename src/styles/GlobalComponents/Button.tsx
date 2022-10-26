import React from 'react'
import { ButtonBack, ButtonFront } from '.'

interface ButtonProps {
	children: React.ReactNode
	onClick: () => void
	alt: boolean
	form: boolean
	disabled: boolean
}

const Button = ({
	children,
	alt,
	form,
	disabled,
	onClick,
}: Partial<ButtonProps>) => {
	return (
		<ButtonBack alt={alt} form={form} disabled={disabled}>
			{children}
			<ButtonFront alt={alt} onClick={() => onClick} disabled={disabled}>
				{children}
			</ButtonFront>
		</ButtonBack>
	)
}

export default Button
