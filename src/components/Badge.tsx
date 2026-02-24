import { CSSProperties, HTMLAttributes, ReactNode } from 'react';

type BadgeVariant = 'info' | 'gray' | 'warning' | 'success' | 'danger' | 'purple';
type BadgeAppearance = 'primary' | 'secondary';
type BadgeSize = 'sm' | 'md';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    variant?: BadgeVariant;
    appearance?: BadgeAppearance;
    size?: BadgeSize;
    children: ReactNode;
}

export function Badge({
    variant = 'gray',
    appearance = 'primary',
    size = 'md',
    children,
    className = '',
    style,
    ...props
}: BadgeProps) {
    const colorVar = (part: 'fill' | 'stroke' | 'text') =>
        `var(--badge-${appearance}-${variant}-${part})`;
    const sizeVar = (part: 'font-size' | 'line-height' | 'radius' | 'padding-x' | 'padding-y') =>
        `var(--badge-${part}-${size})`;

    const badgeStyle: CSSProperties = {
        backgroundColor: colorVar('fill'),
        borderColor: colorVar('stroke'),
        color: colorVar('text'),
        fontSize: sizeVar('font-size'),
        lineHeight: sizeVar('line-height'),
        borderRadius: sizeVar('radius'),
        padding: `${sizeVar('padding-y')} ${sizeVar('padding-x')}`,
    };

    const badgeClasses = [
        'inline-flex items-center font-medium border',
        className,
    ].join(' ');

    return (
        <span className={badgeClasses} style={{ ...badgeStyle, ...style }} {...props}>
            {children}
        </span>
    );
}

export default Badge;
