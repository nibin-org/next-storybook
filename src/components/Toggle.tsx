import { InputHTMLAttributes, ReactNode, useId, useMemo, useState } from 'react';

type ToggleSize = 'sm' | 'md';

interface ToggleProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
    label?: ReactNode;
    size?: ToggleSize;
}

export function Toggle({
    label = 'Label',
    size = 'sm',
    checked,
    defaultChecked,
    disabled = false,
    onChange,
    className = '',
    id,
    ...props
}: ToggleProps) {
    const autoId = useId();
    const inputId = id || autoId;

    const isControlled = typeof checked === 'boolean';
    const [internalChecked, setInternalChecked] = useState(!!defaultChecked);
    const isOn = isControlled ? checked : internalChecked;

    const sizeVars = useMemo(() => {
        const height = `var(--toggle-${size}-height)`;
        const width = `var(--toggle-${size}-width)`;
        const fontSize = `var(--toggle-${size}-font-size)`;
        const lineHeight = `var(--toggle-${size}-line-height)`;
        const gap = `var(--toggle-${size}-gap)`;
        const knobSize = `calc(${height} - 6px)`;
        const knobTranslate = `calc(${width} - ${knobSize} - 6px)`;

        return { height, width, fontSize, lineHeight, gap, knobSize, knobTranslate };
    }, [size]);

    const trackColor = disabled
        ? (isOn ? 'var(--toggle-active-disabled)' : 'var(--toggle-disabled)')
        : (isOn ? 'var(--toggle-active)' : 'var(--toggle-fill)');

    const labelColor = disabled ? 'var(--toggle-text-disabled)' : 'var(--toggle-text)';

    return (
        <label
            htmlFor={inputId}
            className={`inline-flex items-center ${className}`}
            style={{
                gap: sizeVars.gap,
                color: labelColor,
                fontSize: sizeVars.fontSize,
                lineHeight: sizeVars.lineHeight,
                cursor: disabled ? 'not-allowed' : 'pointer',
            }}
        >
            <input
                id={inputId}
                type="checkbox"
                checked={checked}
                defaultChecked={defaultChecked}
                disabled={disabled}
                onChange={(e) => {
                    if (!isControlled) setInternalChecked(e.target.checked);
                    onChange?.(e);
                }}
                className="sr-only"
                {...props}
            />
            {/* Fallback to ensure some Storybook skins don't ignore sr-only */}
            <style>{`
                #${inputId} { position: absolute !important; width: 1px; height: 1px; padding: 0; margin: -1px; overflow: hidden; clip: rect(0, 0, 0, 0); white-space: nowrap; border: 0; }
            `}</style>
            <span
                aria-hidden="true"
                style={{
                    position: 'relative',
                    width: sizeVars.width,
                    height: sizeVars.height,
                    borderRadius: '9999px',
                    backgroundColor: trackColor,
                    transition: 'background-color 150ms ease',
                    display: 'inline-block',
                    flexShrink: 0,
                }}
            >
                <span
                    style={{
                        position: 'absolute',
                        top: '3px',
                        left: '3px',
                        width: sizeVars.knobSize,
                        height: sizeVars.knobSize,
                        borderRadius: '9999px',
                        backgroundColor: '#ffffff',
                        boxShadow: '0 1px 2px rgba(16, 24, 40, 0.15)',
                        transform: isOn ? `translateX(${sizeVars.knobTranslate})` : 'translateX(0)',
                        transition: 'transform 150ms ease',
                    }}
                />
            </span>
            <span>{label}</span>
        </label>
    );
}

export default Toggle;
