import { HTMLAttributes, ReactNode } from 'react';

type AlertVariant = 'info' | 'success' | 'warning' | 'danger';
type AlertSize = 'sm' | 'md' | 'lg';

interface AlertProps extends HTMLAttributes<HTMLDivElement> {
    variant?: AlertVariant;
    size?: AlertSize;
    children: ReactNode;
    showIcon?: boolean;
    showClose?: boolean;
    onClose?: () => void;
    icon?: ReactNode;
}

const variantStyles: Record<AlertVariant, { fill: string; icon: string }> = {
    info: {
        fill: 'bg-alert-info-fill',
        icon: 'icon-alert-info-icon',
    },
    success: {
        fill: 'bg-alert-success-fill',
        icon: 'icon-alert-success-icon',
    },
    warning: {
        fill: 'bg-alert-warning-fill',
        icon: 'icon-alert-warning-icon',
    },
    danger: {
        fill: 'bg-alert-danger-fill',
        icon: 'icon-alert-danger-icon',
    },
};

const sizeVars: Record<AlertSize, { radius: string; paddingX: string; paddingY: string; fontSize: string; lineHeight: string; iconSize: string }> = {
    sm: {
        radius: 'var(--alert-radius-sm)',
        paddingX: 'var(--alert-padding-x-sm)',
        paddingY: 'var(--alert-padding-y-sm)',
        fontSize: 'var(--alert-font-size-sm)',
        lineHeight: 'var(--alert-line-height-sm)',
        iconSize: 'w-4 h-4',
    },
    md: {
        radius: 'var(--alert-radius-md)',
        paddingX: 'var(--alert-padding-x-md)',
        paddingY: 'var(--alert-padding-y-md)',
        fontSize: 'var(--alert-font-size-md)',
        lineHeight: 'var(--alert-line-height-md)',
        iconSize: 'w-5 h-5',
    },
    lg: {
        radius: 'var(--alert-radius-lg)',
        paddingX: 'var(--alert-padding-x-lg)',
        paddingY: 'var(--alert-padding-y-lg)',
        fontSize: 'var(--alert-font-size-lg)',
        lineHeight: 'var(--alert-line-height-lg)',
        iconSize: 'w-6 h-6',
    },
};

const InfoIcon = ({ className }: { className?: string }) => (
    <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
    >
        <path
            d="M9.99999 13.3334V10M9.99999 6.66669H10.0083M18.3333 10C18.3333 14.6024 14.6024 18.3334 9.99999 18.3334C5.39762 18.3334 1.66666 14.6024 1.66666 10C1.66666 5.39765 5.39762 1.66669 9.99999 1.66669C14.6024 1.66669 18.3333 5.39765 18.3333 10Z"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <circle cx="10" cy="6.66669" r="0.6" fill="currentColor" />
    </svg>
);

const CheckCircleIcon = ({ className }: { className?: string }) => (
    <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
    >
        <path
            d="M6.24999 10L8.74999 12.5L13.75 7.50002M18.3333 10C18.3333 14.6024 14.6024 18.3334 9.99999 18.3334C5.39762 18.3334 1.66666 14.6024 1.66666 10C1.66666 5.39765 5.39762 1.66669 9.99999 1.66669C14.6024 1.66669 18.3333 5.39765 18.3333 10Z"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const ExclamationCircleIcon = ({ className }: { className?: string }) => (
    <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
    >
        <path
            d="M9.99999 6.66669V10M9.99999 13.3334H10.0083M18.3333 10C18.3333 14.6024 14.6024 18.3334 9.99999 18.3334C5.39762 18.3334 1.66666 14.6024 1.66666 10C1.66666 5.39765 5.39762 1.66669 9.99999 1.66669C14.6024 1.66669 18.3333 5.39765 18.3333 10Z"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <circle cx="10" cy="13.3334" r="0.6" fill="currentColor" />
    </svg>
);

const XCircleIcon = ({ className }: { className?: string }) => (
    <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
    >
        <path
            d="M12.5 7.50002L7.49999 12.5M7.49999 7.50002L12.5 12.5M18.3333 10C18.3333 14.6024 14.6024 18.3334 9.99999 18.3334C5.39762 18.3334 1.66666 14.6024 1.66666 10C1.66666 5.39765 5.39762 1.66669 9.99999 1.66669C14.6024 1.66669 18.3333 5.39765 18.3333 10Z"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

const CloseIcon = ({ className }: { className?: string }) => (
    <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
    >
        <path
            d="M14.1667 5.83331L5.83333 14.1666M5.83333 5.83331L14.1667 14.1666"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

function DefaultIcon({ variant, className }: { variant: AlertVariant; className?: string }) {
    switch (variant) {
        case 'success':
            return <CheckCircleIcon className={className} />;
        case 'warning':
            return <ExclamationCircleIcon className={className} />;
        case 'danger':
            return <XCircleIcon className={className} />;
        case 'info':
        default:
            return <InfoIcon className={className} />;
    }
}

export function Alert({
    variant = 'info',
    size = 'md',
    children,
    showIcon = true,
    showClose = false,
    onClose,
    icon,
    className = '',
    ...props
}: AlertProps) {
    const styles = variantStyles[variant];
    const sizeStyle = sizeVars[size];

    const inlineStyle = {
        borderRadius: sizeStyle.radius,
        padding: `${sizeStyle.paddingY} ${sizeStyle.paddingX}`,
        fontSize: sizeStyle.fontSize,
        lineHeight: sizeStyle.lineHeight,
    };

    return (
        <div
            className={`inline-flex items-center gap-2 text-default ${styles.fill} ${className}`}
            style={inlineStyle}
            role="alert"
            {...props}
        >
            {showIcon && (
                <span className={`inline-flex shrink-0 ${styles.icon}`}>
                    {icon || <DefaultIcon variant={variant} className={sizeStyle.iconSize} />}
                </span>
            )}
            <span className="min-w-0">{children}</span>
            {showClose && (
                <button
                    type="button"
                    onClick={onClose}
                    aria-label="Close alert"
                    className="ml-1 inline-flex shrink-0 text-default-light hover:text-default"
                >
                    <CloseIcon className={sizeStyle.iconSize} />
                </button>
            )}
        </div>
    );
}

export default Alert;
